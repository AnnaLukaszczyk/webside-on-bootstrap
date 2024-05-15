document.addEventListener("DOMContentLoaded", function () {
	const navigation = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 300) {
			navigation.classList.add("navigation-background");
		} else {
			navigation.classList.remove("navigation-background");
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {navList.classList.remove("show")})
	);

	window.addEventListener("scroll", addShadow);
});
