var win_Chathis =  // описание элементов окна Истории чатов
    `<div style="display: flex; width: 410px;">
        <span style="width: 410px">
			<span style="cursor: default;">
				<div style="margin: 5px; width: 410px;" id="chathisheader">
					<button title="Скрытие меню" id="hideMeChHis" style="width:50px; background: #228B22;">hide</button>
					<button title="Очистка всех полей" id="clearallinfo" style="width:25px;">🧹</button>
					<select style="height:28px; width:260px; text-align:center" id="operatorstp" onchange="findchatsoper()">
							<option selected="" disabled="">Операторы на линии</option>
					</select>
					<button title="Обновляет список активных операторов, их статус, и количества чатов" id="RefrehOperators" style="width:25px;">♻</button>
					<button title="Показывает инеформацию по пользователю из чата, его айди, почту, телефон, характеристики устройства и тп" id="getdatafrchat" style="width:25px;">ℹ</button>
				</div>
				<div style="margin: 5px; width: 410px; display:flex; justify-content:space-evenly;" id="chathismenu">
					<button title="Возвращает на экран просмотра списка чатов" id="back_to_chat_his" style="width:50px; font-size:22px; padding:0;">🔙</button>
					 <input id="chatuserhis" placeholder="ID пользователя" oninput="onlyNumbers(this)" autocomplete="off" type="text" style="text-align: center; width: 130px; color: black; margin-top: 5px">
					 <input id="hashchathis" placeholder="Хеш чата" title="" autocomplete="off" type="text" style="text-align: center; width: 130px; color: black; margin-top: 5px">
					<button title="Находит историю чатов или открывает по хешу чата диалог" id="btn_search_history" style="width:50px;font-size:22px;padding:0;">🔎</button>
				</div>
				<div style="margin-top: 5px; width: 410px;display:flex; justify-content:center;margin-bottom:5px;" id="databoxchathis">
					<button title="Инструкция по этой форме" id="chhisinstr" style="margin-right: 5px;">❓</button>
					<button id="refreshchat" style="width:30px; font-size:16px;" title="Обновляет содержимое окна с чатом, если он активный, чтобы увидеть новые записи">🔄</button>
					<span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">От </span>
					<input type="date" style="color:black; margin-left:5px;  width:115px; text-align:center; " name="StartDataChHis" id="dateFromChHis">
					<span style="color:bisque; margin-top:5px; margin-left:10px; float:right; height:28px;">До </span>
					<input type="date" style="color:black; float:right; margin-left:5px; margin-right:10px; width:115px; text-align:center; " name="EndDataChHis" id="dateToChHis">
					<button style="width:30px;" id="chagetheme" title="Переключается светлую тему ☀ и темную🌛 вывода чата с пользователем">🌛</button>
				</div>
			</span>

				<div style="width: 410px;display:none" id="somechatinfo">
					<span id="usidchat" style="color:bisque; margin-left:10px; margin-top:5px; user-select:none; cursor:pointer" title="При клике копирует сам айдишник">User ID: </span> <span id="placeusid" style="color:bisque; margin-left:5px; margin-top:5px;"></span>
					<button id="startchat" style="margin-left:10px;" title="Начать новый чат с пользователем">💬</button>
					<button id="opencmtbar" style="margin-left:5px;" title="Открыть инструмент добавления комментария к чату (для тех у кого внизу в самом модуле не отображается это поле)">🚧</button>
					<button id="takechat" style="margin-left: 117px; margin-top:5px;" title="Забирает чат и назначает на вас,но некоторые чаты или у других коллег забраться не получится">Забрать</button>
					<br>
					<span id="chid" style="color:bisque; margin-left:10px; margin-top:5px; user-select:none; cursor:pointer" title="При клике копирует ссылку с добавлением HDI">Chat ID: </span> <span id="placechatid" style="color:bisque; margin-left:5px; margin-top:5px;"></span>
					<button id="reassign" title="По нажатию на кнопку переведет чат на сотрудника. Порядок такой: выбираете из списка операторы на линии того, кому желаете перевести, после чего открываете чат по хешу в поле хеш чата вводите его и нажимаете найти, и затем уже после этого жмете на кнопку и скрипт отработает" style="width:45px; margin-left:5px; font-size:16px; margin-top:2px;user-select:none;">🔀</button>
				</div>

			<div id="comentsbar" style="width: 410px; height:55px; position:fixed; top:50vh; right:40vh; background: rgb(70, 68, 81); display:none">
						<textarea id="msgftochatornotes1" style="margin-left: 10px; margin-top: 5px; width: 210px; height: 29px; background: lightgrey;position: absolute; bottom: 12px;"></textarea>
						<button id="sendmsgtochatornotes1" title="В зависимости от опции отправляет текст в чат или заметки" style="margin-left: 5px; margin-top:5px; position:absolute; top 10px; left:220px;">Send</button>
						<input class="radio" type="radio" name="chatornotes1" style="float:right; margin-top:10px;margin-right:5px;" value="Notes" checked="" resolved=""><label style="color:bisque; font-size: 16px;float:right; margin-right:5px;margin-top:10px;">Заметки</label>
						<input class="radio" type="radio" name="chatornotes1" style="float:right;margin-top:10px; margin-right:5px;" value="Chat" resolved=""><label style="color:bisque; font-size: 16px; float:right; margin-top:10px; margin-right:5px;">Чат</label>
						<button id="hidecmtfield" title="скрывает эту менюшку небольшую" style="position:fixed;right:40vh; top:53vh; height:24px; width:25px; padding:0;">&gt;</button>
			</div>

			<div id="infofield" style="color:bisque; margin-left:10px;margin-top:5px width:410px; height:77vh; overflow-x:hidden;">
			</div>

			<div id="bottommenuchhis" style="width: 410px; position:absolute; display:none;">
				<textarea id="msgftochatornotes" style="margin-left: 10px; margin-top: 5px; width: 210px; height: 29px; background: lightgrey;position: absolute; bottom: 2px;"></textarea>
				<button id="sendmsgtochatornotes" title="В зависимости от опции отправляет текст в чат или заметки" style="margin-left: 5px; margin-top:5px; position:absolute; top 10px; left:220px;">Send</button>
				<input class="radio" type="radio" name="chatornotes" style="float:right; margin-top:10px;margin-right:5px;" value="Notes" checked="" resolved=""><label style="color:bisque; font-size: 16px;float:right; margin-right:5px;margin-top:10px;">Заметки</label>
				<input class="radio" type="radio" name="chatornotes" style="float:right;margin-top:10px; margin-right:5px;" value="Chat" resolved=""><label style="color:bisque; font-size: 16px; float:right; margin-top:10px; margin-right:5px;">Чат</label>
			</div>

			<div id="userchatdata" style="display:none; position: fixed; top: 0px; right: 420px; background: rgb(70, 68, 81); color: bisque; width: 365px; height: 400px; max-height: 600px; max-width: 500px; overflow: auto; border: 1px solid; padding: 10px; word-break: break-all;"">

						<div id="datainfoheader">
							<button id="hideuserdatainfo" style="width:50px; background: #228B22;">hide</button>
							<button id="gotocrmhis" style="width:50px;">CRM</button>
						</div>

					<div id="datafield" style="margin-top:5px;text-align:center; font-size:16px;">
					</div>

			</div>
	</span>
</div>`;

if (localStorage.getItem('winTopChatHis') == null) { //начальное положение окна истории чатов
    localStorage.setItem('winTopChatHis', '0');
    localStorage.setItem('winLeftChatHis', '80.6');
}


let wintChatHis = document.createElement('div'); // создание окна работы с историей чата
document.body.append(wintChatHis);
wintChatHis.style = 'min-height: 25px; min-width: 65px; height:100vh; background: rgb(70, 68, 81); top: 0px; right:0px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; overflow:hidden';
wintChatHis.style.display = 'none';
wintChatHis.setAttribute('id', 'AF_ChatHis');
wintChatHis.innerHTML = win_Chathis;

    document.getElementById('hideMeChHis').onclick = () => { //форма hide
        if (document.getElementById('AF_ChatHis').style.display == '') {
            document.getElementById('AF_ChatHis').style.display = 'none'

            document.getElementById('infofield').innerText = ''
            document.getElementById('placeusid').innerText = ''
            document.getElementById('placechatid').innerText = ''
            document.getElementById('somechatinfo').style.display = 'none';
            document.getElementById('bottommenuchhis').style.display = 'none';
            document.getElementById('comentsbar').style.display = 'none';
            document.getElementById('chatuserhis').value = ''
            document.getElementById('hashchathis').value = ''
        }
    }
	
	document.getElementById('clearallinfo').onclick = () => { //кнопка очистки
        document.getElementById('infofield').innerText = ''
        document.getElementById('placeusid').innerText = ''
        document.getElementById('placechatid').innerText = ''
        document.getElementById('somechatinfo').style.display = 'none';
        document.getElementById('bottommenuchhis').style.display = 'none';
        document.getElementById('comentsbar').style.display = 'none';
        document.getElementById('chatuserhis').value = ''
        document.getElementById('hashchathis').value = ''
    }
	
	document.getElementById('chid').onclick = () => { // копирует в буфер айди чата
        copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/' + document.getElementById('placechatid').innerText)
    }

    document.getElementById('usidchat').onclick = () => { //копирует в буфер айди пользователя
        copyToClipboard1(document.getElementById('placeusid').innerText)
    }
	
	document.getElementById('hideuserdatainfo').onclick = () => { // форма hide
        if (document.getElementById('userchatdata').style.display == '')
            document.getElementById('userchatdata').style.display = 'none'
    }
	
	document.getElementById('gotocrmhis').onclick = () => { //открывает СРМ пользователя паари в меню с историей чатов
        let fdata = document.getElementById('datafield').innerHTML
        fdata = fdata.match(/ID:.?\d+/)[0].split(' ')[1]
        window.open(`https://crm2.skyeng.ru/persons/${fdata}`)
    }

	
	function changeviewtheme() { //функция переключения темы в истории чатов на светлую(классическуб в стиле АФ) и темную в зависимости от значения переменной полученной в локалсторедж

    if (localStorage.getItem('theme') == 'light') {
        document.getElementById('chagetheme').innerHTML = '☀'
        document.getElementById('infofield').style.background = "#f5f5f5";

    } else if (localStorage.getItem('theme') == 'dark') {
        document.getElementById('chagetheme').innerHTML = '🌛'
        document.getElementById('infofield').style.background = "#464451";
    }
}

function checkandchangestyle() { //функция проверки и переклоючения стиля при открытии  самого окна с историей чата

    if (localStorage.getItem('theme') == 'light') {

        for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
            document.getElementsByClassName('chatlist')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-date').length; i++) {
            document.getElementsByClassName('answer-bot-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-name').length; i++) {
            document.getElementsByClassName('event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-text').length; i++) {
            document.getElementsByClassName('question-event-text')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-name').length; i++) {
            document.getElementsByClassName('question-event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-container').length; i++) {
            document.getElementsByClassName('event-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-name').length; i++) {
            document.getElementsByClassName('oper-comment-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-container').length; i++) {
            document.getElementsByClassName('oper-comment-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-date').length; i++) {
            document.getElementsByClassName('question-event-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-oper-name').length; i++) {
            document.getElementsByClassName('answer-oper-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-name').length; i++) {
            document.getElementsByClassName('answer-bot-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-operator').length; i++) {
            document.getElementsByClassName('oper-comment-operator')[i].classList.toggle('light')
        }

    } else if (localStorage.getItem('theme') == 'dark') {

        for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
            if (document.getElementsByClassName('chatlist')[i].classList.contains('light'))
                document.getElementsByClassName('chatlist')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-date').length; i++) {
            if (document.getElementsByClassName('answer-bot-date')[i].classList.contains('light'))
                document.getElementsByClassName('answer-bot-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-name').length; i++) {
            if (document.getElementsByClassName('event-name')[i].classList.contains('light'))
                document.getElementsByClassName('event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-text').length; i++) {
            if (document.getElementsByClassName('question-event-text')[i].classList.contains('light'))
                document.getElementsByClassName('question-event-text')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-name').length; i++) {
            if (document.getElementsByClassName('question-event-name')[i].classList.contains('light'))
                document.getElementsByClassName('question-event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-container').length; i++) {
            if (document.getElementsByClassName('event-container')[i].classList.contains('light'))
                document.getElementsByClassName('event-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-name').length; i++) {
            if (document.getElementsByClassName('oper-comment-name')[i].classList.contains('light'))
                document.getElementsByClassName('oper-comment-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-container').length; i++) {
            if (document.getElementsByClassName('oper-comment-container')[i].classList.contains('light'))
                document.getElementsByClassName('oper-comment-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-date').length; i++) {
            if (document.getElementsByClassName('question-event-date')[i].classList.contains('light'))
                document.getElementsByClassName('question-event-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-oper-name').length; i++) {
            if (document.getElementsByClassName('answer-oper-name')[i].classList.contains('light'))
                document.getElementsByClassName('answer-oper-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-name').length; i++) {
            if (document.getElementsByClassName('answer-bot-name')[i].classList.contains('light'))
                document.getElementsByClassName('answer-bot-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-operator').length; i++) {
            if (document.getElementsByClassName('oper-comment-operator')[i].classList.contains('light'))
                document.getElementsByClassName('oper-comment-operator')[i].classList.toggle('light')
        }
    }
}

document.getElementById('chagetheme').onclick = () => { //функция переключения  по кнопке темы в истории чатов на светлую(классическуб в стиле АФ) и темную
    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark')
        document.getElementById('chagetheme').innerHTML = '🌛'
        document.getElementById('infofield').style.background = "#464451";
        checkandchangestyle();
    } else if (localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light')
        document.getElementById('chagetheme').innerHTML = '☀'
        document.getElementById('infofield').style.background = "#f5f5f5";
        checkandchangestyle();
    }
};

    document.getElementById('butChatHistory').onclick = () => { // открывает меню для работы с историей чата по типу кота Омельченко

        if (document.getElementById('AF_ChatHis').style.display == '')
            document.getElementById('AF_ChatHis').style.display = 'none'
        else
            document.getElementById('AF_ChatHis').style.display = ''
        if (document.getElementById('idmymenu') != null && document.getElementById('idmymenu').style.display == '') {
            document.getElementById('idmymenu').style.display = 'none'
        }

        changeviewtheme()

        flagsearch = ''
        let getdateset = new Date()
        let getyearLS = getdateset.getFullYear();
        let getcurmonthLS = (getdateset.getMonth() + 1)
        let todayLS = getdateset.getDate();
        if (getcurmonthLS < 10) {
            getcurmonthLS = "0" + (getdateset.getMonth() + 1)
        } else {
            getcurmonthLS = (getdateset.getMonth() + 1);
        }
        if (getdateset.getDate() < 10 && getcurmonthLS <=10) {
            todayLS = "0" + getdateset.getDate();
            document.getElementById('dateFromChHis').value = getyearLS + "-" + '0' + JSON.stringify(getcurmonthLS - 1) + "-" + "0" + Number(todayLS);
            document.getElementById('dateToChHis').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        } else  if  (getdateset.getDate() < 10 && getcurmonthLS > 10) {
            todayLS = "0" + getdateset.getDate();
            document.getElementById('dateFromChHis').value = getyearLS + "-" + JSON.stringify(getcurmonthLS - 1) + "-" + "0" + Number(todayLS);
            document.getElementById('dateToChHis').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
		} else {
            todayLS = getdateset.getDate();
            document.getElementById('dateFromChHis').value = getyearLS + "-" + '0' + (getcurmonthLS - 1) + "-" + Number(todayLS - 1);
            document.getElementById('dateToChHis').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        }

        let radiobtnsarray = document.getElementsByName('chatornotes')
        let radiobtnsarray1 = document.getElementsByName('chatornotes1')
        let activetechopers = [];
        document.getElementById('RefrehOperators').onclick = currstate;
        let objSel = document.getElementById("operatorstp");

        function addOption(oListbox, text, value)  //функция добавления опции в список
        {
            var oOption = document.createElement("option");
            oOption.appendChild(document.createTextNode(text));
            oOption.setAttribute("value", value);

            oListbox.appendChild(oOption);
        }

        async function currstate() { // функция получает массив операторов ТП, которые не в офлайне
            activetechopers = []
            objSel.length = 1
            objSel[0].selected = true;
            await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
                "credentials": "include"
            }).then(r => r.json()).then(result => {

                for (let i = 0; i < result.rows.length; i++) {
                    if (result.rows[i].operator != null && result.rows[i].operator.status != "Offline" && result.rows[i].operator.fullName.match(/ТП\D/)) {
                        activetechopers.push(result.rows[i])
                    } // end of if state
                } // end of for
            })

            if (activetechopers.length != 0) {
                for (let i = 0; i < activetechopers.length; i++) {
                    if (activetechopers[i].aCnt == null)
                        activetechopers[i].aCnt = 0;

                    if (activetechopers[i].operator.status == "Online") {
                        addOption(objSel, `🟢 ${activetechopers[i].operator.fullName} (${activetechopers[i].aCnt})`, `${activetechopers[i].operator.id}`)
                    } else if (activetechopers[i].operator.status == "Busy") {
                        addOption(objSel, `🟡 ${activetechopers[i].operator.fullName} (${activetechopers[i].aCnt})`, `${activetechopers[i].operator.id}`)
                    } else if (activetechopers[i].operator.status == "Pause") {
                        addOption(objSel, `🔴 ${activetechopers[i].operator.fullName} (${activetechopers[i].aCnt})`, `${activetechopers[i].operator.id}`)
                    }
                }
            }
        }

        document.getElementById('getdatafrchat').onclick = () => { //открывает окно с информацией об обратившемся пользователе


            if (typeof (convdata) !== 'undefined') {

                if (document.getElementById('userchatdata').style.display == 'none')
                    document.getElementById('userchatdata').style.display = ''
                else document.getElementById('userchatdata').style.display = 'none'

                if (convdata.channelUser.payload.techScreeningData == undefined)
                    convdata.channelUser.payload.techScreeningData = convdata.channelUser.payload["Тех.инфа об устройствах"]

                if (convdata.channelUser.payload.userFullName != undefined)
                    document.getElementById('datafield').innerHTML = '<span style="color:#00BFFF; font-weight:700;">' + convdata.channelUser.payload.userFullName + '</span>' + '<br>' + '<span style="color: #00FA9A;">' + '(' + convdata.channelUser.payload.userType + ')' + '</span>' + ' ID: ' + convdata.channelUser.payload.id + '<br>' + '<span style="user-select: none;">' + '📧: ' + '</span>' + convdata.channelUser.payload.email + '<br>' + '<span style="user-select: none;">' + '📞:' + '</span>' + convdata.channelUser.payload.phone + '<br>' + "Tech Screening Data: " + '<br>' + convdata.channelUser.payload.techScreeningData;
                else
                    document.getElementById('datafield').innerHTML = '<span style="color:#00BFFF; font-weight:700;">' + convdata.channelUser.fullName + '</span>' + '<br>' + '<span style="color: #00FA9A;">' + '(' + convdata.channelUser.payload.userType + ')' + '</span>' + ' ID: ' + convdata.channelUser.payload.id + '<br>' + '<span style="user-select: none;">' + '📧: ' + '</span>' + convdata.channelUser.payload.email + '<br>' + '<span style="user-select: none;">' + '📞:' + '</span>' + convdata.channelUser.payload.phone + '<br>' + "Tech Screening Data: " + '<br>' + convdata.channelUser.payload.techScreeningData;
            } else alert("Не выбран активный чат")
        }

        currstate();
        console.log(activetechopers);


        for (let i = 0; i < radiobtnsarray.length; i++) {
            if (radiobtnsarray[i].value == 'Notes' && radiobtnsarray[i].checked == true) {
                document.getElementById('msgftochatornotes').style.background = 'LightGrey';
            } else if (radiobtnsarray[i].value == 'Chat' && radiobtnsarray[i].checked == true) {
                document.getElementById('msgftochatornotes').style.background = 'white';
            }

            radiobtnsarray[i].onclick = () => {
                if (radiobtnsarray[i].value == 'Notes' && radiobtnsarray[i].checked == true) {
                    document.getElementById('msgftochatornotes').style.background = 'LightGrey';
                } else if (radiobtnsarray[i].value == 'Chat' && radiobtnsarray[i].checked == true) {
                    document.getElementById('msgftochatornotes').style.background = 'white';
                }
            }
        }

        document.getElementById('btn_search_history').onclick = async () => { //функця обработки нажатия "Найти"

            if (document.getElementById('chatuserhis').value != '' && document.getElementById('hashchathis').value == '') { // если айди пользователя введен, а хеш чата не введен
                flagsearch = 'searchbyuser'
                let lusid = document.getElementById('chatuserhis').value.trim();
                let from = document.getElementById('dateFromChHis').value
                let to = document.getElementById('dateToChHis').value
                document.getElementById('chatuserhis').value = ''

                if (foundarr != '')
                    foundarr = ''

                if (document.getElementById('placeusid').innerText != '')
                    document.getElementById('placeusid').innerText = ''

                if (document.getElementById('placechatid').innerText != '')
                    document.getElementById('placechatid').innerText = ''

                if (document.getElementById('somechatinfo').style.display == '')
                    document.getElementById('somechatinfo').style.display = 'none';

                if (document.getElementById('bottommenuchhis').style.display == '')
                    document.getElementById('bottommenuchhis').style.display = 'none';

                if (document.getElementById('comentsbar').style.display == '')
                    document.getElementById('comentsbar').style.display = 'none';

                document.getElementById('infofield').innerHTML = 'Загрузка'

                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    "headers": {
                        "content-type": "application/json",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "body": `{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"${lusid}\",\"tsFrom\":\"${from}T00:00:00.000Z\",\"tsTo\":\"${to}T23:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => data = r)
                console.log(data)

                if (data.total == 0)
                    alert("В выбранном диапазоне чатов от пользователя не найдено. Попробуйте, пожалуйста, выбрать другой, либо пользователь не обращался вовсе.")

                for (let i = 0; i < data.items.length; i++) {

                    let tmestmp = new Date((data.items[i].ts.split('[GMT]'))[0])
                    let tshrs;
                    let tsmin
                    let day;
                    let month;
                    let actstatus = '';
                    let marksarr;
                    if (tmestmp.getMonth() < 9)
                        month = "0" + (tmestmp.getMonth() + 1)
                    else
                        month = (tmestmp.getMonth() + 1)
                    if (tmestmp.getDate() < 10)
                        day = "0" + tmestmp.getDate()
                    else
                        day = tmestmp.getDate()
                    let year = tmestmp.getFullYear();
                    if ((tmestmp.getUTCHours() + 3) < 10)
                        tshrs = "0" + (tmestmp.getUTCHours() + 3);
                    else if ((tmestmp.getUTCHours() + 3) >= 24)
                        tshrs = '0' + ((tmestmp.getUTCHours() + 3 - 24))
                    else tshrs = (tmestmp.getUTCHours() + 3);

                    if (tmestmp.getMinutes() < 10)
                        tsmin = "0" + tmestmp.getMinutes();
                    else tsmin = tmestmp.getMinutes();

                    if (data.items[i].stats.rate == undefined || data.items[i].stats.rate.rate == undefined)
                        marksarr = '⭕'
                    else
                        marksarr = data.items[i].stats.rate.rate

                    if (data.items[i].stats.usedStatuses == "AssignedToOperator")
                        actstatus = "🛠"
                    else actstatus = '';

                    //сюда также допилить классы и  менять их в зависимости от темы

                    if (data.items[i].channelUser.payload != undefined && data.items[i].channelUser.payload.userFullName == undefined) {
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700;">' + data.items[i].channelUser.payload.userType + '</span>' + ' ' + data.items[i].channelUser.fullName + '<span style="color: MediumSeaGreen; font-weight:700;">' + ' Оценка: ' + '</span>' + marksarr + actstatus + '</span>' + '<br>'
                    } else if (data.items[i].channelUser.payload != undefined && data.items[i].channelUser.payload.userFullName != undefined) {
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700;">' + data.items[i].channelUser.payload.userType + '</span>' + ' ' + data.items[i].channelUser.payload.userFullName + '<span style="color: MediumSeaGreen; font-weight:700;">' + ' Оценка: ' + '</span>' + marksarr + actstatus + '</span>' + '<br>'
					} else if (data.items[i].channelUser.payload == undefined) {
						foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700;">' + data.items[i].channel.name + '</span>' + ' ' + data.items[i].channelUser.channelTpe + '<span style="color: MediumSeaGreen; font-weight:700;">' + ' Оценка: ' + '</span>' + marksarr + actstatus + '</span>' + '<br>'
					}


                }

                document.getElementById('infofield').innerHTML = foundarr;
                checkandchangestyle()

                for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
                    document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId

                    document.getElementsByClassName('chatlist')[i].onclick = async () => {

                        await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
                        console.log(convdata)

                        if (convdata.status != null && convdata.status == 'AssignedToOperator')
                            isChatOnOperator = true
                        else isChatOnOperator = false;

                        fillchatbox();
                        checkandchangestyle();
                    } // конец функции клика по списку в найденном чате
                }

            } else if (document.getElementById('chatuserhis').value == '' && document.getElementById('hashchathis').value != '') { //если пользователь не введен, но введн хеш чата
                flagsearch = 'searchbyhash'
                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('hashchathis').value.trim()).then(r => r.json()).then(r => convdata = r)
                console.log(convdata)

                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                    isChatOnOperator = true
                else isChatOnOperator = false;

                fillchatbox();
                checkandchangestyle();

            } else alert("Введено и ID пользователя и хеш чата, или оба поля пустые. Пожалуйста, выберите что-то одно и повторите попытку.")
        } // конец функции клика найти

        document.getElementById('back_to_chat_his').onclick = () => { // функция обработки нажатия кнопки "Вернуться"
            document.getElementById('infofield').innerHTML = '';
            document.getElementById('placeusid').innerText = '';
            document.getElementById('placechatid').innerText = '';
            document.getElementById('somechatinfo').style.display = 'none';
            document.getElementById('bottommenuchhis').style.display = 'none';
            document.getElementById('comentsbar').style.display = 'none';

            if (foundarr != '' && foundarr != null && foundarr != undefined) {
                document.getElementById('infofield').innerHTML = foundarr;
                checkandchangestyle();

                for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
                    if (flagsearch == 'searchbyuser')
                        document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId
                    else if (flagsearch == 'searchbyoperator')
                        document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId
                    else if (flagsearch == 'searchbyhash') {
                        if (typeof (operchatsdata) !== 'undefined' && typeof (data) === 'undefined')
                            document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId
                        else if (typeof (data) !== 'undefined' && typeof (operchatsdata) === 'undefined')
                            document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId
                        else if (typeof (data) !== 'undefined' && typeof (operchatsdata) !== 'undefined')
                            document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId
                    }

                    document.getElementsByClassName('chatlist')[i].onclick = async () => {

                        await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
                        console.log(convdata)

                        if (convdata.status != null && convdata.status == 'AssignedToOperator')
                            isChatOnOperator = true
                        else isChatOnOperator = false;

                        fillchatbox();
                        checkandchangestyle();
                    } // конец функции клика по списку в найденном чате
                }
            }
        } // конец обработки функции нажатия "Вернуться"

        document.getElementById('chhisinstr').onclick = function () {
            window.open('https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971#id-%F0%9F%A7%A9%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5ChatMasterAutoFaq-chathistory%F0%9F%92%ACChatHistory')
        }

        document.getElementById('refreshchat').onclick = async () => { // функция обработки нажатия кнопки "обновить"
            if (document.getElementById('placechatid').innerText != '') {
                document.getElementById('infofield').innerHTML = '';

                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                console.log(convdata)

                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                    isChatOnOperator = true
                else isChatOnOperator = false;

                fillchatbox();
                checkandchangestyle();
            }
        } // конец обработчика кнопки "Обновить"

        document.getElementById('takechat').onclick = function () { //обработчик функции взятия чата
            var result = confirm("Вы действительно желаете забрать чат?");
            if (result) {
                let chat_id = document.getElementById('placechatid').innerText;
                let operator_id = operatorId;

                fetch("https://skyeng.autofaq.ai/api/conversation/assign", {
                    "headers": {
                        "content-type": "application/json"
                    },
                    "credentials": "include",
                    "body": `{\"command\":\"DO_ASSIGN_CONVERSATION\",\"conversationId\":\"${chat_id}\",\"assignToOperatorId\":\"${operator_id}\"}`,
                    "method": "POST"
                });
            }
        } // конец обработчика нажатия кнопки "Забрать"
		
		
async function startnewchatfast(polzid) { //открывает быстро чат с пользователем
    if (operatorId == "") {
        await whoAmI()
    }

    if (polzid) {
        await fetch(`https://skyeng.autofaq.ai/api/conversation/start?channelId=eca64021-d5e9-4c25-b6e9-03c24s638d4d&userId=${polzid}&operatorId=${operatorId}&groupId=b6f7f34d-2f08-fc19-3661-29ac00842898`, {
            headers: {
            },
            referrer: "https://skyeng.autofaq.ai/tickets/assigned/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "POST",
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                chatId = data.conversationId
                console.log(data, chatId)
            })
    } else alert('Не введен id пользователя');
}

        document.getElementById('startchat').onclick = () => { //обработчик функции начала чата с пользователем
            let answer = confirm("Вы действительно желаете начать чат с пользователем?");
            if (answer) {
                if (isChatOnOperator == false) {
                    let polzid = document.getElementById('placeusid').innerText.trim();
                    document.getElementById('startchat').style.background = 'green';
                    startnewchatfast(polzid)
                    setTimeout(() => {
                        document.getElementById('startchat').style.background = '';
                    }, 3000)
                } else alert('Чат не открыт, так как есть активный чат на операторе!')
            }
        } // конец обработчика нажатия кнопки Начать чат с пользователем

        document.getElementById('opencmtbar').onclick = function () { //обработчик функции начала чата с пользователем
            if (document.getElementById('comentsbar').style.display == '')
                document.getElementById('comentsbar').style.display = 'none';
            else
                document.getElementById('comentsbar').style.display = '';

            for (let i = 0; i < radiobtnsarray1.length; i++) {
                if (radiobtnsarray1[i].value == 'Notes' && radiobtnsarray1[i].checked == true) {
                    document.getElementById('msgftochatornotes1').style.background = 'LightGrey';
                } else if (radiobtnsarray1[i].value == 'Chat' && radiobtnsarray1[i].checked == true) {
                    document.getElementById('msgftochatornotes1').style.background = 'white';
                }

                radiobtnsarray1[i].onclick = () => {
                    if (radiobtnsarray1[i].value == 'Notes' && radiobtnsarray1[i].checked == true) {
                        document.getElementById('msgftochatornotes1').style.background = 'LightGrey';
                    } else if (radiobtnsarray1[i].value == 'Chat' && radiobtnsarray1[i].checked == true) {
                        document.getElementById('msgftochatornotes1').style.background = 'white';
                    }
                }
            }

            document.getElementById('hidecmtfield').onclick = function () {
                document.getElementById('comentsbar').style.display = 'none';
            }
        } // конец обработчика нажатия кнопки Начать чат с пользователем

        document.getElementById('reassign').onclick = () => { //кнопка перевода чата на выбранного из верхнего списка операторы на линии и открытом чате, который желаем переветси

            let arops = document.getElementById('operatorstp')
            let hashid = document.getElementById('placechatid').innerText;
            if (arops.children[0].selected != true && hashid != '') {
                for (let i = 1; i < arops.children.length; i++) {
                    if (arops.children[i].selected == true)
                        fetch("https://skyeng.autofaq.ai/api/conversation/assign", {
                            "headers": {
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": `{\"command\":\"DO_ASSIGN_CONVERSATION\",\"conversationId\":\"${hashid}\",\"assignToOperatorId\":\"${arops.children[i].value}\"}`,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })
                }
            } else alert("Условия передачи чата не выполнены: не выбран оператор, не открыт чат, который требуется переводить")
        }



        document.getElementById('sendmsgtochatornotes').onclick = async () => { // обработчик кнопки Отправить в зависимости от радиокнопки в заметки или в чат

            let radiobtnsarray = document.getElementsByName('chatornotes')

            for (let i = 0; i < radiobtnsarray.length; i++) {
                if (radiobtnsarray[i].value == 'Notes' && radiobtnsarray[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);

                } else if (radiobtnsarray[i].value == 'Chat' && radiobtnsarray[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                                    isChatOnOperator = true
                                else isChatOnOperator = false;

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);
                }
            }
        }

        document.getElementById('sendmsgtochatornotes1').onclick = async () => { // обработчик кнопки Отправить в зависимости от радиокнопки в заметки или в чат

            let radiobtnsarray1 = document.getElementsByName('chatornotes1')

            for (let i = 0; i < radiobtnsarray1.length; i++) {
                if (radiobtnsarray1[i].value == 'Notes' && radiobtnsarray1[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes1').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes1').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);

                } else if (radiobtnsarray1[i].value == 'Chat' && radiobtnsarray1[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes1').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes1').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                                    isChatOnOperator = true
                                else isChatOnOperator = false;

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);
                }
            }
        }
    }
	