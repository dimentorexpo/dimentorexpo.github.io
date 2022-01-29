// Файл JSAF4.js
var socketOpened = 0
var flagReadMessage = 0
var problemText = 'justStarted'
function getSlackToken1() {            // функция получения токена Слака
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1'
	document.getElementById('responseTextarea3').value = 'getSlackToken'

	document.getElementById('sendResponse').click()
	setTimeout(showResponse, 1500)
	function tokenToLocalStorage1() {
		var result = document.getElementById('responseTextarea1').getAttribute('getSlackToken')
		if(result == null)
			setTimeout(tokenToLocalStorage1, 1000)
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
	setTimeout(tokenToLocalStorage1, 2000) 
}

function openSlackSocket1() {          // Функция открытия Сокета и использования токена Слака
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://slack.com/api/rtm.connect?token=' + localStorage.getItem('token')
	document.getElementById('responseTextarea3').value = 'openSlackSocket'
	
	document.getElementById('sendResponse').click()
	setTimeout(showResponse, 1500)
	function getUrlAndOpenSocket1() {
		var result = document.getElementById('responseTextarea1').getAttribute('openSlackSocket')
		if(result == null)
			setTimeout(getUrlAndOpenSocket1, 1000)
		else {
			result = JSON.parse(result)
			document.getElementById('responseTextarea1').removeAttribute('openSlackSocket')
			var url = result.url
			console.log(result)
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
		socket = new WebSocket(url)
		var flagSlack = 0
		var slackUrlMsg1 = ''
		var slackUrlMsg2 = ''
		socket.onmessage = function(event) {
			message = JSON.parse(event.data)
			if(message.type == "view_opened" && message.app_id == 'AU3S9KSPL' && flagReadMessage == 1) {
				view = message.view
				console.log('Форма получена: ' + message.view)
				fillForm1(JSON.stringify(message.view))
				flagReadMessage = 0
				return
			}
			if(message.type == "message" && message.bot_id == 'BUS628294') {
				console.log(message)
				let message2 = JSON.stringify(message)
				if(flagSlack == 0) {
					setTimeout(checkForLink1, 5 * 1000)
					flagSlack = 1
				}
				if(message2.match(/<https:\/\/skyeng.slack.*\|.*>/) == null) {
					if(message2.indexOf(problemText) == -1) {
						console.log("Чужой тред")
						return
					}
					console.log("В этом ответе нет нужный ссылки")
					slackUrlMsg1 = 'https://skyeng.slack.com/archives/' + message.channel + '/p' + Number(message.ts * 100000)
					console.log('Предполагаемая ссылка: ' + slackUrlMsg1)
					return
				}
				slackUrlMsg2 = message2.match(/https:\/\/skyeng.slack.*\|.*>/)[0].split('|')[0]
				console.log('Ссылка на тред: ' + slackUrlMsg2)
				sendComment('Ссылка на тред: ' + slackUrlMsg2)
				document.getElementById('buttonOpenForm1').style.display = ''
				return
			}
		}
		function checkForLink1() {
			flagSlack = 0
			let oper = textToUTF8String(document.querySelector('.user_menu-dropdown-user_name').textContent)
			let ye = slackUrlMsg1 == slackUrlMsg2 ? 'yes' : 'no'
			ye = slackUrlMsg2 == '' ? 'idk' : ye 
			var body = 'entry.1566561060=' + oper + '&entry.1523645757=' + slackUrlMsg1 + '&entry.626388165=' + slackUrlMsg2 + '&entry.181839927=' + ye
			let options = {
				  "headers": {
					"content-type": "application/x-www-form-urlencoded",
				  },
				  "body": body,
				  "method": "POST",
				}
				
			document.getElementById('responseTextarea1').value = JSON.stringify(options)
			document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/d/e/1FAIpQLSfhK9cT1l3ZSkbIr6YSNkm4nXIwMMX9E0k_wkPCiiHp7NgzuA/formResponse'
			document.getElementById('responseTextarea3').value = ''
			document.getElementById('sendResponse').click()
			
			//	document.getElementById('buttonOpenForm1').innerHTML = "Wait";
			//	setTimeout(function() {document.getElementById('buttonOpenForm1').innerHTML = "Баг-репорт"}, 5000);
			
			if(ye == 'idk') {
				sendComment('Ссылка на тред (?): ' + slackUrlMsg1)
			}
			socket.close()
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

function createSlackView1() {
	let client_token = Number(new Date())
	requestOptions = {
	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryocWaVl7biIt7qfdc",
	  },
	  "body": "------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"action_id\"\r\n\r\nAa0182QPV4E7\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\nAU3S9KSPL\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token + "\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + "\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\n",
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
function fillForm1(viewStringify) {
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
	div2.textContent = 'Форма'
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
			select.placeholder = blocks[i].element.placeholder.text  // устанавливаем текст в поле инпута по пути element-placeholder-text
			select.id = 'formToSlackField' + i
			if(i == 2 || i == 3) {
				let option = document.createElement('option')   //  создаем опции выбора  
				option.textContent = i == 2 ? 'Выберите канал *' : 'Приоритет *'
				select.append(option)
			}
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
		document.getElementById('buttonOpenForm1').style.display = ''
	}
	let button3 = document.createElement('button')
	button3.textContent = "Закрыть"
	button3.style.marginLeft = '5px'
	button3.onclick = function() {
		socket.close()
		socketOpened = 0
		this.parentElement.parentElement.remove()
		document.getElementById('buttonOpenForm1').style.display = ''
		console.log("форма закрыта");
		document.getElementById('buttonOpenForm1').innerHTML = "Wait";
		setTimeout(function() {document.getElementById('buttonOpenForm1').innerHTML = "Wal"}, 3000);
	}
	
	button.onclick = function() {
		this.setAttribute('disabled', 'disabled')
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
		if(!validateSlackForm1())
			return
		for(let i = 0; i < 9; i++) {
			view.blocks[i].answer = document.getElementById('formToSlackField' + i).value
			view.blocks[i].answer = view.blocks[i].answer.split("\"").join("\\\"")
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
		document.getElementById('buttonOpenForm1').style.display = ''
	document.getElementById('buttonOpenForm1').innerHTML = "Wait";
	setTimeout(function() {document.getElementById('buttonOpenForm1').innerHTML = "Wal"}, 10500);
		
	}
	function validateSlackForm1() {
		let flag = 0
		for(let i = 0; i < 7; i++) {
			if(i == 3 || i == 2) {
				if(i == 2) {
					if(document.getElementById('formToSlackField' + i).value == 'Выберите канал *') {
						document.getElementById('formToSlackField' + i).style.border = '1px solid red';
						flag = 1
					} else 
						document.getElementById('formToSlackField' + i).style.border = '0px solid red';
				}
				if (i == 3) {
					if(document.getElementById('formToSlackField' + i).value == 'Приоритет *') {
						document.getElementById('formToSlackField' + i).style.border = '1px solid red';
						flag = 1
					} else 
						document.getElementById('formToSlackField' + i).style.border = '0px solid red';
				}
				continue
			} 
			if(document.getElementById('formToSlackField' + i).value == '') {
				document.getElementById('formToSlackField' + i).style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('formToSlackField' + i).style.border = '0px solid red';
		}
		return flag == 1 ? false : true
	}
	newDiv.append(button)
	newDiv.append(button2)
	newDiv.append(button3)
	div.append(newDiv)
	console.log("Форма получена и заплонена успешно")
}

let buttonOpenForm1 = document.createElement('div');
buttonOpenForm1.id = 'buttonOpenForm1';
buttonOpenForm1.textContent = "Wal";
buttonOpenForm1.style.marginRight = "15px";
buttonOpenForm1.onclick = function() {
	if(socketOpened == 0) {
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
var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
btnAdd.insertBefore(buttonOpenForm1, btnAdd.children[0])
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
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryIqHa1NymiZdZybBQ",
	  },
	  "body": "------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"view_id\"\r\n\r\n" + view_id + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\n" + answer + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + '\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\n',
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
