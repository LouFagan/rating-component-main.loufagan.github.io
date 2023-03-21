// const active = document.querySelector(".active");
const submit = document.querySelector(".submit");
const feedback = document.querySelector(".feedback");
const rankings = document.querySelectorAll(".ranking");
const wrapper = document.querySelector(".wrapper");
const results = document.querySelector(".results");

rankings.forEach(function (ranking) {
	let id = ranking.getAttribute("id");
	ranking.addEventListener("click", function () {
		removeClass();
		ranking.classList.add("active");

		feedback.innerHTML = `You selected ${id} out of 5`;
		console.log(`You selected ${id} out of 5`);
	});
});
submit.addEventListener("click", function (e) {
	e.preventDefault();
	wrapper.classList.add("hidden");
	results.classList.remove("hidden");
});
function removeClass() {
	rankings.forEach(function (ranking) {
		ranking.classList.remove("active");
	});
}
