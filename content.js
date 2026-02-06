(function () {
	"use strict";

	let lastClick = null;

	function createRipple(x, y) {
		const ripple = document.createElement("div");
		ripple.className = "middle-click-ripple";
		ripple.style.left = x + "px";
		ripple.style.top = y + "px";
		document.body.appendChild(ripple);

		ripple.addEventListener("animationend", () => {
			ripple.remove();
		});
	}

	document.addEventListener("mousedown", (event) => {
		if (event.button === 1 || (event.button === 0 && event.ctrlKey)) {
			const target = event.target.closest("a");
			if (target) {
				lastClick = {
					x: event.clientX,
					y: event.clientY,
					time: Date.now()
				};
			}
		}
	});

	chrome.runtime.onMessage.addListener((request) => {
		if (request.action === "tabOpened" && lastClick) {
			const now = Date.now();
			if (now - lastClick.time < 500) {
				createRipple(lastClick.x, lastClick.y);
				lastClick = null;
			}
		}
	});
})();
