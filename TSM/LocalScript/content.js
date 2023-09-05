function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
include("https://dimentorexpo.github.io/TSM/TSM.js");

const servicesites = ["skyeng.autofaq.ai","crm2.skyeng.ru"];

if (servicesites.includes(location.host)) {  initTSM() }

function initTSM() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "CallMMComment") {
            const Chatid = message.Chatid;
            console.log("Получен Chatid из background.js:", Chatid);
            const messlink = 'https://mattermost.skyeng.tech/skyeng/pl/' + Chatid;
            const SendMessage = `Передано в канал #techsupport: <a href="${messlink}" target="_blank" rel="noopener">ссылка</a>`;
            const SendMessageCRM = `Передано в канал #techsupport и ссылка скопирована в буфер обмена: ${messlink}`;
                
            if (location.href.includes('crm2.skyeng.ru')) {
                copyToClipboardTSM(messlink);
                alert(SendMessageCRM);
            } else if (location.href.includes('skyeng.autofaq.ai/tickets/assigned')) {
                sendCommentTSM(SendMessage);
            }
        }
    });
}