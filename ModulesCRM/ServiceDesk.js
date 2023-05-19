//Global variables
let jiratoken;
let jiratokennew;
let responsejira;
let psarr = [];
let firstEl;
let mmlink;
// let infoarr;
let lasttsk;
let prevtsk;
let flagpsis = 0;
let msgissnd = 0;
let varinfraOID; //переменная для хранения значения ID оператора в Infra
const buttons = [ //array of buttonsnames
    '.edumodbtn',
    '.bilqabtn',
    '.teacbtn',
    '.c1sbtn',
    '.schdbtn',
    '.authbtn',
    '.crm2sbtn',
    '.billbtn',
    '.vimbugsbtn',
    '.vimvidsbtn',
    '.studcabbtn',
    '.chatqabtn',
    '.tripwbtn',
    '.analystbtn',
    '.mobbugsbtn',
    '.academymobbugsbtn',
    '.stcabmbsbtn',
];

const otherOptions = [ // array of buttons categories id's
    'teacherssrvdskoptions',
    'crm2srvdskoptions',
    'authsrvdskoptions',
    'schedulesrvdskoptions',
    'billingqasrvdskoptions',
    'c1srvdskoptions',
    'billingsrvdskoptions',
    'vimbugsoptions',
    'vimvidoptions',
    'studcaboptions',
    'chatqaoptions',
    'tripwireoptions',
    'analystoptions',
    'edumodeloptions',
    'studcabmobbugskoptions',
    'mobbugsoptions',
    'academymobbugsoptions'
];

var win_servicedesk = // описание элементов окна Service Desk
    `<div style="display: flex; width: 480px;">
		<span style="width: 480px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 480px;" id="SrvDskSummary">
                        <button id="hideMeSrvDsk" class="buttonHide">hide</button>
						<button id="refreshjiraauth" title="Перепроверить авторизацию в Jira">🔄</button>
                        <button id="infratasklist" title="Откріть список своих задач в Infra">📑</button>
						<button id="ServiceDeskinstr" title="Инструкция по этой форме">❓</button>
						<span style="color:bisque">Infra Id:</span>
						<span id="jiratknstatus">🟢</span>
						<span style="color:yellow">Prev.tsk</span>
						<button id="prevtask" style="width: 78px" title="Предыдущая задача"></button>
						<span style="color:cyan">Last tsk</span>
						<button id="newtask" style="width: 78px" title="Последняя задача"></button>
                </div>
                <div id="servicedeskinfo" style="margin-left:20px;">
                    <button class="sdbtn" id="optionTeacher" value="36" style="margin-left:2px; width:80px;">👽T&Corp</button>
                    <button class="sdbtn" id="optionCRM2" value="26" style="margin-left:2px; width:80px;">🧮CRM2</button>
                    <button class="sdbtn" id="optionAuth" value="20" style="margin-left:2px; width:80px;">🔐Auth</button>
                    <button class="sdbtn" id="optionSchedule" value="33" style="margin-left:2px; width:80px;">📆Schedul</button>
                    <button class="sdbtn" id="optionBillingQA" value="22" style="margin-left:2px; width:80px;">💲Billing-QA</button>
                    <button class="sdbtn" id="optionOnboarding" value="23" style="margin-left:2px; margin-top:2px; width:80px;">♻Onboard</button>
                    <button class="sdbtn" id="optionBilling"  value="21" style="margin-left:2px; margin-top:2px; width:80px;">💰Billing</button>
                    <button class="sdbtn" id="optionVimbugs" value="38" style="margin-left:2px; margin-top:2px; width:80px;">🐞Vim-bug</button>
                    <button class="sdbtn" id="optionVimvideocall" value="39" style="margin-left:2px; margin-top:2px; width:80px;">📸Vid-call</button>
                    <button class="sdbtn" id="optionStudcab" value="34" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓Studcab</button>
                    <button class="sdbtn" id="optionChat" value="24" style="margin-left:2px; margin-top:2px; width:80px;">💬Chat</button>
                    <button class="sdbtn" id="optionTripwire" value="27" style="margin-left:2px; margin-top:2px; width:80px;">🗣Tripwire</button>
                    <button class="sdbtn" id="optionAnalyst"  value="18" style="margin-left:2px; margin-top:2px; width:80px; display: none;">TEST</button>
                    <button class="sdbtn" id="optionEdModel" value="28" style="margin-left:2px; margin-top:2px; width:80px;">🎓SmartL</button>
                    <button class="sdbtn" id="optionStudcabmobbugs" value="35" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓📱Bugs</button>
					<button class="sdbtn" id="optionMobbugs" value="30" style="margin-left:2px; margin-top:2px; width:80px;">📱Mobil bug</button>
                    <button class="sdbtn" id="optionAcademymobbugs" value="19" style="margin-left:2px; margin-top:2px; width:80px;">🅰📱🐞</button>
                </div>
				<div id="studcabmobbugskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-mobile-bugs; Cообщаем о проблемах в МП Skysmart Parents и в МП Skyeng главные страницы продуктов</p>

				</div>

				<div id="teacherssrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#promise-keepers-qa-support; канал по вопросам ЛКП, ТРМ, corp учеников, ЛККК</p>

				</div>
				<div id="crm2srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:160px; width:90%;">#crm2-support</p>

				</div>
				<div id="authsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#auth; Обсуждение общих вопросов по проектам Auth/ID (авторизация, роли и доступы, данные пользователей и т. д.)</p>

				</div>
				<div id="schedulesrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#study-coordinations-qa-support Канал по вопросам расписания ученика, ТТ, TRM, автоподбора и ручного подбора</p>

				</div>
				<div id="billingqasrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#billing-qa-support; Канал для рассмотрения причины расхождений баланса учеников</p>

				</div>
				<div id="c1srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#c1-support; Поддержка витрины оплаты (Не виджет оплаты в pcs), Onboarding (Kids&Adult), Scoring, AutoIntroLesson (АвтоВУ)</p>

				</div>
				<div id="billingsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:180px; width:90%;">#billing</p>

				</div>
				
				<div id="vimbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-bugs; Проблемы с Vimbox/Smartroom</p>

				</div>				
				<div id="edumodeloptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#smart-learning-qa-support: Канал для обращений по функционалу Educational Model</p>

				</div>
				<div id="vimvidoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#vim-video-call; Разработка модуля видеосвязи</p>

				</div>
                <div id="chatqaoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque; font-size:18px; position:relative; top:7px; left:10px; width:90%;">#chat-qa-support; Решают проблемы с чатами в ЛКП и ЛКУ</p>

                </div>
				<div id="tripwireoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#eco-tripwire-bugs; Life, Talks, РК adults, расширение переводчик для браузера</p>

				</div>
				<div id="analystoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#analysts-gm-tl; канал МЕРТВЫЙ НЕ ИСПОЛЬЗУЕМ В РАБОТЕ, ЭТО НЕ ШУТКА!, ТОЛЬКО ДЛЯ ТЕСТИРОВАНИЯ!</p>

				</div>
				<div id="mobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#mobile-bugs; Канал обработки обращений по мобильному приложению Skyeng и Teachers.</p>

				</div>

				<div id="academymobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#academic-mobile-bugs; Канал обработки обращений по МП Skyeng связанных с обучением.</p>

				</div>

                <div id="studcaboptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">#student-cabinet-bugs; Сообщаем о проблемах во взрослом и детском ЛКУ (страницы на домене student.skyeng.ru)</p>

                </div>
				
				<div id="testsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px; width:90%;">Просто проверчка все хорошо здоврья вам, счастья вамЮ добра вам!</p>

				</div>
				
				<div id="buttonsfromtest" style="margin-left: 4%; margin-bottom: 5px; max-height: 200px; overflow-x: hidden; overflow-y: auto;">
				</div>

				<div id="inputfieldsdiv" style="display: none;">
					<select style="height:28px; margin-left: 21px; margin-top: 5px; display: none;" id="prioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="Blocker">Blocker</option>
							<option value="Critical">Critical</option>
							<option value="High">High</option>
							<option value="Major">Major</option>
							<option value="Minor">Minor</option>
							<option value="Trivial">Trivial</option>
					   </select>
					<input id="custom_id" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield" style="margin-left: 21px;">
                    <input id="custom_appinfo" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield" style="margin-left: 21px; display: none;"></input>
                    <input id="custom_deviceinfo" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield" style="margin-left: 21px; display: none;"></input>
					<textarea id="custom_descr" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield" style="margin-left: 21px;"></textarea>
					<textarea id="custom_str" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield" style="margin-left: 21px;"></textarea>
					<textarea id="custom_er" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield" style="margin-left: 21px;"></textarea>
					<textarea id="custom_ar" placeholder="Фактическое поведение"  class="sdexpecactual removefield" style="margin-left: 21px;"></textarea>
					<button id="createsd" style="width: 150px; position:relative; left:30%; margin-bottom:5px;">Создать</button>
				</div>
	        </span>
		</span>
</div>`;


//func getOperInfraId
function getInfraOId() {
	document.getElementById('responseTextarea1').value = `{}`
    document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/session";
    document.getElementById('responseTextarea3').value = 'infradata'
    document.getElementById('sendResponse').click()
	
	responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const rsparray = JSON.parse(responseTextarea1.getAttribute('infradata'));
        if (rsparray) {
			localStorage.setItem('infraOID',rsparray.id);
			document.getElementById('jiratknstatus').innerText = "🟢"
        }
        responseTextarea1.removeAttribute('infradata');
    });
}

function getprsuplasttask() { //функция для получения ссылки на последний созданный после отправки в канал тикет в джира +
    const responseTextarea1 = document.getElementById('responseTextarea1');
    const responseTextarea2 = document.getElementById('responseTextarea2');
    const responseTextarea3 = document.getElementById('responseTextarea3');
    const sendResponse = document.getElementById('sendResponse');
    const prevtask = document.getElementById('prevtask');

    responseTextarea1.value = `{}`;
    responseTextarea2.value = `https://api-infra.skyeng.ru/api/v1/rs/requests?reporterId=${varinfraOID}&approverId=${varinfraOID}&maxResults=40&page=1`;
    responseTextarea3.value = 'pstickets';
    sendResponse.click();

    responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const psarr = JSON.parse(responseTextarea1.getAttribute('pstickets'));
        if (psarr) {
            prevtsk = psarr.items[0].jiraIssueKey;
            prevtask.innerText = prevtsk;

            prevtask.onclick = function () {
                if (prevtask.innerText === "") {
                    console.log('Задача не найдена');
                } else {
                    window.open(`https://jira.skyeng.tech/browse/${prevtsk}`);
                }
            }
        }
        responseTextarea1.removeAttribute('pstickets');
    });
}

function getmmlink() {
	        if (newtask.innerText != '') {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + newtask.innerText ;
            document.getElementById('responseTextarea3').value = 'mmlinkhere'
            document.getElementById('sendResponse').click()
			
			    responseTextarea1.addEventListener("DOMSubtreeModified", function () {
				const infoarr = responseTextarea1.getAttribute('mmlinkhere');
				if (infoarr) {
					mmlink = infoarr.match(/">(https:\/\/mattermost.skyeng.tech.*?)<\/a>/)[1];
					console.log("Mattermost link " + mmlink);
                    document.getElementById('custom_ar').value + "Mattermost link: " + mmlink;
				}
				responseTextarea1.removeAttribute('mmlinkhere');
			});

        } else console.log("Задача не была создана, поэтому в заметки нечего размещать")
}

function sendRequest(idstdserv, dscr, str, erx, ary, code) {
  let formData = new URLSearchParams();
  formData.append('requestTypeId', code);
  formData.append('reporterId', varinfraOID);
  formData.append('initiatorId', varinfraOID);
  formData.append('data[description]', decodeURIComponent(dscr).replaceAll('<br>','\n'))
  formData.append('data[reproduceSteps]', decodeURIComponent(str).replaceAll('<br>','\n'))
  formData.append('data[expectedResult]', decodeURIComponent(erx).replaceAll('<br>','\n'))
  formData.append('data[actualResult]', decodeURIComponent(ary).replaceAll('<br>','\n'))
  formData.append('data[userIds]', decodeURIComponent(idstdserv).replaceAll('<br>','\n'))

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
    mode: 'cors',
    credentials: 'include',
  };

  let requestOptionsString = JSON.stringify(requestOptions);

  document.getElementById('responseTextarea1').value = requestOptionsString;
  document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/rs/request";
  document.getElementById('responseTextarea3').value = 'responseRequest';

  // логируем входящие переменные и значение полей отправки запроса
  console.log(`${idstdserv} ${dscr} ${str} ${erx} ${ary} ${code}`);
  console.log(document.getElementById('responseTextarea1').value);
  console.log(document.getElementById('responseTextarea2').value);

  document.getElementById('sendResponse').click();
    
      responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const reqvarr = JSON.parse(responseTextarea1.getAttribute('responseRequest'));
        if (reqvarr) {
            lasttsk = reqvarr.jiraIssueKey;
            newtask.innerText = lasttsk;
			document.getElementById('custom_ar').value = "Jira PS link:" + ' ' + "https://jira.skyeng.tech/browse/" + lasttsk;
			
			const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        }
        responseTextarea1.removeAttribute('responseRequest');
    });

   setTimeout(getmmlink, 8000);
}

let checkingId = [];
function getthemesfrominfra(categoryId) {
  document.getElementById('responseTextarea1').value = '{}';
  document.getElementById('responseTextarea2').value = `https://api-infra.skyeng.ru/api/v1/rs/categories/${categoryId}/request-types`;
  document.getElementById('responseTextarea3').value = 'sendrequest';

  document.getElementById('sendResponse').click();

  responseTextarea1.addEventListener("DOMSubtreeModified", function () {
    const reqvarr = JSON.parse(responseTextarea1.getAttribute('sendrequest'));
    if (reqvarr) {
      checkingId = [];
      for (let i = 0; i < reqvarr.length; i++) {
        checkingId.push({ id: reqvarr[i].id, summary: reqvarr[i].summary });
      }
	  buttonsfromtest.innerHTML = ''
	  for (let j=0; j<checkingId.length; j++) {
			buttonsfromtest.innerHTML += `<button class="${buttons[i].replace('.','')} widthofsd" value=${checkingId[j].id}>${checkingId[j].summary}</button>`
		}
	      buttons.forEach(button => {
        $(button).click(function () {
            remres(this);
        });
    });
    }
    responseTextarea1.removeAttribute('sendrequest');
  });
}

function sendRequestMobNoPriority(idstdserv, ary, erx, str, dscr, deviceinfo , appinfo, code) {
		
  let formData = new URLSearchParams();
  formData.append('requestTypeId', code);
  formData.append('reporterId', varinfraOID);
  formData.append('initiatorId', varinfraOID);
  formData.append('data[appInfo]', decodeURIComponent(appinfo).replaceAll('<br>','\n'))
  formData.append('data[userDeviceInfo]', decodeURIComponent(deviceinfo).replaceAll('<br>','\n'))
  formData.append('data[description]', decodeURIComponent(dscr).replaceAll('<br>','\n'))
  formData.append('data[reproduceSteps]', decodeURIComponent(str).replaceAll('<br>','\n'))
  formData.append('data[expectedResult]', decodeURIComponent(erx).replaceAll('<br>','\n'))
  formData.append('data[actualResult]', decodeURIComponent(ary).replaceAll('<br>','\n'))
  formData.append('data[userIds]', decodeURIComponent(idstdserv).replaceAll('<br>','\n'))

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
    mode: 'cors',
    credentials: 'include',
  };

  let requestOptionsString = JSON.stringify(requestOptions);

  document.getElementById('responseTextarea1').value = requestOptionsString;
  document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/rs/request";
  document.getElementById('responseTextarea3').value = 'responseRequest';
	

    // логируем входящие переменные и значение полей отправки запроса
    console.log(appinfo + " " + deviceinfo + " " + dscr + " " + str + " " + erx + " " + ary + " " + idstdserv + " " + code)

    document.getElementById('sendResponse').click()
	
	      responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const reqvarr = JSON.parse(responseTextarea1.getAttribute('responseRequest'));
        if (reqvarr) {
            lasttsk = reqvarr.jiraIssueKey;
            newtask.innerText = lasttsk;
			document.getElementById('custom_ar').value = "Jira PS link:" + ' ' + "https://jira.skyeng.tech/browse/" + lasttsk;
			
			const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        }
        responseTextarea1.removeAttribute('responseRequest');
    });

    setTimeout(getmmlink, 8000);
}

function sendRequestMobWithPriority(priorvalue, appinfo, deviceinfo, dscr, str, erx, ary, idstdserv, code) {
	
  let formData = new URLSearchParams();
  formData.append('requestTypeId', code);
  formData.append('reporterId', varinfraOID);
  formData.append('initiatorId', varinfraOID);
  formData.append('data[appInfo]', decodeURIComponent(appinfo).replaceAll('<br>','\n'))
  formData.append('data[userDeviceInfo]', decodeURIComponent(deviceinfo).replaceAll('<br>','\n'))
  formData.append('data[description]', decodeURIComponent(dscr).replaceAll('<br>','\n'))
  formData.append('data[reproduceSteps]', decodeURIComponent(str).replaceAll('<br>','\n'))
  formData.append('data[expectedResult]', decodeURIComponent(erx).replaceAll('<br>','\n'))
  formData.append('data[actualResult]', decodeURIComponent(ary).replaceAll('<br>','\n'))
  formData.append('data[userIds]', decodeURIComponent(idstdserv).replaceAll('<br>','\n'))
  formData.append('data[priority]', decodeURIComponent(priorvalue).replaceAll('<br>','\n'))

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
    mode: 'cors',
    credentials: 'include',
  };

  let requestOptionsString = JSON.stringify(requestOptions);

  document.getElementById('responseTextarea1').value = requestOptionsString;
  document.getElementById('responseTextarea2').value = "https://api-infra.skyeng.ru/api/v1/rs/request";
  document.getElementById('responseTextarea3').value = 'responseRequest';
	
	
    // логируем входящие переменные и значение полей отправки запроса
    console.log(priorvalue + " " + appinfo + " " + deviceinfo + " " + dscr + " " + str + " " + erx + " " + ary + " " + idstdserv + " " + code)

    document.getElementById('sendResponse').click()
	
	      responseTextarea1.addEventListener("DOMSubtreeModified", function () {
        const reqvarr = JSON.parse(responseTextarea1.getAttribute('responseRequest'));
        if (reqvarr) {
            lasttsk = reqvarr.jiraIssueKey;
            newtask.innerText = lasttsk;
			document.getElementById('custom_ar').value = "Jira PS link:" + ' ' + "https://jira.skyeng.tech/browse/" + lasttsk;
			
			const removefields = document.getElementsByClassName('removefield');
            for (let i = 0; i < removefields.length; i++) {
                removefields[i].value = '';
            }
        }
        responseTextarea1.removeAttribute('responseRequest');
    });

    setTimeout(getmmlink, 8000);
}

//main

if (localStorage.getItem('winTopSrvDskCRM') == null) { // начальное положение окна Service Desk
    localStorage.setItem('winTopSrvDskCRM', '120');
    localStorage.setItem('winLeftSrvDskCRM', '295');
}

let wintSrvDskCRM = document.createElement('div'); // создание окна ServiceDesk
document.body.append(wintSrvDskCRM);
wintSrvDskCRM.style = 'min-height: 165px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopSrvDskCRM') + 'px; left: ' + localStorage.getItem('winLeftSrvDskCRM') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintSrvDskCRM.style.display = 'none';
wintSrvDskCRM.setAttribute('id', 'CRMServDsk');
wintSrvDskCRM.innerHTML = win_servicedesk;

const inputsFieldsSD = document.getElementById('inputfieldsdiv');
var listenerSrvDskCRM = function (e, a) { // сохранение позиции окна ServiceDesk
    wintSrvDskCRM.style.left = Number(e.clientX - myX12) + "px";
    wintSrvDskCRM.style.top = Number(e.clientY - myY12) + "px";
    localStorage.setItem('winTopSrvDskCRM', String(Number(e.clientY - myY12)));
    localStorage.setItem('winLeftSrvDskCRM', String(Number(e.clientX - myX12)));
};

wintSrvDskCRM.onmousedown = function (a) { // изменение позиции окна ServiceDesk
    if (checkelementtype(a)) {
        window.myX12 = a.layerX;
        window.myY12 = a.layerY;
        document.addEventListener('mousemove', listenerSrvDskCRM);
    }
}
wintSrvDskCRM.onmouseup = function () { document.removeEventListener('mousemove', listenerSrvDskCRM); } // прекращение изменения позиции окна ServiceDesk

document.getElementById('SrvDskCRM').onclick = function () { // функция открытия главного окна SD +
    if (document.getElementById('CRMServDsk').style.display == '') {
        document.getElementById('CRMServDsk').style.display = 'none'
        document.getElementById('idmymenucrm').style.display = 'none'
        document.getElementById('newtask').textContent = ''
        lasttsk = '';
    } else
        document.getElementById('CRMServDsk').style.display = ''
        document.getElementById('idmymenucrm').style.display = 'none'

    document.getElementById('idmymenu').style.display = 'none'

	if (localStorage.getItem('infraOID') == null) {
		document.getElementById('jiratknstatus').innerText = "🔴"
		getInfraOId()
	} else varinfraOID = localStorage.getItem('infraOID');
	
    setTimeout(getprsuplasttask, 2000)

    const sdbtn = document.getElementsByClassName('sdbtn');
    for (let i = 0; i < sdbtn.length; i++) {
        sdbtn[i].onclick = function () {
            inputsFieldsSD.style.display = 'none';
			getthemesfrominfra(this.value)
            let activeBtnsd = document.getElementsByClassName('activebtnsd');
            for (let j = 0; j < activeBtnsd.length; j++) {
                activeBtnsd[j].classList.remove('activebtnsd');
            }
            this.classList.toggle('activebtnsd');
            let index = i;
            let elementId = otherOptions[index];
            document.getElementById(elementId).style.display = "block";

            let otherElements = document.querySelectorAll(otherOptions.filter((_, idx) => idx !== index).map(id => '#' + id).join(', '));
            for (let k = 0; k < otherElements.length; k++) {
                otherElements[k].style.display = 'none';
            }

            if (elementId === "academymobbugsoptions" || elementId === "mobbugsoptions") {
                document.getElementById('prioritymbugs').style.display = '';
                document.getElementById('custom_appinfo').style.display = '';
                document.getElementById('custom_deviceinfo').style.display = '';
            } else if (elementId === 'studcabmobbugskoptions') {
                document.getElementById('prioritymbugs').style.display = 'none';
                document.getElementById('custom_appinfo').style.display = '';
                document.getElementById('custom_deviceinfo').style.display = '';
            } else {
                document.getElementById('prioritymbugs').style.display = 'none';
                document.getElementById('custom_appinfo').style.display = 'none';
                document.getElementById('custom_deviceinfo').style.display = 'none';
            }
        }
    }

    buttons.forEach(button => {
        $(button).click(function () {
            inputsFieldsSD.style.display = 'none';
            remres(this);
        });
    });

} // tested

document.getElementById('CRMServDsk').ondblclick = function (a) { // скрытие окна ServiceDesk по двойному клику
    if (checkelementtype(a)) { document.getElementById('hideMeSrvDsk').click(); }
}

document.getElementById('ServiceDeskinstr').onclick = function () {
    window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-ServiceDesk')
}

document.getElementById('infratasklist').onclick = function () { // открываем список задач оператора в Infra
    window.open('https://infra.skyeng.ru/request/list')
}

document.getElementById('hideMeSrvDsk').onclick = function () { //форма hide
    if (document.getElementById('CRMServDsk').style.display == '') {
        // $('.sdbtn').click(function () {
            // $('.sdbtn').not(this).removeClass('activebtnsd');
            // $(this).toggleClass('activebtnsd');
        // });

        buttons.forEach(button => {
            $(button).click(function () {
                remres(this);
            });
        });

        document.getElementById('newtask').textContent = ''

        document.getElementById('CRMServDsk').style.display = 'none'
    }
}

document.getElementById('refreshjiraauth').onclick = getInfraOId; //функция обновления статуса авторизации

function remres(a) { // функция переключения класса по нажатию на кнопку
  let isActive = $(a).hasClass('activebtn');
    let isThemeBtn = $(a).hasClass('sdbtn');
  
    if (isActive || isThemeBtn) {
    buttons.forEach(button => {
      $(button).show().removeClass('activebtn');
    });
      inputsFieldsSD.style.display = 'none';
  } else {
    buttons.forEach(button => {
      if (button !== a) {
        $(button).hide().removeClass('activebtn');
      }
    });
    $(a).addClass('activebtn').show();
      inputsFieldsSD.style.display = 'block';
  }
}

document.getElementById('createsd').addEventListener('click', function () { //функция создания задачи на сервис деск

    let priorityMobile = document.getElementById('prioritymbugs')
    let idUser = document.getElementById('custom_id')
    let appInfo = document.getElementById('custom_appinfo')
    let deviceInfo = document.getElementById('custom_deviceinfo')
    let descriptionField = encodeURIComponent(document.getElementById('custom_descr').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let stepsToReproduce = encodeURIComponent(document.getElementById('custom_str').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let expectedResult = encodeURIComponent(document.getElementById('custom_er').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let actualResult = encodeURIComponent(document.getElementById('custom_ar').value.replace(/[\n\t\"]/g, function (match) {
        if (match === '\n') return '<br>';
        if (match === '\t') return '&emsp;';
        if (match === '\"') return '&quot;';
    }))
    let activeButtons = document.querySelectorAll('.activebtn');

    if (priorityMobile.style.display == 'none' && appInfo.style.display == 'none' && deviceInfo.style.display == 'none') {
        for (const button of activeButtons) {
            sendRequest(idUser.value, descriptionField, stepsToReproduce, expectedResult, actualResult, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    } else if (priorityMobile.style.display == '' && appInfo.style.display == '' && deviceInfo.style.display == '') {
        for (const button of activeButtons) {
            sendRequestMobWithPriority(priorityMobile.value, appInfo.value, deviceInfo.value, descriptionField, stepsToReproduce, expectedResult, actualResult, idUser.value, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    } else if (priorityMobile.style.display == 'none' && appInfo.style.display == '' && deviceInfo.style.display == '') {
        for (const button of activeButtons) {
            sendRequestMobNoPriority(idUser.value, actualResult, expectedResult, stepsToReproduce, descriptionField, deviceInfo.value, appInfo.value, button.value);
            console.log(`Selected topic: ${button.innerText}`);
        }
    }

});

function SDtestbtn() {
    if (document.getElementById('optionAnalyst').style.display == 'none'){
        document.getElementById('optionAnalyst').style.display = ''
    } else {document.getElementById('optionAnalyst').style.display = 'none'}
}
	//End of script
// }

