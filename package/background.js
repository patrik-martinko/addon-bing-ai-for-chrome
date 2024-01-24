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
                        value: navigator.userAgent.split('AppleWebKit')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
                    },
                    {
                        operation: 'set',
                        header: 'sec-ch-ua',
                        value: '\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"'
                    },
                    {
                        operation: 'set',
                        header: 'sec-ch-ua-full-version-list',
                        value: '\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.234\", \"Microsoft Edge\";v=\"120.0.2210.144\"'
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
