chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
        {
            id: 1,
            priority: 1,
            action: {
                type: 'modifyHeaders',
                requestHeaders: [
                    {
                        operation: 'set',
                        header: 'user-agent',
                        value: navigator.userAgent.split('AppleWebKit')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0'
                    }
                ]
            },
            condition: {
                resourceTypes: Object.values(chrome.declarativeNetRequest.ResourceType)
            }
        }
    ],
});
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'https://chat.bing.com' });
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({ url: 'https://chat.bing.com' });
    }
});