// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined
console.log('1.', givenName);


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim
console.log('2.', givenName);


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: Tim
console.log('3.', givenName);


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: Hello, how are you? Tim
console.log('4.', givenName);


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40
console.log('5.', math);


// 6.
// What is `math` set to?
math = high - "5";
// A: 45
console.log('6.', math);


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
let answer = givenName + ' is ' + (today - born) + ' years old';
// A: answer
console.log('7.', answer);


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Nikki";
let instructorName = "Eric";
console.log('8.', yourName, instructorName);


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log('9.', statement);


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 7;
let myString = 'hello world';
let myBoolean = false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A:
console.log('10.', myUndefined);

// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true
console.log('11.', x);


// 12.
let y = (false == "");
// A. true
console.log('12.', y);


// 13.
let z = (0 == "");
// A. true
console.log('13.', z);


// 14.
let a = (null == null);
// A. true
console.log('14.', a);


// 15.
let b = (undefined == undefined);
// A. true
console.log('15.', b);


// 16.
let c = (undefined == null);
// A. false
console.log('16.', c);


// 17.
let d = (null == false);
// A. false
console.log('17.', d);


// 18.
let e = (NaN == null);
// A. false
console.log('18.', e);


// 19.
let f = (NaN == NaN);
// A. false
console.log('19.', f);


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if(thirsty === true){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let xx;

if(xx){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 23.
// this expression will set x to NaN
let xxx = 1 * undefined;

if(xxx){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
