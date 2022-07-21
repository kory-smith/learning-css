const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll("article.plan button");
const toggleButton = document.querySelector(".toggle-button")
const mobileNav = document.querySelector(".mobile-nav")

for (const button of selectPlanButtons) {
  button.addEventListener("click", function (event) {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

const noButton = document.querySelector(".modal__action--negative")

noButton.addEventListener("click", function(event) {
	modal.style.display = "none";
	backdrop.style.display = "none";
	mobileNav.style.display = "none";
})

backdrop.addEventListener("click", function(event) {
	modal.style.display = "none";
	backdrop.style.display = "none";
	mobileNav.style.display = "none";
})

toggleButton.addEventListener("click", function() {
	mobileNav.style.display = "block";
	backdrop.style.display = "block";
})