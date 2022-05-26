function findNb(m) {
	let number = 1;

	while (number <= m) {
		m -= Math.pow(number, 3);
		number++;
	}

	if (m == 0) {
		return number - 1;
	} else {
		return -1;
	}
}
/*function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}*/

function race(v1, v2, g) {
	let time = g / (v2 - v1);
	return v2 > v1
		? [
				Math.floor(time),
				Math.floor((time * 60) % 60),
				Math.floor((time * 3600) % 60),
		  ]
		: null;
}

function encode(string) {
	let answer = [];
	string.split('').forEach((x) => {
		if (x === 'a') {
			answer.push('1');
		} else if (x === 'e') {
			answer.push('2');
		} else if (x === 'i') {
			answer.push('3');
		} else if (x === 'o') {
			answer.push('4');
		} else if (x === 'u') {
			answer.push('5');
		} else {
			answer.push(x);
		}
	});
	return answer.join('');
}

function decode(string) {
	let answer = [];
	string.split('').forEach((x) => {
		if (x === '1') {
			answer.push('a');
		} else if (x === '2') {
			answer.push('e');
		} else if (x === '3') {
			answer.push('i');
		} else if (x === '4') {
			answer.push('o');
		} else if (x === '5') {
			answer.push('u');
		} else {
			answer.push(x);
		}
	});
	return answer.join('');
}

function bouncingBall(h, bounce, window) {
	let motherCount = 0;

	if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
		motherCount = 1;
		h *= bounce;
		while (window < h) {
			motherCount += 2;
			h *= bounce;
		}
	} else {
		return -1;
	}

	return motherCount;
}

function dashatize(num) {
	return String(num)
		.replace(/([13579])/g, '-$1-')
		.replace(/--+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function solve(s) {
	//letter's value is equal to its index
	let values = [
		0,
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	//regexp for vowels
	let vowelRegex = /[aeiou]/g;

	//splits into substrings
	let substrings = s.split(new RegExp(vowelRegex));
	console.log(substrings);

	//replaces letters with number values
	let answer = substrings.map((letter) =>
		letter.split('').reduce((a, b) => a + values.indexOf(b), 0)
	);

	//returns largest of array values
	return Math.max(...answer);
}

function presses(phrase) {
	console.log(phrase);
	let entryPhrase = phrase.toLowerCase().split('');
	let singlePress = /[1*#adgjmptw\s]/;
	let doublePress = /[behknqux0]/;
	let triplePress = /[cfilrvyo]/;
	let quadPress = /[sz234568]/;
	let answer = 0;
	entryPhrase.forEach((x, i) => {
		if (singlePress.test(x)) {
			answer += 1;
		} else if (doublePress.test(x)) {
			answer += 2;
		} else if (triplePress.test(x)) {
			answer += 3;
		} else if (quadPress.test(x)) {
			answer += 4;
		} else {
			answer += 3;
		}
	});
	return answer;
}

function nbMonths(
	startPriceOld,
	startPriceNew,
	savingperMonth,
	percentLossByMonth
) {
	let answer = [0, 0];
	let newMonthSavings = savingperMonth;
	savingperMonth = 0;

	if (startPriceOld >= startPriceNew) {
		answer[1] = Math.round(startPriceOld - startPriceNew);
		return answer;
	} else {
		while (startPriceOld + savingperMonth < startPriceNew) {
			if (answer[0] % 2 !== 0) {
				percentLossByMonth += 0.5;
			}
			answer[0]++;
			savingperMonth += newMonthSavings;
			startPriceOld *= (100 - percentLossByMonth) / 100;
			startPriceNew *= (100 - percentLossByMonth) / 100;
		}
	}
	answer[1] = Math.round(startPriceOld + savingperMonth - startPriceNew);
	return answer;
}

//Extensions of the Array practice
Array.prototype.square = function square() {
	return this.map((x) => (x *= x));
};

Array.prototype.cube = function cube() {
	return this.map((x) => (x *= x *= x));
};

Array.prototype.average = function average() {
	if (this === []) {
		return NaN;
	} else {
		let number = this.reduce((accum, current) => (accum += current), 0);
		return number / this.length;
	}
};

Array.prototype.sum = function sum() {
	return this.reduce((accum, current) => accum + current, 0);
};

Array.prototype.even = function even() {
	return this.filter((x) => x % 2 === 0);
};

Array.prototype.odd = function odd() {
	return this.filter((x) => x % 2 !== 0);
};

Array.prototype.add1 = function add1() {
	return this.map((x) => (x += 1));
};

Array.prototype.half = function half() {
	return this.map((x) => (x /= 2));
};

Array.prototype.quarter = function quarter() {
	return this.map((x) => (x /= 4));
};

Array.prototype.logContents = function logContents() {
	this.forEach((x) => console.log(x));
};

function doubleInteger(i) {
	i *= 2;
	return i;
}

function twoSum(numbers, target) {
	for (var i = 0; i < numbers.length - 1; i++) {
		for (var j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) {
				return [i, j];
			}
		}
	}
}

function sortArray(array) {
	let odds = [];

	// Creates array of even numbers with empty spaces where odds were and pushes odds to a new array
	let evenArray = array.map((x) => {
		if (x % 2 !== 0) {
			odds.push(x);
			return '';
		} else {
			return x;
		}
	});

	// Sorts array of just odd numbers
	odds.sort((a, b) => a - b);

	// Starts loop which replaces empty array elements with odd numbers from sorted array
	let oddId = 0;
	for (let i = 0; i < evenArray.length; i++) {
		if (evenArray[i] === '') {
			evenArray[i] = odds[oddId];
			oddId++;
		}
	}

	return evenArray;
}

function bingo(ticket, win) {
	let matches = 0;

	for (let i = 0; i < ticket.length; i++) {
		let currentCode = ticket[i][1];
		let currentStr = ticket[i][0];

		//Removes duplicates from currentStr for random test answers
		currentStr = currentStr
			.split('')
			.filter(function (value, index, self) {
				return self.indexOf(value) === index;
			})
			.join('');

		currentStr.split('').forEach((x, i) => {
			if (x.codePointAt(0) === currentCode) {
				matches++;
			}
		});
	}
	return matches >= win ? 'Winner!' : 'Loser!';
}

var encryptThis = (text) =>
	text
		.split(' ')
		.map((word) =>
			word
				.replace(/(^\w)(\w)(\w*)(\w$)/, '$1$4$3$2')
				.replace(/^\w/, word.codePointAt(0))
		)
		.join(' ');

function sumDigPow(a, b) {
	let answer = [];

	for (let i = a; i <= b; i++) {
		let sum = 0;
		let currentNum = i.toString().split('');

		for (let index = 1; index <= currentNum.length; index++) {
			if (currentNum[index - 1] === 0) {
				sum += 0;
			} else {
				sum += Math.pow(currentNum[index - 1], index);
			}
		}
		if (sum === i) {
			answer.push(i);
		}
	}

	return answer;
}

function countSmileys(arr) {
	let smileyCount = 0;
	let smileyFaceTwo = /([;:])([)D])/;
	let smileyFaceThree = /([;:])([-~])([)D])/;
	if (arr === []) {
		return 0;
	}

	arr.forEach((face) => {
		console.log(face);
		if (face.length === 2) {
			if (smileyFaceTwo.test(face)) {
				smileyCount++;
			}
		} else if (face.length === 3) {
			if (smileyFaceThree.test(face)) {
				smileyCount++;
			}
		}
	});

	return smileyCount;
}

function descendingOrder(n) {
	return parseInt(
		n
			.toString()
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
}

function isTriangle(a, b, c) {
	if (a + b > c && b + c > a && c + a > b) {
		return true;
	} else {
		return false;
	}
}

function longestConsec(strarr, k) {
	//Testing for edge cases
	if (strarr.length == 0 || k > strarr.length || k <= 0) {
		return '';
	} else {
		// Sets container to fill with substrings
		let combinations = [];

		// Runs loop to add substrings to combinations array
		for (let i = 0; i < strarr.length; i++) {
			combinations.push(strarr.slice(i, i + k).join(''));
		}

		// Splits substrings into arrays, converts arrays to lengths, and finds index of longest string
		let splitAnswers = combinations
			.map((x) => x.split(''))
			.map((x) => x.length);
		let max = Math.max(...splitAnswers); // Gets biggest length value
		let answer = splitAnswers.indexOf(max); // Find index of max value in the array

		// Returns the substring by using the index generated above
		return combinations[answer];
	}
}

// Write a function "greet" that returns "hello world!"
function greet() {
	if (false) {
		console.log('The world has in its AirPods and cannot hear you...');
	} else {
		let greeting = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'];
		let i = 0;
		while (i < 1024) {
			i++;
			if (i === 1024) {
				greeting.push('!');
				greeting.splice(5, 0, ' ');
				return greeting.join('');
			}
		}
	}
}

function openOrSenior(data) {
	let answers = [];

	data.forEach((x) => {
		let age = x[0];
		let handicap = x[1];
		if (age < 55 || handicap <= 7) {
			answers.push('Open');
		} else {
			answers.push('Senior');
		}
	});

	return answers;
}

function duplicateEncode(word) {
	return word
		.toLowerCase() //make case insensitive
		.split('') //split into an array
		.map((x, i, arr) => {
			if (arr.indexOf(x) == arr.lastIndexOf(x)) {
				return '('; //returns ( if the current letter's index is the last instance
			} else {
				return ')'; //if there is a match in THE ORIGINAL STRING, returns )
			}
		})
		.join(''); //returns as a string
}

var min = function (list) {
	return Math.min(...list);
};

var max = function (list) {
	return Math.max(...list);
};

function high(x) {
	let scores = '0abcdefghijklmnopqrstuvwxyz';
	let words = x.split(' ');
	let wordScores = [];

	words.forEach((x) => {
		let newScore = 0;
		x.split('').forEach((y) => {
			newScore += scores.indexOf(y);
		});
		wordScores.push(newScore);
	});

	let highestScore = wordScores.indexOf(Math.max(...wordScores));
	return words[highestScore];
}

function hoopCount(n) {
	return n < 10
		? 'Keep at it until you get it'
		: 'Great, now move on to tricks';
}

function removeSmallest(numbers) {
	if (numbers === []) {
		return [];
	} else {
		let boring = Math.min(...numbers);
		let index = numbers.indexOf(boring);
		let answer = numbers.map((x) => x);
		answer.splice(index, 1);
		return answer;
	}
}

var number = function (busStops) {
	let busRiders = 0;

	busStops.forEach((x) => {
		busRiders += x[0];
		busRiders -= x[1];
	});

	return busRiders;
};

function fakeBin(x) {
	return x
		.split('')
		.map((x) => {
			return Number(x) < 5 ? '0' : '1';
		})
		.join('');
}

var summation = function (num) {
	let answer = 0;

	for (let i = 1; i <= num; i++) {
		answer += i;
	}

	return answer;
};

function printerError(s) {
	let errorChars = /[nopqrstuvwxyz]/i;
	let errors = 0;

	s.split('').forEach((x) => {
		console.log(x);
		if (errorChars.test(x)) {
			errors++;
		}
	});

	return `${errors}/${s.length}`;
}

function positiveSum(arr) {
	let answer = 0;

	arr.forEach((x) => {
		if (x > 0) {
			answer += x;
		}
	});

	return answer;
}

function greet(language) {
	let db = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso',
	};
	if (language in db) {
		return db[language];
	} else {
		return 'Welcome';
	}
}

String.prototype.toAlternatingCase = function () {
	return this.split('')
		.map((x) => {
			if (/[A-Z]/gi.test(x)) {
				if (x === x.toLowerCase()) {
					return x.toUpperCase();
				} else if (x === x.toUpperCase()) {
					return x.toLowerCase();
				}
			} else {
				return x;
			}
		})
		.join('');
};

const binaryArrayToNumber = (arr) => {
	let bnry = arr.join('');

	return parseInt(bnry, 2);
};

function check(a, x) {
	return a.includes(x);
}

function switchItUp(number) {
	switch (number) {
		case 0:
			return 'Zero';
		case 1:
			return 'One';
		case 2:
			return 'Two';
		case 3:
			return 'Three';
		case 4:
			return 'Four';
		case 5:
			return 'Five';
		case 6:
			return 'Six';
		case 7:
			return 'Seven';
		case 8:
			return 'Eight';
		case 9:
			return 'Nine';
		default:
			return 'Unknown number';
	}
}

function firstNonConsecutive(arr) {
	if (arr === [] || arr.length === 1) {
		return null;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] + 1 !== arr[i + 1]) {
				return arr[i + 1];
			}
		}
	}
}

function getGrade(s1, s2, s3) {
	let avg = (s1 + s2 + s3) / 3;
	if (avg >= 90) {
		return 'A';
	} else if (avg >= 80) {
		return 'B';
	} else if (avg >= 70) {
		return 'C';
	} else if (avg >= 60) {
		return 'D';
	} else {
		return 'F';
	}
}

function nbYear(p0, percent, aug, p) {
	let years = 0;
	let total = p0;
	let newPercent = percent / 100;

	while (p > total) {
		total += Math.floor(total * newPercent);
		total += aug;
		console.log(total);
		years++;
	}

	return years;
}

function rentalCarCost(d) {
	let total = 0;

	if (d >= 7) {
		total = -50;
	} else if (d >= 3) {
		total = -20;
	}

	return (total += d * 40);
}

function twoSort(s) {
	s.sort();
	return s[0].split('').join('***');
}

function expandedForm(num) {
	let realLength = num.toString().length - 1;
	let arrNum = num.toString().split('');

	let expanded = arrNum.map((x, i) => {
		return x * 10 ** (realLength - i);
	});

	return expanded.filter((x) => x > 0).join(' + ');
}

const areaOrPerimeter = function (l, w) {
	return l === w ? l * w : l * 2 + w * 2;
};

const quarterOfSwitchStatement = (month) => {
	console.log(month);
	switch (month) {
		case 1:
		case 2:
		case 3:
			return 1;
			break;
		case 4:
		case 5:
		case 6:
			return 2;
			break;
		case 7:
		case 8:
		case 9:
			return 3;
			break;
		case 10:
		case 11:
		case 12:
			return 4;
			break;
	}
};

function digPow(n, p) {
	let numArray = n
		.toString()
		.split('')
		.map((x) => Number(x));
	let total = 0;

	numArray.forEach((x, i) => {
		total += x ** (i + p);
	});

	let returnNum = total / n;

	if (returnNum === Math.ceil(returnNum)) {
		return returnNum;
	} else {
		return -1;
	}
}

function domainName(url) {
	let answer;

	if (url.substring(0, 11) === 'http://www.') {
		answer = url.split('').splice(11, url.length).join('');
		let end = answer.split('').indexOf('.');
		return answer.split('').splice(0, end).join('');
	} else if (url.substring(0, 12) === 'https://www.') {
		answer = url.split('').splice(12, url.length).join('');
		let end = answer.split('').indexOf('.');
		return answer.split('').splice(0, end).join('');
	} else if (url.substring(0, 7) === 'http://') {
		answer = url.split('').splice(7, url.length).join('');
		let end = answer.split('').indexOf('.');
		return answer.split('').splice(0, end).join('');
	} else if (url.substring(0, 8) === 'https://') {
		answer = url.split('').splice(8, url.length).join('');
		let end = answer.split('').indexOf('.');
		return answer.split('').splice(0, end).join('');
	} else if (url.substring(0, 4) === 'www.') {
		answer = url.split('').splice(4, url.length).join('');
		let end = answer.split('').indexOf('.');
		return answer.split('').splice(0, end).join('');
	} else {
		let end = url.split('').indexOf('.');
		return url.split('').splice(0, end).join('');
	}
}
function towerBuilder(nFloors) {
	let tower = [];
	let largestFloor = nFloors * 2 - 1;

	for (let z = 1; z <= nFloors; z++) {
		let currentFloor = '';
		let asterisks = z * 2 - 1;
		let spaces = Math.floor((largestFloor - asterisks) / 2);

		//add spaces before
		for (let i = 0; i < spaces; i++) {
			currentFloor += ' ';
		}

		//add asterisks
		for (let i = 0; i < asterisks; i++) {
			currentFloor += '*';
		}

		//add spaces after
		for (let i = 0; i < spaces; i++) {
			currentFloor += ' ';
		}

		tower.push(currentFloor);
	}
	return tower;
}
function correct(string) {
	return string
		.split('')
		.map((x) => {
			if (x === '5') {
				return 'S';
			} else if (x === '0') {
				return 'O';
			} else if (x === '1') {
				return 'I';
			} else {
				return x;
			}
		})
		.join('');
}

function correct(string) {
	return string
		.split('')
		.map((x) => {
			if (x === '5') {
				return 'S';
			} else if (x === '0') {
				return 'O';
			} else if (x === '1') {
				return 'I';
			} else {
				return x;
			}
		})
		.join('');
}
function howMuchILoveYou(nbPetals) {
	let phrases = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	];
	nbPetals -= 1;

	while (nbPetals > 5) {
		nbPetals -= 6;
	}

	return phrases[nbPetals];
}
function sumStr(a, b) {
	if (a === '') {
		a = 0;
	}
	if (b === '') {
		b = 0;
	}
	return (Number(a) + Number(b)).toString();
}

function diamond(n) {
	if (n <= 0 || n % 2 === 0) return null;
	str = '';
	for (let i = 0; i < n; i++) {
		let len = Math.abs((n - 2 * i - 1) / 2);
		str += ' '.repeat(len);
		str += '*'.repeat(n - 2 * len);
		str += '\n';
	}
	return str;
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function nbDig(n, d) {
	var res = 0;
	for (var g = 0; g <= n; g++) {
		var square = (g * g + '').split('');
		square.forEach((s) => (s == d ? res++ : null));
	}
	return res;
}
async function handleWeatherSubmit(zip) {
	const weather = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=eafc1019a81b4f6799933335221305&q=${zip}&aqi=no`
	);
	const weatherData = await weather.json();

	return weatherData;
}
function doubleChar(str) {
	return str
		.split('')
		.map((x) => x + x)
		.join('');
}
const arr = (N) => {
	let answer = [];
	for (let i = 0; i < N; i++) {
		answer.push(i);
	}
	return answer;
};
function saleHotdogs(n) {
	return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}
const sequenceSum = (begin, end, step) => {
	let answer = 0;
	if (begin > end) {
		return answer;
	} else {
		for (let i = begin; i <= end; i += step) {
			answer += i;
		}
	}
	return answer;
};
function checkExam(examKey, studentAnswers) {
	let score = 0;

	studentAnswers.forEach((x, i) => {
		return x === ''
			? (score += 0)
			: x === examKey[i]
			? (score += 4)
			: (score += -1);
	});

	return score < 0 ? 0 : score;
}
function primeFactors(n) {
	const fct = factors(n);
	const uniq = [...new Set(fct)];
	return uniq.map((f) => {
		return `(${f}**${fct.filter((fct) => fct === f).length})`.replace(
			'**1',
			''
		);
	}).join``;
}

function factors(n) {
	let max = Math.floor(Math.sqrt(n));
	let res = [];
	for (let i = 2; i <= max; ++i) {
		if (n % i === 0) {
			res.push(i);
			n /= i;
			max = Math.floor(Math.sqrt(n));
			i = (Math.min(...res) || 2) - 1;
		}
	}
	res.push(n);
	return res;
}

function titleCase(title, minorWords) {
	// Edge cases
	if (title === '' || title === null || typeof title !== 'string') {
		return '';
	}

	// Convert title and exception list to lower case and split words into an array
	let lowTitleArr = title.toLowerCase().split(' ');
	let exceptions = [];
	if (minorWords !== undefined) {
		exceptions = minorWords.toLowerCase().split(' ');
	}

	// Main algorithm
	let titleCaseTitle = lowTitleArr.map((x, i) => {
		// Always capitalize first letter
		if (i === 0) {
			//Splits words into array, and capitalizes letter at 0th position
			return x
				.split('')
				.map((x, i) => {
					return i === 0 ? x.toUpperCase() : x;
				})
				.join('');
		} else {
			//All other words
			if (exceptions.includes(x)) {
				return x; // Avoids words on exception list
			} else {
				return x
					.split('')
					.map((x, i) => {
						return i === 0 ? x.toUpperCase() : x;
					})
					.join('');
			}
		}
	});

	return titleCaseTitle.join(' ');
}
function gooseFilter(birds) {
	var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

	return birds.filter((x) => !geese.includes(x));
}
function testEven(n) {
	return n % 2 === 0;
}
function problem(x) {
	if (typeof x === 'string') {
		return 'Error';
	} else {
		return x * 50 + 6;
	}
}
function stockList(listOfArt, listOfCat) {
	//Edge Cases
	if (listOfArt.length === 0) {
		return '';
	}
	if (listOfCat.length === 0) {
		return '';
	}

	//Main Alg
	let answers = [];

	listOfCat.forEach((letter) => {
		let number = 0;

		listOfArt.forEach((book) => {
			let set = book.split(' ');
			let bookNumber = Number(set[1]);
			let firstLetter = set[0].split('')[0];

			if (firstLetter === letter) {
				number += bookNumber;
			}
		});

		answers.push(`(${letter} : ${number})`);
	});

	return answers.join(' - ');
}
function solution(str, ending) {
	return str.endsWith(ending);
}

function persistence(num) {
	//Gets initial array from input
	let numArr = num
		.toString()
		.split('')
		.map((x) => parseInt(x));

	//Edge cases
	if (numArr.length === 1) {
		return 0;
	} else {
		//Variables for loop
		let counter = 0;
		let reducedArr;

		//Loop Alg
		while (numArr.length > 1) {
			counter++;
			//Reduces current array to a new number, stored in reducedArr
			reducedArr = numArr.reduce((accum, curr) => accum * curr);
			//Sets numArr to new value after new number is split into a new array
			numArr = reducedArr
				.toString()
				.split('')
				.map((x) => parseInt(x));
		}

		return counter;
	}
}
function xor(a, b) {
	return a === b ? false : true;
}
var isAnagram = function (test, original) {
	let word1 = test.toLowerCase().split('').sort().join('');
	let word2 = original.toLowerCase().split('').sort().join('');

	return word1 === word2 ? true : false;
};
function findUniq(arr) {
	let unique;

	arr.forEach((x, i, arr) => {
		if (arr.indexOf(x) !== arr.lastIndexOf(x)) {
			return;
		} else {
			unique = x;
		}
	});

	return unique;
}
function revrot(str, sz) {
	//Edge cases
	if (str === '' || sz <= 0 || sz > str.length) {
		return '';
	}

	//Break str into sz-sized chunks
	let chunks = [];
	while (str.length >= sz) {
		chunks.push(str.substring(0, sz));
		str = str.substring(sz, str.length);
	}

	//Convoluted test on substrings
	let modChunks = chunks.map((x) => {
		let total = x
			.split('')
			.map((x) => parseInt(x))
			.reduce((acc, curr) => acc + curr ** 3, 0);

		if (total % 2 === 0) {
			return x.split('').reverse().join('');
		} else {
			let lll = x.split('');
			let num = lll[0];
			lll.shift();
			lll.push(num);

			return lll.join('');
		}
	});

	return modChunks.join('');
}
function sumDigNthTerm(initval, patternl, nthterm) {
	let current = 0;
	for (let i = 1; i < nthterm; i++) {
		initval += patternl[current];

		if (current === patternl.length - 1) {
			current = 0;
		} else {
			current++;
		}
	}

	return initval
		.toString()
		.split('')
		.map((x) => parseInt(x))
		.reduce((acc, curr) => acc + curr);
}

function incrementString(strng) {
	let arr = strng.split('');
	let finalEl = arr[arr.length - 1];

	if (finalEl === undefined) {
		return '1';
	}

	//Handles strings with no digits
	if (finalEl.match(/[A-Z]/gi)) {
		arr.push('1');
		return arr.join('');
	} else {
		//find last number in array
		let ind = [];
		arr.forEach((x, i) => {
			if (!x.match(/[a-z]/gi)) {
				ind.push(i);
			}
		});
		//Split into two arrays of numbers and letters
		let numberSlice = arr.splice(ind[0]);
		let letterSlice = arr.splice(0, ind[0]);
		let length = ind.length;

		//Get value of numberSlice and replace it in the array
		let value = parseInt(numberSlice.join(''));
		value++;
		let strVal = value.toString();
		let length2 = strVal.length;
		numberSlice.splice(-length2, length2, strVal);

		return letterSlice.join('') + numberSlice.join('');
	}
}
function isValidWalk(walk) {
	console.log(walk);

	if (walk.length !== 10) {
		return false;
	} else {
		//sets grid location
		let location = [0, 0];

		//moves each location based on input
		walk.forEach((dir) => {
			if (dir === 'n') {
				location[0]++;
			} else if (dir === 's') {
				location[0]--;
			} else if (dir === 'e') {
				location[1]++;
			} else if (dir === 'w') {
				location[1]--;
			}
		});

		//checks to see if we are in the original location
		return location[0] === 0 && location[1] === 0 ? true : false;
	}
}
function transpose(matrix) {
	let transposed = [];
	let rows = matrix[0].length;
	let rowLength = matrix.length;

	for (let i = 0; i < rows; i++) {
		let newRow = [];

		matrix.forEach((x, ind, arr) => {
			newRow.push(x[i]);
		});

		transposed.push(newRow);
	}

	return transposed;
}
const bijectiveBinary = {
	convertToInt: (s) => parseInt('1' + [...s].map((x) => +x - 1).join``, 2) - 1,
	convertFromInt: (int) =>
		[...(1 + int).toString(2).slice(1)].map((x) => +x + 1).join``,
};

function maxBall(v0) {
	const g = 9.81,
		mpsToKph = 3.6,
		secondsToTenths = 10;
	return Math.round((secondsToTenths * v0) / mpsToKph / g);
}
function runLengthEncoding(str) {
	var arr = [],
		counter = 1;

	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			counter++;
		} else {
			arr.push([counter, str[i]]);
			counter = 1;
		}
	}

	return arr;
}
function gimme(triplet) {
	let sorted = triplet.map((x) => x).sort((a, b) => a - b);
	let middle = sorted[1];

	return triplet.indexOf(middle);
}
function findSum(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}

	return sum;
}
function validate(password) {
	console.log(password);
	if (password.length < 6) {
		return false;
	} else if (!password.match(/[a-z]/g)) {
		return false;
	} else if (!password.match(/[A-Z]/g)) {
		return false;
	} else if (!password.match(/\d/g)) {
		return false;
	} else if (password.match(/\W|_/g)) {
		return false;
	} else {
		return true;
	}
}
