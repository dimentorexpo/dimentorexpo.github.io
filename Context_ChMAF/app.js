var showForPages = ["*://*.skyeng.ru/*", "*://skyeng.autofaq.ai/*",	"*://*.slack.com/*","*://jira.skyeng.tech/*"]; //фильтр чтобы контекстное меню отображалась для сайтов из внесенного перечня иначе если не добавить потом при обьявлении родительских опций они будут на всех сайтах эта "documentUrlPatterns":showForPages конструкция и вносится при обьявлении для фильтрации страниц 

//переменные каналов отправки сообщений
var ChanelDev = "C9H76AC9X";
var ChanelTimelog = "GF9EKHE3W";

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

chrome.contextMenus.create({"title": "🆘 #dev-disaster", "contexts":["page"], "parentId": "mainoption", "onclick": sendtodisaster}); //опция для копирования ссылки для отправки сообщения в дизастер
async function sendtodisaster(i,t){
	
	let tokenslack;
	await fetch('https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1').then(r=>r.text()).then(r=>slackdata=r)
	tokenslack = slackdata.match(/"token":"(.*?)"/)[1]
	localStorage.setItem('tokenslack', slackdata.match(/"token":"(.*?)"/)[1])
	
	var curTime = new Date();
    var newTime = curTime / 1000;

	
	let answersend = confirm("Вы уверены, что хотите пробудить Древнее Зло и воззвать к команде Фиксиков для исправления катаклизма на платформе?\nОК - Для продолжения. Отмена закрыть форму.")
	if (answersend) {
	var textmsg = prompt('Введите ваш текст в это поле');
	if (textmsg !== null){
        if (textmsg.length > 3) {
			await fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=2420e4bd-"+newTime+"&_x_csid=JqSHDZDdQTc&slack_route=T03A3SUFB&_x_version_ts=1660105648&_x_gantry=true&fp=78", {
				"headers": {
				  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryb25rqGftA7WL10lj",
				},
				"referrerPolicy": "no-referrer",
				"body": `------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\n${ChanelDev}\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n"+parseInt(newTime)+".xxxxx5\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"emoji\",\"name\":\"sos\"},{\"type\":\"text\",\"text\":\" ${textmsg}\"}]}]}]\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryb25rqGftA7WL10lj\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryb25rqGftA7WL10lj--\r\n`,
				"method": "POST",
				"mode": "cors",
				"credentials": "include"
		  	}).then(r=>r.json()).then(r=>receiveddata=r)
			let tsresponse = receiveddata.ts
				console.log(tsresponse)
				
				
		fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=3a93dd32-"+newTime+"&_x_csid=sAzg2yAKI6M&slack_route=T03A3SUFB&_x_version_ts=1660335442&_x_gantry=true&fp=78", {
		  "headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZof5FejLN2A0ZxYw",
		  },
		  "referrerPolicy": "no-referrer",
		  "body": `------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\n${ChanelDev}\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n${newTime}.xxxxx2\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"xArgs\"\r\n\r\n{}\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"reply_broadcast\"\r\n\r\nfalse\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"thread_ts\"\r\n\r\n${tsresponse}\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"unfurl\"\r\n\r\n[]\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"text\",\"text\":\"_tech-problems_\"}]}]}]\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"include_channel_perm_error\"\r\n\r\ntrue\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n${tokenslack}\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryZof5FejLN2A0ZxYw--\r\n`,
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});
						
		} else alert("Текст слишком короткий");
	} else console.log("Нажата кнопка Отмена");
	} else console.log("Не уверен, жаль, повезет в другой раз!")
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

chrome.contextMenus.create({"title": "♐ Открыть ТШ по хешу: %s", "contexts":["selection"], "parentId": "selMainOption", "onclick": opntshash}); //опция для копирования ссылки для пропуска АП
function opntshash(i){
var createProperties = { url: encodeURI("https://video-trouble-shooter.skyeng.ru/?hash="  +  i.selectionText) }
	chrome.tabs.create(createProperties);
}
// testlinkPKM

var linkparent = chrome.contextMenus.create( {"id":"linkOption","title": "AutoFaq Support Master", "contexts":["link"], "documentUrlPatterns":showForPages} ); // обьявляем контекстное меню при выделении текста отвечает свойство selection

let MMostOperId ='';

chrome.contextMenus.create({"title": "🚫 Отмена ТП1Л (исход)", "contexts":["link"], "parentId": "linkOption", "onclick": cancelishodcall}); //опция для копирования ссылки для test msg

async function cancelishodcall(i,t) {
	
	if (localStorage.getItem('matermost_oid') == null) {

		await fetch("https://mattermost.skyeng.tech/api/v4/users/me").then(r=>r.json()).then(r=>rcvdata=r)
		MMostOperId = rcvdata.id
		localStorage.setItem('matermost_oid', MMostOperId)
	} else {
		MMostOperId = localStorage.getItem('matermost_oid')
	}

	if (MMostOperId) {
			fetch("https://mattermost.skyeng.tech/api/v4/posts", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru",
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"x-requested-with": "XMLHttpRequest"
			  },
			  "referrerPolicy": "no-referrer",
			  "body": `{\"message\":\"@techsupp-1line-crm2 ${i.linkUrl} Охрана - отмена 🚫\",\"channel_id\":\"pspyooisr3rd7qzx9as8uc96xc\",\"pending_post_id\":\"${MMostOperId}:\",\"user_id\":\"${MMostOperId}\"}`,
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			});
			
		let chathashfromdiv = t.url.split('/')[5]
		let sesid;

		await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
			.then(r => r.json()).then(r => rdata = r)
		sesid = rdata.sessionId;

		let notemsg = '<p>' + 'Передано в канал #techsupport:' + '</p>';

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
			
	}
	
}

chrome.contextMenus.create({"title": "💬 Написать ТП1Л (исход) со ссылкой", "contexts":["link"], "parentId": "linkOption", "onclick": sendtestmsgcustommsg}); //опция для копирования ссылки для test msg

async function sendtestmsgcustommsg(i,t) {
	
	if (localStorage.getItem('matermost_oid') == null) {

		await fetch("https://mattermost.skyeng.tech/api/v4/users/me").then(r=>r.json()).then(r=>rcvdata=r)
		MMostOperId = rcvdata.id
		localStorage.setItem('matermost_oid', MMostOperId)
	} else {
		MMostOperId = localStorage.getItem('matermost_oid')
	}

	if (MMostOperId) {
		
			var textmsg = prompt('Введите ваш текст в это поле');
	
	if (textmsg !== null){
		if (textmsg.length > 3) {
			fetch("https://mattermost.skyeng.tech/api/v4/posts", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru",
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"x-requested-with": "XMLHttpRequest"
			  },
			  "referrerPolicy": "no-referrer",
			  "body": `{\"message\":\"@techsupp-1line-crm2 ${i.linkUrl} ${textmsg}\",\"channel_id\":\"pspyooisr3rd7qzx9as8uc96xc\",\"pending_post_id\":\"${MMostOperId}:\",\"user_id\":\"${MMostOperId}\"}`,
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			});
			
		let chathashfromdiv = t.url.split('/')[5]
		let sesid;

		await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
			.then(r => r.json()).then(r => rdata = r)
		sesid = rdata.sessionId;

		let notemsg = '<p>' + 'Передано в канал #techsupport' + '</p>';

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
			
			
		} else alert("Текст слишком короткий");
	} else console.log("Нажата кнопка Отмена");
	}
	
}


chrome.contextMenus.create({"title": "🚫 Отмена 2ЛТП", "contexts":["link"], "parentId": "linkOption", "onclick": cancelsecondline}); //опция для копирования ссылки для test msg

async function cancelsecondline(i,t) {
	
	if (localStorage.getItem('matermost_oid') == null) {

		await fetch("https://mattermost.skyeng.tech/api/v4/users/me").then(r=>r.json()).then(r=>rcvdata=r)
		MMostOperId = rcvdata.id
		localStorage.setItem('matermost_oid', MMostOperId)
	} else {
		MMostOperId = localStorage.getItem('matermost_oid')
	}

	if (MMostOperId) {
			fetch("https://mattermost.skyeng.tech/api/v4/posts", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru",
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"x-requested-with": "XMLHttpRequest"
			  },
			  "referrerPolicy": "no-referrer",
			  "body": `{\"message\":\"@techsupport-2line ${i.linkUrl} Охрана - отмена 🚫\",\"channel_id\":\"pspyooisr3rd7qzx9as8uc96xc\",\"pending_post_id\":\"${MMostOperId}:\",\"user_id\":\"${MMostOperId}\"}`,
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			});
			
		let chathashfromdiv = t.url.split('/')[5]
		let sesid;

		await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
			.then(r => r.json()).then(r => rdata = r)
		sesid = rdata.sessionId;

		let notemsg = '<p>' + 'Передано в канал #techsupport:' + '</p>';

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
			
	}
	
}

chrome.contextMenus.create({"title": "💬 Написать 2ЛТП со ссылкой", "contexts":["link"], "parentId": "linkOption", "onclick": send2ndlinetestmsgcustommsg}); //опция для копирования ссылки для test msg

async function send2ndlinetestmsgcustommsg(i,t) {
	
	if (localStorage.getItem('matermost_oid') == null) {

		await fetch("https://mattermost.skyeng.tech/api/v4/users/me").then(r=>r.json()).then(r=>rcvdata=r)
		MMostOperId = rcvdata.id
		localStorage.setItem('matermost_oid', MMostOperId)
	} else {
		MMostOperId = localStorage.getItem('matermost_oid')
	}

	if (MMostOperId) {
		
			var textmsg = prompt('Введите ваш текст в это поле');
	
	if (textmsg !== null){
		if (textmsg.length > 3) {
			fetch("https://mattermost.skyeng.tech/api/v4/posts", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru",
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"x-requested-with": "XMLHttpRequest"
			  },
			  "referrerPolicy": "no-referrer",
			  "body": `{\"message\":\"@techsupport-2line ${i.linkUrl} ${textmsg}\",\"channel_id\":\"pspyooisr3rd7qzx9as8uc96xc\",\"pending_post_id\":\"${MMostOperId}:\",\"user_id\":\"${MMostOperId}\"}`,
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			});
			
		let chathashfromdiv = t.url.split('/')[5]
		let sesid;

		await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
			.then(r => r.json()).then(r => rdata = r)
		sesid = rdata.sessionId;

		let notemsg = '<p>' + 'Передано в канал #techsupport' + '</p>';

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
			
			
		} else alert("Текст слишком короткий");
	} else console.log("Нажата кнопка Отмена");
	}
	
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