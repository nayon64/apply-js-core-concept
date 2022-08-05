function isEven(num) {
	const remineder = num % 2;
	if (remineder === 0) {
		return true;
	}
	else {
		return false;
	}
}
let cheakEven = isEven(35);
console.log(cheakEven);
cheakEven = isEven(34);
console.log(cheakEven);