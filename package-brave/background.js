chrome.webRequest.onBeforeSendHeaders.addListener(data => {
	for (let header of data.requestHeaders) {
		if (header.name.toLowerCase() === 'user-agent') {
			header.value = navigator.userAgent.split('Gecko')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0';
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