﻿let pldata;
let afopername; // переменная фамилии, имени оператора при переборе общего списка операторов
let foundarr;
let flagsearch;
let operchatsdata;
let isChatOnOperator = false;
var audio // переменнай для проигрывания звука при поступлении нового чата
var soundintervalset; //интервал между проигрыванием звука
let flagusertype;
let flaggetlogginer;
let chatneraspcount; // переменная для получения колчества нераспределенных чатов в очереди
let chattpquecount; // переменная для получения колчества нераспределенных чатов в очереди тематики ТП v1
idk = 0
var tmrs = []
var timeStart = new Date()
let template_flag = 0
let template_flag2 = 0
let word_text = ""
let template_text = ""
let flagggg = 0;
let getidusrteachreq;
let getidusrstud;
let getidusrsteach;
let getservidst;
var templatesAF = [];
var bool = 0;
var table;
var opsection = ''; // глобальная переменная отдела оператора
var operatorId = ""; //глобальная переменная после получения ID operator , который использует расширение и авторизован в свой профиль
var operatorsarray = []; //массив операторов , который потом пригодится для других функций
var flagLangBut = 0;
var abortTimeOut = ''								// перменная для отмены будильника 1
var abortTimeOut1 = ''
var modulesarray = [];
var chatsArray = [];
var scriptAdr = localStorage.getItem('scriptAdr');
const TS_addr = 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec';
const KC_addr = 'https://script.google.com/macros/s/AKfycbzV8BHtyD3XUcPjZmb9pwwY-2cwAKx8hTRZKVENpKhdCJYe-hF0rpyDVdUIXBUin326Lw/exec';
const KC_addrRzrv = 'https://script.google.com/macros/s/AKfycbzn2Lv0uuqXG5-mSWHu2W_fAmeeVJ9WVtT1hNNMAj9z9p5I0WLZnydzTcE8z1H5nuaTiQ/exec';
const TP_addr = 'https://script.google.com/macros/s/AKfycbzsf72GllYQdCGg-L4Jw1qx9iv9Vz3eyiQ9QO81HEnlr0K2DKqy6zvi7IYu77GB6EMU/exec';
const TP_addrRzrv = 'https://script.google.com/macros/s/AKfycbyL2uTpWRlajHmtRXpjUq2yiPw6f_t-tHoBglkG-ojoA7ksnqMXr0_BXzhZFk31qV7jmQ/exec';
const TPprem_addr = 'https://script.google.com/macros/s/AKfycbzQqFYAZHtpTsK10HTlgVRZtLR8GWKgzrSiwUt-u8UpSoWX4MswkLRbB7valrYFbSPtnQ/exec';
const TPprem_addrRzrv = 'https://script.google.com/macros/s/AKfycbwOO6ptnyDnIH0OWBZ4dH64Jm7C8zZbS0sBncqyXjhvPqxAn2V2RaphDwGSVmYwktx_oA/exec';
if (localStorage.getItem('tpflag') == null || localStorage.getItem('tpflag' == undefined)) {
    localStorage.setItem('tpflag', 'ТП')
}

var win_AFhelper =  // описание элементов главного окна
    `<div style="width: 351px;">
        <span style="width: 351px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" title="Переключает язык Русский/Английский" style="width:100px">Русский</button>
					<button id="hideMenuMain" title="Скрывает расширение и др открытых окон" style="margin-left:18px;" class="buttonHide">hide</button>
					<button id="setting" title="Открывает настройки расширения и включения/отключения будильника" style="width:23px; float: right; margin-right: 5px">⚙</button>
					<button id="links" title="Открывает доп.меню со ссылками и функциями" style="width:16px; float: right; margin-right: 5px">L</button>
					<button id="addsrc" class="onlyfortp" title="Открывает доп меню для работы с сервисами школы, требующими запрос на выдачу доступа" style="width:16px; float: right; margin-right: 5px">*</button>
					<button id="getnewtmpldata" title="Обновляет шаблоны из документа с шаблонами без необходимости обновлять страницу для актуализации" style="width:27px; float: right; margin-right: 5px">🔄</button>
					<button id="reminderstatus" title="Статус будильника 🔔 - вкл, 🔕 - выкл" style="width:25px; float: right; margin-right: 5px"></button>
					<input id ="phone_tr" class="onlyfortp" placeholder="Телефон" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 15px; margin-top: 5px;"></input>
                    <input id ="email_tr" class="onlyfortp" placeholder="Почта" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 12px; margin-top: 5px;"></input>
				</div>
				<div style="margin-left: 5px; margin-right: 5px; margin-bottom:5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
			</div>
			<div style="margin: 5px;" id="7str">
				<textarea style="width: 341px; height: 56px;" id="inp"></textarea>
			<div id="hyperlnk" class="hyperlnk">
				<input type="text" placeholder="Enter your link 🔗 here" style="margin-bottom:5px;width:270px;text-align:center;" id="bindlinktotext" title="Вводите в это поле ссылку, после чего в общем поле выделяете слово или фразу и кнопкой Insert встраиваете ссылку в текст шаблона"></input>
				<button id="insertlinktotext" title="Добавляет ссылку из поля слева в выделеное слово или фразу в тексте шаблона">Insert ✅</button>
			</div>
				<button title="Переключение для выбора отправить или доработать сообщение" id="msg1" style="width:100px;">Доработать</button>
				<button id="opandclsbarhyper" style="width:  30px; margin: 0; padding: 2px; text-align: center;" title="Открывает форму для прикрепления ссылки в текст">🔗</button>
                <button title="Отправить текст от имени бота" id="sndbot" style="width: 30px; margin-left: 5px">🤖</button>
				<button title="Отправить текст" id="snd" style="width:50px; margin-left: 10px">send</button>
				<button title="Переключает между отправкой текста в заметки или в чат пользователю" class="msgtype" id="msg">Чат</button>
			</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 350px">
			</div>
		</div>
	</span>
</div>`;

var win_mainmenu = // описание кнопок меню
    `<div>
        <div id="servDsk" class="onlyfortp">🛠ServiceDesk</div>
        <div id="JiraOpenForm" class="onlyfortp">🔎Jira Search</div>
        <div id="crmopersstatuses" class="onlyfortp">🧮Статусы CRM2</div>
        <div id="butMarks">🎭 Оценки</div>
        <div id="otkaz" class="onlyfortp">❌Отказ от помощи</div>
        <div id="smartroomform" class="onlyfortp">🦐Smartroom</div>
        <div id="butLessonInfo">🎓 Lesson Info</div>
        <div id="butFrozeChat" class="onlyfortp">❄ Auto Respond</div>
        <div id="radioPlayer">📻 Radio</div>
        <div id="buttonGetStat">📊 Статистика</div>
    </div>`;

flag = 0
str = localStorage.getItem('sound_str');
if (str !== null && str !== "")
    audio = new Audio(str);
else
    audio = new Audio("https://dimentorexpo.github.io/Sounds/msg.mp3");

Object.keys(localStorage).forEach(function (key) { // чистка localstorage от мусора , когда АФ на каждый лог добавляет запись вида SMART_TABLE... или при работе с архивом
    if (/^(SMART_TABLE.)/.test(key)) {
        localStorage.removeItem(key);
    }
});

localStorage.setItem('SMART_TABLE_SORTED_INFO(/tickets/archive)', '{\"columnKey\":\"ts\",\"order\":\"descend\"}')

function setDisplayStyle(element, value) {
    element.style.display = value;
}

// Блок горячих клавиш
const API_ENDPOINT = 'https://skyeng.autofaq.ai/api/reason8/operator/status';
const fetchOptions = {
    headers: {
        'content-type': 'application/json',
    },
    referrer: 'https://skyeng.autofaq.ai/tickets/archive',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: '',
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
};

function changeStatus(status) { // функция изменения статуса оператора
    fetchOptions.body = `{ "command": "DO_SET_OPERATOR_STATUS", "status": "${status}", "source": "Operator" }`;
    fetch(API_ENDPOINT, fetchOptions)
        .then((res) => {
            console.log(`Status changed to ${status}`);
        })
        .catch((err) => {
            console.error(err);
        });
}

if (window.location.href.indexOf('skyeng.autofaq.ai') !== -1) {
    document.onkeydown = (event) => {
        if (event.altKey && event.code === 'KeyO') { // горячие клавиши для смены статуса в Оффлайн
            changeStatus('Offline');
        } else if (event.altKey && event.code === 'KeyI') { // горячие клавиши для смены статуса в Занят
            changeStatus('Busy');
        } else if (event.altKey && event.code === 'KeyT') { // горячие клавиши тестового чата
            const currentStatus = localStorage.getItem('trigertestchat');
            const newStatus = currentStatus === '0' ? '1' : '0';
            localStorage.setItem('trigertestchat', newStatus);
        }
    };
}

// Конец блока горячих клавиш

function onlyNumber(object) { // функция для разрешения ввода только цифр и знака -
    object.value = object.value.replace(/[^0-9-]/g, '');
}

function onlyNumbers(object) { // функция для разрешения ввода только цифр
    object.value = object.value.replace(/[^0-9]/g, '');
}

function onlyNumbersAndComma(object) { // функция для разрешения ввода только цифр и запятой
    object.value = object.value.replace(/[^0-9,]/g, '');
}

function noDoubts(object) { // функция для разрешения ввода только английских и русских букв без запрещенных символов
    object.value = object.value.replace(/["'\\]/gi, '');
}

async function whoAmI() {
    const tokenis = document.cookie.match(/jwt=(.*)/);
    const token = tokenis[1];

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    operatorId = JSON.parse(jsonPayload).user.id;

    const response = await fetch('https://skyeng.autofaq.ai/api/operators/statistic/currentState', {
        credentials: 'include'
    });
    const data = await response.json();
    operatorsarray = data.onOperator;

    const operator = operatorsarray.find(s => s.operator !== null && operatorId && s.operator.id === operatorId);
    if (operator) {
        afopername = operator.operator.fullName;
        opsection = operator.operator.fullName.split('-')[0];
    }
}

function firstLoadPage() { //первичаня загрузка страницы
    if (window.location.href.includes('skyeng.autofaq.ai')){
        let mystyles = document.createElement('link')
        mystyles.rel = 'stylesheet'
        mystyles.href = "https://dimentorexpo.github.io/ChMAF/CSS/styles.css" // подключаем модуль стилей
        document.querySelector('head').append(mystyles)

        setTimeout(move_again_AF, 3500)

        function addElementsToList(elements, list) {
            elements.forEach((element) => {
                list.append(element);
            });
        }
    } else if (window.location.href.includes('billing-marketing.skyeng.ru/accrual-operations/create')){
        include("https://dimentorexpo.github.io/ChMAF/Modules/Consideration.js") // подключаем модуль вывода подсказок при создании компенсации компенсации
    } else {
        document.getElementById('AF_helper').style.display = 'none';
    }
}

function timerHideButtons() { //функция добавления кнопки скрытия
    const iframeDoc = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
    const modalMasks = iframeDoc.getElementsByClassName('mantine-Modal-root')[0];
    const modalContent = iframeDoc.getElementsByClassName('mantine-Modal-header')[0];
    const modalClose = iframeDoc.getElementsByClassName('mantine-Modal-close')[0];
    const Hidebtn = iframeDoc.getElementById('maskBackHide');
    if (modalMasks && !Hidebtn) {
        modalContent.insertBefore(maskBackHide, modalClose)
    }
}

function loadmoduls(gfgScript){
    let lboxstyles = document.createElement('link')
    lboxstyles.rel = 'stylesheet'
    lboxstyles.href = "https://dimentorexpo.github.io/Lightbox/dist/css/lightbox.min.css" // подключаем модуль стилей для Lightbox
    document.querySelector('head').append(lboxstyles)

    let create = (info) => {
        return new Promise(function (resolve, reject) {
            let gfgData = document.createElement("script");
            gfgData.src = info;
            gfgData.async = false;
            gfgData.onload = () => {
                resolve(info);
            };
            gfgData.onerror = () => {
                reject(info);
            };
            document.body.appendChild(gfgData);
        });
    };

    let promiseData = [];
    gfgScript.forEach(function (info) {
        promiseData.push(create(info));
    });
    Promise.all(promiseData).then(function () {
        console.log('%c\r\n   ______  __       ____    ____       _       ________  \r\n .\' ___  |[  |     |_   \\  \/   _|     \/ \\     |_   __  | \r\n\/ .\'   \\_| | |--.    |   \\\/   |      \/ _ \\      | |_ \\_| \r\n| |        | .-. |   | |\\  \/| |     \/ ___ \\     |  _|    \r\n\\ `.___.\'\\ | | | |  _| |_\\\/_| |_  _\/ \/   \\ \\_  _| |_     \r\n `.____ .\'[___]|__]|_____||_____||____| |____||_____|    \r\n                                                         \r\n', 'color:Limegreen')
        customTemplates()
        getText()
        setInterval(startTimer, 500)
    }).catch(function (gfgData) {
        console.log(gfgData + " failed to load!");
    });
}

function prepTp() { //функция подготовки расширения ТП
    let openCalendar = document.createElement('button')
    openCalendar.innerHTML = '📅'
    openCalendar.id = 'datsyCalendar'
    openCalendar.title = 'Открывает календарь Datsy'
    openCalendar.classList.add('onlyfortp', 'rightPanelBtn')
    document.getElementById('rightPanel').appendChild(openCalendar)

    let butServ = document.createElement('button')
    butServ.id = "butServ"
    butServ.innerHTML = "⚜"
    butServ.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    butServ.classList.add('onlyfortp', 'rightPanelBtn')
    butServ.onclick = function () { //открывает вензель user info
        setDisplayStyle(document.getElementById('AF_Service'), document.getElementById('AF_Service').style.display === '' ? 'none' : '');
        if (document.getElementById('AF_Service').style.display == "")
            butServ.classList.add('activeScriptBtn')
        else {
            butServ.classList.remove('activeScriptBtn')
        }
    }
    document.getElementById('rightPanel').appendChild(butServ)
	
    let openKnowledge = document.createElement('button')
    openKnowledge.innerHTML = '💡'
    openKnowledge.id = 'knowledgeCenter'
    openKnowledge.title = 'Открывает базу знаний решений неполадок'
    openKnowledge.classList.add('onlyfortp', 'rightPanelBtn')
    document.getElementById('rightPanel').appendChild(openKnowledge)

    let taskBut = document.createElement('button')
    taskBut.id = "taskBut"
    taskBut.innerHTML = "🛠"
    taskBut.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    taskBut.classList.add('onlyfortp', 'rightPanelBtn')
    document.getElementById('rightPanel').appendChild(taskBut)
    
    setTimeout(() => {
        document.getElementById('rightPanel').appendChild(maskBack) 
    }, 5000);
	
    flagLangBut = 1
    setInterval(timerHideButtons, 500)

    let gfgScript = ["https://dimentorexpo.github.io/ChMAF/Extras/jquery-3.6.0.js", // подключаем модуль обработки JQuery
        "https://dimentorexpo.github.io/ChMAF/Extras/chart.js", // подключаем модуль для работы с графиками
        "https://dimentorexpo.github.io/ChMAF/Extras/moment.js", // подключаем модуль для работы с датами и временем
        "https://dimentorexpo.github.io/ChMAF/Modules/TestUsers.js", // модуль тестовых У П
        "https://dimentorexpo.github.io/ChMAF/Modules/Link.js", // модуль ссылкера (L)inks
        "https://dimentorexpo.github.io/ChMAF/Modules/TemplatesFuncs.js", // модуль с функциями при работе с шаблонами"
        "https://dimentorexpo.github.io/ChMAF/Modules/Settings.js", // модуль настроек расширения
        "https://dimentorexpo.github.io/ChMAF/Modules/AlarmClock.js", // модуль будильника
        "https://dimentorexpo.github.io/ChMAF/Modules/CustomTemplates.js", // модуль кастомных собственных шаблонов
        "https://dimentorexpo.github.io/ChMAF/Modules/Statistica.js", // модуль кнопки "Статистика" и вложенных функций
        "https://dimentorexpo.github.io/ChMAF/Modules/Calendar.js", // модуль кнопки "Календарь"
        "https://dimentorexpo.github.io/ChMAF/Modules/Linksdostup.js",  // модуль дополнительного окна ссылок, где требуется запрос доступа к ресурсам
        "https://dimentorexpo.github.io/ChMAF/Modules/Userinfo.js", // модуль UserInfo в виде вензеля с разными функциями и возможностями
        "https://dimentorexpo.github.io/ChMAF/Modules/RefuseForm.js", // модуль формы отказа от помощи
        "https://dimentorexpo.github.io/ChMAF/Modules/VoiceHelper.js", // модуль голосового помощника
        "https://dimentorexpo.github.io/ChMAF/Modules/Marks.js", // модуль просмотра оценок пользователя
        "https://dimentorexpo.github.io/ChMAF/Modules/AutoRespond.js", // модуль автоответа по таймеру
        "https://dimentorexpo.github.io/ChMAF/Modules/JiraSearch.js", // модуль поиска по Jira
        "https://dimentorexpo.github.io/ChMAF/Modules/Smartroom.js", // модуль формы пожеланий Smartroom
        "https://dimentorexpo.github.io/ChMAF/Modules/TaskCreate.js", // модуль создания задач в СРМ2 с помощью интеграции АФ
        "https://dimentorexpo.github.io/ChMAF/Modules/Themes.js", // модуль выставления тегов и тематик
        "https://dimentorexpo.github.io/ChMAF/Modules/ChatHistory.js", // модуль просмотра истории чатов
        "https://dimentorexpo.github.io/ChMAF/Modules/BinBankInfo.js", // модуль просмотра участников группы в L
        "https://dimentorexpo.github.io/ChMAF/Modules/Addstat.js", // модуль дополнительного окна статистики, расположенного в кнопке L
        "https://dimentorexpo.github.io/ChMAF/Modules/LessonStatus.js", // модуль просмотра статуса уроков по П или по П и У
        "https://dimentorexpo.github.io/ChMAF/Modules/OperatorStatuse.js", // подключаем модуль статусов операторов в CRM2
        "https://dimentorexpo.github.io/ChMAF/Modules/OpStatusMM.js", //подключаем модуль отправки статусов
        "https://dimentorexpo.github.io/ChMAF/Modules/AFOperatorStatus.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/ChMAF/Modules/ServiceDesk.js", // подключаем модуль Сервис Деска
        "https://dimentorexpo.github.io/ChMAF/Modules/Grabber.js", // подключаем модуль Парсинга чатов оператора
        "https://dimentorexpo.github.io/ChMAF/Modules/Radio.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/ChMAF/Modules/TestRooms.js", //подключаем модуль быстрого создания тестовых комнат
		"https://dimentorexpo.github.io/ChMAF/Modules/Knowledge.js", //подключаем модуль базы знаний
		"https://dimentorexpo.github.io/ChMAF/Modules/GrList.js", //подключаем модуль просмотра состава группы
        "https://dimentorexpo.github.io/Lightbox/dist/js/lightbox.min.js"]; // подключаем библиотеку обработки изображений при клике на них
    loadmoduls(gfgScript)
}

function prepKC() { //функция подготовки расширения КЦ
    const languageSwitcher = document.querySelector('.user_menu-language_switcher');

    setDisplayStyle(languageSwitcher, localStorage.getItem('disablelngpmwindow') === '1' ? 'none' : '');

    let needtohide = Array.from(document.getElementsByClassName('onlyfortp'));
    needtohide.forEach(e => setDisplayStyle(e, 'none'));

    let needtoopen = Array.from(document.getElementsByClassName('onlyforkc'));
    needtoopen.forEach(e => setDisplayStyle(e, ''));

    flagLangBut = 1

    let gfgScript = ["https://dimentorexpo.github.io/ChMAF/Extras/jquery-3.6.0.js", // подключаем модуль обработки JQuery
        "https://dimentorexpo.github.io/ChMAF/Modules/LinkKC.js", // модуль ссылкера (L)inks
        "https://dimentorexpo.github.io/ChMAF/Modules/TemplatesFuncs.js", // модуль с функциями при работе с шаблонами"
        "https://dimentorexpo.github.io/ChMAF/Modules/Settings.js", // модуль настроек расширения
        "https://dimentorexpo.github.io/ChMAF/Modules/AlarmClock.js", // модуль будильника
        "https://dimentorexpo.github.io/ChMAF/Modules/CustomTemplates.js", // модуль кастомных собственных шаблонов
        "https://dimentorexpo.github.io/ChMAF/Modules/Statistica.js", // модуль кнопки "Статистика" и вложенных функций
        "https://dimentorexpo.github.io/ChMAF/Modules/Marks.js", // модуль просмотра оценок пользователя
        "https://dimentorexpo.github.io/ChMAF/Modules/Themes.js", // модуль выставления тегов и тематик
        "https://dimentorexpo.github.io/ChMAF/Modules/ChatHistory.js", // модуль просмотра истории чатов
        "https://dimentorexpo.github.io/ChMAF/Modules/LessonStatus.js", // модуль просмотра статуса уроков по П или по П и У
        "https://dimentorexpo.github.io/ChMAF/Modules/AFOperatorStatus.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/Lightbox/dist/js/lightbox.min.js"]; // подключаем библиотеку обработки изображений при клике на них
    loadmoduls(gfgScript)
}

const copyToClipboard = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function include(url) { // функция подключения дополнительных скриптов/модулей
    var script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function maxLengthCheck(object) { // функция ограничения кол-ва символов в полях
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function checkelementtype(a) { // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX, a.clientY)

    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'LABEL' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT' & elem.nodeName != 'P' && elem.className != 'checkbox-audio-switch' && elem.className != 'checkbox-refresh-switch' && elem.className != 'srvhhelpnomove' && elem.className != 'rowOfChatGrabbed' && elem.id !== 'CSATFilterField' && elem.id !== 'AgregatedDataThemes' && elem.nodeName !== 'TABLE' && elem.nodeName !== 'TH' && elem.nodeName !== 'TR' && elem.id !== 'AgregatedDataOut' && elem.nodeName !== 'CANVAS' && elem.id !== "ToolsPanel" && elem.id !=="ProblemsSolution") {
        return true;
    }
    return false;
}

async function sendComment(txt) { // функция отправки комментария
    var values = await getInfo(0)
    adr = values[0]; adr1 = values[1]; uid = values[2]
    var txt2 = txt.split('\n').join('\\n')
    var txt2 = txt2.split("\"").join("\\\"")
    resetFlags()
    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
        "headers": {
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
        },
        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt2 + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
        "method": "POST",
        "credentials": "include"
    });
}

function resetFlags() { //функция обнуления флагов
    template_flag = 0
    template_flag2 = 0
}

function newTaggg(tagName) { //функция добавления тега в чат, но надо потом искать где используется
    let chatId = getChatId();

    if (chatId) {
        fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
    }
}

function newTags(tagName) { //функция добавления нескольких тегов в чат, которые тянутся из дока в комплекте так сказать
    let chatId = getChatId();

    if (chatId) {
        if (tagName.split(',').length < 2)
            fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
                "method": "POST",
                "credentials": "include"
            });
        else if (tagName.split(',').length == 2)
            fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName.split(',')[0] + "\" ,\"" + tagName.split(',')[1] + "\"]}]}",
                "method": "POST",
                "credentials": "include"
            });
    }
}

function fetchaddchat(userid1, userid2) { //вспомогательная функция просто добавления чата мекжду пользователям
    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"userId1\":${userid1},\"userId2\":${userid2}}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}

async function remandressl() { // функция добавляения массово чатов в  мультиклассруме также и отдельно для каждого предмета

    // Добавляем кнопку для Skysmart добавлять чаты со всеми У в один клик
    let achatb = document.createElement('span')
    achatb.id = "achatbtn"
    achatb.textContent = "💬"
    achatb.style = 'cursor:pointer;'

    if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] == 'teacher/multi-classroom' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = addMulticlassrom;
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по всем возможнным предметам сразу!"
    }

    async function addMulticlassrom() { // общая функция добавления чатов в мультиклассруме, но надо еще подфункцию сделать чтобы код сократить!
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST",
        }).then(r => r.json()).then(r => artid = r)

        let sidarr = [];
        await fetch("https://academic-gateway.skyeng.ru/academic/api/teacher-classroom/get-data/personal", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"teacherId\":null}",
            "method": "POST",
            "credentials": "include"
        }).then(r => r.json()).then(data => studarr = data)


        for (let i = 0; i < Object.keys(studarr).length; i++) {

            function obrabotka(subjName, num) {
                console.log(Object.values(studarr)[num])
                sidarr = [];
                console.log(`%c${subjName}`, 'color:lightgreen; font-weight:700')
                for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                    if (Object.values(studarr)[num][j].status != "sleep")
                        sidarr += Object.values(studarr)[num][j].id + ","

                    console.log(Object.values(studarr)[num][j].id + " Status: " + Object.values(studarr)[num][j].status)
                }
                if (typeof (sidarr) != 'object') {
                    sidarr = sidarr.split(',');

                    for (let j = 0; j < sidarr.length - 1; j++) {
                        fetchaddchat(sidarr[j], artid.user.id)
                    }
                    alert(`Чаты с учениками в разделе ${subjName} - Multi-classroom добавлены в количестве: ` + (sidarr.length - 1))
                }
            }

            let arrayofsubjects = Object.keys(studarr)[i]
            switch (arrayofsubjects) {
                case 'math':
                    obrabotka('Математика', i);
                    break;
                case 'russian':
                    obrabotka('Русский язык', i);
                    break;
                case 'social-science':
                    obrabotka('Обществознание', i);
                    break;
                case 'preschool':
                    obrabotka('Дошколка', i);
                    break;
                case 'chess':
                    obrabotka('Шахматы', i);
                    break;
                case 'computer-science':
                    obrabotka('Компьютерные курсы', i);
                    break;
                case 'chemistry':
                    obrabotka('Химия', i);
                    break;
                case 'physics':
                    obrabotka('Физика', i);
                    break;
                case 'english':
                    obrabotka('Английский язык', i);
                    break;
                case 'history':
                    obrabotka('История', i);
                    break;
                case 'biology':
                    obrabotka('Биология', i);
                    break;
                case 'geography':
                    obrabotka('География', i);
                    break;
            }
        }
    }

    function dosetclasswork(subject) {     // функция перезапуска урока в зависимости от предмета так как разные API
        fetch(subject + document.URL.split('/')[6], {
            "headers": {
                "accept": "application/json",
                "content-type": "application/json",
            },
            "body": "{\"status\":\"classwork\",\"name\":\"\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "include"
        });

        document.getElementById('clwbtn').textContent = "Done!"

        setTimeout(() => { document.getElementById('clwbtn').textContent = "Classwork" }, 3000)
    }

    let classworkbtn = document.createElement('div') // создание кнопки Classwork
    classworkbtn.id = "clwbtn"
    classworkbtn.textContent = "Classwork"
    classworkbtn.style = "position:absolute; top:14px; left:65%; cursor: pointer; color:green; text-shadow: 1px 2px 5px rgb(0 0 0 / 20%);"
    let subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]

    switch (subject) {
        case "chess/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Шахматы"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-chess.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "math/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Математика"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-math.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "geography/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Географии"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-geography.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "preschool/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Дошколка"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-preschool.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "social-science/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Обществознания"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-social-science.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "history/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Истории"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-history.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "biology/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Биологии"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-biology.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "english/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Английского языка"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-english.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "computer-science/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Компьютерных курсов"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-computer-science.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "physics/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Физики"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-physics.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "literature/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Литературы"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-literature.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "chemistry/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Химии"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-chemistry.skyeng.ru/api/v1/rooms/")
            }
            break;
        case "russian/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Русского языка"
            classworkbtn.onclick = function () {
                dosetclasswork("https://api-russian.skyeng.ru/api/v1/rooms/")
            }
            break;
    }
}

function screenshots() {  //просмотр и трансформация скриншотов в активном чате
    // Select the expert-chat-display-inner element
    const expertChatDisplayInner = document.getElementsByClassName('expert-chat-display-inner')[0];

    // If expert-chat-display-inner exists, use it to get the children elements
    let children;
    if (expertChatDisplayInner) {
        children = expertChatDisplayInner.children;
    }
    // If expert-chat-display-inner does not exist, select the chat-messages element and use it to get the children elements
    else {
        const chatMessages = document.getElementsByClassName('chat-messages')[0];
        if (!chatMessages) {
            return;
        }
        children = chatMessages.children;
    }

    // Iterate over the children elements
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.textContent.includes('vimbox-resource') || child.textContent.includes('math-prod') || child.textContent.includes('communications.skyeng.ru')) {
            // Get all the links in the child element
            const links = child.querySelectorAll('a');

            // Iterate over the links
            for (let j = 0; j < links.length; j++) {
                const link = links[j];
                if (!link.hasAttribute('data-lightbox')) {
                    // Create the img and a elements
                    const img = document.createElement('img');
                    img.style.width = '100px';
                    const alink = document.createElement('a');
                    alink.setAttribute('data-lightbox', 'imgs');
                    alink.append(img);
                    img.src = link.href;
                    img.alt = 'ПКМ-Сохранить ссылку как';
                    alink.href = img.src;
                    link.replaceWith(alink);
                }
            }
        }
    }
}

function replaceSelectedText(elem, str) { //функция замены выделенного текста, для формирования гиперссылки
    elem.focus();

    if (document.selection) {
        var s = document.selection.createRange();
        if (s.text) {
            eval("s.text=" + str + "(s.text);");
            s.select();
            return true;
        }
    }
    else if (typeof (elem.selectionStart) == "number") {
        if (elem.selectionStart != elem.selectionEnd) {
            var start = elem.selectionStart;
            var end = elem.selectionEnd;

            eval("var rs = " + str + "(elem.value.substr(start,end-start));");
            elem.value = elem.value.substr(0, start) + rs + elem.value.substr(end);
            elem.setSelectionRange(end, end);
        }
        return true;
    }
    return false;
}

function change_str(s) { // вспомогательная функция для подстановки вместо текста гиперссылку и сохраняя выделенный сам текст
    return `<a href="${document.getElementById('bindlinktotext').value}" target="_blank" rel="noopener">` + s + "</a>";
}

function addOption(oListbox, text, value) {  //функция добавления опции в список
    var oOption = document.createElement("option");
    oOption.appendChild(document.createTextNode(text));
    oOption.setAttribute("value", value);
    oListbox.appendChild(oOption);
}

async function move_again_AF() { //с АФ шняга там стили шмили скрипта отображение отправку сообщений
    await whoAmI()
    let sidePanel = document.createElement('div')
    sidePanel.id = "rightPanel"
    sidePanel.style = 'position: fixed; top: 110px; right: 22px; z-index: 10000; width: 40px; font-size: 22px; cursor: pointer; transition: all 0.5s ease;'
    document.body.append(sidePanel)

    let ScriptBut = document.createElement('button');
    ScriptBut.id = 'scriptBut';
    ScriptBut.innerHTML = "🧩";
    ScriptBut.style = "width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;";
    ScriptBut.classList.add('rightPanelBtn')
    ScriptBut.onclick = function () {
        if (document.getElementById('AF_helper').style.display != 'flex') {
            document.getElementById('AF_helper').style.display = 'flex'
            this.classList.add('activeScriptBtn')
        } else {
            document.getElementById('AF_helper').style.display = 'none'
            this.classList.remove('activeScriptBtn')
        }

    }
    document.getElementById('rightPanel').appendChild(ScriptBut)

    let butThemes = document.createElement('button')
    butThemes.id = "themes"
    butThemes.innerHTML = "📚"
    butThemes.title = "[Темы] - кнопка открывающая окно с темами и тегами"
    butThemes.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    butThemes.classList.add('rightPanelBtn')
    document.getElementById('rightPanel').appendChild(butThemes)

    let MainMenuBtn = document.createElement('button')
    MainMenuBtn.textContent = "👺"
    MainMenuBtn.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    MainMenuBtn.id = 'MainMenuBtn'
    MainMenuBtn.title = '[Меню] - По клику открывает список инструментов необходимых для работы'
    MainMenuBtn.classList.add('rightPanelBtn')
    MainMenuBtn.onclick = function () {
        if (document.getElementById('idmymenu').style.display == 'none') {
            document.getElementById('idmymenu').style.display = ''
            this.classList.add('activeScriptBtn')
        } else {
            document.getElementById('idmymenu').style.display = 'none'
            this.classList.remove('activeScriptBtn')
        }
    }
    document.getElementById('rightPanel').appendChild(MainMenuBtn)

    let menubar = document.createElement('div')
    menubar.style = `background: white; position:absolute; right:50px; top: 50px; border: 0px solid #000000; display:none; min-height: 60px; min-width:165px; box-shadow: -1px 4px 16px 7px rgba(34, 60, 80, 0.09)`
    menubar.id = 'idmymenu'
    menubar.innerHTML = win_mainmenu;
    document.getElementById('rightPanel').appendChild(menubar)

    let openchhis = document.createElement('button')
    openchhis.innerHTML = '☢'
    openchhis.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
    openchhis.id = 'opennewcat'
    openchhis.title = 'Открывает виджет просмотра истории чатов'
    openchhis.classList.add('rightPanelBtn')
    document.getElementById('rightPanel').appendChild(openchhis)

    if ((scriptAdr == TP_addr || scriptAdr == TP_addrRzrv || scriptAdr == TPprem_addr || scriptAdr == TPprem_addrRzrv) && opsection == "КЦ") {
        localStorage.setItem('scriptAdr', KC_addr)
        location.reload()
    }

    if (scriptAdr != TP_addr && scriptAdr != TP_addrRzrv && scriptAdr != TPprem_addr && scriptAdr != TPprem_addrRzrv) {
        prepKC()
    } else {
        prepTp()
    }

    if (scriptAdr == TP_addrRzrv || scriptAdr == KC_addrRzrv || scriptAdr == TPprem_addrRzrv) {
        document.getElementById('pages').style.background = 'red'
        document.getElementById('pages').title = 'Включены резервные шаблоны, если в АФ нет сбоя в работе Баз знаний - переключи на обычные шаблоны'
        languageAF.addEventListener('click', function () {
            if (document.getElementById('pages').style.background != 'red') {
                document.getElementById('pages').style.background = 'red'
            }
        })
    }

    window.onkeydown = function (e) {
        if (e.key == 'Control') {
            bool = 1;
        }
    }
    window.onkeyup = function (e) {
        if (e.key == 'Control') {
            bool = 0;
        }
    }
    setInterval(checkchats, 1000);;
}

function closeTerms() { // функция автоподтверждения условий пользования при входе в ЛКП
    if (document.URL == 'https://new-teachers.skyeng.ru/') {
        for (let i = 0; i < document.getElementsByClassName('terms-popup-accept-button').length; i++) {
            document.getElementsByClassName('terms-popup-accept-button')[i].click()
        }
    }
}

function changeNewUIStyle() {
	const hrefisnow = window.location.href;
	if (hrefisnow.includes('tickets/assigned')) {
		if (document.getElementsByTagName('iframe').length != 0) {
			document.getElementsByTagName('iframe')[0].style.zIndex = "999"
		}
		
		if (document.getElementsByClassName('ant-modal-root').length != 0 && document.getElementsByClassName('ant-modal-confirm-title')[0].textContent != "Начать диалог") {
			document.getElementsByClassName('ant-modal-root')[0].remove()
		}
	}
}

if (localStorage.getItem('winTopAF') == null) { // началоное положение главного окна (если не задано ранее)
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}

//Подключаем скрипт App Script с гугл таблиц, где содержаться шщаблоны, которыми пользуемся
if (localStorage.getItem('scriptAdr') == null) {
    localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbzsf72GllYQdCGg-L4Jw1qx9iv9Vz3eyiQ9QO81HEnlr0K2DKqy6zvi7IYu77GB6EMU/exec');
}

let wintAF = document.createElement('div'); // создание главного окна
document.body.append(wintAF);
wintAF.style = 'display: none; min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 10000; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; box-shadow: 0px 0px 10px #000';
wintAF.setAttribute('id', 'AF_helper');
wintAF.innerHTML = win_AFhelper;

wintAF.onmousedown = function (event) {
    if (checkelementtype(event)) {
        let startX = event.clientX;
        let startY = event.clientY;
        let elemLeft = wintAF.offsetLeft;
        let elemTop = wintAF.offsetTop;

        function onMouseMove(event) {
		  if (!(event.buttons & 1)) {
			onMouseUp();
			return;
		  }
            let deltaX = event.clientX - startX;
            let deltaY = event.clientY - startY;

            wintAF.style.left = (elemLeft + deltaX) + "px";
            wintAF.style.top = (elemTop + deltaY) + "px";

            localStorage.setItem('winTopAF', String(elemTop + deltaY));
            localStorage.setItem('winLeftAF', String(elemLeft + deltaX));
        }

        document.addEventListener('mousemove', onMouseMove);

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mouseup', onMouseUp);
    }
}; // прекращение изменения позиции главного окна

let maskBack = document.createElement('button') // кнопка вернуть
maskBack.id = "maskBack"
maskBack.innerHTML = "↩️"
maskBack.title = "Вернуть скрытое окно"
maskBack.style = 'display: none; width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
maskBack.classList.add('rightPanelBtn')

maskBack.onclick = function () { // функция кнопки вернуть
    const iframeDoc = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
    const name = document.getElementById('maskBack').getAttribute('name');
    const email = document.getElementById('maskBack').getAttribute('email');
    const phone = document.getElementById('maskBack').getAttribute('phone');
    const NameInChat = getActiveConvUserName();
    const EmailInChat = SearchinAFnewUI("email");
    const PhoneInChat = SearchinAFnewUI("phone");
    const modalMask = iframeDoc.getElementsByClassName('mantine-Modal-root')[0]; 
    const chatHeaderActionsInner = iframeDoc.querySelectorAll('#__next [class^="ConversationActions_Actions"]')[0];
    const chatNotesButton = iframeDoc.getElementsByClassName('mantine-RichTextEditor-control')[0];

    if (NameInChat === name && EmailInChat === email && PhoneInChat === phone) {
        modalMask.style.display = '';
        chatHeaderActionsInner.style.display = ''; // кнопки сверху
        chatNotesButton.style.display = ''; // кнопка заметок
        maskBack.style.display = 'none';
    } else {
        maskBack.innerHTML = "❌";
        maskBack.title = "Открыт не тот чат"
        setTimeout(function () { 
            maskBack.innerHTML = "↩️";
            maskBack.title = "Вернуть скрытое окно"
        }, 3000);
    }
};

let maskBackHide = document.createElement('span') // кнопка скрыть
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style = 'margin-left: auto;margin-right: 10px;'
maskBackHide.style.display = "";

maskBackHide.onclick = function () { // функция кнопки скрыть
    const iframeDoc = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
    //const modalContent = iframeDoc.getElementsByClassName('mantine-Modal-header')[0]; // строка описания окна в АФ
    //const modalWraps = iframeDoc.getElementsByClassName('mantine-Modal-overlay'); // затемнение
    const modalMasks = iframeDoc.getElementsByClassName('mantine-Modal-root')[0]; // открытое окно c затемнением
    const chatHeaderActionsInner = iframeDoc.querySelectorAll('#__next [class^="ConversationActions_Actions"]')[0]; // кнопки действий в чате
    const chatNotesButton = iframeDoc.getElementsByClassName('mantine-RichTextEditor-control')[0]; // кнопка заметок
    const NameInChat = getActiveConvUserName();
    const EmailInChat = SearchinAFnewUI("email");
    const PhoneInChat = SearchinAFnewUI("phone");


    if (modalMasks) {
        modalMasks.style.display = 'none';
        chatHeaderActionsInner.style.display = 'none'; // кнопки сверху
        chatNotesButton.style.display = 'none'; // кнопка заметок
        maskBack.style.display = '';

        maskBack.setAttribute('name', NameInChat);
        maskBack.setAttribute('email', EmailInChat);
        maskBack.setAttribute('phone', PhoneInChat);
    }
};

setInterval(screenshots, 5000)
setInterval(remandressl, 3000);
setInterval(closeTerms, 500);
setInterval(changeNewUIStyle, 500);

firstLoadPage() //вызов функции первичной загрузки страницы с фомированием меню и наполнением его

if (localStorage.getItem('msg') != null) {
    document.getElementById('msg').innerHTML = localStorage.getItem('msg')
    if (localStorage.getItem('msg') == 'Чат')
        document.getElementById('msg').classList.remove('notes')
    else if (localStorage.getItem('msg') == 'Заметки')
        document.getElementById('msg').classList.add('notes')
}

if (localStorage.getItem('msg1') != null) {
    document.getElementById('msg1').innerHTML = localStorage.getItem('msg1')
}

document.getElementById('msg').onclick = function () { //  переключатель отправить сообщение в чат или заметки
    if (this.innerHTML == "Чат") {
        this.innerHTML = "Заметки";
        this.classList.toggle('notes')
        localStorage.setItem('msg', 'Заметки')
    } else {
        this.innerHTML = "Чат";
        this.classList.toggle('notes')
        localStorage.setItem('msg', 'Чат')
    }
}

document.getElementById('msg1').onclick = function () { //  переключатель Доработать или отправить сообщение
    if (this.innerHTML == "Отправить") {
        this.innerHTML = "Доработать";
        localStorage.setItem('msg1', 'Доработать')
    } else {
        this.innerHTML = "Отправить";
        localStorage.setItem('msg1', 'Отправить')
    }
}

document.getElementById('snd').onclick = function () { //функция отправки сообщений в чат или заметки
    const inp = document.getElementById('inp');
    const phoneTr = document.getElementById('phone_tr');
    const emailTr = document.getElementById('email_tr');
    const snd = document.getElementById('snd');

    snd.setAttribute('disabled', 'disabled');
    setTimeout(function () { snd.removeAttribute('disabled') }, 500);

    if (document.getElementById('msg').innerHTML === 'Чат') {
        if (template_flag === 1) {
            if (template_flag2 === 1) {
                sendAnswerTemplate2(inp.value, 1);
            } else {
                sendAnswerTemplate('', '', 1, inp.value, 1);
            }
        } else {
            sendAnswer(inp.value, 0);
        }
    } else {
        sendComment(inp.value);
    }

    inp.value = '';
    if (phoneTr) phoneTr.value = '';
    if (emailTr) emailTr.value = '';
};

document.getElementById('opandclsbarhyper').onclick = function () { // функция открытия формы для добавления гиперссылки
    if (document.getElementById('hyperlnk').classList.contains('hyper-active') == false) {
        document.getElementById('hyperlnk').classList.add('hyper-active')
        document.getElementById('hyperlnk').classList.remove('hyperlnk')
    } else {
        document.getElementById('hyperlnk').classList.remove('hyper-active')
        document.getElementById('hyperlnk').classList.add('hyperlnk')
    }
}

document.getElementById('insertlinktotext').onclick = function () { // функция замены текста на гиперссылку
    replaceSelectedText(document.getElementById('inp'), 'change_str');
    document.getElementById('bindlinktotext').value = ''
    document.getElementById('hyperlnk').classList.remove('hyper-active')
    document.getElementById('hyperlnk').classList.add('hyperlnk')
}

document.getElementById('sndbot').onclick = async function () { //отправить сообщение от автофак бота
    let txt = document.getElementById('inp').value;
    var values = await getInfo(flag)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    var txt2 = txt.split('\n')
    var txt3 = ""
    txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
    txt3 = txt3.split("\"").join("\\\"")
    txt3 = txt3.split('<p></p>').join("<p><br></p>")
    txt3 = txt3.substr(0, txt3.length - 2)

    if (document.getElementById('msg').innerHTML == "Чат")
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
            },
            "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    document.getElementById('inp').value = "";
}

document.getElementById('hideMenuMain').onclick = function () { // кнопка hide на главном окне скрипта
    var elements = ['AF_helper', 'cstmTmplates', 'AF_Links', 'AF_AlarmClock', 'AF_Stat', 'AF_LessonStatus', 'AF_Linksd', 'AF_Settings'];
    elements.forEach(e => { if (document.getElementById(e)) { setDisplayStyle(document.getElementById(e), 'none') } });
    document.getElementById('scriptBut').classList.remove('activeScriptBtn')
}

function SearchinAFnewUI(whatsearch) {
    const iframeDocument = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
    const elemwheresearc = iframeDocument.querySelector('#__next ul[class*="Variables_List"]');
    const Alternativewheresearc = iframeDocument.querySelectorAll('#__next div[class*="List_ListWrapper"]');

    if (elemwheresearc) {
        const children = elemwheresearc.children;
        const ElemCount = children.length;

        for (let i = 0; i < ElemCount; i++) {
            const [key, value] = children[i].textContent.split(':');

            if (key.trim() === whatsearch || key.trim() === whatsearch.toUpperCase()) {
                return value.trim();
            }
        }
    }

    if (whatsearch === 'id' && Alternativewheresearc) {
        for (let i = 0; i < Alternativewheresearc.length; i++) {
            if (Alternativewheresearc[i].textContent.split(':')[0].trim() === whatsearch || Alternativewheresearc[i].textContent.split(':')[0].trim() === whatsearch.toUpperCase()) {
                const children = Alternativewheresearc[i].children;
                const ElemCount = children.length;

                for (let j = 0; j < ElemCount; j++) {
                    const [key, value] = children[j].textContent.split(':');

                    if (key.trim() === whatsearch || key.trim() === whatsearch.toUpperCase()) {
                        return value.trim();
                    }
                }
            }
        }
    }

    return '';
}

function getChatId() {
    const hrefnow = window.location.href;
    const pathname = document.location.pathname.split('/');
    let chatId = '';

    if (hrefnow.includes('skyeng.autofaq.ai/logs')) {
        chatId = pathname[2];
    } else if (hrefnow.includes('tickets/assigned')) {
        const iframeDocument = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
        const ConvArray = iframeDocument.querySelectorAll('#__next [class^="DialogsCard_Card"]');

        for (let i = 0; i < ConvArray.length; i++) {
            if (ConvArray[i].getAttribute('aria-selected') === 'true') {
                chatId = ConvArray[i].getAttribute('data-conv-id');
                break;
            }
        }
    } else if (hrefnow.includes('tickets/archive')) {
        const fieldsArray = document.querySelectorAll('.ant-spin-container');
        for (let i = 0; i < fieldsArray.length; i++) {
            if (fieldsArray[i].textContent.split(':')[0] === "ID") {
                chatId = fieldsArray[i].children[0].textContent.split(':')[1].trim();
                break;
            }
        }
    }

    return chatId;
}

function getActiveConvUserName() {
    const iframeDocument = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
    const Usernamefield = iframeDocument.querySelectorAll('[class^="User_Preview"]')[0];
    let ConvUsername = null;

    // массив для исключения
    const predefinedNames = ["тьютор", "тютор", "тутор", "бадди", "tutor", "buddy"];
    
    if (Usernamefield) {
        const namesParts = Usernamefield.textContent.split(/[\s_]+/);
        const firstPartInLowerCase = namesParts[0].toLowerCase();
        
        if (predefinedNames.includes(firstPartInLowerCase) && !namesParts[1]) {
            return '';
        }

        if (predefinedNames.includes(firstPartInLowerCase) && namesParts[1]) {
            return namesParts[1];
        }

        if (firstPartInLowerCase) {
            return namesParts[0];
        }
    }
    
    return '';
}


// окрашивание чатов при остатке времени <2 min

function getAllChatsList() {
    const iframeDocument = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
    const chatsTimerList = iframeDocument.querySelectorAll('[class^="DialogsCard_Timers"]');
    const chatsList = iframeDocument.querySelectorAll('[class^="DialogsCard_Card"]');
    return { chatsTimerList, chatsList };
}

function convertToSeconds(timeStr, i) {
    const [h, m, s] = timeStr.split(':').map(Number);
    const totalSeconds = h * 3600 + m * 60 + s;
    if (totalSeconds < 120) {
        const cardElements = getAllChatsList().chatsList;
        if (cardElements[i]) {
            cardElements[i].style.background = localStorage.getItem('defaclschatcolor');
        }
    }
    return totalSeconds;
}

function checkchats(){
    const allChats = getAllChatsList();
    const timers = allChats.chatsTimerList;
    const chats = allChats.chatsList;

    // Set default background for all chats
    for (let j = 0; j < chats.length; j++) {
        chats[j].style.background = "white"; // replace "" with your default color
    }

    for (let i = 0; i < timers.length; i++) {
        const child = timers[i].children[1];
        if (child) {
            try {
                convertToSeconds(child.textContent, i);
            } catch (error) {
                console.error(`Error with timer ${i}: ${error.message}`);
            }
        }
    }
}

// ловим вызов newTaggg из iframe
window.addEventListener('callNewTaggg', (event) => {
    const tagName = event.detail.tagName;
    newTaggg(tagName);
});

// ловим вызов sendComent из iframe
window.addEventListener('CallNewComment', (event) => {
    const ComemntText = event.detail.comment;
    sendComment(ComemntText);
});