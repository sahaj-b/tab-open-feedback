chrome.tabs.onCreated.addListener((tab) => {
	// Get the active tab (the one where click happened)
	chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
		if (activeTabs.length > 0) {
			const activeTab = activeTabs[0];
			chrome.tabs.sendMessage(activeTab.id, { action: "tabOpened" });
		}
	});
});
