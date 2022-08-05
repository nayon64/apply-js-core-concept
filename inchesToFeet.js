function inchesToFeet(inches) {
	const feet = inches / 12;
	return feet;
}

let inches = 144;
let feet = inchesToFeet(inches);
console.log(feet)

function milesToKilomitter(miles) {
	const kilomitter = miles * 1.609;
	return kilomitter;
}
let miles = 5;
let kilomitter = milesToKilomitter(miles);
console.log('kilomitter : ', kilomitter);
 

function mitterToSentimitter(mitter) {
	const semi = mitter * 100;
	return semi;
}
let mitter = 14;
let semi = mitterToSentimitter(mitter);
console.log('semi : ', semi)


function showNext10Numbers(number) {
	let numberArray = [];
	for (var i = 1; i <= 10; i++){
		let newNumber = number + i;
		numberArray.push(newNumber);
	}
	return numberArray;
}
let number = 11;
let showNext10Number = showNext10Numbers(number);
console.log(showNext10Number);
