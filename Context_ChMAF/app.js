var showForPages = ["*://*.skyeng.ru/*", "*://skyeng.autofaq.ai/*",	"*://*.slack.com/*","*://jira.skyeng.tech/*"]; //фильтр чтобы контекстное меню отображалась для сайтов из внесенного перечня иначе если не добавить потом при обьявлении родительских опций они будут на всех сайтах эта "documentUrlPatterns":showForPages конструкция и вносится при обьявлении для фильтрации страниц 

var main = chrome.contextMenus.create( {"id":"mainoption","title": "AutoFaq Support Master", "documentUrlPatterns":showForPages} ); //обьявляем контекстное меню для страницы, отвечает свойство page и также в дочерних ветках

chrome.contextMenus.create({"title": "💸 Поиск платежа", "contexts":["page"], "parentId": "mainoption", "onclick": searchpayment}); //опция открывает поиск платежа
function searchpayment(i){
	var createProperties = {url: encodeURI("https://accounting.skyeng.ru/userpayment/search/transaction")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "💰 Начислятор / 📑 Подписки", "contexts":["page"], "parentId": "mainoption", "onclick": balanceinfo}); //опция открывает раздел Начислятор для просмотра баланса
function balanceinfo(i){
	var createProperties = {url: encodeURI("https://billing-api.skyeng.ru/operations")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "🧾 Сертификаты / 🎟 Промокоды", "contexts":["page"], "parentId": "mainoption", "onclick": certandpromo}); //опция открывает раздел Начислятор для просмотра баланса
function certandpromo(i){
	var createProperties = {url: encodeURI("https://billing-marketing.skyeng.ru/certificate/certSearch")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "📟 Timetable", "contexts":["page"], "parentId": "mainoption", "onclick": opentt}); //опция открывает Timetable
function opentt(i){
	var createProperties = {url: encodeURI("https://timetable.skyeng.ru/")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "📆 Календарь (Datsy)", "contexts":["page"], "parentId": "mainoption", "onclick": opencalendar}); //опция открывает Datsy календарь
function opencalendar(i){
	var createProperties = {url: encodeURI("https://datsy.ru/")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "💵 Компенсации", "contexts":["page"], "parentId": "mainoption", "onclick": makecompens}); //опция открывает Окно с компенсациями
function makecompens(i){
	var createProperties = {url: encodeURI("https://billing-marketing.skyeng.ru/accrual-operations/create")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "💋 Админка Talks", "contexts":["page"], "parentId": "mainoption", "onclick": opentalksadm}); //опция открывает Окно с компенсациями
function opentalksadm(i){
	var createProperties = {url: encodeURI("https://vimbox.skyeng.ru/talks/admin/statistics")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "🏄‍♂️ Enable New Student", "contexts":["page"], "parentId": "mainoption", "onclick": enablens}); //опция открывает Окно с компенсациями
function enablens(i){
	var createProperties = {url: encodeURI("https://vimbox.skyeng.ru/start?enableNewStudent")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"id": "statusList", "title": "⚛ Статусы (timelog)", "contexts":["page"], "parentId": "mainoption"}); //опция открывает Окно с компенсациями
	
	var lastmsgId;
chrome.contextMenus.create({"title": "🟢 Заступил", "contexts":["page"], "parentId": "statusList", "onclick": setstatusonlinetest}); //опция для копирования ссылки для пропуска АП
async function setstatusonlinetest(i){
	
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	var curTime = new Date();
    var newTime = curTime / 1000;
	lastmsgId = 0
	localStorage.setItem('lastmsgId', 0)

	
	await fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=noversion-"+newTime+"&_x_csid=E6fL67nStxE&slack_route=T03A3SUFB&_x_version_ts=1660151243&_x_gantry=true&fp=78", {
		  "headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundarysp2yqVxwp4SLnI3M",
		  },
		  "referrerPolicy": "no-referrer",
		  "body": `------WebKitFormBoundarysp2yqVxwp4SLnI3M\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nGF9EKHE3W\r\n------WebKitFormBoundarysp2yqVxwp4SLnI3M\r\nContent-Disposition: form-data; name=\"attachments\"\r\n\r\n[\r\n\t{\r\n\t\t\"color\": \"#3CB371\",\r\n\t\t\"blocks\": [\r\n\t\t\t{\r\n\t\t\t\t\"type\": \"section\",\r\n\t\t\t\t\"text\": {\r\n\t\t\t\t\t\"type\": \"mrkdwn\",\r\n\t\t\t\t\t\"text\": \"Заступил 🤠 :logo-play:\"\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t]\r\n\t}\r\n]\r\n------WebKitFormBoundarysp2yqVxwp4SLnI3M\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundarysp2yqVxwp4SLnI3M\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nsend_block_kit_to_slack\r\n------WebKitFormBoundarysp2yqVxwp4SLnI3M\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundarysp2yqVxwp4SLnI3M--\r\n`,
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		}).then(r=>r.json()).then(r=>receiveddata=r)
		
		localStorage.setItem('lastmsgId', receiveddata.ts)
		
		// lastmsgId =  receiveddata.ts
	}
	
	chrome.contextMenus.create({"title": "🟡 Перерыв", "contexts":["page"], "parentId": "statusList", "onclick": setstatuspausetest}); //опция для копирования ссылки для пропуска АП
async function setstatuspausetest(i){
	
    var curTime = new Date();
    var newTime = curTime / 1000;
	
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	if (localStorage.getItem('lastmsgId') != 0) {
		lastmsgId = localStorage.getItem('lastmsgId');
		fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=bb7803d4-"+newTime+"&_x_csid=bR5UwAhBDFI&slack_route=T03A3SUFB&_x_version_ts=1660151243&_x_gantry=true&fp=78", {
		  "headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryoABPETmrDK7BfDto",
		  },
		  "referrerPolicy": "no-referrer",
		  "body": `------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nGF9EKHE3W\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n${newTime}.xxxxx5\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"xArgs\"\r\n\r\n{}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"reply_broadcast\"\r\n\r\nfalse\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"thread_ts\"\r\n\r\n${lastmsgId}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[]\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"attachments\"\r\n\r\n[\r\n\t{\r\n\t\t\"color\": \"#f2c744\",\r\n\t\t\"blocks\": [\r\n\t\t\t{\r\n\t\t\t\t\"type\": \"section\",\r\n\t\t\t\t\"text\": {\r\n\t\t\t\t\t\"type\": \"mrkdwn\",\r\n\t\t\t\t\t\"text\": \"Перерыв 🍔 :play-pause: \"\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t]\r\n\t}\r\n]\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryoABPETmrDK7BfDto--\r\n`,
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});
	}
		
	}	
	
chrome.contextMenus.create({"title": "🟢 Продолжаю", "contexts":["page"], "parentId": "statusList", "onclick": setstatuoncontinue}); //опция для копирования ссылки для пропуска АП
async function setstatuoncontinue(i){
	
    var curTime = new Date();
    var newTime = curTime / 1000;
	
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	if (localStorage.getItem('lastmsgId') != 0) {
		lastmsgId = localStorage.getItem('lastmsgId');
		fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=bb7803d4-"+newTime+"&_x_csid=bR5UwAhBDFI&slack_route=T03A3SUFB&_x_version_ts=1660151243&_x_gantry=true&fp=78", {
		  "headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryoABPETmrDK7BfDto",
		  },
		  "referrerPolicy": "no-referrer",
		  "body": `------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nGF9EKHE3W\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n${newTime}.xxxxx5\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"xArgs\"\r\n\r\n{}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"reply_broadcast\"\r\n\r\nfalse\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"thread_ts\"\r\n\r\n${lastmsgId}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[]\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"attachments\"\r\n\r\n[\r\n\t{\r\n\t\t\"color\": \"#3CB371\",\r\n\t\t\"blocks\": [\r\n\t\t\t{\r\n\t\t\t\t\"type\": \"section\",\r\n\t\t\t\t\"text\": {\r\n\t\t\t\t\t\"type\": \"mrkdwn\",\r\n\t\t\t\t\t\"text\": \"Продолжаю 🤠  :logo-play: \"\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t]\r\n\t}\r\n]\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryoABPETmrDK7BfDto--\r\n`,
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});
	}
	}
	
chrome.contextMenus.create({"title": "🔴 Закончил", "contexts":["page"], "parentId": "statusList", "onclick": setstatusoffline}); //опция для копирования ссылки для пропуска АП
async function setstatusoffline(i){
	
    var curTime = new Date();
    var newTime = curTime / 1000;
	
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	if (localStorage.getItem('lastmsgId') != 0) {
		lastmsgId = localStorage.getItem('lastmsgId');
		fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=bb7803d4-"+newTime+"&_x_csid=bR5UwAhBDFI&slack_route=T03A3SUFB&_x_version_ts=1660151243&_x_gantry=true&fp=78", {
		  "headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryoABPETmrDK7BfDto",
		  },
		  "referrerPolicy": "no-referrer",
		  "body": `------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nGF9EKHE3W\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n${newTime}.xxxxx5\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"xArgs\"\r\n\r\n{}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"reply_broadcast\"\r\n\r\nfalse\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"thread_ts\"\r\n\r\n${lastmsgId}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[]\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"attachments\"\r\n\r\n[\r\n\t{\r\n\t\t\"color\": \"#FF0000	\",\r\n\t\t\"blocks\": [\r\n\t\t\t{\r\n\t\t\t\t\"type\": \"section\",\r\n\t\t\t\t\"text\": {\r\n\t\t\t\t\t\"type\": \"mrkdwn\",\r\n\t\t\t\t\t\"text\": \"Закончил :logo-stop: \"\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t]\r\n\t}\r\n]\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryoABPETmrDK7BfDto\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryoABPETmrDK7BfDto--\r\n`,
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});
		
		localStorage.setItem('lastmsgId', 0)
	}
	}



var selmain = chrome.contextMenus.create( {"id":"selMainOption","title": "AutoFaq Support Master", "contexts":["selection"], "documentUrlPatterns":showForPages} ); // обьявляем контекстное меню при выделении текста отвечает свойство selection

chrome.contextMenus.create({"title": "🔎Info ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": openinfo}); 
function openinfo(i,t) { 

            let selid = i.selectionText
            console.log(selid)
            const laserExtensionId = "kggpdmfnfmmkneemhknlojemcjmdlpjb";
            let messageValue = {
                        message: 'open-user-info',
                        userId: selid,
                    }
            console.log(messageValue)
            
            let tabId = t.id
            console.log(tabId)
            
            const message = {
                messageValue,
                tabId
            }

            chrome.runtime.sendMessage(laserExtensionId,
                message,
            );
} 

chrome.contextMenus.create({"title": "🏡 Ссылка-логинер для ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": dologginer}); //опция для копирования ссылки для пропуска АП
function dologginer(i){

// Данные для form-data токен можно взять как тебе удобно
let userId = i.selectionText
let tokenId = null

// fetch
fetch("https://id.skyeng.ru/admin/auth/login-links", {
    headers: {"content-type": "application/x-www-form-urlencoded"},
    referrer: "https://id.skyeng.ru/admin/auth/login-links",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${userId}+&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenId}`,
    method: "POST",
    mode: "cors",
    credentials: "include"
})
    .then(res => res.text())
    .then(textHtml => {
        let domPars = new DOMParser()
        // let loginLink = domPars.parseFromString(textHtml, `text/html`).querySelector("[value^='https://id.skyeng.ru/auth/login-link/']").value
		let testlink =domPars.parseFromString(textHtml, `text/html`).querySelectorAll("[value^='https://id.skyeng.ru/auth/login-link/']")
		        
        // Выводит последнюю ссылку в инпуте 
        console.log(`Loginner: ${testlink[testlink.length-1].value}`)
		
		var copyloginlnk = document.createElement("input");
		copyloginlnk.setAttribute("value", testlink[testlink.length-1].value)
		document.body.appendChild(copyloginlnk);
		copyloginlnk.select();
		document.execCommand("copy");
		document.body.removeChild(copyloginlnk);

    })
}

chrome.contextMenus.create({"title": "🕵️‍♂️ Открыть CRM для ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": opencrmid}); //опция для открытия СРМки по выделенному ID пользователя
function opencrmid(i){
	var createProperties = { url: encodeURI("https://crm2.skyeng.ru/persons/" + i.selectionText) };
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "💳 Список рассрочек для ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": creditpayments}); //опция для открытия СРМки по выделенному ID пользователя
function creditpayments(i){
	var createProperties = { url: encodeURI("https://accounting.skyeng.ru/credit/list?studentId=" + i.selectionText) };
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "🆔 Отредактировать в админке ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": editadmacc}); //опция для открытия СРМки по выделенному ID пользователя
function editadmacc(i){
	var createProperties = { url: encodeURI("https://id.skyeng.ru/admin/users/" + i.selectionText + "/update-contacts") };
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "🎓 Homework Adult ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": copyidstudforhw}); //опция для копирования кода с ID ученика, чтобы в браузере под П открыть и посмотреть его домашки (для Adult)
function copyidstudforhw(i){
	var aux = document.createElement("input");
	aux.setAttribute("value", "https://vimbox.skyeng.ru/student/"  +  i.selectionText + "/homework")
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

chrome.contextMenus.create({"title": "🧾 Отчет МВУ ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": copymvureport}); //опция для копирования ссылки на корректную форму отчета МВУ
function copymvureport(i){
	var aux = document.createElement("input");
	aux.setAttribute("value", "https://marketing-core.skyeng.ru/report/html/report?student_id="  +  i.selectionText)
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

chrome.contextMenus.create({"title": "💨 ID Услуги Skip АП", "contexts":["selection"], "parentId": "selMainOption", "onclick": copytoskipap}); //опция для копирования ссылки для пропуска АП
function copytoskipap(i){
	var aux = document.createElement("input");
	aux.setAttribute("value", "https://student.skyeng.ru/product-stage?stage=auto-schedule&educationServiceId="  +  i.selectionText)
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

chrome.contextMenus.create({"title": "💨 ID Услуги Skip Onboarding", "contexts":["selection"], "parentId": "selMainOption", "onclick": copytoskipap}); //опция для копирования ссылки для пропуска АП
function copytoskipap(i){
	var aux = document.createElement("input");
	aux.setAttribute("value", "https://student.skyeng.ru/product-stage?stage=onboarding&educationServiceId="  +  i.selectionText)
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

chrome.contextMenus.create({"title": "👨‍🏫 Открыть ТРМ2.0 ID: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": opentrm}); //опция для копирования ссылки для пропуска АП
function opentrm(i){
var createProperties = { url: encodeURI("https://trm.skyeng.ru/teacher/"  +  i.selectionText) }
	chrome.tabs.create(createProperties);
}


// testlinkPKM

var linkparent = chrome.contextMenus.create( {"id":"linkOption","title": "AutoFaq Support Master", "contexts":["link"], "documentUrlPatterns":showForPages} ); // обьявляем контекстное меню при выделении текста отвечает свойство selection

chrome.contextMenus.create({"title": "🚫 Отмена ТП1Л (исход)", "contexts":["link"], "parentId": "linkOption", "onclick": cancelishodcall}); //опция для копирования ссылки для пропуска АП
async function cancelishodcall(i,t){
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	
	var curTime = new Date();
    var newTime = curTime / 1000;
	
	fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=2420e4bd-"+newTime+"&_x_csid=JqSHDZDdQTc&slack_route=T03A3SUFB&_x_version_ts=1660105648&_x_gantry=true&fp=78", {
  "headers": {
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryb25rqGftA7WL10lj",
  },
  "referrerPolicy": "no-referrer",
  "body": `------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nG4A2UB8KB\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n"+parseInt(newTime)+".xxxxx5\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[{\"url\":\"${i.linkUrl}\"}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"usergroup\",\"usergroup_id\":\"SQN8E1FL6\"},{\"type\":\"text\",\"text\":\" \"},{\"type\":\"link\",\"url\":\"${i.linkUrl}\"},{\"type\":\"text\",\"text\":\" охрана - отмена \"}, {\"type\":\"emoji\",\"name\":\"no_entry_sign\"}]}]}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryb25rqGftA7WL10lj--\r\n`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

}

chrome.contextMenus.create({"title": "💬 Написать ТП1Л (исход) со ссылкой", "contexts":["link"], "parentId": "linkOption", "onclick": cancelishodcallwithowntext}); //опция для копирования ссылки для пропуска АП
async function cancelishodcallwithowntext(i,t){
	
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	var curTime = new Date();
    var newTime = curTime / 1000;
	var textmsg = prompt('Введите ваш текст в это поле');
	
	fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=2420e4bd-"+newTime+"&_x_csid=JqSHDZDdQTc&slack_route=T03A3SUFB&_x_version_ts=1660105648&_x_gantry=true&fp=78", {
  "headers": {
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryb25rqGftA7WL10lj",
  },
  "referrerPolicy": "no-referrer",
  "body": `------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nG4A2UB8KB\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n"+parseInt(newTime)+".xxxxx5\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[{\"url\":\"${i.linkUrl}\"}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"usergroup\",\"usergroup_id\":\"SQN8E1FL6\"},{\"type\":\"text\",\"text\":\" \"},{\"type\":\"link\",\"url\":\"${i.linkUrl}\"},{\"type\":\"text\",\"text\":\" ${textmsg}\"}]}]}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryb25rqGftA7WL10lj--\r\n`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
	
}

chrome.contextMenus.create({"title": "🚫 Отмена 2ЛТП", "contexts":["link"], "parentId": "linkOption", "onclick": cancelsecondline}); //опция для копирования ссылки для пропуска АП
async function cancelsecondline(i,t){
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
			await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
			tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
			localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	var curTime = new Date();
    var newTime = curTime / 1000;
	
	fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=2420e4bd-"+newTime+"&_x_csid=JqSHDZDdQTc&slack_route=T03A3SUFB&_x_version_ts=1660105648&_x_gantry=true&fp=78", {
  "headers": {
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryb25rqGftA7WL10lj",
  },
  "referrerPolicy": "no-referrer",
  "body": `------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nG4A2UB8KB\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n"+parseInt(newTime)+".xxxxx5\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[{\"url\":\"${i.linkUrl}\"}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"usergroup\",\"usergroup_id\":\"SGADAJL1Y\"},{\"type\":\"text\",\"text\":\" \"},{\"type\":\"link\",\"url\":\"${i.linkUrl}\"},{\"type\":\"text\",\"text\":\" охрана - отмена \"}, {\"type\":\"emoji\",\"name\":\"no_entry_sign\"}]}]}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryb25rqGftA7WL10lj--\r\n`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
	
}

chrome.contextMenus.create({"title": "💬 Написать 2ЛТП со ссылкой", "contexts":["link"], "parentId": "linkOption", "onclick": cancelsecondlinewithowntext}); //опция для копирования ссылки для пропуска АП
async function cancelsecondlinewithowntext(i,t){
	
	let tokenslack;
	if (localStorage.getItem('tokenslack') == null) { 
		await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
		tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
		localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	} else tokenslack = localStorage.getItem('tokenslack');
	
	var curTime = new Date();
    var newTime = curTime / 1000;
	var textmsg = prompt('Введите ваш текст в это поле');
	
	fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=2420e4bd-"+newTime+"&_x_csid=JqSHDZDdQTc&slack_route=T03A3SUFB&_x_version_ts=1660105648&_x_gantry=true&fp=78", {
  "headers": {
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryb25rqGftA7WL10lj",
  },
  "referrerPolicy": "no-referrer",
  "body": `------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nG4A2UB8KB\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n"+parseInt(newTime)+".xxxxx5\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[{\"url\":\"${i.linkUrl}\"}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"usergroup\",\"usergroup_id\":\"SGADAJL1Y\"},{\"type\":\"text\",\"text\":\" \"},{\"type\":\"link\",\"url\":\"${i.linkUrl}\"},{\"type\":\"text\",\"text\":\" ${textmsg}\"}]}]}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryb25rqGftA7WL10lj--\r\n`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
	
}

// функция общения с stat.js чтобы отправлять запрос на получение какой либо инфы для обхода CORS
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	    if (request.name === "Ctxt") {
			if (request.question == 'sendResponse') {
				fetch(request.addr, request.options)
					.then(response => response.text())
					.then(result => { sendResponse({answer: result, respName: request.respName}) });
				return true;
			}
		}
});
