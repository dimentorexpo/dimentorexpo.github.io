// Файл JSAF4.js
var socketOpened = 0
var flagReadMessage = 0
var problemText = 'justStarted'
function getSlackToken() {            // функция получения токена Слака
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1'
	document.getElementById('responseTextarea3').value = 'getSlackToken'

	document.getElementById('sendResponse').click()
	setTimeout(showResponse, 1500)
	function tokenToLocalStorage() {
		var result = document.getElementById('responseTextarea1').getAttribute('getSlackToken')
		if(result == null)
			setTimeout(tokenToLocalStorage, 1000)
		else {
			document.getElementById('responseTextarea1').removeAttribute('getSlackToken')
			try {
				localStorage.setItem('token', result.match(/"token":"(.*?)"/)[1])
				console.log('Токен Slack получен и установлен')
			} catch (e) {
				console.log('Ошибка при получении токена: ' + e)
				console.log(result)
			}
		}
	}
	setTimeout(tokenToLocalStorage, 2000)
}

function openSlackSocket() {          // Функция открытия Сокета и использования токена Слака
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://slack.com/api/rtm.connect?token=' + localStorage.getItem('token')
	document.getElementById('responseTextarea3').value = 'openSlackSocket'
	
	document.getElementById('sendResponse').click()
	setTimeout(showResponse, 1500)
	function getUrlAndOpenSocket() {
		var result = document.getElementById('responseTextarea1').getAttribute('openSlackSocket')
		if(result == null)
			setTimeout(getUrlAndOpenSocket, 1000)
		else {
			result = JSON.parse(result)
			document.getElementById('responseTextarea1').removeAttribute('openSlackSocket')
			var url = result.url
			console.log(result)
			if(url == undefined) {
				console.log("Не нашёл юрл, повторно запрашиваем юрл")
				openSlackSocket()
				return
			}
			openSocket(url)
			console.log('URL для связи с Slack получен')
		}
	}
	setTimeout(getUrlAndOpenSocket, 1000)
	
	function openSocket(url) {                          // Функция открытия так понимаю нужного бота, по его app_id (для Unsub A014EAVN8SU)  и bot_id (для Unsub B013CE3F6AK)
		socket = new WebSocket(url)
		var flagSlack = 0
		var slackUrlMsg1 = ''
		var slackUrlMsg2 = ''
		socket.onmessage = function(event) {
			message = JSON.parse(event.data)
			if(message.type == "view_opened" && message.app_id == 'A014EAVN8SU' && flagReadMessage == 1) {
				view = message.view
				console.log('Форма получена: ' + message.view)
				fillForm(JSON.stringify(message.view))
				flagReadMessage = 0
				return
			}
			if(message.type == "message" && message.bot_id == 'B013CE3F6AK') {
				console.log(message)
				let message2 = JSON.stringify(message)
				if(flagSlack == 0) {
					flagSlack = 1
				}
				if(message2.match(/<https:\/\/skyeng.slack.*\|.*>/) == null) {
					if(message2.indexOf(problemText) == -1) {
						return
					}
					return
				}
				document.getElementById('buttonOpenForm').style.display = ''
				return
			}
		}

		socket.onopen = function(event) {
			socketOpened = 1
			console.log('socket подключен')
		}
		socket.onclose = function(event) {
			socketOpened = 0
			console.log('Закрыли сокет')
		}
	}
}

function createSlackView() {
	let client_token = Number(new Date())
	requestOptions = {
	  	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryyKJPTlPfb1YqBCtQ",
	  },
	  "body": "------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"action_id\"\r\n\r\nAa013T6RBZSN\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\nA014EAVN8SU\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token + "\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + "\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\n",
	  "method": "POST",
	  "credentials": "include"
	}
	console.log('Запрашиваем создание формы')
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/apps.actions.v2.execute?slack_route=T03A3SUFB'
	document.getElementById('responseTextarea3').value = 'createSlackView'
	flagReadMessage = 1
	document.getElementById('sendResponse').click()
	setTimeout(showResponse, 1500, 'createSlackView')
}
flagFormSubmited = 0
function fillForm(viewStringify) {
	problemText = 'justStarted'
	view = JSON.parse(viewStringify)
	div = document.createElement('div')
	document.body.append(div)
	if (localStorage.getItem('viewToSlackFormAFTop') == null) {
		localStorage.setItem('viewToSlackFormAFTop', '120');
		localStorage.setItem('viewToSlackFormAFLeft', '295');
	}
	div.style = 'cursor: -webkit-grab;background: #464451; top: ' + localStorage.getItem('viewToSlackFormAFTop') + 'px; left: ' + localStorage.getItem('viewToSlackFormAFLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; width: 18%'
	div.id = 'formToSlack'
	
	let div2 = document.createElement('div')
	div2.style.textAlign = 'center'
	div2.style.color = 'white'
	div2.textContent = 'Отписаться от рассылок'
	let blocks = view.blocks
	div.append(div2)
	var listener4 = function(e , a) {
        div.style.left = Number(e.clientX - myX4) + "px";
        div.style.top = Number(e.clientY - myY4) + "px";
        localStorage.setItem('viewToSlackFormAFTop', String(Number(e.clientY - myY4)));
        localStorage.setItem('viewToSlackFormAFLeft', String(Number(e.clientX - myX4)));
    };

    div.firstElementChild.onmousedown = function (a) {
        window.myX4 = a.layerX; 
        window.myY4 = a.layerY; 
        document.addEventListener('mousemove', listener4);
    }
    div.onmouseup = function () {document.removeEventListener('mousemove', listener4);}
	
for(let i = 0; i < blocks.length; i++) {
		let newDiv = document.createElement('div')
		newDiv.style = 'margin:5px'
		if(blocks[i].element.options != undefined) {
			let select = document.createElement('select')   // создаем выпадающее меню выбора
			select.style.width = '100%'
			select.id = 'formToSlackField' + i
			for(let j = 0; j < blocks[i].element.options.length; j++) {
				let option = document.createElement('option')
				option.textContent = blocks[i].element.options[j].text.text  // отображаемый текст в пути переменной масива при доступе к апишке (elements-options-text-text) , при этом // blocks[i].element.options[j].value[j] помогает получить значение радиокнопки value либо mrkt либо all
				option.setAttribute('value', j)
				select.append(option)
			}
			newDiv.append(select)
		} else {
			if(blocks[i].label.text == 'URL')
				var input = document.createElement('input')
			else
				var input = document.createElement('textarea')
			input.style.width = '100%'
			input.placeholder = blocks[i].label.text + (i < 7 ? ' *' : '')
			input.id = 'formToSlackField' + i
			newDiv.append(input)
		}
		div.append(newDiv)
	}
	
	let newDiv = document.createElement('div')
	newDiv.style = 'margin:5px'
	newDiv.style.textAlign = 'center'
	let button = document.createElement('button')
	button.textContent = "Отправить"
	button.id = 'formToSlackSend'
	let button2 = document.createElement('button')
	button2.textContent = "Скрыть"
	button2.style.marginLeft = '5px'
	button2.onclick = function() {
		this.parentElement.parentElement.style.display = 'none'
		document.getElementById('buttonOpenForm').style.display = ''
	}
	let button3 = document.createElement('button')
	button3.textContent = "Закрыть"
	button3.style.marginLeft = '5px'
	button3.onclick = function() {
		socket.close()
		socketOpened = 0
		this.parentElement.parentElement.remove()
		document.getElementById('buttonOpenForm').style.display = ''
	}
	
	button.onclick = function() {
		this.setAttribute('disabled', '')
		setTimeout(function() {
			if(document.getElementById('formToSlackSend') != null)
				document.getElementById('formToSlackSend').removeAttribute('disabled')
		}, 500)
		flagFormSubmited = 0
		if(document.getElementById('formToSlack') == undefined) {
			console.log("Не вижу форму")
			return;
		}
		console.log("Заполняем view")
		for(let i = 0; i < 2; i++) {         //цикл внесения значений из текстового поля в переменную view.block[i].answer
			view.blocks[i].answer = document.getElementById('formToSlackField' + i).value
	//		view.blocks[i].answer = view.blocks[i].answer.split("\"").join("\\\"")
			console.log('view.blocks[i].answer = ' + view.blocks[i].answer)
			if(view.blocks[i].answer == undefined || view.blocks[i].answer == "undefined") {
				console.log(i + ' не нахожу текст поля')
				return
			}
		}
		problemText = document.getElementById('formToSlackField' + 0).value
		console.log(view)
		submitSlackView(view)
		flagFormSubmited = 1
		document.getElementById('formToSlack').remove()
		document.getElementById('buttonOpenForm').style.display = ''
		
	}

	newDiv.append(button)
	newDiv.append(button2)
	newDiv.append(button3)
	div.append(newDiv)
	console.log("Форма получена и заплонена успешно")
}

let buttonOpenForm = document.createElement('div');
buttonOpenForm.id = 'buttonOpenForm';
buttonOpenForm.textContent = "📧Unsub";
buttonOpenForm.classList.add('inithide');
if (buttonOpenForm != null) {
	buttonOpenForm.onclick = function() {
	document.getElementById('idmymenu').style.display = 'none'
	if(socketOpened == 0) {
		if(localStorage.getItem('token') == undefined)
			getSlackToken()
		openSlackSocket()
	}
	if(document.getElementById('formToSlack') != undefined) 
		document.getElementById('formToSlack').style.display = ''
	else
		createSlackView()
	this.style.display = 'none'
	}
} else alert("Модуль Unsub не подклчился корректно попробуйте, пожалуйста, перезагрузить страницу")

var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
btnAdd.insertBefore(buttonOpenForm, btnAdd.children[0])
function submitSlackView(view) {
	console.log(view)
	let client_token = Number(new Date())
	let view_id = view.id
	let answer = 'Content-Disposition: form-data; name=\"state\"\r\n\r\n{\"values\":{'
	for(let i = 0; i < view.blocks.length; i++) {
		if(i > 0)
			answer += ','
		answer += "\"" + view.blocks[i].block_id
		answer += "\":{\"" + view.blocks[i].element.action_id
		answer += "\":{\"type\":\"" + view.blocks[i].element.type 
		if(view.blocks[i].element.options != undefined)
			answer += "\",\"selected_option\":{\"text\":{\"type\":\"" + view.blocks[i].element.options[view.blocks[i].answer].text.type + "\",\"text\":\"" + view.blocks[i].element.options[view.blocks[i].answer].text.text + "\",\"emoji\":" + view.blocks[i].element.options[view.blocks[i].answer].text.emoji.toString() + "},\"value\":\"" + view.blocks[i].element.options[view.blocks[i].answer].value + "\"}}}"
		else
			answer += "\",\"value\":\"" + view.blocks[i].answer + "\"}}"
	}
	answer += "}}"
	requestOptions = {
	  	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryyKJPTlPfb1YqBCtQ",
	  },
	  "body": "------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token + "\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"view_id\"\r\n\r\n" + view_id + "\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\n" + answer + "\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + '\r\n------WebKitFormBoundaryyKJPTlPfb1YqBCtQ\r\n',
	  "method": "POST",
	  "credentials": "include"
	}
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/views.submit?slack_route=T03A3SUFB&_x_version_ts=1607639215&_x_gantry=true'
	document.getElementById('responseTextarea3').value = 'submitSlackView'
	

	document.getElementById('sendResponse').click()
	console.log("Отправили форму")
	
	setTimeout(showResponse, 1500, 'submitSlackView')
}
function showResponse(attr) {
	res = document.getElementById('responseTextarea1').getAttribute(attr)
	if(res == null) {
		setTimeout(showResponse, 1000, attr)
		return
	}	
	console.log('Результат запроса' + res)
	document.getElementById('responseTextarea1').removeAttribute(attr)
}

