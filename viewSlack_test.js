// Файл JSAF4.js
var socketOpened1 = 0
var flagReadMessage1 = 0
var problemText1 = 'justStarted'
function getSlackToken1() {            // функция получения токена Слака, при этом значения респонстекстареа вообще не трогаем
	document.getElementById('responseTextarea1').value = '{}'  
	document.getElementById('responseTextarea2').value = 'https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1'
	document.getElementById('responseTextarea3').value = 'getSlackToken'

	document.getElementById('sendResponse').click()
	setTimeout(showResponse1, 1500)
	function tokenToLocalStorage1() {
		var result1 = document.getElementById('responseTextarea1').getAttribute('getSlackToken')
		if(result1 == null)
			setTimeout(tokenToLocalStorage1, 1000)
		else {
			document.getElementById('responseTextarea1').removeAttribute('getSlackToken')
			try {
				localStorage.setItem('token', result1.match(/"token":"(.*?)"/)[1])
				console.log('Токен Slack получен и установлен')
			} catch (e) {
				console.log('Ошибка при получении токена: ' + e)
				console.log(result1)
			}
		}
	}
	setTimeout(tokenToLocalStorage1, 2000)
}

function openSlackSocket1() {          // Функция открытия Сокета и использования токена Слака
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://slack.com/api/rtm.connect?token=' + localStorage.getItem('token')
	document.getElementById('responseTextarea3').value = 'openSlackSocket'
	
	document.getElementById('sendResponse').click()
	setTimeout(showResponse1, 1500)
	function getUrlAndOpenSocket1() {
		var result1 = document.getElementById('responseTextarea1').getAttribute('openSlackSocket')
		if(result1 == null)
			setTimeout(getUrlAndOpenSocket1, 1000)
		else {
			result1 = JSON.parse(result1)
			document.getElementById('responseTextarea1').removeAttribute('openSlackSocket')
			var url = result1.url
			console.log(result1)
			if(url == undefined) {
				console.log("Не нашёл юрл, повторно запрашиваем юрл")
				openSlackSocket1()
				return
			}
			openSocket1(url)
			console.log('URL для связи с Slack получен')
		}
	}
	setTimeout(getUrlAndOpenSocket1, 1000)
	
	function openSocket1(url) {                          // Функция открытия так понимаю нужного бота, по его app_id (для Unsub A014EAVN8SU)  и bot_id (для Unsub B013CE3F6AK)
		socket1 = new WebSocket(url)
		var flagSlack1 = 0
		var slackUrlMsg11 = ''
		var slackUrlMsg22 = ''
		socket1.onmessage = function(event) {
			message = JSON.parse(event.data)
			if(message.type == "view_opened" && message.app_id == 'AU3S9KSPL' && flagReadMessage1 == 1) {
				view1 = message.view
				console.log('Форма получена: ' + message.view)
				fillForm(JSON.stringify(message.view))
				flagReadMessage1 = 0
				return
			}
			if(message.type == "message" && message.bot_id == 'BUS628294') {
				console.log(message)
				let message2 = JSON.stringify(message)
				if(flagSlack1 == 0) {
					setTimeout(checkForLink1, 5 * 1000)
					flagSlack1 = 1
				}
				if(message2.match(/<https:\/\/skyeng.slack.*\|.*>/) == null) {
					if(message2.indexOf(problemText1) == -1) {
						console.log("Чужой тред")
						return
					}
					console.log("В этом ответе нет нужный ссылки")
					slackUrlMsg11 = 'https://skyeng.slack.com/archives/' + message.channel + '/p' + Number(message.ts * 1000000)
					console.log('Предполагаемая ссылка: ' + slackUrlMsg11)
					return
				}
				slackUrlMsg22 = message2.match(/https:\/\/skyeng.slack.*\|.*>/)[0].split('|')[0]
				console.log('Ссылка на тред: ' + slackUrlMsg22)
				sendComment('Ссылка на тред: ' + slackUrlMsg22)
				document.getElementById('buttonOpenForm1').style.display = ''
				return
			}
		}
		function checkForLink1() {
			flagSlack1 = 0
			let oper1 = textToUTF8String(document.querySelector('.user_menu-dropdown-user_name').textContent)
			let ye1 = slackUrlMsg11 == slackUrlMsg22 ? 'yes' : 'no'
			ye1 = slackUrlMsg22 == '' ? 'idk' : ye1 
			var body1 = 'entry.1566561060=' + oper1 + '&entry.1523645757=' + slackUrlMsg11 + '&entry.626388165=' + slackUrlMsg22 + '&entry.181839927=' + ye
			let options1 = {
				  "headers": {
					"content-type": "application/x-www-form-urlencoded",
				  },
				  "body": body1,
				  "method": "POST",
				}
				
			document.getElementById('responseTextarea1').value = JSON.stringify(options)
			document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/d/e/1FAIpQLSfhK9cT1l3ZSkbIr6YSNkm4nXIwMMX9E0k_wkPCiiHp7NgzuA/formResponse'
			document.getElementById('responseTextarea3').value = ''
			document.getElementById('sendResponse').click()
			
			if(ye1 == 'idk') {
				sendComment('Ссылка на тред (?): ' + slackUrlMsg11)
			}
			socket1.close()
		}
		socket1.onopen = function(event) {
			socketOpened1 = 1
			console.log('socket подключен')
		}
		socket1.onclose = function(event) {
			socketOpened1 = 0
			console.log('Закрыли сокет')
		}
	}
}

function createSlackView1() {
	let client_token1 = Number(new Date())
	requestOptions1 = {
	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryocWaVl7biIt7qfdc",
	  },
	  "body": "------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"action_id\"\r\n\r\nAa0182QPV4E7\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\nAU3S9KSPL\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token1 + "\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + "\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\n",
	  "method": "POST",
	  "credentials": "include"
	}
	console.log('Запрашиваем создание формы')
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions1)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/apps.actions.v2.execute?slack_route=T03A3SUFB'
	document.getElementById('responseTextarea3').value = 'createSlackView'
	flagReadMessage1 = 1
	document.getElementById('sendResponse').click()
	setTimeout(showResponse1, 1500, 'createSlackView')
}
flagFormSubmited1 = 0
function fillForm1(viewStringify) {
	problemText1 = 'justStarted'
	view1 = JSON.parse(viewStringify)
	div3 = document.createElement('div')
	document.body.append(div3)
	if (localStorage.getItem('viewToSlackFormAFTop') == null) {
		localStorage.setItem('viewToSlackFormAFTop', '120');
		localStorage.setItem('viewToSlackFormAFLeft', '295');
	}
	div3.style = 'cursor: -webkit-grab;background: #464451; top: ' + localStorage.getItem('viewToSlackFormAFTop') + 'px; left: ' + localStorage.getItem('viewToSlackFormAFLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; width: 18%'
	div3.id = 'formToSlack'
	
	let div4 = document.createElement('div')
	div4.style.textAlign = 'center'
	div4.style.color = 'white'
	div4.textContent = 'Форма баг-репорта'
	let blocks1 = view1.blocks
	div3.append(div4)
	var listener5 = function(e , a) {
        div3.style.left = Number(e.clientX - myX4) + "px";
        div3.style.top = Number(e.clientY - myY4) + "px";
        localStorage.setItem('viewToSlackFormAFTop', String(Number(e.clientY - myY4)));
        localStorage.setItem('viewToSlackFormAFLeft', String(Number(e.clientX - myX4)));
    };

    div3.firstElementChild.onmousedown = function (a) {
        window.myX4 = a.layerX; 
        window.myY4 = a.layerY; 
        document.addEventListener('mousemove', listener5);
    }
    div3.onmouseup = function () {document.removeEventListener('mousemove', listener5);}
	
	for(let i = 0; i < blocks1.length; i++) {
		let newDiv1 = document.createElement('div')
		newDiv1.style = 'margin:5px'
		if(blocks1[i].element.options != undefined) {
			let select1 = document.createElement('select')   // создаем выпадающее меню выбора
			select1.style.width = '100%'
			select1.placeholder = blocks1[i].element.placeholder.text  // устанавливаем текст в поле инпута по пути element-placeholder-text
			select1.id = 'formToSlackField' + i
			if(i == 2 || i == 3) {
				let option1 = document.createElement('option')   //  создаем опции выбора  
				option1.textContent = i == 2 ? 'Выберите канал *' : 'Приоритет *'
				select1.append(option1)
			}
			for(let j = 0; j < blocks1[i].element.options.length; j++) {
				let option1 = document.createElement('option')
				option1.textContent = blocks[i].element.options[j].text.text  // отображаемый текст в пути переменной масива при доступе к апишке (elements-options-text-text) , при этом // blocks[i].element.options[j].value[j] помогает получить значение радиокнопки value либо mrkt либо all
				option1.setAttribute('value', j)
				select1.append(option1)
			}
			newDiv1.append(select1)
		} else {
			if(blocks1[i].label.text == 'URL')
				var input = document.createElement('input')
			else
				var input = document.createElement('textarea')
			input.style.width = '100%'
			input.placeholder = blocks1[i].label.text + (i < 7 ? ' *' : '')
			input.id = 'formToSlackField' + i
			newDiv1.append(input)
		}
		div.append(newDiv1)
	}
	let newDiv1 = document.createElement('div')
	newDiv1.style = 'margin:5px'
	newDiv1.style.textAlign = 'center'
	let button4 = document.createElement('button')
	button4.textContent = "Отправить"
	button4.id = 'formToSlackSend1'
	let button5 = document.createElement('button')
	button5.textContent = "Скрыть"
	button5.style.marginLeft = '5px'
	button5.onclick = function() {
		this.parentElement.parentElement.style.display = 'none'
		document.getElementById('buttonOpenForm1').style.display = ''
	}
	let button6 = document.createElement('button')
	button6.textContent = "Закрыть"
	button6.style.marginLeft = '5px'
	button6.onclick = function() {
		socket1.close()
		socketOpened1 = 0
		this.parentElement.parentElement.remove()
		document.getElementById('buttonOpenForm1').style.display = ''
	}
	
	button4.onclick = function() {
		this.setAttribute('disabled', 'disabled')
		setTimeout(function() {
			if(document.getElementById('formToSlackSend1') != null)
				document.getElementById('formToSlackSend1').removeAttribute('disabled')
		}, 500)
		flagFormSubmited1 = 0
		if(document.getElementById('formToSlack') == undefined) {
			console.log("Не вижу форму")
			return;
		}
		console.log("Заполняем view")
		if(!validateSlackForm1())
			return
		for(let i = 0; i < 9; i++) {
			view1.blocks1[i].answer1 = document.getElementById('formToSlackField' + i).value
			view1.blocks1[i].answer1 = view1.blocks1[i].answer1.split("\"").join("\\\"")
			console.log('view.blocks1[i].answer1 = ' + view1.blocks1[i].answer1)
			if(view1.blocks1[i].answer1 == undefined || view1.blocks1[i].answer1 == "undefined") {
				console.log(i + ' не нахожу текст поля')
				return
			}
		}
		problemText1 = document.getElementById('formToSlackField' + 0).value
		console.log(view1)
		submitSlackView1(view1)
		flagFormSubmited1 = 1
		document.getElementById('formToSlack').remove()
		document.getElementById('buttonOpenForm1').style.display = ''
		
	}
	function validateSlackForm1() {
		let flag1 = 0
		for(let i = 0; i < 7; i++) {
			if(i == 3 || i == 2) {
				if(i == 2) {
					if(document.getElementById('formToSlackField' + i).value == 'Выберите канал *') {
						document.getElementById('formToSlackField' + i).style.border = '1px solid red';
						flag1 = 1
					} else 
						document.getElementById('formToSlackField' + i).style.border = '0px solid red';
				}
				if (i == 3) {
					if(document.getElementById('formToSlackField' + i).value == 'Приоритет *') {
						document.getElementById('formToSlackField' + i).style.border = '1px solid red';
						flag1 = 1
					} else 
						document.getElementById('formToSlackField' + i).style.border = '0px solid red';
				}
				continue
			} 
			if(document.getElementById('formToSlackField' + i).value == '') {
				document.getElementById('formToSlackField' + i).style.border = '1px solid red';
				flag1 = 1
			} else
				document.getElementById('formToSlackField' + i).style.border = '0px solid red';
		}
		return flag1 == 1 ? false : true
	}
	newDiv1.append(button4)
	newDiv1.append(button5)
	newDiv1.append(button6)
	div.append(newDiv1)
	console.log("Форма получена и заплонена успешно")
}

let buttonOpenForm1 = document.createElement('div');
buttonOpenForm1.id = 'buttonOpenForm1';
buttonOpenForm1.textContent = "Баг-репорт";
buttonOpenForm1.style.marginRight = "15px";
buttonOpenForm1.onclick = function() {
	if(socketOpened1 == 0) {
		if(localStorage.getItem('token') == undefined)
			getSlackToken1()
		openSlackSocket1()
	}
	if(document.getElementById('formToSlack') != undefined) 
		document.getElementById('formToSlack').style.display = ''
	else
		createSlackView1()
	this.style.display = 'none'
}
var btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
btnAdd1.insertBefore(buttonOpenForm1, btnAdd1.children[0])
function submitSlackView1(view1) {
	console.log(view1)
	let client_token1 = Number(new Date())
	let view_id1 = view1.id
	let answer1 = 'Content-Disposition: form-data; name=\"state\"\r\n\r\n{\"values\":{'
	for(let i = 0; i < view1.blocks1.length; i++) {
		if(i > 0)
			answer1 += ','
		answer1 += "\"" + view1.blocks1[i].block_id
		answer1 += "\":{\"" + view1.blocks1[i].element.action_id
		answer1 += "\":{\"type\":\"" + view1.blocks1[i].element.type 
		if(view1.blocks1[i].element.options != undefined)
			answer1 += "\",\"selected_option\":{\"text\":{\"type\":\"" + view1.blocks1[i].element.options[view1.blocks1[i].answer1].text.type + "\",\"text\":\"" + view1.blocks1[i].element.options[view1.blocks1[i].answer1].text.text + "\",\"emoji\":" + view1.blocks1[i].element.options[view1.blocks1[i].answer1].text.emoji.toString() + "},\"value\":\"" + view1.blocks1[i].element.options[view1.blocks1[i].answer1].value + "\"}}}"
		else
			answer1 += "\",\"value\":\"" + view1.blocks1[i].answer1 + "\"}}"
	}
	answer1 += "}}"
	requestOptions1 = {
	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryIqHa1NymiZdZybBQ",
	  },
	  "body": "------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token1 + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"view_id\"\r\n\r\n" + view_id1 + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\n" + answer1 + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + '\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\n',
	  "method": "POST",
	  "credentials": "include"
	}
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions1)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/views.submit?slack_route=T03A3SUFB&_x_version_ts=1607639215&_x_gantry=true'
	document.getElementById('responseTextarea3').value = 'submitSlackView'
	

	document.getElementById('sendResponse').click()
	console.log("Отправили форму")
	
	setTimeout(showResponse1, 1500, 'submitSlackView')
}
function showResponse1(attr) {
	res = document.getElementById('responseTextarea1').getAttribute(attr)
	if(res == null) {
		setTimeout(showResponse1, 1000, attr)
		return
	}	
	console.log('Результат запроса' + res)
	document.getElementById('responseTextarea1').removeAttribute(attr)
}

function toUTF8Array(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff))
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

function decToHex(dec)
{
	var hexStr = '0123456789ABCDEF';
	var low = dec % 16;
	var high = (dec - low)/16;
	hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
	return hex;
}

function textToUTF8String(string) {
	string = toUTF8Array(string)
	let string2 = ""
	for(i = 0; i < string.length; i++) {
		string2 += "%" + decToHex(string[i])
	}
	return string2
}
