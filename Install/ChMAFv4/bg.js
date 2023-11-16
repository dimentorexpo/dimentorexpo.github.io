chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.name === "ChM") {

			
		if (request.question == 'sendResponse') {
			fetch(request.addr, request.options)
				.then(response => response.text())
				.then(result => { sendResponse({answer: result, respName: request.respName}) });
			return true;
		}
		
    }		
		const extensionId = chrome.runtime.id
		    if (request.question === "get-extension-id") {
			sendResponse(extensionId)
    }
});



chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    console.log(request)
    console.log(sender)
    if (request.name === 'chm_message') {
        console.log(request)
        if (request.question == 'send_event') {
            const laserExtensionId = "kggpdmfnfmmkneemhknlojemcjmdlpjb";
            console.log(request)
            const callback = (response)=>{
                console.log(response)
            }
            const messageValue = request.messageValue
            const tabId = sender.tab.id
            const message = {
                messageValue,
                tabId
            }
            chrome.runtime.sendMessage(laserExtensionId,
                message,
                callback
            );
        }
    }
})

