function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
include("https://dimentorexpo.github.io/TSM/TSM.js");

let servicesites = ["skyeng.autofaq.ai","crm2.skyeng.ru"];

if (servicesites.includes(location.host)) {  initTSM() }

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

function initTSM() {
    console.log("initTSM start");
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "CallMMComment") {
            const Chatid = message.Chatid;
            console.log("Получен Chatid из background.js:", Chatid);
            const messlink = 'https://mattermost.skyeng.tech/skyeng/pl/' + Chatid;
            console.log(messlink);
            const SendMessage = 'Передано в канал #techsupport: ' + messlink;
            console.log(SendMessage);
                
            if (location.host.includes('crm2.skyeng.ru')) {
                console.log("crm2.skyeng.ru");
                copyToClipboardTSM(messlink);
                console.log(messlink);
                alert(SendMessage);
            } else if (location.host.includes('skyeng.autofaq.ai/tickets/assigned')) {
                console.log("skyeng.autofaq.ai/tickets/assigned");
                sendComment(SendMessage);
                console.log(SendMessage);
            }
        }
    });
}