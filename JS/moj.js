const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const inputPeople = document.querySelector(".inputPeople");
const inputSelect = document.querySelector(".inputSelect");
const inputPrice = document.querySelector(".inputPrice");
const get = document.querySelector(".get");

const all = () => {
	if (
		inputPeople.value == "" ||
		inputSelect.value == "" ||
		inputPrice.value == 0
	) {
		get.textContent = "Uwaaga! Musisz podać wszystkie pola";
		get.style.color = "red";
	} else {
		get.textContent = "";
		get.style.color = "black";
		check();
	}
};

const check = (e) => {
	const people = parseInt(inputPeople.value);
	const select = parseFloat(inputSelect.value);
	const price = parseFloat(inputPrice.value);

	const sum = (price + price * select) / select / 100;
	get.append(sum);
	sum.toFixed(2);
	get.textContent = `Musicie się złożyć po ${sum} zł 😀`;
};

const clear = () => {
	inputPeople.value = "";
	inputSelect.value = "";
	inputPrice.value = "";
	get.textContent = "";
};

btn1.addEventListener("click", all);
btn2.addEventListener("click", clear);
