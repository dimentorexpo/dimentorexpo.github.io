var win_suggest =  // описание элементов окна предложений
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="sug_form_main">
                            <button title="скрывает меню" id="hideMeSugForm" style="width:50px; background: #228B22;">hide</button>
                            <button title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshchathash" style="width:24px;">♻</button>
							<button title="По нажатию открывает общий док с переданными предложениями" id="getdocsuggestions" style="width:24px;">🗑</button>
							<button id="suggestinstr" style="float:right; margin-right: 5px;" title="Инструкция по этой форме">❓</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="sug_form_box">
                            <input id="operatornamesuggest" placeholder="Представься, пожалуйста" title="Вводим свою фамилию и имя" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
                            <input id="linktochatsuggest" placeholder="Ссылка на предложение (чат)" title="Копируем ссылку на чат" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ЛКУ" resolved=""> ЛКУ</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ЛКП" resolved=""> ЛКП</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Функционал урока" resolved=""> Функционал урока</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ТТ (Расписание)" resolved=""> ТТ (Расписание)</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="РК" resolved=""> РК</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Виджеты (прогресс/часы и т.п.)" resolved=""> Виджеты (прогресс/часы и т.п.)</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Словарь" resolved=""> Словарь</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Чатик" resolved=""> Чатик</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Оплата" resolved=""> Оплата</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skyeng" resolved=""> Мобильное приложение Skyeng</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skyeng Teachers" resolved=""> Мобильное приложение Skyeng Teachers</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart Интерактивная тетрадь" resolved=""> Мобильное приложение Skysmart Интерактивная тетрадь</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart.Родителям" resolved=""> Мобильное приложение Skysmart.Родителям</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart Students" resolved=""> Мобильное приложение Skysmart Students</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skypro" resolved=""> Мобильное приложение Skypro</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Другое" resolved=""> Другое</label>
							<br>
							<input id="otheroptionchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
						</div>
		</span>
						<div>
                            <textarea id="textsuggest" placeholder="Текст предложения" title="Вводим текст предложения" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px"></textarea>
							<br>
							<button title="Отправляет заполненные поля формы в док" id="sendtosuggestdoc" style="width:105px; position: relative; left: 50%; transform: translate(-50%, 0);">Отправить</button>
                        </div>
        </span>
</div>`;

if (localStorage.getItem('winTopSugest') == null) { //начальное положение окна пожеланий и предложений
    localStorage.setItem('winTopSugest', '120');
    localStorage.setItem('winLeftSugest', '295');
}

let wintSugform = document.createElement('div'); // создание окна предложения
document.body.append(wintSugform);
wintSugform.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopSugest') + 'px; left: ' + localStorage.getItem('winLeftSugest') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintSugform.style.display = 'none';
wintSugform.setAttribute('id', 'AF_Sugform');
wintSugform.innerHTML = win_suggest;

var listenerSugform = function (e, a) { // сохранение позиции окна предложения
    wintSugform.style.left = Number(e.clientX - myX15) + "px";
    wintSugform.style.top = Number(e.clientY - myY15) + "px";
    localStorage.setItem('winTopSugest', String(Number(e.clientY - myY15)));
    localStorage.setItem('winLeftSugest', String(Number(e.clientX - myX15)));
};

wintSugform.onmousedown = function (a) { // изменение позиции окна предложения
    if (checkelementtype(a)) {
        window.myX15 = a.layerX;
        window.myY15 = a.layerY;
        document.addEventListener('mousemove', listenerSugform);
    }
}
wintSugform.onmouseup = function () { document.removeEventListener('mousemove', listenerSugform); } // прекращение изменения позиции окна предложения

document.getElementById('AF_Sugform').ondblclick = function (a) { // скрытие окна окна предложений по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_Sugform').style.display = 'none'; }
}

    document.getElementById('suggestinstr').onclick = function () {
        window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-suggestionform%F0%9F%93%9D%D0%9F%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F')
    }

    document.getElementById('hideMeSugForm').onclick = () => { //форма hide
        if (document.getElementById('AF_Sugform').style.display == '')
            document.getElementById('AF_Sugform').style.display = 'none'
    }

    document.getElementById('suggestform').onclick = () => { // открыть форму для предложения и пожеланий
        if (document.getElementById('AF_Sugform').style.display == '') {
            document.getElementById('AF_Sugform').style.display = 'none'
            document.getElementById('idmymenu').style.display = 'none'
        } else {
            document.getElementById('AF_Sugform').style.display = ''
            document.getElementById('idmymenu').style.display = 'none'

            let topiclisttgcls = document.getElementsByName('topicofsuggest')

            for (let i = 0; i < topiclisttgcls.length; i++) {
                topiclisttgcls[i].onclick = () => {
                    if (topiclisttgcls[i].checked && topiclisttgcls[i].value == 'Другое') {

                        document.getElementById('otheroptionchecked').classList.remove('otherfieldoff')
                        document.getElementById('otheroptionchecked').classList.add('otherfieldon')
                        document.getElementById('otheroptionchecked').removeAttribute('disabled')

                    } else {
                        document.getElementById('otheroptionchecked').classList.add('otherfieldoff')
                        document.getElementById('otheroptionchecked').classList.remove('otherfieldon')
                        document.getElementById('otheroptionchecked').setAttribute('disabled', 'disabled')
                    }
                }
            }


            document.getElementById('operatornamesuggest').value = afopername.split('-')[1];

            if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                document.getElementById('linktochatsuggest').value = "https://hdi.skyeng.ru/autofaq/conversation/-11/" + document.URL.split('/')[5]

            document.getElementById('refreshchathash').onclick = () => {
                if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                    document.getElementById('linktochatsuggest').value = "https://hdi.skyeng.ru/autofaq/conversation/-11/" + document.URL.split('/')[5]
            }

            document.getElementById('getdocsuggestions').onclick = () => {
                window.open("https://docs.google.com/spreadsheets/d/1bTR1BBwo57H1IOblb4Xkg9irf6jw0QNGzQOgrm_wr-c/edit#gid=706470682")
            }

            document.getElementById('sendtosuggestdoc').onclick = () => {

                let opnamevar = encodeURIComponent(document.getElementById('operatornamesuggest').value)
                let chatlink = document.getElementById('linktochatsuggest').value
                let topiclist = document.getElementsByName('topicofsuggest')
                let checkedtopic;
                let textsuggest = encodeURIComponent(document.getElementById('textsuggest').value)

                for (let i = 0; i < topiclist.length; i++) {
                    if (topiclist[i].checked && topiclist[i].value != 'Другое') {
                        checkedtopic = encodeURIComponent(topiclist[i].value);
                        let body1 = 'entry.1869164503=' + opnamevar + '&entry.1173970301=' + chatlink + '&entry.1369141134=' + checkedtopic + '&entry.2046808006=' + textsuggest

                        let options1 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body1,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options1)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        console.log('Выбрана тема из предложенных')
                        sendComment('https://skr.sh/sEHecwURANZ')
                        document.getElementById('sendtosuggestdoc').innerText = "Отправлено✅"
                        setTimeout(() => {
                            document.getElementById('sendtosuggestdoc').innerText = "Отправить"
                            document.getElementById('AF_Sugform').style.display = 'none'
                        }, 3000)
                    } else if (topiclist[i].checked && topiclist[i].value == 'Другое') {
                        checkedtopic = encodeURIComponent(document.getElementById('otheroptionchecked').value)

                        let body2 = 'entry.1173970301=' + chatlink + '&entry.1369141134.other_option_response=' + checkedtopic + '&entry.1369141134=__other_option__' + '&entry.1869164503=' + opnamevar + '&entry.2046808006=' + textsuggest

                        let options2 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body2,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options2)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        console.log('Выбрана опция Другое')
                        sendComment('https://skr.sh/sEHecwURANZ')
                        document.getElementById('sendtosuggestdoc').innerText = "Отправлено✅"
                        setTimeout(() => {
                            document.getElementById('sendtosuggestdoc').innerText = "Отправить"
                            document.getElementById('AF_Sugform').style.display = 'none'
                        }, 3000)
                    }

                }

                document.getElementById('linktochatsuggest').value = ''
                document.getElementById('otheroptionchecked').value = ''
                document.getElementById('textsuggest').value = ''

            }
        }
    }