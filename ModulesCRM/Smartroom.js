var win_smartroomform =  // описание элементов окна Мультирум пожелания/баги
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 410px;" id="refuse_form_header">
                            <button class="btnCRM" title="скрывает меню" id="hideMeSmartRoomForm" style="width:50px; background: #228B22;">hide</button>
                            <button class="btnCRM" title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshhashsmartform" style="width:30px;">♻</button>
                            <button class="btnCRM" title="По нажатию очищает поля и сбрасывает в дефолтное состояние формы" id="clearsmartroomform" style="width:30px;">🧹</button>
							<button class="btnCRM" title="Инструкция по этой форме" id="smartroomforminstr" style="float:right">❓</button>
                        </div>

                        <div style="margin: 5px; margin-top: 0px; width: 410px" id="smartroom_form_menu">

							<label style="color:#c4ffd3; padding:5px; font-weight: 600;">Тип клиента</label>
							<br>
							<div style="margin-top:5px; color:bisque;" id = "smartroomuser">
								<input type="radio" id="typestud" name="typetoform" value="Ученик">
								<label for="typestud">Ученик</label>
							    <input type="radio" id="typeteach" name="typetoform" value="Преподаватель">
								<label for="typeteach">Преподаватель</label>
                                <input type="radio" id="typestudprem" name="typetoform" value="Ученик Premium">
								<label for="typestudprem">Ученик Premium</label>
							</div>
							<input id="clientid" placeholder="ID пользователя" autocomplete="off" type="text">
							<br>
							<div style="margin-top:5px; color:#c4ffd3; padding:5px; font-weight: 600;">С чем обратились?</div>
							<div style="margin-top:5px; color:bisque;" id = "smartroomquestion">
								<input type="radio" id="whatobratsugest" name="whatobratform" value="Пожелание по мультирум" checked>
								<label for="whatobratsugest">Пожелание по мультирум</label>
							</div>
							<div style="margin-top:5px; color:#c4ffd3; padding:5px; font-weight: 600;">Категория запроса</div>
								<div>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Персональный трек" resolved=""> Персональный трек</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Домашние задания" resolved=""> Домашние задания</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Функционал на уроке" resolved=""> Функционал на уроке</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Вернуть старую платформу" resolved=""> Вернуть старую платформу</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Интерфейс платформы" resolved=""> Интерфейс платформы</label>
								<br>
								<label class="catsmartroom"><input class="radio" type="radio" name="catsmartroom" value="Другое" resolved=""> Другое</label>
								<br>
								<input id="otheroptionsmartchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							</div>
								<textarea id="fullcomentsmartroom" placeholder="Полный комментарий предложения по улучшению" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>
							<br>
							<button class="btnCRM" title="Отправляет заполненные поля формы в док" id="send2smartroom" style="width:105px; position: relative; left: 50%; margin-top: 5px; transform: translate(-50%, 0);">Отправить</button>
						</div>
				</span>
        </span>
</div>`;

if (localStorage.getItem('winTopSmartroom') == null) { //начальное положение окна Smartroom
    localStorage.setItem('winTopSmartroom', '295');
    localStorage.setItem('winLeftSmartroom', '295');
}

let wintSmartroom = document.createElement('div'); // создание окна Мультирум пожелания/баги
document.body.append(wintSmartroom);
wintSmartroom.style = 'min-height: 25px; width: 420px; background: #464451; top: ' + localStorage.getItem('winTopSmartroom') + 'px; left: ' + localStorage.getItem('winLeftSmartroom') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintSmartroom.style.display = 'none';
wintSmartroom.setAttribute('id', 'AF_Smartroomform');
wintSmartroom.innerHTML = win_smartroomform;

var listenerSmartroom = function (e, a) { // сохранение позиции окна Мультирум пожелания/баги
    wintSmartroom.style.left = Number(e.clientX - myX19) + "px";
    wintSmartroom.style.top = Number(e.clientY - myY19) + "px";
    localStorage.setItem('winTopSmartroom', String(Number(e.clientY - myY19)));
    localStorage.setItem('winLeftSmartroom', String(Number(e.clientX - myX19)));
};

wintSmartroom.onmousedown = function (a) { // изменение позиции окна Мультирум пожелания/баги
    if (checkelementtype(a)) {
        window.myX19 = a.layerX;
        window.myY19 = a.layerY;
        document.addEventListener('mousemove', listenerSmartroom);
    }
}
wintSmartroom.onmouseup = function () { document.removeEventListener('mousemove', listenerSmartroom); } // прекращение изменения позиции окна Мультирум пожелания/баги


document.getElementById('AF_Smartroomform').ondblclick = function (a) { // скрытие окна Мультирум пожелания/баги от помощи по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_Smartroomform').style.display = 'none'; }
}

    document.getElementById('smartroomformCRM').onclick = function () {
        if (document.getElementById('AF_Smartroomform').style.display == '') {
            document.getElementById('AF_Smartroomform').style.display = 'none'
            document.getElementById('idmymenucrm').style.display = 'none'
        } else {
            document.getElementById('AF_Smartroomform').style.display = ''
            document.getElementById('idmymenucrm').style.display = 'none'
        }

        function clearradio() {
            for (let j = 0; j < 3; j++) {
                document.getElementsByName('typetoform')[j].checked = false
            }
            for (let k = 0; k < 6; k++) {
                document.getElementsByName('catsmartroom')[k].checked = false
            }
        }
		
		if (location.pathname.split('/')[4] == 'task')
			document.getElementById('fullcomentsmartroom').value = document.getElementsByTagName('crm-grid')[8].children[0].innerText.replace('Комментарий\n','')
		
		if (document.URL.split('/')[3] == 'persons')
			document.getElementById('clientid').value = document.URL.split('/')[4]

        //
        let catsmartroom = document.getElementsByName('catsmartroom')

        for (let i = 0; i < catsmartroom.length; i++) {
            catsmartroom[i].onclick = () => {
                if (catsmartroom[i].checked && catsmartroom[i].value == 'Другое') {

                    document.getElementById('otheroptionsmartchecked').classList.remove('otherfieldoff')
                    document.getElementById('otheroptionsmartchecked').classList.add('otherfieldon')
                    document.getElementById('otheroptionsmartchecked').removeAttribute('disabled')

                } else {
                    document.getElementById('otheroptionsmartchecked').classList.add('otherfieldoff')
                    document.getElementById('otheroptionsmartchecked').classList.remove('otherfieldon')
                    document.getElementById('otheroptionsmartchecked').setAttribute('disabled', 'disabled')
                }
            }
        }

        //

        document.getElementById('send2smartroom').onclick = function () {

            let checkedclienttype;
            let checkedquestion;
            let alloptions

            let flagemptysmart = 0;

            if (!document.getElementsByName('typetoform')[0].checked && !document.getElementsByName('typetoform')[1].checked && !document.getElementsByName('typetoform')[2].checked) {
                document.getElementById('smartroomuser').style.backgroundColor = 'Coral';
                document.getElementById('smartroomuser').style.color = 'black';
                flagemptysmart = 1;
            } else {
                document.getElementById('smartroomuser').style.backgroundColor = '';
                document.getElementById('smartroomuser').style.color = '#c4ffd3';
            }

            if (document.getElementById('clientid').value.length < 3) {
                document.getElementById('clientid').style.backgroundColor = 'Coral';
                flagemptysmart = 1;
            } else {
                document.getElementById('clientid').style.backgroundColor = '';
            }

            if (!document.getElementsByName('whatobratform')[0].checked && !document.getElementsByName('whatobratform')[1].checked) {
                document.getElementById('smartroomquestion').style.backgroundColor = 'Coral';
                document.getElementById('smartroomquestion').style.color = 'black';
                flagemptysmart = 1;
            } else {
                document.getElementById('smartroomquestion').style.backgroundColor = '';
                document.getElementById('smartroomquestion').style.color = '#c4ffd3';
            }

            if (document.getElementById('fullcomentsmartroom').value.length < 3) {
                document.getElementById('fullcomentsmartroom').style.backgroundColor = 'Coral';
                flagemptysmart = 1;
            } else {
                document.getElementById('fullcomentsmartroom').style.backgroundColor = '';
            }

            if (flagemptysmart == 0) {
                for (let i = 0; i < document.getElementsByName('typetoform').length; i++) {
                    if (document.getElementsByName('typetoform')[i].checked == true)
                        checkedclienttype = document.getElementsByName('typetoform')[i].value;
                }
                checkedquestion = document.getElementsByName('whatobratform')[0].value;

                alloptions = document.getElementsByName('catsmartroom')

                for (let i = 0; i < alloptions.length; i++) {
                    if (alloptions[i].checked && alloptions[i].value != 'Другое') {

                        let body2 = 'entry.466256037=' + encodeURIComponent(checkedclienttype) + '&entry.505070950=' + encodeURIComponent(document.getElementById('clientid').value) + '&entry.876256156=' + encodeURIComponent(checkedquestion) + '&entry.1879097323=' + encodeURIComponent(document.getElementById('fullcomentsmartroom').value) + '&entry.1552539156=' + encodeURIComponent(alloptions[i].value)

                        let options2 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body2,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options2)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScnX8PdboJjcq2hgLmIyHvZoaqKXmgfp-6gGkyFjwJ1JYAK3Q/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        document.getElementById('AF_Smartroomform').style.display = 'none'
                        document.getElementById('clientid').value = ''
                        document.getElementById('fullcomentsmartroom').value = ''
                        clearradio()
                        

                    } else if (alloptions[i].checked && alloptions[i].value == 'Другое') {
                        let body2 = 'entry.466256037=' + encodeURIComponent(checkedclienttype) + '&entry.505070950=' + encodeURIComponent(document.getElementById('clientid').value) + '&entry.876256156=' + encodeURIComponent(checkedquestion) + '&entry.1879097323=' + encodeURIComponent(document.getElementById('fullcomentsmartroom').value) + '&entry.1552539156.other_option_response=' + encodeURIComponent(document.getElementById('otheroptionsmartchecked').value) + '&entry.1552539156=__other_option__'

                        let options2 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body2,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options2)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScnX8PdboJjcq2hgLmIyHvZoaqKXmgfp-6gGkyFjwJ1JYAK3Q/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        document.getElementById('AF_Smartroomform').style.display = 'none'
                        document.getElementById('clientid').value = ''
                        document.getElementById('fullcomentsmartroom').value = ''
                        clearradio()
                        document.getElementById('otheroptionsmartchecked').value = ''

                    }
                }
            }
        }

        document.getElementById('clearsmartroomform').onclick = function () {
            document.getElementById('clientid').value = ''
            document.getElementById('fullcomentsmartroom').value = ''
            document.getElementById('otheroptionsmartchecked').value = ''
            document.getElementById('smartroomuser').style.background = '';
            document.getElementById('clientid').style.background = '';
            document.getElementById('smartroomquestion').style.background = '';
            document.getElementById('fullcomentsmartroom').style.background = '';
            clearradio()
        }

        document.getElementById('smartroomforminstr').onclick = function () {
            window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-smartroom%F0%9F%A6%90Smartroom')
        }

        document.getElementById('hideMeSmartRoomForm').onclick = function () {
            document.getElementById('AF_Smartroomform').style.display = 'none'
            document.getElementById('clientid').value = ''
            document.getElementById('fullcomentsmartroom').value = ''
            clearradio()
        }

        document.getElementById('refreshhashsmartform').onclick = function () {
			if (document.URL.split('/')[3] == 'persons')
				document.getElementById('clientid').value = document.URL.split('/')[4]
			if (location.pathname.split('/')[4] == 'task')
			document.getElementById('fullcomentsmartroom').value = document.getElementsByTagName('crm-grid')[8].children[0].innerText.replace('Комментарий\n','')
			
        }
    }