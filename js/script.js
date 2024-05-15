document.addEventListener("DOMContentLoaded", function () {
	const navigation = document.querySelector(".navbar");

	function addShadow() {
		if (window.scrollY >= 300) {
			navigation.classList.add("navigation-background");
		} else {
			navigation.classList.remove("navigation-background");
		}
	}

	window.addEventListener("scroll", addShadow);
});
