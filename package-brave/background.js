chrome.webRequest.onBeforeSendHeaders.addListener(data => {
	for (let header of data.requestHeaders) {
		if (header.name.toLowerCase() === 'user-agent') {
			header.value = navigator.userAgent.split('Gecko')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58';
		}
	}
	return { requestHeaders: data.requestHeaders };
}, { urls: ['https://*.bing.com/*'] }, ['blocking', 'requestHeaders']);