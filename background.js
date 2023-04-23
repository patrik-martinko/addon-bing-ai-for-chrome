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
                        value: navigator.userAgent.split('AppleWebKit')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1700.00'
                    },
                    {
                        operation: 'set',
                        header: 'sec-ch-ua',
                        value: '"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"'
                    }
                ]
            },
            condition: {
                resourceTypes: Object.values(chrome.declarativeNetRequest.ResourceType)
            }
        }
    ],
});