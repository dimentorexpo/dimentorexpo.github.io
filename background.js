chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.name === 'chm-message') {
        if (request.question == 'send-event') {
            const laserExtensionId = 'kggpdmfnfmmkneemhknlojemcjmdlpjb';
            chrome.runtime.sendMessage(laserExtensionId,
                request.messageValue,
                function (response) {
                    console.log(response)
                }
            );
        }
    }
})