let allowedSites = ["vimbox.skyeng.ru", "new-teachers.skyeng.ru", "teachers.skyeng.ru", "student.skyeng.ru", "ttc.skyeng.ru"];
let servicesites = ["skyeng.autofaq.ai","crm2.skyeng.ru"];
let token;

function loadmoduls(TSMScript){ // загрузка доп. модулей расширения
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
    TSMScript.forEach(function (info) {
        promiseData.push(create(info));
    });
    Promise.all(promiseData).then(function () {
        console.log('%c ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄ \n▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌\n ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌   ▐░▐░▌\n     ▐░▌     ▐░▌          ▐░▌▐░▌ ▐░▌▐░▌\n     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▐░▌ ▐░▌\n     ▐░▌     ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌\n     ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌▐░▌   ▀   ▐░▌\n     ▐░▌               ▐░▌▐░▌       ▐░▌\n     ▐░▌      ▄▄▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌\n     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌\n      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  \n', 'color: Limegreen;');
    }).catch(function (gfgData) {
        console.log(gfgData + " failed to load!");
    });
}

function firstLoad() { //первичаня загрузка страницы
        let mystyles = document.createElement('link')
		mystyles.rel = 'stylesheet'
		mystyles.href = "https://dimentorexpo.github.io/TSM/CSS/styles.css" // подключаем модуль стилей 
		document.querySelector('head').append(mystyles)

        let TSMScript = [
        "https://dimentorexpo.github.io/TSM/Modules/main.js", // подключаем модуль главного окна
		"https://dimentorexpo.github.io/TSM/Modules/chats.js", // подключаем модуль окна работы с чатами
        "https://dimentorexpo.github.io/TSM/Modules/lessoninfo.js", // подключаем модуль окна получения информации по уроку
        "https://dimentorexpo.github.io/TSM/Modules/students.js", // подключаем модуль окна работы с учениками
        "https://dimentorexpo.github.io/TSM/Modules/exercises.js", // подключаем модуль окна работы с домашками
        "https://dimentorexpo.github.io/TSM/Modules/vocabulary.js" // подключаем модуль окна словаря
		];
    loadmoduls(TSMScript)
}

if (allowedSites.includes(location.host)) { firstLoad() } // если нужная страница загружаем расширение

/* if (servicesites.includes(location.host)) { // Если запущено CRM2 или AF
    window.addEventListener('CallMMComment', (event) => {
        const Chatid = event.detail.Chatid;
        const messlink = 'https://mattermost.skyeng.tech/skyeng/pl/' + Chatid;
        const SendMessage = 'Передано в канал #techsupport: ' + messlink;
        
        if (location.host.includes('crm2.skyeng.ru')) {
            copyToClipboardTSM(messlink);
            alert(SendMessage);
        } else if (location.host.includes('skyeng.autofaq.ai/tickets/assigned')) {
            sendComment(SendMessage);
        }
    });
} */
function initTSM() {
chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "TSM-script") {
        port.onMessage.addListener((message) => {
            if (message.action === "CallMMComment") {
                const Chatid = message.Chatid;
                const messlink = 'https://mattermost.skyeng.tech/skyeng/pl/' + Chatid;
                const SendMessage = 'Передано в канал #techsupport: ' + messlink;
                
                if (location.host.includes('crm2.skyeng.ru')) {
                    copyToClipboardTSM(messlink);
                    alert(SendMessage);
                } else if (location.host.includes('skyeng.autofaq.ai/tickets/assigned')) {
                    sendComment(SendMessage);
                }
            }
        });
    }
});
}

function checkelementt(a) { // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX, a.clientY)

    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT') {
        return true;
    }
    return false;
}

async function getUserId() { // получаем Id пользователя
    try {
        const response = await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            credentials: "include",
            method: "POST"
        });

        if (response.ok) {
            const data = await response.json();
            const userId = data?.user?.id || '';
            return userId;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
//        return '';
    }
}

function addOption(oListbox, text, value) {  //функция добавления опции в список
    var oOption = document.createElement("option");
    oOption.appendChild(document.createTextNode(text));
    oOption.setAttribute("value", value);
    oListbox.appendChild(oOption);
}

const copyToClipboardTSM = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function fetchaddchat(userid1, userid2, method) { //вспомогательная функция просто добавления чата мекжду пользователям
    fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://vimbox.skyeng.ru/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"userId1\":${userid1},\"userId2\":${userid2}}`,
        "method": method,
        "mode": "cors",
        "credentials": "include"
    });
}

async function sendComment(txt) { // функция отправки комментария
    var values = await getInfo()
    activeConvId = values[0]; uid = values[1];
    if (activeConvId, uid) {
        var txt2 = txt.split('\n').join('\\n')
        var txt2 = txt2.split("\"").join("\\\"")
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
            },
            "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + activeConvId + "\",\"text\":\"" + txt2 + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    }
}

async function getInfo() { //функция получения инфо о чате и сервис айди
    var sessionId = "";
    var activeConvId = getChatId();
    if (activeConvId){
        await fetch("https://skyeng.autofaq.ai/api/conversations/" + activeConvId)
			.then(r => r.json()).then(r => rdata = r)
		sesid = rdata.sessionId;
    } else { activeConvId = "" }

    return [activeConvId, sessionId]
}

function getChatId() {
    const hrefnow = window.location.href;
    let chatId = '';
    if (hrefnow.includes('tickets/assigned')) {
        const iframeDocument = document.querySelector('[class^="NEW_FRONTEND"]').contentDocument || document.querySelector('[class^="NEW_FRONTEND"]').contentWindow.document;
        const ConvArray = iframeDocument.querySelectorAll('#__next [class^="DialogsCard_Card"]');

        for (let i = 0; i < ConvArray.length; i++) {
            if (ConvArray[i].getAttribute('aria-selected') === 'true') {
                chatId = ConvArray[i].getAttribute('data-conv-id');
                break;
            }
        }
    }

    return chatId;
}

window.addEventListener('DOMContentLoaded', initTSM);