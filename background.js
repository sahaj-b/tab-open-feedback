chrome.tabs.onCreated.addListener((tab) => {
	chrome.tabs.query({}, (tabs) => {
		tabs.forEach((t) => {
			chrome.tabs.sendMessage(t.id, { action: "tabOpened" }).catch(() => {});
		});
	});
});
