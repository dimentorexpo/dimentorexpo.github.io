const laserExtensionId = 'kggpdmfnfmmkneemhknlojemcjmdlpjb';

chrome.runtime.sendMessage(laserExtensionId,
    {
        message: 'open-user-info',
        userId: 'iduserout',
    }
);
}