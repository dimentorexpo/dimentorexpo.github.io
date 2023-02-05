var tableth;

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
        const appThemes = localStorage.getItem('scriptAdr');
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

    function refreshThemesBtns() { // функция обновляет тематики которые загружены были с гугл таблицы и сформированы их в tableth

        while (document.getElementById('themes_body').children[2] != undefined)
            document.getElementById('themes_body').children[2].remove()
        while (document.getElementById('tags_body').children[2] != undefined)
            document.getElementById('tags_body').children[2].remove()
        for (i = 0; document.getElementById(i + 'themesbtn') != undefined; i++)
            document.getElementById(i + 'themesbtn').remove()
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
                    newPageBut.id = countOfPages + 'page_button'
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
                document.getElementById('set_bar').style.display = 'none'
                document.getElementById('reminder_bar').style.display = 'none'
            }
            else
                document.getElementById('addTmp').style.display = 'none';
        }
        document.getElementById('0page_button').click()
    }