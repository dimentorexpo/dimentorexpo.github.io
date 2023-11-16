function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
include("https://dimentorexpo.github.io/ChMAF/JSAF3-v4.js");

		const message = {
			question: 'get-extension-id'
		}
		chrome.runtime.sendMessage(message, (result) => {
			console.log(result)
			if (localStorage.getItem('ext_id') == null)
				localStorage.setItem('ext_id',result)
			else localStorage.setItem('ext_id',result)
		})