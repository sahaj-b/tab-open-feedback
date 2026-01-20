(function () {
	"use strict";

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
				createRipple(event.clientX, event.clientY);
			}
		}
	});
})();
