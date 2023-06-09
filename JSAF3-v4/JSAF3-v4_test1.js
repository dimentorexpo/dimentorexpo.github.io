let pldata;
let afopername; // переменная фамилии, имени оператора при переборе общего списка операторов
let foundarr;
let flagsearch;
let operchatsdata;
let isChatOnOperator = false;
let flagusertype;
let flaggetlogginer;
let audio // переменнай для проигрывания звука при поступлении нового чата
let chatneraspcount; // переменная для получения колчества нераспределенных чатов в очереди
let chattpquecount; // переменная для получения колчества нераспределенных чатов в очереди тематики ТП v1
idk = 0
var tmrs = []
var timeStart = new Date()
let soundintervalset; //интервал между проигрыванием звука
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

function setDisplayStyle(element, value){
    element.style.display = value;
}

// Блок горячих клавиш
const API_ENDPOINT = 'https://uat.autofaq.ai/api/reason8/operator/status';
const fetchOptions = {
    headers: {
        'content-type': 'application/json',
    },
    referrer: 'https://uat.autofaq.ai/tickets/archive',
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

if (window.location.href.indexOf('uat.autofaq.ai') !== -1) {
    document.onkeydown = (event) => {
        if (event.altKey && event.code === 'KeyO') { // горячие клавиши для смены статуса в Оффлайн
            changeStatus('Offline');
        } else if (event.altKey && event.code === 'KeyI') { // горячие клавиши для смены статуса в Занят
            changeStatus('Busy');
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
  
    const response = await fetch('https://uat.autofaq.ai/api/reason8/operator/status', {
      credentials: 'include'
    });
    const data = await response.json();
    operatorsarray = data.res;
  
    const operator = operatorsarray.find(s => s.operator !== null && me && s.operator.id === operatorId);
    if (operator) {
      afopername = operator.operator.fullName;
      opsection = operator.operator.fullName.split('-')[0];
    }
  }

function firstLoadPage() { //первичаня загрузка страницы
    if (window.location.href.indexOf('uat.autofaq.ai') === -1 || window.location.href.indexOf('uat.autofaq.ai/login') > 0) {
        document.getElementById('AF_helper').style.display = 'none';
        if (window.location.href.indexOf('billing-marketing.skyeng.ru/accrual-operations/create') !== -1 ) {
            include("https://dimentorexpo.github.io/JSAF3-v4/Modules/Consideration.js") // подключаем модуль вывода подсказок при создании компенсации компенсации
        }
    } else {
        let mystyles = document.createElement('link')
		mystyles.rel = 'stylesheet'
		mystyles.href = "https://dimentorexpo.github.io/JSAF3-v4/CSS/styles.css" // подключаем модуль стилей 
		document.querySelector('head').append(mystyles)

        setTimeout(move_again_AF, 3500)

        function addElementsToList(elements, list) {
            elements.forEach((element) => {
                list.append(element);
            });
        }
    }
}

function timerHideButtons() { //функция добавления скрытия полей плюс также перекрашивает при выборе тп исход срм2 в красный, тп2л в зеленый
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        document.getElementsByClassName('ant-modal-content')[0].childNodes[1].children[0].appendChild(maskBackHide)

        let modalContent = document.querySelector('.ant-modal-content');

        const setBackgroundColors = (selectorList, valuesToColor) => {
            for (let i = 0; i < selectorList.length; i++) {
                for (const [value, color] of Object.entries(valuesToColor)) {
                    if (selectorList[i].textContent === value) {
                        selectorList[i].style.backgroundColor = color;
                    }
                }
            }
        }

        if (modalContent.children[1].children[0].childNodes[0].textContent === 'Создать задачу') {
            const selectorList = document.querySelectorAll('.sc-fzokOt');
            if (selectorList.length > 5) {
                setBackgroundColors(selectorList, {
                    'Техподдержка исход crm2': 'red',
                    'Техподдержка 2-я линия crm2': 'green'
                });
            }
        }
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
		setInterval(startTimer, 1000)
    }).catch(function (gfgData) {
        console.log(gfgData + " failed to load!");
    });
}

function prepTp() { //функция подготовки расширения ТП
    const languageSwitcher = document.querySelector('.user_menu-language_switcher');

    setDisplayStyle(languageSwitcher, localStorage.getItem('disablelngpmwindow') === '1' ? 'none' : '');
	
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
		if (document.getElementById('AF_Service').style.display =="")
			butServ.classList.add('activeScriptBtn')
		else {
			butServ.classList.remove('activeScriptBtn')
		}
    }
	document.getElementById('rightPanel').appendChild(butServ)
	
	let taskBut = document.createElement('button')
	taskBut.id = "taskBut"
	taskBut.innerHTML = "🛠"
	taskBut.style = 'width: 40px; height: 40px; margin-bottom:4px; font-size: 22px; cursor: pointer; border-radius: 50%; opacity:0.5; transition: all 0.5s ease;'
	taskBut.classList.add('onlyfortp', 'rightPanelBtn')
	document.getElementById('rightPanel').appendChild(taskBut)
	
    flagLangBut = 1
    setInterval(timerHideButtons, 300)

    let gfgScript = ["https://dimentorexpo.github.io/jquery-3.6.0.js", // подключаем модуль обработки JQuery
		"https://dimentorexpo.github.io/chart.js", // подключаем модуль для работы с графиками
		"https://dimentorexpo.github.io/moment.js", // подключаем модуль для работы с датами и временем
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/TestUsers.js", // модуль тестовых У П
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Link.js", // модуль ссылкера (L)inks
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/TemplatesFuncs.js", // модуль с функциями при работе с шаблонами"
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Settings.js", // модуль настроек расширения
	    "https://dimentorexpo.github.io/JSAF3-v4/Modules/AlarmClock.js", // модуль будильника
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/CustomTemplates.js", // модуль кастомных собственных шаблонов
		"https://dimentorexpo.github.io/JSAF3-v4/Modules/Statistica.js", // модуль кнопки "Статистика" и вложенных функций
		"https://dimentorexpo.github.io/JSAF3-v4/Modules/Calendar.js", // модуль кнопки "Календарь"
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Linksdostup.js",  // модуль дополнительного окна ссылок, где требуется запрос доступа к ресурсам
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Userinfo.js", // модуль UserInfo в виде вензеля с разными функциями и возможностями
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/RefuseForm.js", // модуль формы отказа от помощи
		"https://dimentorexpo.github.io/JSAF3-v4/Modules/VoiceHelper.js", // модуль голосового помощника
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Marks.js", // модуль просмотра оценок пользователя
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/AutoRespond.js", // модуль автоответа по таймеру
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/JiraSearch.js", // модуль поиска по Jira
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Smartroom.js", // модуль формы пожеланий Smartroom
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/TaskCreate.js", // модуль создания задач в СРМ2 с помощью интеграции АФ
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Themes.js", // модуль выставления тегов и тематик
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/ChatHistory.js", // модуль просмотра истории чатов
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/BinBankInfo.js", // модуль просмотра участников группы в L
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Addstat.js", // модуль дополнительного окна статистики, расположенного в кнопке L
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/LessonStatus.js", // модуль просмотра статуса уроков по П или по П и У
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/OperatorStatuse.js", // подключаем модуль статусов операторов в CRM2
		"https://dimentorexpo.github.io/JSAF3-v4/Modules/OpStatusMM.js", //подключаем модуль отправки статусов
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/AFOperatorStatus.js", // подключаем модуль статусов операторов и количества чатов на них
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/ServiceDesk.js", // подключаем модуль Сервис Деска
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Grabber.js", // подключаем модуль Парсинга чатов оператора
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Radio.js", // подключаем модуль статусов операторов и количества чатов на них
		"https://dimentorexpo.github.io/JSAF3-v4/Modules/TestRooms.js", //подключаем модуль быстрого создания тестовых комнат
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

    let gfgScript = ["https://dimentorexpo.github.io/jquery-3.6.0.js", // подключаем модуль обработки JQuery
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/LinkKC.js", // модуль ссылкера (L)inks
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/TemplatesFuncs.js", // модуль с функциями при работе с шаблонами"
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Settings.js", // модуль настроек расширения
	    "https://dimentorexpo.github.io/JSAF3-v4/Modules/AlarmClock.js", // модуль будильника
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/CustomTemplates.js", // модуль кастомных собственных шаблонов
		"https://dimentorexpo.github.io/JSAF3-v4/Modules/Statistica.js", // модуль кнопки "Статистика" и вложенных функций
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Marks.js", // модуль просмотра оценок пользователя
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/Themes.js", // модуль выставления тегов и тематик
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/ChatHistory.js", // модуль просмотра истории чатов
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/LessonStatus.js", // модуль просмотра статуса уроков по П или по П и У
        "https://dimentorexpo.github.io/JSAF3-v4/Modules/AFOperatorStatus.js", // подключаем модуль статусов операторов и количества чатов на них
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

    if (elem.nodeName != 'BUTTON'  && elem.nodeName != 'LABEL' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT' & elem.nodeName != 'P' && elem.className != 'checkbox-audio-switch' && elem.className != 'checkbox-refresh-switch' && elem.className != 'srvhhelpnomove' && elem.className != 'rowOfChatGrabbed' && elem.id !== 'CSATFilterField' && elem.id !== 'AgregatedDataThemes' && elem.nodeName !=='TABLE' && elem.nodeName !=='TH' && elem.nodeName !=='TR' && elem.id !=='AgregatedDataOut' && elem.nodeName !=='CANVAS' && elem.id !=="grabdata" && elem.id !=="ToolsPanel") {
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
    fetch("https://uat.autofaq.ai/api/reason8/answers", {
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

function requestsRed() { //функция окрашивает в красный цвет, кнопка взять запрос не будет (0) иметь, а любое другое значение
    const taketask = document.getElementsByClassName('expert-sidebar-button')[0];

    if (taketask) {
        const textNode = taketask.childNodes[1].childNodes[0];
        textNode.addEventListener('DOMSubtreeModified', () => {
            const text = textNode.innerHTML;
            const color = text === 'Взять запрос (0)' ? 'white' : '#F34723';
            taketask.childNodes[1].style.backgroundColor = color;
        });
    }
}

function checkEducationServiceInput() {
    const elements = document.getElementsByTagName('span');
    for (i = 0; i < elements.length; i++){
        if (elements[i].textContent == 'Выбор услуги:'){ 
            return true 
        }
    }
    return false
}

function newTaggg(tagName) { //функция добавления тега в чат, но надо потом искать где используется
    let chatId = ''
    if (window.location.href.indexOf('uat.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    fetch("https://uat.autofaq.ai/api/conversation/" + chatId + "/payload", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
        "method": "POST",
        "credentials": "include"
    });
}

function newTags(tagName) { //функция добавления нескольких тегов в чат, которые тянутся из дока в комплекте так сказать
    let chatId = ''
    if (window.location.href.indexOf('uat.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    if (tagName.split(',').length < 2)
        fetch("https://uat.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
    else if (tagName.split(',').length == 2)
        fetch("https://uat.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName.split(',')[0] + "\" ,\"" + tagName.split(',')[1] + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
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

function addbuttonsintegration() { // добавляет подсветку при создании задачи зеленым цветом 2лтп, красным тп исхода 1 линии
    if ((scriptAdr == TP_addr || scriptAdr == TP_addrRzrv || scriptAdr == TPprem_addr || scriptAdr == TPprem_addrRzrv) && document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
            let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')
            //let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')[4].children[0].childNodes[1];
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butstdid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachidfstd)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonservid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttoncontactstudent)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttoncontactteacher)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(teachneotv)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(studneotv)
            for (let i = 0; i < categorylist.length; i++) {
                if (categorylist[i].textContent == "Техподдержка исход crm2") {
                    categorylist[i].style = "color: red; font-weight: 600; text-shadow: 1px 1px 1px black, 0 0 1em red";
                } else if (categorylist[i].textContent == "Техподдержка 2-я линия crm2") {
                    categorylist[i].style = "color: green; font-weight: 600; text-shadow: 1px 1px 1px black, 0 0 1em green";
                } else {
                    categorylist[i].style = "color: black;";
                }
            }
        }
    }
}

function checJiraF() { //Функция добавления коммента в чат при добавлении ссылки на джиру, но требуется повторное открытие окна чтобы система получила информацию о ссылке введеной в ячейку
    try {
        if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM").textContent == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }
        } else if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM").textContent == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").textContent);
                    console.log("DONE!")
                }
            }
        }
    } catch (e) { }
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
    await  whoAmI()
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
	MainMenuBtn.onclick = function() {
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

    if(opsection == 'Nagiev Eldar') { opsection = "ТП"}
		
    if ((scriptAdr == TP_addr || scriptAdr == TP_addrRzrv || scriptAdr == TPprem_addr || scriptAdr == TPprem_addrRzrv) && opsection == "КЦ"){
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
        if (e.key == 'Enter' && bool == 1) {
            refCurTimer(localStorage.getItem('aclstime') + ":00")
        }
    }
    window.onkeyup = function (e) {
        if (e.key == 'Control') {
            bool = 0;
        }
    }
}

function closeTerms() { // функция автоподтверждения условий пользования при входе в ЛКП
    if (document.URL == 'https://new-teachers.skyeng.ru/') {
        for (let i = 0; i < document.getElementsByClassName('terms-popup-accept-button').length; i++) {
            document.getElementsByClassName('terms-popup-accept-button')[i].click()
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

var listenerAF = function (e, a) { // сохранение позиции главного окна
    wintAF.style.left = Number(e.clientX - myX2) + "px";
    wintAF.style.top = Number(e.clientY - myY2) + "px";
    localStorage.setItem('winTopAF', String(Number(e.clientY - myY2)));
    localStorage.setItem('winLeftAF', String(Number(e.clientX - myX2)));
};

wintAF.onmousedown = function (a) { // изменение позиции главного окна
    if (checkelementtype(a)) {
        window.myX2 = a.layerX;
        window.myY2 = a.layerY;
        document.addEventListener('mousemove', listenerAF);
    }
}
wintAF.onmouseup = function () { document.removeEventListener('mousemove', listenerAF); } // прекращение изменения позиции главного окна

let infouserbut = document.createElement('p');
infouserbut.id = 'userIdScript';
infouserbut.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';

let nextuserinfo = document.createElement('p');
nextuserinfo.id = 'nextUserInfoScript';
nextuserinfo.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';

let buttonhistory = document.createElement('span');
buttonhistory.id = 'lookForHistory';
buttonhistory.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History </a>';

let trshotmain = document.createElement('span');
trshotmain.id = 'originalusertrshooter'
trshotmain.innerHTML = '<a style="color: black; cursor: pointer;"> 🕵️‍♀️TroubleShoot </a>';

let trshootnextuser = document.createElement('span');
trshootnextuser.id = 'nextusertrshooter'
trshootnextuser.innerHTML = '<a style="color: black; cursor: pointer;"> 🕵️‍♀️TroubleShoot </a>';

let buttonservstud = document.createElement('span');
buttonservstud.id = 'nextStudentServiceInfo1';
buttonservstud.innerHTML = " ⚜ ";
buttonservstud.style = "width:20px; cursor:pointer";

let buttonservivceuser = document.createElement('span');
buttonservivceuser.id = 'nextUserServiceInfo';
buttonservivceuser.innerHTML = " ⚜ ";
buttonservivceuser.style = "width:20px; cursor:pointer";

let btnNextUserChatHistory = document.createElement('span');
btnNextUserChatHistory.id = 'btnNextUserChatHis';
btnNextUserChatHistory.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History</a>';

let butteachid = document.createElement('button');
butteachid.id = 'teacheridtofield';
butteachid.innerHTML = "👽 (ID П) П обратился ";
butteachid.style = "width:160px; cursor:pointer; border: 1px solid black; border-radius:10px";

let butstdid = document.createElement('button');
butstdid.id = 'studentidtofield';
butstdid.innerHTML = "👨‍🎓 (ID У) П обратился";
butstdid.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px'

let butteachidfstd = document.createElement('button');
butteachidfstd.id = 'teacheridfromstudent';
butteachidfstd.innerHTML = "👽 (ID П) У обратился";
butteachidfstd.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px'

let buttonservid = document.createElement('button');
buttonservid.id = 'servidstudento';
buttonservid.innerHTML = "ID услуги У (крит)";
buttonservid.style = 'width:160px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px; margin-top:5px;'

let buttoncontactstudent = document.createElement('button');
buttoncontactstudent.id = 'contactstudento';
buttoncontactstudent.innerHTML = "Обратился П, связаться с У.";
buttoncontactstudent.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px; margin-top:5px;'

let buttoncontactteacher = document.createElement('button');
buttoncontactteacher.id = 'contactteachero';
buttoncontactteacher.innerHTML = "Обратился У, связаться с П.";
buttoncontactteacher.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px; margin-top:5px;'

let teachneotv = document.createElement('button');
teachneotv.id = 'tneotv';
teachneotv.innerHTML = "Крит П Н.О";
teachneotv.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px; margin-top:5px;'

let studneotv = document.createElement('button');
studneotv.id = 'sneotv';
studneotv.innerHTML = "Крит У Н.О";
studneotv.style = 'width:150px; cursor:pointer; margin-left:2px; border: 1px solid black; border-radius:  10px; margin-top:5px;'

let marksstata = document.createElement('span');
marksstata.id = 'marksstata';
marksstata.innerHTML = '<a style="color: black; cursor: pointer;">📊</a>';

buttonhistory.onclick = function () { //функция поиска по истории чатов в коте
    document.getElementById('opennewcat').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
            btn_search_history.click()
        }
    }
}

btnNextUserChatHistory.onclick = function () { //искать историю чатов по ученику с которым след урок при обращении П
    document.getElementById('opennewcat').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
            btn_search_history.click()
        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-teacherId") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0]
            btn_search_history.click()
        }
    }
}

trshotmain.onclick = function () {
    let curtime = new Date();
    let mesjac;
    let denj;

    if (curtime.getDate() < 10) {
        denj = "0" + curtime.getDate();
    } else {
        denj = curtime.getDate();
    }
    if (curtime.getMonth() + 1 < 10) {
        mesjac = "0" + (curtime.getMonth() + 1);
    } else {
        mesjac = curtime.getMonth() + 1;
    }

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
            window.open('https://video-trouble-shooter.skyeng.ru/?userId=' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0] +
                '&from=' + curtime.getFullYear() + '-' + mesjac + '-' + (denj - 1 == 0 ? denj : (denj - 1 < 10 ? "0" + (denj - 1) : denj)) + 'T00:00:00&to=' + curtime.getFullYear() + '-' + mesjac + '-' + denj + 'T23:59:00&order=desc')
        }
    }
}

trshootnextuser.onclick = function () {
    let curtime = new Date();
    let mesjac;
    let denj;

    if (curtime.getDate() < 10) {
        denj = "0" + curtime.getDate();
    } else {
        denj = curtime.getDate();
    }
    if (curtime.getMonth() + 1 < 10) {
        mesjac = "0" + (curtime.getMonth() + 1);
    } else {
        mesjac = curtime.getMonth() + 1;
    }

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
            window.open('https://video-trouble-shooter.skyeng.ru/?userId=' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0] +
                '&from=' + curtime.getFullYear() + '-' + mesjac + '-' + (denj - 1 == 0 ? denj : (denj - 1 < 10 ? "0" + (denj - 1) : denj)) + 'T00:00:00&to=' + curtime.getFullYear() + '-' + mesjac + '-' + denj + 'T23:59:00&order=desc')
        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-teacherId") {
            window.open('https://video-trouble-shooter.skyeng.ru/?userId=' + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(' ')[0] +
                '&from=' + curtime.getFullYear() + '-' + mesjac + '-' + (denj - 1 == 0 ? denj : (denj - 1 < 10 ? "0" + (denj - 1) : denj)) + 'T00:00:00&to=' + curtime.getFullYear() + '-' + mesjac + '-' + denj + 'T23:59:00&order=desc')
        }
    }
}

infouserbut.onclick = function () { // функция Info по нажатию на которую ID переносится в расширение омельченко и нажимает Info кнопку автоматически
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const idNode = Array.prototype.find.call(userDetailsList.childNodes, (node) => node.firstChild.textContent === 'id');
    if (idNode) {
        const editorExtensionId = localStorage.getItem('ext_id');
        chrome.runtime.sendMessage(
            editorExtensionId,
            {
                name: 'chm_message', question: 'send_event', messageValue: {
                    message: 'open-user-info',
                    userId: `${idNode.childNodes[1].textContent.split(' ')[0]}`,
                },
            },
        );
    }
};

buttonservivceuser.onclick = function () { //открывает окно вензель user info для nextuser
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const userIdNode = Array.prototype.find.call(userDetailsList.childNodes, (node) => node.firstChild.textContent === 'nextClass-teacherId' || node.firstChild.textContent === 'nextClass-studentId');

    if (userIdNode) {
        const AF_Service = document.getElementById('AF_Service');
        if (AF_Service.style.display === 'none') {
            AF_Service.style.display = '';
        }
        document.getElementById('idstudent').value = userIdNode.childNodes[1].textContent;
        getidstudent.click();
    }
}

buttonservstud.onclick = function () { //открывает окно вензель user info
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const idNode = Array.prototype.find.call(userDetailsList.childNodes, (node) => node.firstChild.textContent === 'id');

    if (idNode) {
        const AF_Service = document.getElementById('AF_Service');
        if (AF_Service.style.display === 'none') {
            AF_Service.style.display = '';
        }
        document.getElementById('idstudent').value = idNode.childNodes[1].textContent.split(' ')[0];
        getidstudent.click();
    }
}

nextuserinfo.onclick = function () { // открывает просмотр инфо о пользователе взаимодействуя со скриптом Script Package
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];
    Array.prototype.forEach.call(userDetailsList.childNodes, (node) => {
        if (node.firstChild.textContent === 'nextClass-studentId' || node.firstChild.textContent === 'nextClass-teacherId') {
            const editorExtensionId = localStorage.getItem('ext_id');
            chrome.runtime.sendMessage(
                editorExtensionId,
                {
                    name: 'chm_message', question: 'send_event', messageValue: {
                        message: 'open-user-info',
                        userId: `${node.childNodes[1].textContent}`,
                    },
                },
            );
        }
    });
};

let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";

maskBack.onclick = function () { // кнопка свернуть
    const name = document.getElementById('maskBack').getAttribute('name');
    const email = document.getElementById('maskBack').getAttribute('email');
    const phone = document.getElementById('maskBack').getAttribute('phone');
    const mask = document.getElementById('maskBack').getAttribute('mask');
    const userInfoPanel = document.getElementsByClassName('expert-user_info_panel')[0];
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[0];
    const modalWrap = document.getElementsByClassName('ant-modal-wrap')[mask];
    const modalMask = document.getElementsByClassName('ant-modal-mask')[mask];
    const chatHeaderActionsInner = document.getElementsByClassName('expert-chat-header-actions-inner')[0];
    const chatFooter = document.getElementsByClassName('expert-chat-footer')[0];
    const chatNotesButton = chatFooter.firstChild.firstChild;

    if (userInfoPanel.firstChild.firstChild.textContent === name &&
        userDetailsList.childNodes[0].childNodes[1].textContent === email &&
        userDetailsList.childNodes[1].childNodes[1].textContent === phone) {
        modalWrap.style.display = '';
        modalMask.style.display = '';
        chatHeaderActionsInner.style.display = ''; // кнопки сверху
        chatNotesButton.style.display = ''; // кнопка заметок
        maskBack.style.display = 'none';
    } else {
        maskBack.innerHTML = "Открыт неверный чат";
        setTimeout(function () { maskBack.innerHTML = "Вернуть"; }, 3000);
    }
};

let maskBackHide = document.createElement('span')
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style.marginRight = "15px";
maskBackHide.style.marginLeft = "15px";
maskBackHide.style.display = "";

maskBackHide.onclick = function () { // кнопка скрыть
    const modalContent = document.getElementsByClassName('ant-modal-content')[0];
    const modalWraps = document.getElementsByClassName('ant-modal-wrap');
    const modalMasks = document.getElementsByClassName('ant-modal-mask');
    const chatHeaderActionsInner = document.getElementsByClassName('expert-chat-header-actions-inner')[0];
    const chatFooter = document.getElementsByClassName('expert-chat-footer')[0];
    const chatNotesButton = chatFooter.firstChild.firstChild;
    const userInfoPanel = document.getElementsByClassName('expert-user_info_panel')[0];
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[0];

    if (modalContent.childNodes[1].firstChild.textContent === "Добавить комментарий к диалогу") {
        modalWraps[0].style.display = 'none';
        modalMasks[0].style.display = 'none';
        chatHeaderActionsInner.style.display = 'none'; // кнопки сверху
        chatNotesButton.style.display = 'none'; // кнопка заметок
        maskBack.style.display = '';

        maskBack.setAttribute('name', userInfoPanel.firstChild.firstChild.textContent);
        maskBack.setAttribute('email', userDetailsList.childNodes[0].childNodes[1].textContent);
        maskBack.setAttribute('phone', userDetailsList.childNodes[1].childNodes[1].textContent);
        maskBack.setAttribute('mask', 0);
    } else {
        for (let i = 0; ; i++) {
            if (modalWraps[i] === undefined) {
                modalWraps[i - 1].style.display = 'none';
                modalMasks[i - 1].style.display = 'none';
                chatHeaderActionsInner.style.display = 'none'; // кнопки сверху
                chatNotesButton.style.display = 'none'; // кнопка заметок
                maskBack.style.display = '';

                maskBack.setAttribute('name', userInfoPanel.firstChild.firstChild.textContent);
                maskBack.setAttribute('email', userDetailsList.childNodes[0].childNodes[1].textContent);
                maskBack.setAttribute('phone', userDetailsList.childNodes[1].childNodes[1].textContent);
                maskBack.setAttribute('mask', i - 1);
                break;
            }
        }
    }
};

butteachid.onclick = function () { // копирует в буфер ID П при создании задачи через АФ интеграцию
    // Find the 'teacher' user type and get the user's id.
    const userTypeList = document.getElementsByClassName('expert-user_details-list')[1];
    let getidusrteachreq;
    for (let i = 0; i < userTypeList.childElementCount; i++) {
        const childNode = userTypeList.childNodes[i];
        if (childNode.childNodes[1].textContent === "teacher") {
            for (let j = 0; j < userTypeList.childElementCount; j++) {
                if (userTypeList.childNodes[j].firstChild.textContent === "id") {
                    getidusrteachreq = userTypeList.childNodes[j].childNodes[1].textContent.split(' ')[0];
                    copyToClipboard(getidusrteachreq);
                    break;
                }
            }
            break;
        }
    }
}

butstdid.onclick = function () {  // копирует в буфер ID У из секции nextclass-StudentId при создании задачи через АФ интеграцию
    // Get the element with the class "expert-user_details-list"
    const userDetailsList = document.getElementsByClassName('expert-user_details-list')[1];

    // Loop through the child nodes of the element
    for (const child of userDetailsList.childNodes) {
        // Check if the first child node has the text content "nextClass-studentId"
        if (child.firstChild.textContent === "nextClass-studentId") {
            // Get the text content of the grandchild node
            const getidusrstud = child.childNodes[1].textContent;

            // Call the copyToClipboard function with the getidusrstud variable as an argument
            copyToClipboard(getidusrstud);
        }
    }
};

butteachidfstd.onclick = function () { // копирует в буфер ID П из секции nextclass-TeacherId при обращении У и создании задачи через АФ интеграцию
    const detailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const teacherIdNode = Array.from(detailsList.childNodes).find(node => node.firstChild.textContent == "nextClass-teacherId");
    if (teacherIdNode) {
        getidusrsteach = teacherIdNode.childNodes[1].textContent;
        copyToClipboard(getidusrsteach);
    }
}

buttonservid.onclick = function () { //копирует в буфер nextClass-educationServiceId при обращении П во время крита услугу ученика при интеграции в форме АФ
    const detailsList = document.getElementsByClassName('expert-user_details-list')[1];
    const serviceIdNode = Array.from(detailsList.childNodes).find(node => node.firstChild.textContent == "nextClass-educationServiceId");
    if (serviceIdNode) {
        getservidst = serviceIdNode.childNodes[1].textContent;
        copyToClipboard(getservidst);
    }
}

buttoncontactstudent.onclick = function() {
	copyToClipboard('Обратился П. Связаться с У');
	sendComment('Обратился П. Связаться с У')
}

buttoncontactteacher.onclick = function() {
	copyToClipboard('Обратился У. Связаться с П');
	sendComment('Обратился У. Связаться с П')
}

teachneotv.onclick = function() {
	copyToClipboard('Крит Н.О. П');
	sendComment('Крит Н.О. П')
}

studneotv.onclick = function() {
	copyToClipboard('Крит Н.О. У');
	sendComment('Крит Н.О. У')
}

setInterval(screenshots, 5000)
setInterval(addbuttonsintegration, 1000)
setInterval(remandressl, 3000);
setInterval(closeTerms, 500);
setInterval(checJiraF, 1000);

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
        fetch("https://uat.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
            },
            "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    document.getElementById('inp').value = "";
    refCurTimer(time)
}

document.getElementById('hideMenuMain').onclick = function () { // кнопка hide на главном окне скрипта
    var elements = ['AF_helper', 'cstmTmplates', 'AF_Links', 'AF_AlarmClock', 'AF_Stat', 'AF_LessonStatus', 'AF_Linksd', 'AF_Settings'];
    elements.forEach(e => {if (document.getElementById(e)){setDisplayStyle(document.getElementById(e), 'none')}});
    document.getElementById('scriptBut').classList.remove('activeScriptBtn')
}