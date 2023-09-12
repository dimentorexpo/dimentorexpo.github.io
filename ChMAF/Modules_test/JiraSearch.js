let indexStart;
let searchTypeFlag = '';
let zbpqueryitem
let customquery = '';
let iosbugsqueryitem = '';
let androidbugsqueryitem = '';
let defqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports > 0 AND text ~ "${testJira.value}" ORDER BY updated`;
let frqueryitem
let rezissuetable;
let PSqueryitem;
var win_Jira =  // описание элементов окна Поиска по Jira
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="jira_1str">
                                <button title="скрывает меню" id="hideMej" style="width:50px; background: #228B22;">hide</button>
								<button id="RefreshJiraStatus" title="Обновляет статус Токена Jira, чтобы проверить авторизованы вы или нет">🔄</button>
								<button id="ClearJiraData" title="Очищает поля с результатами и полем для ввода">🧹</button>
								<span style="color:bisque">Token Status: </span>
								<span id="searchjiratknstatus"></span>
								<button id="jirainstr" style="float:right;" title="Инструкция по этой форме">❓</button>
                        </div>

						<div id="control_jira_search">
							<button id="defaultQuery" title="Страница для поиска по умолчанию с заранее записанным JQL запросом" class="active-query" style="margin-left: 5%;">📇Default</button>
                            <button id="ZBPQuery" title="Страница для поиска Zero Bug Policy">🙅‍♂️ZeroBug</button>
							<button id="freshQuery" title="Страница при поиске по ключевому слову, выводящая свежесозданные баги в порядке убывания и с 0 Support Tab с заранее записанным JQL запросом">🍀Fresh</button>
							<button id="customQuery" title="Страница для ручного составления JQL запроса. Поле для ввода поиска не используется, только лишь верхняя часть от выбора отдела до ввода искомого текста в двойных кавычках после надписи text~">📝Custom</button>
							<button id="PSquery" title="Страница для поиска по ID или тексту срези запросов в Project Support, потому как в Mattermost может не найти">PS</button>
							<button id="getiosbugs" title="По клику сразу ищет баги по iOS как если бы выискали стандартно с вводом текста поиска iOS">🍏iOS</button>
							<button id="getandroidbugs" title="По клику сразу ищет баги по iOS как если бы выискали стандартно с вводом текста поиска Android">🤖Android</button>
							<button id="favouriteBugs" title="Страница с сохраненными багами для быстрого доступа">❤</button>
							<textarea id="JQLquery" placeholder="JQL запрос" title="Введите сюда JQL запрос" autocomplete="off" type="text" style="text-align: center; width: 500px; color: black; margin-top: 5px; margin-left: 5%;"></textarea>
							<input id="testJira" placeholder="Введите слово или фразу для поиска" title="введите слово или фразу для поиска по Jira при одном клике будет искать по багам, если ввести в поле номер задачи например VIM-7288 и дабл кликнуть на рокету будет поиск по номеру" autocomplete="off" type="text" style="text-align: center; width: 300px; color: black; margin-top: 5px; margin-left: 20%; border-radius: 20px;">
							<button id="getJiraTasks" style="width: 25.23px;">🚀</button>
						</div>

                        <div style="margin: 5px; width: 550px" id="jira_tasks_box">
                                <p id="issuetable" style="max-height:400px; margin-left:5px; overflow:auto"></p>
                                <div id="favouriteissuetable" style="max-height:400px; margin-left:5px; overflow:auto; display:none"></div>
								<span style="color:bisque" id="foundIssuesAmount"></span>
                        </div>
						<div>
							<div id="pagesSwitcher" style="display: flex;    color: bisque;    cursor: pointer;    justify-content: space-evenly; padding:5px;"></div>
						</div>
                </span>
        </span>
</div>`;

if (localStorage.getItem('winTopJira') == null) { // началоное положение окна поиска по Jira (если не задано ранее)
    localStorage.setItem('winTopJira', '120');
    localStorage.setItem('winLeftJira', '295');
}

let wintJira = document.createElement('div'); // создание окна поиска по Jira
document.body.append(wintJira);
wintJira.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopJira') + 'px; left: ' + localStorage.getItem('winLeftJira') + 'px; font-size: 14px; z-index: 10000; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintJira.style.display = 'none';
wintJira.setAttribute('id', 'AF_Jira');
wintJira.innerHTML = win_Jira;

wintJira.onmousedown = function(event) {
  if (checkelementtype(event)) {
    let startX = event.clientX;
    let startY = event.clientY;
    let elemLeft = wintJira.offsetLeft;
    let elemTop = wintJira.offsetTop;

    function onMouseMove(event) {
		if (!(event.buttons & 1)) {
			onMouseUp();
			return;
		  }
		  
      let deltaX = event.clientX - startX;
      let deltaY = event.clientY - startY;

      wintJira.style.left = (elemLeft + deltaX) + "px";
      wintJira.style.top = (elemTop + deltaY) + "px";

      localStorage.setItem('winTopJira', String(elemTop + deltaY));
      localStorage.setItem('winLeftJira', String(elemLeft + deltaX));
    }

    document.addEventListener('mousemove', onMouseMove);

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mouseup', onMouseUp);
  }
};
// прекращение изменения позиции окна поиска по Jira

function optionsforfetch(queryName, indexStart) {
	let tempvar;
	tempvar = `
		"headers": {
			"__amdmodulename": "jira/issue/utils/xsrf-token-header",
		   "accept": "*/*",
			"sec-fetch-mode": "cors",
		   "sec-fetch-site": "same-origin",
		   "x-atlassian-token": "no-check",
		   "x-requested-with": "XMLHttpRequest"
		 },
		 "body": "startIndex=${indexStart}&filterId=21266&jql=${queryName}&layoutKey=list-view",
		 "method": "POST",
		 "mode": "cors",
		 "credentials": "include"
		`
	return tempvar;
}

function toggleAndDeactivateQueries(currentId) {
    let queryIds = ['defaultQuery', 'getiosbugs', 'getandroidbugs', 'customQuery', 'favouriteBugs', 'ZBPQuery', 'freshQuery', 'PSquery'];
    
    queryIds.forEach(id => {
        let element = document.getElementById(id);
        if (id === currentId) {
            element.classList.toggle('active-query'); // Переключаем класс для текущего элемента
        } else {
            element.classList.remove('active-query'); // Деактивируем все остальные
        }
    });
}

let firstJiraParse = false;
function getJiraTask() { // функция получения таски джира
	rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getissuetable'));
	if (rezissuetable == null)
		setTimeout(getJiraTask, 1000);
	else {
		document.getElementById('responseTextarea1').removeAttribute('getissuetable')
		
		// Получаем ключи задач
		let issueKeys = rezissuetable.issueTable.issueKeys;

		let issues = '';
		let temporarka;

		foundIssuesAmount = rezissuetable.issueTable.total;
		if (issueKeys.length > 50) {
			issueKeys.length = 50;
		}

		for (let i = 0; i < issueKeys.length; i++) {
			const matchedNumbers = rezissuetable.issueTable.table.match(/(">.)*?([0-9]+)\n/gm);
			const currentNumber = matchedNumbers ? matchedNumbers[i] : null;

			if (currentNumber && issueKeys[i] !== undefined) {
				function filterItems(item, index) {
					return index % 2 !== 0 ? item : null;
				}

				function replaceItem(item) {
					return item.replace('">', ' – ');
				}

				const matchedItems = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(filterItems);
				const searchText = document.getElementById('testJira').value;
				const isMatched = replaceItem(matchedItems[i]).toLowerCase().indexOf(searchText.toLowerCase()) !== -1;

				if (isMatched) {
					const replacePattern = new RegExp(searchText, 'i');
					const replaceValue = `<span style="color:MediumSpringGreen; font-weight:700; text-shadow:1px 2px 5px rgb(0 0 0 / 55%);">${searchText.toUpperCase()}</span>`;
					temporarka = replaceItem(matchedItems[i]).replace(replacePattern, replaceValue);
				} else {
					temporarka = replaceItem(matchedItems[i]);
				}

				issues += '<span style="color: #00FA9A">&#5129;</span>' + 
					`<img src="${rezissuetable.issueTable.table.match(/https:\/\/jira.skyeng.tech\/images\/icons\/priorities\/.*svg/gm)[i]}" style="width:20px; height:25px;" title="Приоритеты: ⛔ - Blocker, полностью залитая красная стрелка вверх - Critical, три красные стрелки вверх - Major, три синие вниз - Minor, ⭕ - Trivial">` + 
					' ' + '<span class="newcount" style="width:20px; margin-left: 5px; background:#3CB371; padding:2px; padding-left:6px; font-weight:700; border-radius:10px;">' + currentNumber + '</span>' + 
					`<a name="buglinks" href="https://jira.skyeng.tech/browse/${issueKeys[i]}" onclick="" target="_blank" style="margin-left:5px; color: #ffe4c4">` + temporarka + '</a>' + 
					`<span name="issueIds" style="display:none">${rezissuetable.issueTable.issueIds[i]}</span>` + 
					'<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + 
					'<span class = "refreshissues" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + 
					'<span name="addtofavourites" style="cursor:pointer;" title="Добавить задачу в Избранное">🤍</span>' + 
					'</br>';
			} else if (issueKeys[i] !== undefined) {
				function filterItems(item, index) {
					return index % 2 !== 0 ? item : null;
				}

				function replaceItem(item) {
					return item.replace('">', ' – ');
				}

				const matchedItems = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(filterItems);
				const searchText = document.getElementById('testJira').value;
				const isMatched = replaceItem(matchedItems[i]).toLowerCase().indexOf(searchText.toLowerCase()) !== -1;

				if (isMatched) {
					const replacePattern = new RegExp(searchText, 'i');
					const replaceValue = `<span style="color:MediumSpringGreen; font-weight:700; text-shadow:1px 2px 5px rgb(0 0 0 / 55%);">${searchText.toUpperCase()}</span>`;
					temporarka = replaceItem(matchedItems[i]).replace(replacePattern, replaceValue);
				} else {
					temporarka = replaceItem(matchedItems[i]);
				}

				issues += '<span style="color: #00FA9A">&#5129;</span>' + 
					`<img src="${rezissuetable.issueTable.table.match(/https:\/\/jira.skyeng.tech\/images\/icons\/priorities\/.*svg/gm)[i]}" style="width:20px; height:25px;" title="Приоритеты: ⛔ - Blocker, полностью залитая красная стрелка вверх - Critical, три красные стрелки вверх - Major, три синие вниз - Minor, ⭕ - Trivial">` + 
					' ' + `<a name="buglinks" href="https://jira.skyeng.tech/browse/${issueKeys[i]}" onclick="" target="_blank" style="margin-left:5px; color: #ffe4c4">` + temporarka + '</a>' + 
					`<span name="issueIds" style="display:none">${rezissuetable.issueTable.issueIds[i]}</span>` + 
					'<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + '</br>';
			} else {
				console.error("Не удалось найти соответствие для индекса: " + i);
			}
		}

		document.getElementById('issuetable').innerHTML = issues;
		
		// добавляем страницы если найдено больше 50 таск
		var spanCount = Math.floor(foundIssuesAmount / 50) + 1;
		if (spanCount > 1) {
			var spanElements = "";
			for (var i = 0; i < spanCount; i++) {
				if (i == 0) {
					spanElements += `<span style="Flex: 1; background: darkslateblue; text-align: center; border: 1px solid steelblue;" class="active" name="changeList" value="${i * 50}">${i + 1}</span>`;
				} else {
					spanElements += `<span style="Flex: 1; background: darkslateblue; text-align: center; border: 1px solid steelblue;" name="changeList" value="${i * 50}">${i + 1}</span>`;
				}	
			}
			document.getElementById('pagesSwitcher').innerHTML = spanElements
		}
		// конец добавления страниц

		document.getElementById('foundIssuesAmount').innerHTML = "Всего найдено задач: " + foundIssuesAmount;

		let barray = document.querySelectorAll('.jiraissues');
		for (let j = 0; j < barray.length; j++) {
			barray[j].onclick = function () {
				let chatId = getChatId();
				if (chatId){
					if (window.location.href.includes('tickets/assigned')) {
					sendComment("https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[j])
				}
				fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
					"headers": {
						"accept": "*/*",
						"content-type": "application/json",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin"
					},
					"body": "{\"conversationId\":\"${b[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[j] + "\"}]}",
					"method": "POST",
					"mode": "cors",
					"credentials": "include"
				})
			}
		}
		}

		let addtofarr = document.getElementsByName('addtofavourites')
		let tagsarray = document.getElementsByName('buglinks');
		let outputTable = document.getElementById('favouriteissuetable');
		let massivissueids = document.getElementsByName('issueIds')

		for (let v = 0; v < addtofarr.length; v++) {
			addtofarr[v].onclick = function () {
				addtofarr[v].innerText = "❤";
				for (let x = 0; x < tagsarray.length; x++) {
					if (x == v) {
						let testvar = document.createElement('div');
						testvar.innerHTML = '<p style="margin-bottom:0">' + '<span style="color: #00FA9A">&#5129;</span>' +
							`<a name="favbugs" href="${tagsarray[x].href}" target="_blank" style="color:bisque;">` +
							tagsarray[x].innerHTML + '</a>' +
							`<span name="favissuemassive" style="display:none">${massivissueids[x].innerText}</span>` +
							'<span name="addtonotesbug" style="cursor:pointer;" title="Добавить в комментарий в чат и в ссылку на Jira">💬</span>' +
							'<span name="removefromfavourites" style="cursor:pointer;" title="Удалить задачу из Избранного">❌</span>' +
							'<span name = "increasecount" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + '</p>';
						outputTable.appendChild(testvar);
						favissues.push(testvar.innerHTML);
						localStorage.setItem('bugsarray', JSON.stringify(favissues));
					}
				}
			}
		}

		let refreshissuesarr = document.querySelectorAll('.refreshissues');
		for (let f = 0; f < refreshissuesarr.length; f++) {
			refreshissuesarr[f].onclick = function () {

				document.getElementById('responseTextarea1').value = '{}'
				document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + rezissuetable.issueTable.issueIds[f]
				document.getElementById('responseTextarea3').value = 'reportscount'
				document.getElementById('sendResponse').click()

				let count;
				let jira_token;
				let increasedcount;
				setTimeout(async function () {

					let repcount = document.getElementById('responseTextarea1').getAttribute('reportscount')
					repcount = await repcount;
					jira_token = repcount.match(/"atl_token":"(.*lin)/)[1]
					document.getElementById('responseTextarea1').removeAttribute('reportscount')

					count = repcount.match(/customfield_15410.*?value=.*?(\d+)/)[1];
					count = parseInt(count);
					increasedcount = count + 1;
					increasedcount = increasedcount.toString();
					console.log("count=" + count + " increasedcount " + increasedcount);

					setTimeout(function () {

						document.getElementById('responseTextarea1').value = `{
							"headers": {
								"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
								"sec-fetch-mode": "cors",
								"sec-fetch-site": "same-origin",
								"x-requested-with": "XMLHttpRequest",
								"x-sitemesh-off": "true"
										},
							"body": "customfield_15410=${increasedcount}&issueId=${rezissuetable.issueTable.issueIds[f]}&atl_token=${jira_token}&singleFieldEdit=true&fieldsToForcePresent=customfield_15410",
							  "method": "POST",
							  "mode": "cors",
							  "credentials": "include"
								}`
						document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueAction.jspa?decorator=none"
						document.getElementById('responseTextarea3').value = ''
						document.getElementById('sendResponse').click()
						let newinfocount = document.querySelectorAll('.newcount');
						newinfocount[f].innerHTML = increasedcount;
						increasedcount = "";
					}, 1000);
				}, 1000)
			}
		}

		console.log(rezissuetable.issueTable.issueKeys);
		setTimeout(function () { issues = []; }, 5000)
		
		switchJiraPages()
	}
}

function switchJiraPages() {
					
					let pageSwArr = document.getElementsByName('changeList')
					for (let d=0; d<pageSwArr.length; d++) {
						pageSwArr[d].onclick = function() {
							document.getElementById('issuetable').innerHTML = '<span style="color:bisque">Загрузка...</span>'
							issues = ''
							// Удаление класса 'active' со всех элементов
							for(let z=0; z<pageSwArr.length; z++) {
								pageSwArr[z].classList.remove('active');
							}

							// Добавление класса 'active' к текущему элементу
							this.classList.add('active');
							
							switch (searchTypeFlag) {
								case 'zbpQuery':
									 document.getElementById('responseTextarea1').value = `{${optionsforfetch(zbpqueryitem, pageSwArr[d].getAttribute('value'))}}`
								break;
								case 'PSQuery':
								    document.getElementById('responseTextarea1').value = `{${optionsforfetch(PSqueryitem, pageSwArr[d].getAttribute('value'))}}`
								break;
								case 'androidQuery':
									document.getElementById('responseTextarea1').value = `{${optionsforfetch(androidbugsqueryitem, pageSwArr[d].getAttribute('value'))}}`
								break;
								case 'iosQuery':
									document.getElementById('responseTextarea1').value = `{${optionsforfetch(iosbugsqueryitem, pageSwArr[d].getAttribute('value'))}}`
								break;
								case 'custQuery':
								    document.getElementById('responseTextarea1').value = `{${optionsforfetch(customquery, pageSwArr[d].getAttribute('value'))}}`
								break;
								case 'freshQuery':
									document.getElementById('responseTextarea1').value = `{${optionsforfetch(frqueryitem, pageSwArr[d].getAttribute('value'))}}`
								break;
								case 'defQuery':
								    document.getElementById('responseTextarea1').value = `{${optionsforfetch(defqueryitem, pageSwArr[d].getAttribute('value'))}}`
								break;
							}
							
							document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/issueNav/1/issueTable"
							document.getElementById('responseTextarea3').value = 'newPageIssue'
							document.getElementById('sendResponse').click()
							
							setTimeout(function(){
								rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('newPageIssue'))
									document.getElementById('responseTextarea1').removeAttribute('newPageIssue')
									let issues = [];
									let temporarka;
									
									let issueKeys = rezissuetable.issueTable.issueKeys;
									
									for (let i = 0; i < rezissuetable.issueTable.displayed; i++) {
										const matchedNumbers = rezissuetable.issueTable.table.match(/(">.)*?([0-9]+)\n/gm);
										const currentNumber = matchedNumbers ? matchedNumbers[i] : null;

										if (currentNumber && rezissuetable.issueTable.issueKeys[i] != undefined) {
										
											function filterItems1(item, index) {
												return index % 2 != 0 ? item : null;
											}

											function replaceItem1(item) {
												if (item) { // Проверка, что item не является null или undefined
													return item.replace('">', ' – ');
												}
												return item; // Возвращаем item без изменений, если он не определен
											}

											let matchedItems1 = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(filterItems1);
											let searchText1 = document.getElementById('testJira').value;
											let replacedItem = replaceItem1(matchedItems1[i]);
											let isMatched1 = false;

											if (replacedItem) { 
												isMatched1 = replacedItem.toLowerCase().indexOf(searchText1.toLowerCase()) != -1;
											}

											if (isMatched1) {
												let replacePattern1 = new RegExp(searchText1, 'i');
												let replaceValue1 = `<span style="color:MediumSpringGreen; font-weight:700; text-shadow:1px 2px 5px rgb(0 0 0 / 55%);">${searchText1.toUpperCase()}</span>`;
												temporarka = replaceItem1(matchedItems1[i]).replace(replacePattern1, replaceValue1);
											} else {
												temporarka = replaceItem1(matchedItems1[i]);
											}
											
											if (issueKeys[i] != undefined) {
											
												issues += '<span style="color: #00FA9A">&#5129;</span>' + 
												`<img src="${rezissuetable.issueTable.table.match(/https:\/\/jira.skyeng.tech\/images\/icons\/priorities\/.*svg/gm)[i]}" style="width:20px; height:25px;" title="Приоритеты: ⛔ - Blocker, полностью залитая красная стрелка вверх - Critical, три красные стрелки вверх - Major, три синие вниз - Minor, ⭕ - Trivial">` + 
												' ' + '<span class="newcount" style="width:20px; margin-left: 5px; background:#3CB371; padding:2px; padding-left:6px; font-weight:700; border-radius:10px;">' + 
												`${rezissuetable.issueTable.table.match(/(">.)*?([0-9]+)\n/gm)[i]}` + '</span>' + 
												`<a name="buglinks" href="https://jira.skyeng.tech/browse/${issueKeys[Number(pageSwArr[d].getAttribute('value'))+i]}" onclick="" target="_blank" style="margin-left:5px; color: #ffe4c4">` +
												temporarka + '</a>' + 
												`<span name="issueIds" style="display:none">${rezissuetable.issueTable.issueIds[Number(pageSwArr[d].getAttribute('value')) + i]}` + '</span>' + 
												'<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + 
												'<span class = "refreshissues" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + 
												'<span name="addtofavourites" style="cursor:pointer;" title="Добавить задачу в Избранное">🤍</span>' + '</br>'
											}
										} else if (rezissuetable.issueTable.issueKeys[i] != undefined) {
											function filterItems1(item, index) {
												return index % 2 != 0 ? item : null;
											}

											function replaceItem1(item) {
												if (item) { // Проверка, что item не является null или undefined
													return item.replace('">', ' – ');
												}
												return item; // Возвращаем item без изменений, если он не определен
											}

											let matchedItems1 = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(filterItems1);
											let searchText1 = document.getElementById('testJira').value;
											let replacedItem = replaceItem1(matchedItems1[i]);
											let isMatched1 = false;

											if (replacedItem) { 
												isMatched1 = replacedItem.toLowerCase().indexOf(searchText1.toLowerCase()) != -1;
											}

											if (isMatched1) {
												let replacePattern1 = new RegExp(searchText1, 'i');
												let replaceValue1 = `<span style="color:MediumSpringGreen; font-weight:700; text-shadow:1px 2px 5px rgb(0 0 0 / 55%);">${searchText1.toUpperCase()}</span>`;
												temporarka = replaceItem1(matchedItems1[i]).replace(replacePattern1, replaceValue1);
											} else {
												temporarka = replaceItem1(matchedItems1[i]);
											}
											
											if (issueKeys[i] != undefined) {
												issues += '<span style="color: #00FA9A">&#5129;</span>' + 
												`<img src="${rezissuetable.issueTable.table.match(/https:\/\/jira.skyeng.tech\/images\/icons\/priorities\/.*svg/gm)[i]}" style="width:20px; height:25px;" title="Приоритеты: ⛔ - Blocker, полностью залитая красная стрелка вверх - Critical, три красные стрелки вверх - Major, три синие вниз - Minor, ⭕ - Trivial">` + 
												' ' + `<a name="buglinks" href="https://jira.skyeng.tech/browse/${issueKeys[i]}" onclick="" target="_blank" style="margin-left:5px; color: #ffe4c4">` + temporarka + '</a>' + 
												`<span name="issueIds" style="display:none">${rezissuetable.issueTable.issueIds[i]}</span>` + 
												'<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + '</br>';
											}
										} else {
											console.error("Не удалось найти соответствие для индекса: " + i);
										}
									}

									document.getElementById('issuetable').innerHTML = issues;
									
									let barray = document.querySelectorAll('.jiraissues');
									for (let j = 0; j < barray.length; j++) {
										barray[j].onclick = function () {
											let chatId = getChatId();
											if (chatId){
												if (window.location.href.includes('tickets/assigned')) {
												sendComment("https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[Number(pageSwArr[d].getAttribute('value'))+i])
											}
											fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
												"headers": {
													"accept": "*/*",
													"content-type": "application/json",
													"sec-fetch-dest": "empty",
													"sec-fetch-mode": "cors",
													"sec-fetch-site": "same-origin"
												},
												"body": "{\"conversationId\":\"${b[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[Number(pageSwArr[d].getAttribute('value'))+i] + "\"}]}",
												"method": "POST",
												"mode": "cors",
												"credentials": "include"
											})
										}
									}
									}

									let addtofarr = document.getElementsByName('addtofavourites')
									let tagsarray = document.getElementsByName('buglinks');
									let outputTable = document.getElementById('favouriteissuetable');
									let massivissueids = document.getElementsByName('issueIds')

									for (let v = 0; v < addtofarr.length; v++) {
										addtofarr[v].onclick = function () {
											addtofarr[v].innerText = "❤";
											for (let x = 0; x < tagsarray.length; x++) {
												if (x == v) {
													let testvar = document.createElement('div');
													testvar.innerHTML = '<p style="margin-bottom:0">' + '<span style="color: #00FA9A">&#5129;</span>' +
														`<a name="favbugs" href="${tagsarray[x].href}" target="_blank" style="color:bisque;">` +
														tagsarray[x].innerHTML + '</a>' +
														`<span name="favissuemassive" style="display:none">${massivissueids[x].innerText}</span>` +
														'<span name="addtonotesbug" style="cursor:pointer;" title="Добавить в комментарий в чат и в ссылку на Jira">💬</span>' +
														'<span name="removefromfavourites" style="cursor:pointer;" title="Удалить задачу из Избранного">❌</span>' +
														'<span name = "increasecount" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + '</p>';
													outputTable.appendChild(testvar);
													favissues.push(testvar.innerHTML);
													localStorage.setItem('bugsarray', JSON.stringify(favissues));
												}
											}
										}
									}

									let refreshissuesarr = document.querySelectorAll('.refreshissues');
									for (let f = 0; f < refreshissuesarr.length; f++) {
										refreshissuesarr[f].onclick = function () {

											document.getElementById('responseTextarea1').value = '{}'
											document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + rezissuetable.issueTable.issueIds[Number(pageSwArr[d].getAttribute('value')) +f]
											document.getElementById('responseTextarea3').value = 'reportscount'
											document.getElementById('sendResponse').click()

											let count;
											let jira_token;
											let increasedcount;
											setTimeout(async function () {

												let repcount = document.getElementById('responseTextarea1').getAttribute('reportscount')
												repcount = await repcount;
												jira_token = repcount.match(/"atl_token":"(.*lin)/)[1]
												document.getElementById('responseTextarea1').removeAttribute('reportscount')

												count = repcount.match(/customfield_15410.*?value=.*?(\d+)/)[1];
												count = parseInt(count);
												increasedcount = count + 1;
												increasedcount = increasedcount.toString();
												console.log("count=" + count + " increasedcount " + increasedcount);

												setTimeout(function () {

													document.getElementById('responseTextarea1').value = `{
														"headers": {
															"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
															"sec-fetch-mode": "cors",
															"sec-fetch-site": "same-origin",
															"x-requested-with": "XMLHttpRequest",
															"x-sitemesh-off": "true"
																	},
														"body": "customfield_15410=${increasedcount}&issueId=${rezissuetable.issueTable.issueIds[Number(pageSwArr[d].getAttribute('value')) +f]}&atl_token=${jira_token}&singleFieldEdit=true&fieldsToForcePresent=customfield_15410",
														  "method": "POST",
														  "mode": "cors",
														  "credentials": "include"
															}`
													document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueAction.jspa?decorator=none"
													document.getElementById('responseTextarea3').value = ''
													document.getElementById('sendResponse').click()
													let newinfocount = document.querySelectorAll('.newcount');
													newinfocount[f].innerHTML = increasedcount;
													increasedcount = "";
												}, 1000);
											}, 1000)
										}
									}

									console.log(rezissuetable.issueTable.issueKeys);
									setTimeout(function () { issues = []; }, 5000)
								
							},1000)
							
							

						}
					}
			}

document.getElementById('AF_Jira').ondblclick = function (a) { // скрытие окна Jira по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_Jira').style.display = 'none'; }
}

document.getElementById('hideMej').onclick = function () { // скрытие окна поиска по Jira
    if (document.getElementById('AF_Jira').style.display == '')
        document.getElementById('AF_Jira').style.display = 'none'
}

document.getElementById('ClearJiraData').onclick = function () {  // функция очистки полей в форме
    document.getElementById('testJira').value = '';
    document.getElementById('issuetable').innerText = '';
    document.getElementById('foundIssuesAmount').innerText = '';
	var pagesSwitcher = document.getElementById('pagesSwitcher');

	if (pagesSwitcher.children.length !== 0) {
		while (pagesSwitcher.firstChild) {
			pagesSwitcher.removeChild(pagesSwitcher.firstChild);
		}
	}
}

document.getElementById('jirainstr').onclick = function () {
    window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-jirasearch%F0%9F%94%8EJiraSearch')
}

document.getElementById('JiraOpenForm').onclick = function () { // открывает поле для работой с JIRA поиском
    if (document.getElementById('AF_Jira').style.display == 'none') {
        document.getElementById('AF_Jira').style.display = ''
		document.getElementById('MainMenuBtn').classList.remove('activeScriptBtn')
        document.getElementById('idmymenu').style.display = 'none'

        defqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports > 0 AND text ~ "${testJira.value}" ORDER BY updated`
        document.getElementById('JQLquery').innerText = defqueryitem;
        frqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports >= 0 AND text ~ "${testJira.value}" ORDER BY Created`
        zbpqueryitem = `issuetype in (Bug, Task) AND status = closed AND resolution in ("Won't Fix", "Won't Do") AND Reports >= 0 AND created >= 2022-01-01 AND text ~ "${testJira.value}" ORDER BY updated`
        customquery = '';
        iosbugsqueryitem = '';
        androidbugsqueryitem = '';

        function checkJiraToken() {
            // Set initial values for the textarea elements
            document.getElementById('responseTextarea1').value = '{}';
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/";
            document.getElementById('responseTextarea3').value = 'getjiratoken';

            // Click the 'sendResponse' element to trigger the DOMSubtreeModified event
            document.getElementById('sendResponse').click();

            // Add an event listener for the DOMSubtreeModified event
            document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
                // Get the 'getjiratoken' attribute from the 'responseTextarea1' element
                const jiratknAttr = document.getElementById('responseTextarea1').getAttribute('getjiratoken');

                // Check if the 'getjiratoken' attribute is not null
                if (jiratknAttr) {
                    // Check if the 'getjiratoken' attribute matches the regex pattern
                    const regexMatch = jiratknAttr.match(/name="atlassian-token" content="(.*lin)/);
                    if (regexMatch) {
                        // Set the 'jiratkn' variable to the first capturing group of the regex match
                        const jiratkn = regexMatch[1];
                        // Set the inner text of the 'searchjiratknstatus' element to a green checkmark
                        document.getElementById('searchjiratknstatus').innerText = "🟢";
                        console.log(`TOKEN: ${jiratkn}`);
                    } else {
                        // If the regex pattern is not found, show an alert and set the inner text of the 'searchjiratknstatus' element to a red cross
                        alert("Авторизуйтесь в системе Jira, чтобы при поиске запрос был отправлен");
                        document.getElementById('searchjiratknstatus').innerText = "🔴";
                    }
                    // Remove the 'getjiratoken'
                    document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
                }
            })
        }

        checkJiraToken()
        let favissues = [];
        document.getElementById('RefreshJiraStatus').onclick = checkJiraToken // функция повторной проверки авторизации в Jira

        if (localStorage.getItem('bugsarray')) {
            favissues = JSON.parse(localStorage.getItem('bugsarray'));
            document.getElementById('favouriteissuetable').innerHTML = favissues.join(" ");
        }

        document.getElementById('defaultQuery').onclick = function () { // если выбрана default
            defqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports > 0 AND text ~ "${testJira.value}" ORDER BY updated`
            document.getElementById('JQLquery').value = defqueryitem;
            document.getElementById('testJira').value = ""
			toggleAndDeactivateQueries(this.id);
            document.getElementById('issuetable').style.display = ""
            document.getElementById('testJira').style.display = ""
            document.getElementById('getJiraTasks').style.display = ""
            document.getElementById('favouriteissuetable').style.display = "none"
        }
		
		document.getElementById('PSquery').onclick = function() { //Если выбрана PS
			PSqueryitem = `project = PS AND text ~ "${testJira.value}" ORDER BY Created`
            document.getElementById('JQLquery').value = PSqueryitem;
            document.getElementById('testJira').value = ""
			toggleAndDeactivateQueries(this.id);
			document.getElementById('testJira').style.display = ""
			document.getElementById('issuetable').style.display = ""
			document.getElementById('getJiraTasks').style.display = ""
			document.getElementById('favouriteissuetable').style.display = "none"
		}

        document.getElementById('getiosbugs').onclick = function () { // если выбрана ios
            document.getElementById('testJira').value = "ios"
			toggleAndDeactivateQueries(this.id);
            document.getElementById('issuetable').style.display = ""
            document.getElementById('testJira').style.display = ""
            document.getElementById('getJiraTasks').style.display = ""
            document.getElementById('favouriteissuetable').style.display = "none"
            document.getElementById('getJiraTasks').click()
        }

        document.getElementById('getandroidbugs').onclick = function () { // если выбрана android
            document.getElementById('testJira').value = "android"
			toggleAndDeactivateQueries(this.id);
            document.getElementById('issuetable').style.display = ""
            document.getElementById('testJira').style.display = ""
            document.getElementById('getJiraTasks').style.display = ""
            document.getElementById('favouriteissuetable').style.display = "none"
            document.getElementById('getJiraTasks').click()
        }

        document.getElementById('freshQuery').onclick = function () {  // если выбрана fresh
            frqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports >= 0 AND text ~ "${testJira.value}" ORDER BY Created`
            document.getElementById('JQLquery').value = frqueryitem;
            document.getElementById('testJira').value = ""
			toggleAndDeactivateQueries(this.id);
            document.getElementById('issuetable').style.display = ""
            document.getElementById('testJira').style.display = ""
            document.getElementById('getJiraTasks').style.display = ""
            document.getElementById('favouriteissuetable').style.display = "none"
        }

        document.getElementById('ZBPQuery').onclick = function () {  // если выбрана fresh
            zbpqueryitem = `issuetype in (Bug, Task) AND status = closed AND resolution in ("Won't Fix", "Won't Do") AND Reports >= 0 AND created >= 2022-01-01 AND text ~ "${testJira.value}" ORDER BY updated`
            document.getElementById('JQLquery').value = zbpqueryitem;
            document.getElementById('testJira').value = ""
			toggleAndDeactivateQueries(this.id);
            document.getElementById('issuetable').style.display = ""
            document.getElementById('testJira').style.display = ""
            document.getElementById('getJiraTasks').style.display = ""
            document.getElementById('favouriteissuetable').style.display = "none"
        }

        document.getElementById('customQuery').onclick = function () { // если выбрана custom
            document.getElementById('JQLquery').oninput = function () {
                localStorage.setItem('customquery', this.value)
            }
            document.getElementById('JQLquery').value = localStorage.getItem('customquery');
            document.getElementById('testJira').value = ""
			toggleAndDeactivateQueries(this.id);
            document.getElementById('issuetable').style.display = ""
            document.getElementById('testJira').style.display = ""
            document.getElementById('getJiraTasks').style.display = ""
            document.getElementById('favouriteissuetable').style.display = "none"
        }

        document.getElementById('favouriteBugs').onclick = function () { // если выбрана ❤ favourite
            if (document.getElementById('favouriteissuetable').style.display != "") {
				toggleAndDeactivateQueries(this.id);
                document.getElementById('issuetable').style.display = "none"
                document.getElementById('favouriteissuetable').style.display = ""
                document.getElementById('testJira').style.display = "none"
                document.getElementById('getJiraTasks').style.display = "none"

                for (let i = 0; i < document.getElementsByName('removefromfavourites').length; i++) {
                    document.getElementsByName('removefromfavourites')[i].onclick = function () {
                        let parent = this.parentNode.parentNode;
                        favissues.splice(favissues.indexOf(this.value), 1);
                        localStorage.setItem('bugsarray', JSON.stringify(favissues));
                        parent.removeChild(this.parentNode);
                        sndmsgafterdeletebug() //test
                        plusonecount() // test
                    }
                }

                for (let j = 0; j < document.getElementsByName('addtonotesbug').length; j++) {
                    document.getElementsByName('addtonotesbug')[j].onclick = function () {
                        sendComment('https://jira.skyeng.tech/browse/' + favissues[j].match(/browse.(\S+)"/)[1])

                        let Chatid = getChatId();
                        fetch("https://skyeng.autofaq.ai/api/conversation/" + Chatid + "/payload", {
                            "headers": {
                                "accept": "*/*",
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": `{\"conversationId\":\"${Chatid}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"https://jira.skyeng.tech/browse/${favissues[j].match(/browse.(\S+)"/)[1]}\"}]}`,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })

                    }
                }

                function sndmsgafterdeletebug() {
                    for (let j = 0; j < document.getElementsByName('addtonotesbug').length; j++) {
                        document.getElementsByName('addtonotesbug')[j].onclick = function () {
                            sendComment(favissues[j].match(/href.=(\S+)/)[1])
                        }
                    }
                }

                let cnttoincrease = document.getElementsByName('increasecount');
                let itarrs = document.getElementsByName('favissuemassive')
                for (let c = 0; c < cnttoincrease.length; c++) {
                    cnttoincrease[c].onclick = plusonecount;
                }

                function plusonecount() { // функция увеличения +1 в сапорт таб в джира
                    let cnttoincrease = document.getElementsByName('increasecount');
                    let itarrs = document.getElementsByName('favissuemassive')
                    for (let c = 0; c < cnttoincrease.length; c++) {
                        cnttoincrease[c].onclick = function () {
                            console.log('clicked')

                            document.getElementById('responseTextarea1').value = '{}'
                            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + itarrs[c].innerText
                            document.getElementById('responseTextarea3').value = 'suptabcnt'
                            document.getElementById('sendResponse').click()

                            let count;
                            let jira_token;
                            let increasedcount;
                            setTimeout(async function () {

                                let repcount = document.getElementById('responseTextarea1').getAttribute('suptabcnt')
                                repcount = await repcount;
                                jira_token = repcount.match(/"atl_token":"(.*lin)/)[1]
                                document.getElementById('responseTextarea1').removeAttribute('suptabcnt')

                                count = repcount.match(/customfield_15410.*?value=.*?(\d+)/)[1];
                                count = parseInt(count);
                                increasedcount = count + 1;
                                increasedcount = increasedcount.toString();
                                console.log("count=" + count + " increasedcount " + increasedcount);

                                setTimeout(function () {

                                    document.getElementById('responseTextarea1').value = `{
											"headers": {
												"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
												"sec-fetch-mode": "cors",
												"sec-fetch-site": "same-origin",
												"x-requested-with": "XMLHttpRequest",
												"x-sitemesh-off": "true"
														},
											"body": "customfield_15410=${increasedcount}&issueId=${itarrs[c].innerText}&atl_token=${jira_token}&singleFieldEdit=true&fieldsToForcePresent=customfield_15410",
											  "method": "POST",
											  "mode": "cors",
											  "credentials": "include"
												}`
                                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueAction.jspa?decorator=none"
                                    document.getElementById('responseTextarea3').value = ''
                                    document.getElementById('sendResponse').click()

                                    alert(`Support Tab для задачи ${document.getElementsByName('favbugs')[c].href} увеличен на 1 и сейчас равен: ${increasedcount}`)
                                }, 1000);
                            }, 1000)
                        }
                    }
                }
            } else {
                document.getElementById('issuetable').style.display = "none"
                document.getElementById('favouriteissuetable').style.display = "none"
                document.getElementById('favouriteBugs').classList.remove('active-query')
            }
        }
		// end of favouritebugs


        document.getElementById('getJiraTasks').onclick = function () {
			let requesttojiratext = '';

            if (document.getElementById('defaultQuery').classList.contains('active-query')) {
                defqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports > 0 AND text ~ "${testJira.value}" ORDER BY updated`
                document.getElementById('JQLquery').value = defqueryitem;
                requesttojiratext = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')

                document.getElementById('responseTextarea1').value = `{${optionsforfetch(requesttojiratext, 0)}}`
				searchTypeFlag = "defQuery"

            } else if(document.getElementById('PSquery').classList.contains('active-query')){
				PSqueryitem = `project = PS AND text ~ "${testJira.value}" ORDER BY Created`
				document.getElementById('JQLquery').value = PSqueryitem;
				PSqueryitem = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')
                document.getElementById('responseTextarea1').value = `{${optionsforfetch(PSqueryitem, 0)}}`
				searchTypeFlag = "PSQuery"
			} else if (document.getElementById('freshQuery').classList.contains('active-query')) {
                frqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports >= 0 AND text ~ "${testJira.value}" ORDER BY Created`
                document.getElementById('JQLquery').value = frqueryitem;
                frqueryitem = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')
                document.getElementById('responseTextarea1').value = `{${optionsforfetch(frqueryitem, 0)}}`
				searchTypeFlag = "freshQuery"
            } else if (document.getElementById('customQuery').classList.contains('active-query')) {
                customquery = `${localStorage.getItem('customquery')}`
                document.getElementById('JQLquery').value = customquery
                customquery = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')
                document.getElementById('responseTextarea1').value = `{${optionsforfetch(customquery, 0)}}`
				searchTypeFlag = "custQuery"
            } else if (document.getElementById('getiosbugs').classList.contains('active-query')) {
                iosbugsqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports > 0 AND text ~ "${testJira.value}" ORDER BY updated`
                document.getElementById('JQLquery').value = iosbugsqueryitem;
                iosbugsqueryitem = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')
                document.getElementById('responseTextarea1').value = `{${optionsforfetch(iosbugsqueryitem, 0)}}`
				searchTypeFlag = "iosQuery"
            } else if (document.getElementById('getandroidbugs').classList.contains('active-query')) {
                androidbugsqueryitem = `issuetype in (Bug, Task) AND status != closed AND Reports > 0 AND text ~ "${testJira.value}" ORDER BY updated `
                document.getElementById('JQLquery').value = androidbugsqueryitem;
                androidbugsqueryitem = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')
                document.getElementById('responseTextarea1').value = `{${optionsforfetch(androidbugsqueryitem, 0)}}`
				searchTypeFlag = "androidQuery"
            } else if (document.getElementById('ZBPQuery').classList.contains('active-query')) {
                zbpqueryitem = `issuetype in (Bug, Task) AND status = closed AND resolution in ("Won't Fix", "Won't Do") AND Reports >= 0 AND created >= 2022-01-01 AND text ~ "${testJira.value}" ORDER BY updated`
                document.getElementById('JQLquery').value = zbpqueryitem;
                zbpqueryitem = document.getElementById('JQLquery').value.replaceAll(' ', '+').replaceAll(',', '%2C').replaceAll('=', '%3D').replaceAll('>', '%3E').replaceAll('"', '%22').replaceAll('<', '%3C')
                document.getElementById('responseTextarea1').value = `{${optionsforfetch(zbpqueryitem, 0)}}`
				searchTypeFlag = "zbpQuery"
            }

            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/issueNav/1/issueTable"
            document.getElementById('responseTextarea3').value = 'getissuetable'
            document.getElementById('sendResponse').click()

            setTimeout(getJiraTask, 1000)					

}

        // Просмотр таски по джира по ее коду и номеру
        document.getElementById('getJiraTasks').ondblclick = function () {
            if (document.getElementById('AF_Jira').style.display == 'none') {
                document.getElementById('AF_Jira').style.display = ''
            }

            let rezissuetable;

            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/quicksearch/1.0/productsearch/search?q=" + document.getElementById('testJira').value;
            document.getElementById('responseTextarea3').value = 'getissuetable1'
            document.getElementById('sendResponse').click()

            async function getJiraTask1() {

                rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getissuetable1'))
                rezissuetable = await rezissuetable;
                document.getElementById('responseTextarea1').removeAttribute('getissuetable1')
                if (rezissuetable != null) {
                    let issues = [];
                    issues = '<span style="color: #00FA9A">&#5129;</span>' + '<a href="' + rezissuetable[0].items[0].url + '" onclick="" target="_blank" style="color: #ffe4c4">' + rezissuetable[0].items[0].subtitle + " - " + rezissuetable[0].items[0].title + '</a>' + " " + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>';

                    document.getElementById('issuetable').innerHTML = issues;

                    let barray = document.querySelector('.jiraissues');
                    barray.onclick = function () {
                        sendComment(rezissuetable[0].items[0].url)
                        let b = document.URL.split('/')
                        fetch("https://skyeng.autofaq.ai/api/conversation/" + b[5] + "/payload", {
                            "headers": {
                                "accept": "*/*",
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": "{\"conversationId\":\"${b[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + rezissuetable[0].items[0].url + "\"}]}",
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })
                    }

                    setTimeout(function () { issues = []; testJira.value = ""; }, 5000)
                }
            }

            setTimeout(getJiraTask1, 1000)
			
			
        }

        const searchJiraByEnter = document.querySelector('#testJira');
        const searchJiraByEnterInput = document.querySelector('#JQLquery');
        const getJiraTasksBtn = document.querySelector('#getJiraTasks');

        function handleSearchJiraByEnter(event) { //по Enter запускает поиск по Jira
            if (event.key === "Enter") {
                getJiraTasksBtn.click();
            }
        }

        searchJiraByEnter.addEventListener('keydown', handleSearchJiraByEnter);
        searchJiraByEnterInput.addEventListener('keydown', handleSearchJiraByEnter);



    } else if (document.getElementById('AF_Jira').style.display == '') {
        document.getElementById('AF_Jira').style.display = 'none'
		document.getElementById('MainMenuBtn').classList.remove('activeScriptBtn')
    }
	
	 document.getElementById('idmymenu').style.display = 'none'
}