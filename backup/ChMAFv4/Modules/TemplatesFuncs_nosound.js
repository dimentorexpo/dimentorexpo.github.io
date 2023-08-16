// Блок для работы с шаблонами из гугл таблиц
function findElementWithId(element, id) {
    if (element.id === id) {
        return element;
    }
  
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
        const foundElement = findElementWithId(children[i], id);
        if (foundElement) {
            return foundElement;
        }
    }
  
    return null;
}
  
let foundElement = null;
function requestsRed() {
	if (location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
		  const tes1 = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children;
		  foundElement = null;

		  for (let i = 0; i < tes1.length; i++) {
			foundElement = findElementWithId(tes1[i], "__next");
			if (foundElement) {
			  break;
			}
		  }

		  if (foundElement) {
			let taketaskElement = foundElement.children[0].children[0].children[1].children[0].children[0].children[0].children[1];
			// console.log(taketaskElement);
			taketaskElement.addEventListener('DOMSubtreeModified', () => {
			  const text = taketaskElement.textContent.trim();
			  const color = text === 'Нет входящих запросов' ? 'white' : '#F34723';
			  taketaskElement.style.background = color;
			});
		  } else {
			console.log("Элемент с id '__next' не найден.");
		  }
	}
	
}

function Lessonisnow() { // добавляем красную надпись о том что сейчас идет урок 
      const iframeDoc = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
      const Convlist = iframeDoc.querySelectorAll('#__next [class^="DialogsCard_Card"]');
      let activeConvElem = null;
      
      if (Convlist.length > 0) {
        const lessonStatus = SearchinAFnewUI("nextClass-statusHTML");
        
        if (lessonStatus.includes("идет") || lessonStatus.includes("идёт")) {
          for (let i = 0; i < Convlist.length; i++) {
            if (Convlist[i].getAttribute('aria-selected') === 'true') {
              activeConvElem = Convlist[i];
              break;
            }
          }
          
          if (activeConvElem && activeConvElem.getElementsByClassName('LessonIndicator').length === 0) {
            let LessonIndicator = document.createElement('span');
            LessonIndicator.style.cssText = "background: rgb(187, 5, 5); padding: 5px; color: #fff; font-weight: 400; border: 1px solid black;";
            LessonIndicator.className = 'LessonIndicator';
            LessonIndicator.textContent = lessonStatus;
            
            activeConvElem.children[0].children[0].append(LessonIndicator)
          }
        }
      }
    }

function startTimer() {
    const hrefisnow = window.location.href;
    

    if (hrefisnow.includes('skyeng.autofaq.ai/tickets/assigned')) { 
        Lessonisnow();
        requestsRed();
    }

    
    
	
    if (localStorage.getItem('audio') == '1') {
        if (window.location.origin.indexOf('https://skyeng.autofaq.ai') !== -1) {
            if (foundElement) {
                let btnTakeRequestLink = foundElement.children[0].children[0].children[1].children[0].children[0].children[0].children[1].textContent;
                if (btnTakeRequestLink != 'Нет входящих запросов') {
                    ConvAudio('on');
                } else {
                    ConvAudio('off');
                }
            }
        }
    }
    
    if (hrefisnow.includes('skyeng.autofaq.ai/tickets/assigned')){ // добавление в окно тестовых пользователей информации о том с кем общаемся.
        const iframeDoc = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
        const Convlist = iframeDoc.querySelectorAll('#__next [class^="DialogsCard_Card"]');
      
        if (Convlist.length > 0) {
            user = SearchinAFnewUI("userType");
            if (user == "teacher"){
                vertical = SearchinAFnewUI("teacherVertical");
            } else {
                vertical = SearchinAFnewUI("supportVertical");
            }
            if (user == '' || vertical == ''){
                addInfoUser.innerHTML = ''
            } else {
                addInfoUser.innerHTML = vertical + " + " + user
            }
        } else {
            addInfoUser.innerHTML = ''
        }
    }
}

// function startTimer() { // большая функция по таймеру автозакрытия, работой с аудио, добавлением доп кнопок справа в панель информации о пользователе и кнопок быстрого выставления тегов

/*     if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
        vertical = user = ""
        nextClassMode = nextClassstudentId = ""
        nextClassModeId = ""
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "teacherVertical")
                vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "userType")
                user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent

            btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

            name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-statusHTML")
                for (k = 0; k < idk; k++) {
                    if (tmrs[k][1] == name) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "идёт вводный урок")
                            tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                        else
                            tmrs[k][4] = ""
                    }
                }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-mode") {
                nextClassMode = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                nextClassModeId = i
            }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId")
                nextClassstudentId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
        }

        addInfoUser.innerHTML = vertical + " + " + user

    } */

/* 	if (scriptAdr == TP_addr || scriptAdr == TP_addrRzrv || scriptAdr == TPprem_addr || scriptAdr == TPprem_addrRzrv) {
        if (document.getElementsByClassName('expert-user_details-list').length != 0) {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    // btn.appendChild(infouserbut)
                    btn.appendChild(buttonservstud)
                    btn.appendChild(buttonhistory)
                    btn.appendChild(marksstata)
                    btn.appendChild(trshotmain)
                    if (typeof buttonmobpas == 'object')
                        btn.appendChild(buttonmobpas)
                }

                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-teacherId") {
                    btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                    btn.appendChild(nextuserinfo)
                    btn.appendChild(buttonservivceuser)
                    btn.appendChild(btnNextUserChatHistory)
                    btn.appendChild(trshootnextuser)

                }
            }
        }
        */

            
/*
                    const userTypeId = document.querySelector('#userTypeId');
                    if (!userTypeId) {
                        let userTypeName = document.createElement('span');
                        userTypeName.id = "userTypeId";
                        document.getElementsByClassName('expert-user_details-name')[0].appendChild(userTypeName);

                        const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
                        for (let i = 0; userDetailsList.childNodes[i]; i++) {
                            const childNode = userDetailsList.childNodes[i];
                            const textContent = childNode.childNodes[1].textContent;
                            if (textContent === "teacher") {
                                document.getElementById('userTypeId').textContent = "(П)";
                                document.getElementById('userTypeId').style.color = "#1E90FF";
                                break;
                            } else if (textContent === "student") {
                                document.getElementById('userTypeId').textContent = "(У)";
                                document.getElementById('userTypeId').style.color = "#DC143C";
                                break;
                            } else if (textContent === "parent") {
                                document.getElementById('userTypeId').textContent = "(РУ)";
                                document.getElementById('userTypeId').style.color = "#DC143C";
                                break;
                            }
                        }
                    }


                    //добавил окраску бренда skyeng

                    const expertDts = document.getElementsByClassName('expert-user_details-dt');
                    const brandToBackgroundColorMap = {
                        skyeng: '#00AEFA',
                        skysmart: '#2E8B57',
                        'идёт урок': '#FF0000',
                    };

                    function setBackgroundColor(element, brand) {
                        element.style.background = brandToBackgroundColorMap[brand];
                    }

                    for (let i = 0; i < expertDts.length; i++) {
                        if (expertDts[i].textContent === 'brand') {
                            const ps = document.getElementsByTagName('p');
                            for (let i = 0; i < ps.length; i++) {
                                setBackgroundColor(ps[i], ps[i].textContent);
                            }
                        }
                    }

                }
            }
        }
    } */

/* 	if ((scriptAdr == TP_addr || scriptAdr == TP_addrRzrv || scriptAdr == TPprem_addr || scriptAdr == TPprem_addrRzrv) && document.getElementById('continue_chat_button') == null && document.getElementsByClassName('expert-user_info_panel-footer-inner')[0] != undefined) {
        let btn1 = document.createElement('span');
        btn1.id = 'continue_chat_button'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn1)
        btn1.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Дубль</a>';
        btn1.setAttribute('onClick', 'newTaggg("double");')

        let btn2 = document.createElement('span');
        btn2.id = 'refuse'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn2)
        btn2.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Отказ</a>';
        btn2.setAttribute('onClick', 'newTaggg("refusal_of_help");')
        btn2.addEventListener('click', function () {
            if (document.getElementById('AF_Refuseformnew').style.display == 'none') {
                document.getElementById('otkaz').click();
            }
        })

        let btn3 = document.createElement('span');
        btn3.id = 'TPcallsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn3)
        btn3.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Исход</a>';
        btn3.setAttribute('onClick', 'newTaggg("request_forwarded_to_outgoing_tp_crm2");')

        let btn4 = document.createElement('span');
        btn4.id = 'recgiv'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn4)
        btn4.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Даны реком</a>';
        btn4.setAttribute('onClick', 'newTaggg("recommendations_given ");')

        let btn5 = document.createElement('span');
        btn5.id = 'solvd'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn5)
        btn5.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Решен</a>';
        btn5.setAttribute('onClick', 'newTaggg("request_solved");')

        let btn6 = document.createElement('span');
        btn6.id = 'servis'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn6)
        btn6.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Серверные</a>';
        btn6.setAttribute('onClick', 'newTaggg("server_issues");')

        let btn7 = document.createElement('span');
        btn7.id = 'untargeted'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn7)
        btn7.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Нецелевой</a>';
        btn7.setAttribute('onClick', 'newTaggg("untargeted");')

        let btn8 = document.createElement('span');
        btn8.id = 'ochered'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn8)
        btn8.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Очередь</a>';
        btn8.setAttribute('onClick', 'newTaggg("queue");')   

		let btn15 = document.createElement('span');
        btn15.id = 'ochered'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn15)
        btn15.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Сброскорп📨</a>';
        btn15.setAttribute('onClick', 'newTaggg("#corpmail");')
		
		let btn9 = document.createElement('span');
        btn9.id = 'svyazsU'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn9)
        btn9.innerHTML = '<a style="float: left;margin-right: 5px;margin-top: 10px;color: ##1e90ff;cursor: pointer;font-weight: 700;">П->связь У</a>';
        btn9.setAttribute('onClick', 'sendComment("Обратился П, связаться с У");')

		let btn10 = document.createElement('span');
        btn10.id = 'svyazsP'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn10)
        btn10.innerHTML = '<a style="float: left;margin-right: 5px;margin-top: 10px;color: #c92e52;cursor: pointer;font-weight: 700;">У->связь П</a>';
        btn10.setAttribute('onClick', 'sendComment("Обратился У, связаться с П");')
		
		let btn11 = document.createElement('span');
        btn11.id = 'PNO'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn11)
        btn11.innerHTML = '<a style="float: left;margin-right: 5px;margin-top: 10px;color: ##1e90ff;cursor: pointer;font-weight: 700;">П НО</a>';
        btn11.setAttribute('onClick', 'sendComment("Крит Н.О. П");')

		let btn12 = document.createElement('span');
        btn12.id = 'UNO'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn12)
        btn12.innerHTML = '<a style="float: left;margin-right: 5px;margin-top: 10px;color: #c92e52;cursor: pointer;font-weight: 700;">У НО</a>';
        btn12.setAttribute('onClick', 'sendComment("Крит Н.О. У");')
		
		let btn13 = document.createElement('span');
        btn13.id = 'wanoanswer'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn13)
        btn13.innerHTML = '<a style="float: left;margin-right: 5px;margin-top: 10px;color: #ff18da;cursor: pointer;font-weight: 700;">WA_NotAns</a>';
        btn13.setAttribute('onClick', 'newTaggg("#wanoanswer");')
		
		let btn14 = document.createElement('span');
        btn14.id = 'wafirstlesson'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn14)
        btn14.innerHTML = '<a style="float: left;margin-right: 5px;margin-top: 10px;color: #ff18da;cursor: pointer;font-weight: 700;">WA_First</a>';
        btn14.setAttribute('onClick', 'newTaggg("#wafirstlesson");')
    } */
// }

function pageClick(pageId) { // по клику переключает страницы с шаблонами
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
	let pageNum = pageId.split('_')[0]
    for (i = 0; i < b.childElementCount; i++) {
        try {
            b.children[1].children[i].style = 'background-color:#768d87; border-top:0px;'
            document.getElementById(i + "page").style.display = 'none'
        } catch (e) { }
    }
    document.getElementById(pageId).style = 'background-color: green; border-top:4px solid orange'
    document.getElementById(pageNum + "page").style.display = ''
}

function bagPageButtons(butId) {  //с шаблонами тоже фукнкция связана
    txt = document.getElementById(butId).parentElement.childNodes[0].textContent
    for (l = 0; l < table.length; l++)
        if (table[l][0] == txt) {
            resetFlags()
            document.getElementById('inp').value = table[l][Number(butId[4]) + 1]
            break
        }
}

function transfPageButtons(textFromTable) { //подстановка телефона и почты юзера при использовании шаблона

    let phone = '';
    textFromTable = textFromTable.split('(phone)');

    if (textFromTable.length > 1) {
        const phoneInput = document.getElementById('phone_tr');
        phone = phoneInput.value || phoneInput.placeholder;

        if (phone === 'Телефон') {
            document.getElementById('inp').value = 'Введите номер телефона';
            return;
        }
    }

    textFromTable = textFromTable.join(phone);

    let email = ""
    textFromTable = textFromTable.split('(email)')

    if (textFromTable.length > 1) {
        const emailInput = document.getElementById('email_tr');
        email = emailInput.value || emailInput.placeholder;

        if (email === 'Почта') {
            document.getElementById('inp').value = "Введите почту"
            return;
        }
    }
    textFromTable = textFromTable.join(email)

    name = ""
    textFromTable = textFromTable.split('(name)')
	
					let newFrameIndex;
	let tes1 = document.getElementsByTagName('iframe')
	
	if (tes1.length !=0) {
		tes1 = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1]	
		for (let i=0;i<tes1.children.length;i++) {
			if (tes1.children[i].id == "__next") {
				newFrameIndex = [i]
			}
		}
	}
	
    if (document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[newFrameIndex].children[0].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[0].length != 0) {
        a = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[newFrameIndex].children[0].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[0].textContent
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        if (textFromTable.length > 1 && cyrillicPattern.test(a[0])) {
            name = a[0]
        }
        else
            name = a[0]
    }
    else
        name = a[0]
    textFromTable = textFromTable.join(name)

    return textFromTable
}

async function buttonsFromDoc(butName) { // функция отправки шаблона в зависимости от нажатой кнопки и также взаимодействут с другими функциями
    if (butName == "ус+брауз")
        if (user == 'student')
            butName = "ус+брауз (У)"
        else
            butName = "ус+брауз (П)"

    if (butName == 'Привет') {
		
			let newFrameIndex;
	let tes1 = document.getElementsByTagName('iframe')
	
	if (tes1.length !=0) {
		tes1 = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1]	
		for (let i=0;i<tes1.children.length;i++) {
			if (tes1.children[i].id == "__next") {
				newFrameIndex = [i]
			}
		}
	}
		
        if (document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[newFrameIndex].children[0].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[0]) {
            a = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[newFrameIndex].children[0].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[0].textContent
        } 
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if (document.getElementById('languageAF').innerHTML == "Русский") {
            if (cyrillicPattern.test(a[0]) && a[0] != "Неизвестный" && document.getElementById('msg1').innerHTML == "Доработать")
                txt = "Здравствуйте, " + a[0] + "!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            else
                txt = "Здравствуйте!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
        } else
            txt = "Hello, " + a[0] + "!" + '\r\n' + "Please wait a few minutes."

        if (txt == "Hello, " + a[0] + "!" + '\r\n' + "Please wait a few minutes.")
            sendAnswerTemplate2(txt)
        else
            sendAnswerTemplate2(txt)
        return
    }

    if (butName == '🖕Отказ' && document.getElementById('AF_Refuseformnew').style.display == 'none') // если кнопка отказ открывает форму отказа и если повторно нажали не закрываем форму
        document.getElementById('otkaz').click();

    if (((butName == '🤬Негатив ОС') || (butName == '🖼Нет изобр в ДЗ ЛК') || (butName == '💨Сброс ответов ДЗ ЛК') || (butName == '🔇Звук ответов ЛК') || (butName == '🖥Размер видео') || butName == ('🖼📱Нет изобр ДЗ в МП')) && document.getElementById('AF_Smartroomform').style.display == 'none')
        document.getElementById('smartroomform').click();

    msgFromTable(butName)

    // start of counter of pressed key script то есть при нажатии на кнопку с шаблоном передает в гугл таблицу ин6формацию какая кнопка была нажата и там уже др скрипты считают сколько  раз и сортируют
}

function servFromDoc(butName) { // отправка комента и сообщение со стораницы серверные
    but = butName
    let chatthemevalue
    msgFromTable(but) // вызов функции отправки сообщения
    if (document.getElementById('avariyalink').value !== null) { // проверка есть ли значение в поле ссылки
        let linktostatsend = document.getElementById('avariyalink').value.trim()
        sendComment(linktostatsend); // вызов функции отправки комента
        fetch("https://skyeng.autofaq.ai/api/conversation/" + document.URL.split('/')[5] + "/payload", { //записываем ссылку в поле "Ссылка на jira"
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"conversationId\":\"${splitter[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + linktostatsend + "\"}]}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                })
    } 
    if (document.getElementById('avariyatema').children[0].selected == false) {
        for (let i = 0; i < document.getElementById('avariyatema').children.length; i++) {
            if (document.getElementById('avariyatema').children[i].selected == true)
                chatthemevalue = encodeURIComponent(document.getElementById('avariyatema').children[i].value)
			     newTag(chatthemevalue)
        }
    }   
}

function getText() { // функция обновления текста с шаблонов из документа
    const app = scriptAdr;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const r = JSON.parse(xhr.responseText);
                const result = r["result"];
                table = result;
                console.log('Updated templates');
            } catch (e) {
                console.log(e);
            } finally {
                refreshTemplates();
            }
        }
    };
    xhr.send();
}

async function getInfo(flag1 = 1) { //функция получения инфо о чате и сервис айди

			let newFrameIndex;
	let tes1 = document.getElementsByTagName('iframe')
	
	if (tes1.length !=0) {
		tes1 = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1]	
		for (let i=0;i<tes1.children.length;i++) {
			if (tes1.children[i].id == "__next") {
				newFrameIndex = [i]
			}
		}
	}

let b = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[newFrameIndex].children[0].children[0].children[1].children[0].children[0].children[1].children

let activeConvId;
for (let i=0;i<b.length;i++) {
    if (b[i].getAttribute('aria-selected') == 'true') {
        activeConvId = b[i].getAttribute('data-conv-id')
        console.log('yes')
    } 
}


    var adr1 = activeConvId
	var adr = "https://skyeng.autofaq.ai/tickets/assigned/" + activeConvId
    var sessionId = ""
    for (let i = 0; i < chatsArray.length; i++) {
        if (chatsArray[i].id == adr1) {
            sessionId = chatsArray[i].sessionId
            return [adr, adr1, sessionId]
        }
    }
    if (adr1 == undefined)
        adr1 = ""
    if (document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/" + adr1)
            .then(response => response.json())
            .then(result => { sessionId = result.sessionId; chatsArray.push(result); localStorage.setItem('serviceIdGlob', result.serviceId) });
    }
    return [adr, adr1, sessionId]
}

function addTimer() { //функция добавления таймера при ответе оператора
    tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
    if (tm.childNodes[0].childNodes[2] === undefined) {
        let serv = document.createElement('div')
        let serv2 = document.createElement('div')
        tm.childNodes[0].appendChild(serv)
        tm.childNodes[1].appendChild(serv2)
        tm.childNodes[0].childNodes[2].innerHTML = localStorage.getItem('aclstime') + ":00"
        let d = new Date()
        tmrs[idk] = [localStorage.getItem('aclstime') + ":00", tm.childNodes[1].childNodes[0].textContent, 1, number(d), ""]
        idk++
    }
}

function addTimers() { // еще функция тоже добавления таймеров
    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    let d = new Date()
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        btns.childNodes[k]
        nm = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
        flag = 0
        for (i = 0; i < idk; i++) {
            name = tmrs[i][1]
            if (nm == name) {
                flag = 1
                break
            }
        }
        if (flag == 0)
            tmrs[idk++] = [localStorage.getItem('aclstime') + ":00", nm, 1, Number(d), ""]

        k++
    }

    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined) {
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].appendChild(document.createElement('div'))
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].appendChild(document.createElement('div'))
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.backgroundColor = 'red'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.color = 'white'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.textAlign = 'center'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.fontWeight = 'bold'
        }
        k++
    }
}

//Test function of integration

/* function fillFields(flag, priorityValue, priorityText, departmentValue, departmentText, text) {
			
			let idshechkaUsera;
			let idshechkaUslugi;
			let idshechkaObrativshegosya;
			let usertypecheck;
			let sidebarUserInfo = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].children[0].children[0].children[4].children[0].children[0].children
			
			if (flag == "flagCritical") {
			
				for (let i=0; i <sidebarUserInfo.length;i++) {
					
					if (sidebarUserInfo[i].children[0].children[0].textContent == "id") {
						idshechkaObrativshegosya = sidebarUserInfo[i].children[0].children[1].textContent
						console.log(sidebarUserInfo[i].children[0].children[1].textContent)
					}
					
					if (sidebarUserInfo[i].children[0].children[0].textContent == "nextClass-studentId") {
						idshechkaUsera = sidebarUserInfo[i].children[0].children[1].textContent
						console.log(idshechkaUsera)
					}
					
					
					if (sidebarUserInfo[i].children[0].children[0].textContent == "nextClass-educationServiceId") {
						idshechkaUslugi = sidebarUserInfo[i].children[0].children[1].textContent
						console.log(sidebarUserInfo[i].children[0].children[1].textContent)
					}
				}
				
				if (idshechkaUsera != undefined) {
					usertypecheck = "teacher"
				} else usertypecheck = "nonTeacher"
			
			} else if (flag == "flagHigh") {
			
				for (let i=0; i <sidebarUserInfo.length;i++) {
					if (sidebarUserInfo[i].children[0].children[0].textContent == "id") {
						idshechkaUsera = sidebarUserInfo[i].children[0].children[1].textContent
						console.log(sidebarUserInfo[i].children[0].children[1].textContent)
					}
					
                        idshechkaUslugi = ''
				}
			
			}
			
		for (let i = 0; i < newFrontend.length; i++) {
		  console.log(i);
		  
		  let currentElement = newFrontend[i];
		  
		  if (
			currentElement.children[0] !== undefined &&
			currentElement.children[0].children[0] !== undefined &&
			currentElement.children[0].children[0].children[1] !== undefined &&
			currentElement.children[0].children[0].children[1].children[0] !== undefined &&
			currentElement.children[0].children[0].children[1].children[0].children[1] !== undefined
		  ) {
			let tempura = currentElement.children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children;

			for (let j = 0; j < tempura.length; j++) {
			  if (tempura[j].children[0] !== undefined && tempura[j].children[0].innerText === "UserId*") {
				  if (usertypecheck == "teacher") {
					  tempura[j].children[1].children[0].children[0].value = idshechkaUsera;
				  } else {
					  tempura[j].children[1].children[0].children[0].value = idshechkaObrativshegosya;
				  }
				  
				console.log("Done on index: " + i);
			  } else if (tempura[j].children[0] !== undefined && tempura[j].children[0].innerText === "Комментарий") {
				tempura[j].children[1].children[0].children[0].value = text
			  }
			}
		  }
		}
		
		for (let g=0; g<newFrontend.length;g++) {
			if(newFrontend[g].innerText.split('\n')[0] == "Создать задачу") { 
		 		newFrontend[g].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].setAttribute('value', priorityValue)  
				newFrontend[g].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0].setAttribute('value', priorityText) 
				newFrontend[g].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[1].children[0].setAttribute('value',departmentText)
				newFrontend[g].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].setAttribute('value', departmentValue)
				newFrontend[g].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[2].children[1].children[0].children[0].setAttribute('value',idshechkaUslugi)
			}
		 }		
		 
		 console.log(this.textContent)

}

let newFrontend;
function integrateBtnsToTask() {
		document.getElementsByTagName('iframe')[0].contentDocument.designMode = "on"
	    newFrontend = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children

		for (let g=0; g<newFrontend.length;g++) {
		 if(newFrontend[g].innerText.split('\n')[0] == "Создать задачу") {
		 
		 if (newFrontend[g].children[0].children[0].children[1].children[0].children.length == 2) {
			let dopPanel = document.createElement('div')
		dopPanel.style = 'position:absolute; top:180px; left:-75px; width: 70px;'
		newFrontend[g].children[0].children[0].children[1].children[0].appendChild(dopPanel)

		let copyTeacherId = document.createElement('button')
		copyTeacherId.textContent = "🔴👽📞👨‍🎓"
			copyTeacherId.style = "width: 70px; height: 70px; margin-bottom:4px; font-size: 20px; cursor: pointer; border-radius: 50%; z-index:99999; background:#768d87; border:3px solid #ff4f4f";
			copyTeacherId.onclick = function () {
				fillFields("flagCritical", "highest", "Критический", "tech_support_outgoing_crm2", "Техподдержка исход crm2", "Проверил связь с П. Все ок. Свяжитесь с У!")
				console.log('clicked alien')
			}
		dopPanel.appendChild(copyTeacherId)
		let copyStudentId = document.createElement('button')
		copyStudentId.textContent = "🔴👨‍🎓📞👽"
			copyStudentId.style = "width: 70px; height: 70px; margin-bottom:4px; font-size: 20px; cursor: pointer; border-radius: 50%; z-index:99999; background:#768d87; border:3px solid #ff4f4f";
			copyStudentId.onclick = function () {
				fillFields("flagCritical", "highest", "Критический", "tech_support_outgoing_crm2", "Техподдержка исход crm2", "Проверил связь с У. Все ок. Свяжитесь с П!")
				console.log('clicked human')
			}
		dopPanel.appendChild(copyStudentId)
		let copyServiceId = document.createElement('button')
		copyServiceId.textContent = "📅 2ЛТП"
			copyServiceId.style = "width: 70px; height: 70px; margin-bottom:4px; font-size: 20px; cursor: pointer; border-radius: 50%; z-index:99999; background:#768d87; border:3px solid #54c855";
			copyServiceId.onclick = function () {
				fillFields("flagHigh", "high", "Высокий", "tech_support_second_line_crm2", "Техподдержка 2-я линия crm2", "Дата и время календаря:")
				console.log('clicked calendar')
			}
		dopPanel.appendChild(copyServiceId)
		let sendToTC = document.createElement('button')
		sendToTC.textContent = "👽🔀TC"
			sendToTC.style = "width: 70px; height: 70px; margin-bottom:4px; font-size: 20px; cursor: pointer; border-radius: 50%; z-index:99999; background:#768d87; border:3px solid #54c855";
			sendToTC.onclick = function () {
				fillFields("flagHigh", "high", "Высокий", "teachers_care_crm", "Teachers Care crm2", "")
				console.log('clicked send to TC')
			}
		dopPanel.appendChild(sendToTC)
		let studentNotResp = document.createElement('button')
		studentNotResp.textContent = "🔴👽📞🚷"
			studentNotResp.style = "width: 70px; height: 70px; margin-bottom:4px; font-size: 20px; cursor: pointer; border-radius: 50%; z-index:99999; background:#768d87; border:3px solid #ff4f4f";
			studentNotResp.onclick = function () {
				fillFields("flagCritical", "highest", "Критический", "tech_support_outgoing_crm2", "Техподдержка исход crm2", "Неполадка со стороны П. в чате н.о. Пожалуйста, свяжитесь с П")
				console.log('Teacher not responding')
			}
		dopPanel.appendChild(studentNotResp)
		let teacherNotResp = document.createElement('button')
		teacherNotResp.textContent = "🔴👨‍🎓📞🚷"
			teacherNotResp.style = "width: 70px; height: 70px; margin-bottom:4px; font-size: 20px; cursor: pointer; border-radius: 50%; z-index:99999; background:#768d87; border:3px solid #ff4f4f";
			teacherNotResp.onclick = function () {
				fillFields("flagCritical", "highest", "Критический", "tech_support_outgoing_crm2", "Техподдержка исход crm2", "Неполадка со стороны У. в чате н.о. Пожалуйста, свяжитесь с У")
				console.log('Student not responding')
			}
		dopPanel.appendChild(teacherNotResp)
		 }

		 }
		}
}

    setInterval(integrateBtnsToTask, 1000) */
	

//End of test function of integration

let perechen;
function refreshTemplates() { // функция обновляет шаблоны которые загружены были с гугл таблицы и сформированы их в table
    setInterval(function () {
        phone = SearchinAFnewUI("phone");
        email = SearchinAFnewUI("email");
        
        if (document.getElementById('phone_tr')) {
            if (phone === "-" || phone === "") {
                document.getElementById('phone_tr').placeholder = "Телефон";
            } else {
                document.getElementById('phone_tr').placeholder = phone;
            }
        }
        
        if (document.getElementById('email_tr')) {
            if (email === "-" || email === "") {
                document.getElementById('email_tr').placeholder = "Почта";
            } else {
                document.getElementById('email_tr').placeholder = email;
            }
        }
    }, 1000);
      
    templatesAF = []
    while (document.getElementById('pages').children[0] != undefined)
        document.getElementById('pages').children[0].remove()
    for (i = 0; document.getElementById(i + 'page') != undefined; i++)
        document.getElementById(i + 'page').remove()
    while (document.getElementById('addTmp').children[0].children[0] != undefined)
        document.getElementById('addTmp').children[0].children[0].remove()
    countOfStr = 0
    countOfPages = 0
    pageName = ""
    addTmpFlag = 0
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    console.log(table)
    for (i = 0; i < table.length; i++) {
        c = table[i]
        switch (c[0]) {
            case '':
                addTmpFlag = 0
                countOfStr++
                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break

            case 'Additional templates':
                addTmpFlag = 1
                break
            case 'Страница':
                var newPageBut = document.createElement('button')
                newPageBut.textContent = c[1]
                pageType = c[2]
                newPageBut.style.marginRight = '4px'
                newPageBut.setAttribute('onclick', 'pageClick(this.id)')
                newPageBut.id = countOfPages + '_page_button'
                b.childNodes[3].appendChild(newPageBut)

                var newPage = document.createElement('div')
                newPage.id = countOfPages + 'page'
                b.appendChild(newPage)

                countOfPages++

                countOfStr = 1

                if (pageType == "Серверные") { // дорисоква инпута для ссылки на серверные
                    var newDiv = document.createElement('div')
                    newDiv.id = countOfPages + "page_" + countOfStr + "str"
                    newDiv.style.margin = "5px"

                    var newInputAlink = document.createElement('input')
                    newInputAlink.id = 'avariyalink'
                    newInputAlink.placeholder = 'Ссылка на трэд или Jira северных'
                    newInputAlink.autocomplete = 'off'
                    newInputAlink.type = 'text'
                    newInputAlink.style = 'text-align: center; width: 300px; color: black; margin-left: 7px'

                    newDiv.appendChild(newInputAlink)

                    var newbtnclrlink = document.createElement('button')
                    newbtnclrlink.textContent = "🧹"
                    newbtnclrlink.title = "Очищает поле задачи серверных"
                    newbtnclrlink.onclick = function () {document.getElementById('avariyalink').value = ""}
                    
                    newDiv.appendChild(newbtnclrlink)

                    var newSelectAThemes = document.createElement('select')                    
                    newSelectAThemes.id = 'avariyatema'
                    newSelectAThemes.style = 'text-align: center; width: 300px; height: 26px; color: black; margin-left: 7px; margin-top: 5px'
                    newSelectAThemes.type = 'text'

                    var newthemeoption = document.createElement('option')
                    newthemeoption.text = "Выбери тематику для серверных"
                    newthemeoption.selected = true
                    newthemeoption.disabled = true
                    newthemeoption.value = "thenenotselect"
                    newthemeoption.style = "background-color:orange; color:white;"
                    newSelectAThemes.add(newthemeoption)
										
					///
										
					async function getAvariaThemes() {
					let objSelAvariaThema = document.getElementById("avariyatema");
					let avariatemacontainer;
					let themesfromdoc;
                    if (objSelAvariaThema && objSelAvariaThema.children.length == 1) {
						clearInterval(getTms)
						console.log("Test true")

                        themesfromdoc = 'https://script.google.com/macros/s/AKfycbxNjuQ7EbZZkLEfC1_aSoK4ncsF0W0XSkjYttCj2nQ23BBzMEmDq-vqJL3MvwJk9Pnm_g/exec'
                        await fetch(themesfromdoc).then(r => r.json()).then(r => avariatemadata = r)
                        avariatemacontainer = avariatemadata.result;
                        console.log(avariatemadata.result) //получим список проблем

                        for (let i = 0; i < avariatemacontainer.length; i++) {
                            addOption(objSelAvariaThema, `${avariatemacontainer[i][3]}`, `${avariatemacontainer[i][4]}`) // переиндексацию нужно будет сделать
                       }

                    } else {
					   console.log('Test false')
                    }
					}
				
					let getTms = setInterval(getAvariaThemes, 4000)
					
					///

                    newDiv.appendChild(newSelectAThemes)
                    
                    var newbtnclrtheme = document.createElement('button')
                    newbtnclrtheme.textContent = "🧹"
                    newbtnclrtheme.title = "Очищает поле тематики серверных"
                    newbtnclrtheme.onclick = function () {document.getElementById('avariyatema').children[0].selected = true}
                    
                    newDiv.appendChild(newbtnclrtheme)

                    b.lastElementChild.appendChild(newDiv)
                    countOfStr++
                }

                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break
            default:
                switch (pageType) {
                    case 'Баги':
                        var newString = document.createElement('p')
                        newString.style.color = 'white'
                        newString.style.margin = '0 0 5px 0'
                        newString.textContent = c[0]
                        for (j = 0; j < c[1]; j++) {
                            var newBut = document.createElement('button')
                            newBut.style.width = '20px'
                            newBut.style.marginRight = '4px'
                            newBut.id = countOfStr + 'str' + (j + 1)
                            newBut.textContent = (j + 1)
                            newBut.setAttribute('onclick', 'bagPageButtons(this.id)')
                            newString.appendChild(newBut)
                        }
                        countOfStr++
                        b.lastElementChild.lastElementChild.appendChild(newString)
                        break
                    case 'Шаблоны':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'buttonsFromDoc(this.textContent)')
                        if (newBut.textContent == 'Урок NS')
                            newBut.id = "NS"
                        if (newBut.textContent == 'ус+брауз (У)')
                            newBut.textContent = "ус+брауз"
                        if (newBut.textContent == 'ус+брауз (П)')
                            continue
                        if (addTmpFlag == 0)
                            b.lastElementChild.lastElementChild.appendChild(newBut)
                        else {
                            newBut.style.marginTop = '4px'
                            document.getElementById('addTmp').children[0].appendChild(newBut)
                        }
                        break
                    case 'Переводы':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Серверные': // обработка нажатия на кнопку на странице серверные
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'servFromDoc(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'ТемыМоб':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темыadd':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темы':
                        var newBut = document.createElement('button')
                        newBut.textContent = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.textContent)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    default:
                        break
                }
                break
        }
    } document.getElementById('0page').ondblclick = function () {
        if (document.getElementById('addTmp').style.display == 'none') {
            document.getElementById('addTmp').style.display = '';
        }
        else
            document.getElementById('addTmp').style.display = 'none';
    }
    document.getElementById('0_page_button').click()
}

function tagToChat(btnName) { // функция отправляет тематику в чат, список тематик хранится в спец доке где шаблоны
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            newTag(table[l][1])
            return
        }
    }
}

function newTag(valueId) {
    const pathname = document.location.pathname.split('/');
    let chatId;
	
	let newFrameIndex;
	let tes1 = document.getElementsByTagName('iframe')
	
	if (tes1.length !=0) {
		tes1 = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1]	
		for (let i=0;i<tes1.children.length;i++) {
			if (tes1.children[i].id == "__next") {
				newFrameIndex = [i]
			}
		}
	}
	
	let b = document.getElementsByTagName('iframe')[0].contentDocument.children[0].children[1].children[newFrameIndex].children[0].children[0].children[1].children[0].children[0].children[1].children

	let activeConvId;
	for (let i=0;i<b.length;i++) {
		if (b[i].getAttribute('aria-selected') == 'true') {
			activeConvId = b[i].getAttribute('data-conv-id')
			console.log('yes')
		} else console.log('no')
	}

    if (window.location.href.indexOf('skyeng.autofaq.ai/logs') !== -1) {
        chatId = pathname[2];
    } else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1) {
        chatId = activeConvId
    } else {
        const panel = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0];
        chatId = panel.children[0].children[0].children[0].textContent.split(' ')[1];
    }

    fetch(`https://skyeng.autofaq.ai/api/conversation/${chatId}/payload`, {
        headers: {
            'content-type': 'application/json',
        },
        body: `{"conversationId":"${chatId}","elements":[{"name":"topicId","value":"${valueId}"}]}`,
        method: 'POST',
        credentials: 'include',
    });
}

function msgFromTable(btnName) { //шаблоны, тематики. теги с таблицы получает и выставляет
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            tempindex = [l];
            if (table[l][8] == undefined || table[l][8] == null || table[l][8] == " " || table[l][8] == "") {
                console.log("Не значения тематики")
            } else {
                newTag(table[l][8])
            }

            setTimeout(() => {
                if (table[tempindex][9] == undefined || table[tempindex][9] == null || table[tempindex][9] == " " || table[tempindex][9] == "") {
                    console.log("Нет значения тегов")
                } else {
                    newTags(table[tempindex][9])
                }
            }, 1000)

            if (document.getElementById('languageAF').innerHTML == "Русский") {
                if (table[l][1] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][2])
                }
                if (table[l][1] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][2]))
                }
                if (table[l][1] == "Шаблон") {
                    sendAnswerTemplate(table[l][2], table[l][3])
                }
                if (table[l][1].indexOf("Рандом") != -1) {
                    var counttmpl = table[l][1][7]
                    var newL = Math.floor(Math.random() * (counttmpl))
                    let splittedarr = table[l][2 + newL].split('$')
                    console.log(splittedarr)
                    if (splittedarr[0] == "Текст")
                        sendAnswer(transfPageButtons(splittedarr[1]))
                    else if (splittedarr[0] == "Шаблон") {
                        sendAnswerTemplate(splittedarr[1], splittedarr[1])
                    } else {
                        document.getElementById('inp').value = "Шаблон  указан не верно, повторите попытку еще раз!"
                    }

                }

                break
            } else if (table[l][1].indexOf("Рандом") != -1) {
                var counttmpleng = table[l][1][9]
                if (counttmpleng > 0) {
                    var newLeng = Math.floor(Math.random() * (counttmpleng))
                    let splittedarreng = table[l][5 + newLeng].split('$')
                    console.log(splittedarreng)
                    if (splittedarreng[0] == "Текст") {
                        sendAnswer(splittedarreng[1])
                    } else if (splittedarreng[0] == "Шаблон") {
                        sendAnswerTemplate(splittedarreng[1], splittedarreng[1])
                    } else {
                        document.getElementById('inp').value = "Шаблон  указан не верно, повторите попытку еще раз!"
                    }
                } else {
                    document.getElementById('inp').value = "Нет английского варианта шаблонов"
                }
            } else if (table[l][4] == "") {
                document.getElementById('inp').value = "Нет английского варианта шаблона"
            } else {
                if (table[l][5] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][6])
                }
                if (table[l][5] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][6]))
                }
                if (table[l][5] == "Шаблон") {
                    sendAnswerTemplate(table[l][6], table[l][7])
                }
                break
            }
        }
    }
}

async function loadTemplates(template, word) { //загрузка шаблонов с дока
    if (localStorage.getItem('tpflag') == 'ТП') {
        return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[121286, 119638, 121385, 121300, 119843, 118980, 121692, 121386, 119636, 119649, 121381, 119841, 120181, 119646, 121388, 121384, 121387, 119844, 119025]}",
            "method": "POST",
        })
            .then(response => response.json())
            .then(result => {
                var documentId = ""
                var serviceId = ""
                var queryId = ""
                var AFsessionId = ""
                var tmpText = ""
                var title = ""
                var accuracy = ""
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title == template) {
                        var b = result[i]
                        documentId = b.documentId
                        serviceId = b.serviceId
                        queryId = b.queryId
                        AFsessionId = b.sessionId
                        tmpText = b.text
                        tmpText = tmpText.split("<br>↵").join('\n')
                        tmpText = tmpText.split("&nbsp;").join(' ')
                        tmpText = tmpText.split("<br />").join('\n')
                        tmpText = tmpText.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
                        tmpText = tmpText.replace(/<\/?[^>]+>/g, '')
                        tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
                        title = b.title
                        title = title.split("\"").join("\\\"")
                        accuracy = b.accuracy

                        templatesAF.push([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                        return ([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                    }
                }
            })
    } else if (localStorage.getItem('tpflag') == 'ТПPrem') {
        return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[121533, 121775, 121527, 121531, 121831]}",
            "method": "POST",
        })
            .then(response => response.json())
            .then(result => {
                var documentId = ""
                var serviceId = ""
                var queryId = ""
                var AFsessionId = ""
                var tmpText = ""
                var title = ""
                var accuracy = ""
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title == template) {
                        var b = result[i]
                        documentId = b.documentId
                        serviceId = b.serviceId
                        queryId = b.queryId
                        AFsessionId = b.sessionId
                        tmpText = b.text
                        tmpText = tmpText.split("<br>↵").join('\n')
                        tmpText = tmpText.split("&nbsp;").join(' ')
                        tmpText = tmpText.split("<br />").join('\n')
                        tmpText = tmpText.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
                        tmpText = tmpText.replace(/<\/?[^>]+>/g, '')
                        tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
                        title = b.title
                        title = title.split("\"").join("\\\"")
                        accuracy = b.accuracy

                        templatesAF.push([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                        return ([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                    }
                }
            })
    }

}

async function sendAnswerTemplate2(word, flag = 0) { //функция отправки шаблона 2
    var tmpTxt = ""
    var adr = `https://skyeng.autofaq.ai/tickets/assigned/`
    if (word.length < 50)
        try {
            a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
                "headers": {
                    "content-type": "application/json",
                },
                "referrer": adr,
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "{\"query\":\"" + word + "\",\"answersLimit\":25,\"autoFaqServiceIds\":[121388, 121384]}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(a => b = a.json()).then(result => result.forEach(k => {
                if (k.title == word)
                    tmpTxt = k.text
            }))
            tmpTxt = tmpTxt.split("<br>↵").join('\n')
            tmpTxt = tmpTxt.split("&nbsp;").join(' ')
            tmpTxt = tmpTxt.split("<br />").join('\n')
            tmpTxt = tmpTxt.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
            tmpTxt = tmpTxt.replace(/<\/?[^>]+>/g, '')
            tmpTxt = tmpTxt.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
        } catch (e) { }
    if (tmpTxt == "")
        tmpTxt = word
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag == 0) {
        document.getElementById('inp').value = tmpTxt
        template_flag = 1
        template_flag2 = 1
    } else {
        tmpTxt = tmpTxt.split("\"").join("\\\"")
        tmpTxt2 = tmpTxt.split('\n')
        tmpTxt3 = ""
        tmpTxt2.forEach(el => tmpTxt3 += "<p>" + el + "</p>\\n")
        tmpTxt = tmpTxt3
        tmpTxt = tmpTxt.split('<p></p>').join("<p><br></p>")
        tmpTxt = tmpTxt.substr(0, tmpTxt.length - 2)
        var values = await getInfo(0)
        var adr = values[0]; var adr1 = values[1]; var uid = values[2]
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "accept": "*/*",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": adr,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpTxt + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        resetFlags()
        flagggg = 0
    }
}

async function sendAnswerTemplate(template, word, flag = 0, newText = "", flag2 = 0) { // функция отправки шаблона
    var curTemplate
    if (flag == 1) {
        template = template_text
        word = word_text
    }
    for (let i = 0; i < templatesAF.length; i++) {
        if (template == templatesAF[i][0]) {
            curTemplate = templatesAF[i]
            break
        }
    }
    if (curTemplate == undefined)
        curTemplate = await loadTemplates(template, word)
    //addTimer()
    time = localStorage.getItem('aclstime') + ":00"
    var documentId = curTemplate[1]
    var serviceId = curTemplate[2]
    var queryId = curTemplate[3]
    var AFsessionId = curTemplate[4]
    var tmpText = transfPageButtons(curTemplate[5])
    var title = curTemplate[6]
    var accuracy = curTemplate[7]
    var values = await getInfo(0)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag2 == 0) {
        document.getElementById('inp').value = tmpText
        template_text = template
        word_text = word
        template_flag = 1
    }
    else if (tmpText == "")
        console.log('Шаблон не найден')
    else {
        if (flag == 1) {
            tmpText = newText
        }
        tmpText = tmpText.split("\"").join("\\\"")
        txt2 = tmpText.split('\n')
        txt3 = ""
        txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
        tmpText = txt3
        tmpText = tmpText.split('<p></p>').join("<p><br></p>")
        tmpText = tmpText.substr(0, tmpText.length - 2)

        resetFlags()
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZ3ivsA3aU80QEBST",
            },
            "body": "------WebKitFormBoundaryZ3ivsA3aU80QEBST\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpText + "\",\"ext\":null,\"files\":[],\"suggestedAnswerDocId\":" + documentId + ",\"autoFaqServiceId\":" + serviceId + ",\"autoFaqSessionId\":\"" + AFsessionId + "\",\"autoFaqQueryId\":\"" + queryId + "\",\"autoFaqTitle\":\"" + title + "\",\"autoFaqQuery\":\"" + word + "\",\"autoFaqAccuracy\":" + accuracy + "}\r\n------WebKitFormBoundaryZ3ivsA3aU80QEBST--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    }
}

async function sendAnswer(txt, flag = 1) { //функция отправки ответа
    //addTimer()
    var values = await getInfo(flag)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    var txt2 = txt.split('\n')
    var txt3 = ""
    txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
    txt3 = txt3.split("\"").join("\\\"")
    txt3 = txt3.split('<p></p>').join("<p><br></p>")
    txt3 = txt3.substr(0, txt3.length - 2)
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag) {
        resetFlags()
        document.getElementById('inp').value = txt
    }
    else {
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
            },
            "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
            "method": "POST",
            "credentials": "include"
        });
        resetFlags()
    }
}

// конец блока для работы с шаблонами из гугл таблиц и в целом отправки ответа с обновлением таймера автозакрытия чата