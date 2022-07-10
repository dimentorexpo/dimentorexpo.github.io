var showForPages = ["*://*.skyeng.ru/*", "*://skyeng.autofaq.ai/*",	"*://*.slack.com/*","*://jira.skyeng.tech/*"]; //фильтр чтобы контекстное меню отображалась для сайтов из внесенного перечня иначе если не добавить потом при обьявлении родительских опций они будут на всех сайтах эта "documentUrlPatterns":showForPages конструкция и вносится при обьявлении для фильтрации страниц 

var main = chrome.contextMenus.create( {"id":"mainoption","title": "Chat Master AutoFAQ", "documentUrlPatterns":showForPages} ); //обьявляем контекстное меню для страницы, отвечает свойство page и также в дочерних ветках

chrome.contextMenus.create({"title": "💸 Поиск платежа", "contexts":["page"], "parentId": "mainoption", "onclick": searchpayment}); //опция открывает поиск платежа
function searchpayment(i){
	var createProperties = {url: encodeURI("https://accounting.skyeng.ru/userpayment/search/transaction")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "💰 Начислятор", "contexts":["page"], "parentId": "mainoption", "onclick": balanceinfo}); //опция открывает раздел Начислятор для просмотра баланса
function balanceinfo(i){
	var createProperties = {url: encodeURI("https://billing-api.skyeng.ru/operations")};
	chrome.tabs.create(createProperties);
}

chrome.contextMenus.create({"title": "📑 Подписки", "contexts":["page"], "parentId": "mainoption", "onclick": subscriptions}); //опция открывает раздел Подписки для просмотра состояния подписки
function subscriptions(i){
	var createProperties = {url: encodeURI("https://billing-api.skyeng.ru/subscriptions")};
	chrome.tabs.create(createProperties);
}

var selmain = chrome.contextMenus.create( {"id":"selMainOption","title": "Chat Master AutoFAQ", "contexts":["selection"], "documentUrlPatterns":showForPages} ); // обьявляем контекстное меню при выделении текста отвечает свойство selection

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