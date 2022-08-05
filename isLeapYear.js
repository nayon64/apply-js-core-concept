function isLeapYear(year) {
	const remineder = year % 4;
	if (remineder === 0) {
		return true;
	}
	else {
		return false;
	}
}
let yourYearIsLeapYear = isLeapYear(1230);
console.log(yourYearIsLeapYear);
yourYearIsLeapYear = isLeapYear(1260);
console.log(yourYearIsLeapYear);