function sum(numbers) {
	let sum = 0;
	for (var i = 0; i < numbers.length; i++){
		let element = numbers[i];
		sum += element;
	}
	return sum;
}

function isOddNumbers(nums) {
	let oddNumbers = [];
	for (var i = 0; i < nums.length; i++){
		let element = nums[i];
		let remineder = element % 2;
		if (remineder !== 0) {
			oddNumbers.push(element);
		}
	}
	return oddNumbers;
}

// let numbers = [12, 25, 14, 25, 26, 21, 25];
let oddNumbers = isOddNumbers(numbers);
let mySum = sum(oddNumbers);
console.log(mySum);


function oddNumbersSum(nums) {
	let sum = 0;
	for (var i = 0; i < nums.length; i++){
		let element = nums[i];
		let remineder = element % 2;
		if (remineder !== 0) {
			sum += element;
		}
	}
	return sum;
}
// let numbers = [12, 25, 14, 25, 26, 21, 25];
// let myOddNumbersSum = oddNumbersSum(numbers);
// console.log(myOddNumbersSum);


function sum(newNumber, number) {
	newNumber += number;
	return newNumber;
}

function oddNumbersSum(nums) {
	let total = 0;
	for (var i = 0; i < nums.length; i++){
		let element = nums[i];
		let remineder = element % 2;
		if (remineder !== 0) {
		  total = sum(total, element);
		}
	}
	return total;
}
let numbers = [12, 25, 14, 25, 26, 21, 25];
let myOddNumbersSum = oddNumbersSum(numbers);
console.log(myOddNumbersSum);


