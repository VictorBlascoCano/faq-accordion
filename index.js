const buttons = document.querySelectorAll(".question");

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const answer = btn.parentElement.querySelector(".answer");
		const img = btn.querySelector("img");

		const isVisible = window.getComputedStyle(answer).display === "block";

		if (!isVisible) {
			answer.style.display = "block";
			img.src = "assets/images/icon-minus.svg";
			img.alt = "Minus";
		} else {
			answer.style.display = "none";
			img.src = "assets/images/icon-plus.svg";
			img.alt = "Plus";
		}
	});
});
