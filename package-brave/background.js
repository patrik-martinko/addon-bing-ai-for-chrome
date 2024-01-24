chrome.webRequest.onBeforeSendHeaders.addListener(data => {
	for (let header of data.requestHeaders) {
		let currentHeader = header.name.toLowerCase();
	        if (currentHeader === 'user-agent') {
	            header.value = navigator.userAgent.split('Gecko')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0';
	        } else if (currentHeader === 'sec-ch-ua') {
	            header.value = '\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"';
	        }
	}
	return { requestHeaders: data.requestHeaders };
}, { urls: ['https://*.bing.com/*'] }, ['blocking', 'requestHeaders']);
chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.create({ url: 'https://chat.bing.com' });
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
	if (reason === 'install') {
		chrome.tabs.create({ url: 'https://chat.bing.com' });
	}
});
