var tableth;
var btnthstyls = 'margin-left:2px; width:150px; height: 44px;';
var btnTagstyles = 'margin-left:2px; width:125px; height: 25px;';
var chbxTagstyles = 'margin: 2px; width: 20px;';

var win_Themes =  // описание элементов окна Тематик
    `<div style="display: flex; width: 350px; padding-bottom:15px;">
        <span style="width: 350px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 350;" id="themes_header">
                                <button title="скрывает меню" id="hideMeThemes" style="width:50px; background: #228B22;">hide</button>
								<button id="ClearSmartroomData" title="Очищает выбранные тэги">🧹</button>
								<button id="backtomenu" style="width: 28px; height: 28px; font-size: 14px; display:none">🔙</button>
								<button id="themesinstr" style="float:right;" title="Инструкция по этой форме">❓</button>
                        </div>

						<div>
							<input id="linktojiracoment" placeholder="Ссылка на Jira" title="Введите сюда ссылку на Jira, чтобы по нажатию на ракету добавить ее и в заметки в чат и в поле АФ ссылка на Jira" style="margin-left: 20px; width: 78%; text-align: center; margin-bottom:5px;">
							<button id="linktojirasend" title="Отправить введеную ссылку в комментарий чата и в поле Ссылка на Jira в АФ">🚀</button>
						</div>

						<div id="themes_body" style="margin-left:20px;display:flex; flex-wrap:wrap;">
							<label style="color:bisque; width:300px;text-align: center;border: 1px solid #3e4f55;background: chocolate;border-radius: 10px;font-weight: 700; font-size: 17px; box-shadow: 0px 3px 1px rgb(0 0 0 / 35%); text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); letter-spacing: .5rem;">Темы</label>
							<br>
						</div>

						<div id="tags_body" style="margin-left:20px;display:flex; flex-wrap:wrap;">
							<label style="color: #87ff5e; width:300px;text-align: center;border: 1px solid black;border-radius: 10px;margin-top: 5px;background: darkgray;font-weight: 700; font-size: 17px; box-shadow: 0px 3px 1px rgb(0 0 0 / 35%); text-shadow: 1px 2px 5px rgb(0 0 0 / 55%); letter-spacing: .5rem;">Теги</label>
						</div>
                        <div id="multitag_body" style="margin-left:20px;display:flex; flex-wrap:wrap;">
                            <br>
                            <button id="multitag" style="width: 300px; margin-top:5px;">Мультитег</button>
                        </div>
                </span>
        </span>
</div>`;

if (localStorage.getItem('scriptAdrTH')) {
    localStorage.setItem('scriptAdrTH', 'https://script.google.com/macros/s/AKfycbyVuAqd4ig0IxZl5Laxs4VcYnHJ8CyrFmoTfvQK5vXPFqVa5BCuUpqxTBcgMh0IaQVw/exec')
}

if (localStorage.getItem('winTopThemes') == null) { // начальное положение окна Themes
    localStorage.setItem('winTopThemes', '120');
    localStorage.setItem('winLeftThemes', '295');
}

let wintThemes = document.createElement('div'); // создание окна ServiceDesk
document.body.append(wintThemes);
wintThemes.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopThemes') + 'px; left: ' + localStorage.getItem('winLeftThemes') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintThemes.style.display = 'none';
wintThemes.setAttribute('id', 'AF_Themes');
wintThemes.innerHTML = win_Themes;

var listenerThemes = function (e, a) { // сохранение позиции окна Тематик
    wintThemes.style.left = Number(e.clientX - myX18) + "px";
    wintThemes.style.top = Number(e.clientY - myY18) + "px";
    localStorage.setItem('winTopThemes', String(Number(e.clientY - myY18)));
    localStorage.setItem('winLeftThemes', String(Number(e.clientX - myX18)));
};

wintThemes.onmousedown = function (a) { // изменение позиции окна Тематик
    if (checkelementtype(a)) {
        window.myX18 = a.layerX;
        window.myY18 = a.layerY;
        document.addEventListener('mousemove', listenerThemes);
    }
}
wintThemes.onmouseup = function () { document.removeEventListener('mousemove', listenerThemes); } // прекращение изменения позиции окна Тематик


document.getElementById('AF_Themes').ondblclick = function (a) { // скрытие окна Тематик и тегов по двойному клику
    if (checkelementtype(a)) { document.getElementById('hideMeThemes').click(); }
}

    document.getElementById('hideMeThemes').onclick = function () { // скрытие окна поиска по Jira
        if (document.getElementById('AF_Themes').style.display == '')
            document.getElementById('AF_Themes').style.display = 'none'

        if (document.getElementById('backtomenu').style.display == '')
            document.getElementById('backtomenu').click()
    }
	
	    document.getElementById('themesinstr').onclick = function () {
        window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-themes%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0%D0%A2%D0%B5%D0%BC%D1%8B')
    }

    document.getElementById('themes').onclick = function () {
        if (document.getElementById('AF_Themes').style.display == '')
            document.getElementById('AF_Themes').style.display = 'none'
        else
            document.getElementById('AF_Themes').style.display = ''

        for (let j = 0; j < document.getElementsByName('tagssbtn').length; j++) {
            document.getElementsByName('tagssbtn')[j].onclick = function () {
                if (this.value == 'refusal_of_help') {
                    if (document.getElementById('AF_Refuseformnew').style.display == 'none') {
                        document.getElementById('otkaz').click();
                    }
                } else if (this.value == 'smartroom') {
                    if (document.getElementById('AF_Smartroomform').style.display == 'none') {
                        document.getElementById('smartroomform').click();
                    }
                }
                newTaggg(this.value)
            }
        }

        document.getElementById('ClearSmartroomData').onclick = function () {
            let allcheckboxtags = document.getElementsByName('tagcheck')
            for (let i = 0; i < allcheckboxtags.length; i++) {
                if (allcheckboxtags[i].checked) {
                    allcheckboxtags[i].checked = false;
                }
            }
        }

        document.getElementById('multitag').onclick = function () {
            let allcheckboxtags = document.getElementsByName('tagcheck')
            let alltagsbtns = document.getElementsByName('tagssbtn')
            let tagsvaluesarr = [];
            let chatId = ''
            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
                chatId = document.location.pathname.split('/')[3]
            else
                chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]

            for (let i = 0; i < allcheckboxtags.length; i++) {
                if (allcheckboxtags[i].checked) {
                    tagsvaluesarr.push('\"' + alltagsbtns[i].value + '\"')
                    if (allcheckboxtags[i].value == 'refusal_of_help' && document.getElementById('AF_Refuseformnew').style.display == 'none') {
                        document.getElementById('otkaz').click()
                    }
                    if (allcheckboxtags[i].value == 'smartroom' && document.getElementById('AF_Smartroomform').style.display == 'none') {
                        document.getElementById('smartroomform').click()
                    }
                }
            }
            if (tagsvaluesarr.length > 0) {
                tagsvaluesarr = tagsvaluesarr.join(',')
                console.log("tagsvaluesarr: " + tagsvaluesarr)

                fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[" + tagsvaluesarr + "]}]}",
                    "method": "POST",
                    "credentials": "include"
                });

                for (let i = 0; i < allcheckboxtags.length; i++) {
                    if (allcheckboxtags[i].checked) {
                        allcheckboxtags[i].checked = false;
                    }
                }
            } else alert("Не выбраны чекбоксы, выберите, пожалуйста, 1 или несколько и повторите попытку")
        }

        document.getElementById('linktojirasend').onclick = function () {
            let getval = document.getElementById('linktojiracoment').value;
            if (getval != '') {
                sendComment(getval);
                fetch("https://skyeng.autofaq.ai/api/conversation/" + document.URL.split('/')[5] + "/payload", {
                    "headers": {
                        "content-type": "application/json",
                    },
                    "body": "{\"conversationId\":\"${splitter[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + getval + "\"}]}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                })
                document.getElementById('linktojiracoment').value = "";
            }
        }
    }

    function getTextThemes() { // функция обновления текста для тематик из документа
        const appThemes = localStorage.getItem('scriptAdrTH');
        const xhrThemes = new XMLHttpRequest();
        xhrThemes.open('GET', appThemes);
        xhrThemes.onreadystatechange = function () {
            if (xhrThemes.readyState === 4 && xhrThemes.status === 200) {
                try {
                    const rth = JSON.parse(xhrThemes.responseText);
                    const resultth = rth["result"];
                    tableth = resultth;
                    console.log('Updated themes');
                } catch (e) {
                    console.log(e);
                } finally {
                    refreshThemesBtns();
                }
            }
        };
        xhrThemes.send();
    }
    getTextThemes()

    function refreshThemesBtns() { // функция обновляет тематики которые загружены были с гугл таблицы и сформированы их в tableth

        while (document.getElementById('themes_body').children[2] != undefined) // удаляем кнопки страниц тематик
            document.getElementById('themes_body').children[2].remove()
        while (document.getElementById('tags_body').children[2] != undefined) // удаляем кнопки тегов
            document.getElementById('tags_body').children[2].remove()
        for (i = 0; document.getElementById(i + 'themesbtn') != undefined; i++) // удаляем страницы тематик
            document.getElementById(i + 'themesbtn').remove()
        countOfthStr = 0
        countOfthPages = 0
        addTagFlag = 0
        areaThbtns = document.getElementById('themes_body')
        areaTagbtns = document.getElementById('tags_body')
        console.log(tableth)
        for (i = 0; i < tableth.length; i++) {
            c = tableth[i]
            switch (c[0]) {
                case '':
                    addTagFlag = 0
                    countOfthStr++
                    var newstrth = document.createElement('div')
                    newstrth.style.margin = '5px'
                    newstrth.id = countOfthPages + 'pageth_' + countOfthStr + 'strth'
                    areaThbtns.lastElementChild.appendChild(newstrth)
                    break
    
                case 'Тэги':
                    addTagFlag = 1
                    break
                case 'Темы':
                    var newpagethBut = document.createElement('button')
                    newpagethBut.textContent = c[1]
                    newpagethBut.style = btnthstyls
                    if (c[2] != '') { newpagethBut.title = c[2] } // если есть title добавляем его
                    if (c[3] != '') { newpagethBut.style.fontSize = c[3]+ 'px' } // если указан размер шрифта назначеем его
                    newpagethBut.setAttribute('onclick', 'pagethClick(this.id)')
                    newpagethBut.id = countOfthPages + '_pageth_button'
                    areaThbtns.appendChild(newpagethBut)
    
                    var newpageth = document.createElement('div')
                    newpageth.id = countOfthPages + 'pageth'
                    newpageth.style.display = 'none'
                    areaThbtns.appendChild(newpageth)
    
                    countOfthPages++
    
                    countOfthStr = 1
        
                    var newstrth = document.createElement('div')
                    newstrth.id = countOfthPages + 'pageth_' + countOfthStr + 'strth'
                    areaThbtns.lastElementChild.appendChild(newstrth)
                    break
                default:
                            var newBut = document.createElement('button')
                            newBut.textContent = c[0]
                            newBut.value = c[1]
                            if (c[2] != '') { newBut.title = c[2] } // если есть title добавляем его
                            if (c[3] != '') { newBut.style.fontSize = c[3] + 'px' } // если указан размер шрифта назначеем его
                            if (addTagFlag == 0) {
                                newBut.style = btnthstyls
                                newBut.setAttribute('onclick', 'newTag(this.value)')
                                areaThbtns.lastElementChild.lastElementChild.appendChild(newBut)
                            } else {
                                newBut.name = "tagssbtn"
                                newBut.style = btnTagstyles
                                newBut.setAttribute('onclick', 'newTaggg(this.value)')
                                areaTagbtns.children[0].appendChild(newBut)

                                var newChekB = document.createElement('input')
                                newChekB.type = "checkbox" 
                                newChekB.name= "tagcheck"
                                newChekB.style = chbxTagstyles
                                areaTagbtns.children[1].appendChild(newBut)
                            }
            }
        }
    }

    function pagethClick(pagethId) { // по клику переключает страницы с темами
        areaThbtns = document.getElementById('themes_body')
        pagethId = pagethId.split('_')[0]
        document.getElementById('backtomenu').style.display = ''
        for (i = 0; i < areaThbtns.childElementCount; i++) {
            try {
                document.getElementById(i + 'pageth').style.display = 'none'
                document.getElementById(i + '_pageth_button').style.display = 'none'
            } catch (e) { }
        }
        document.getElementById(pagethId + 'pageth').style.display = ''
    }

    document.getElementById('backtomenu').onclick = function () {
        for (i = 0; i < areaThbtns.childElementCount; i++) {
            try {
                document.getElementById(i + 'pageth').style.display = 'none'
                document.getElementById(i + '_pageth_button').style.display = ''
            } catch (e) { }
        }
    }