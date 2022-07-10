var ChMAFmenu = chrome.contextMenus.create({"title": "ChMAF"});
 
chrome.contextMenus.create({"title": "CRM", "contexts":["selection"], "parentId": ChMAFmenu, "onclick": OpenCRMInfo});
 
function OpenCRMInfo(i, t){
 
var createProperties = {url: "https://crm2.skyeng.ru/persons/"+ encodeURIComponent(i.selectionText)};
 
chrome.tabs.create(createProperties);
 
}