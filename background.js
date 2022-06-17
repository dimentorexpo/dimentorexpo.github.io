chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const laserExtensionId = "kggpdmfnfmmkneemhknlojemcjmdlpjb";
    if (request.name === 'chm_message') {
        if (request.question == 'send_event') {
            chrome.runtime.sendMessage(laserExtensionId,
                request.messageValue,
                function (response) {
                    console.log(response)
                }
            );
        }
    }
})