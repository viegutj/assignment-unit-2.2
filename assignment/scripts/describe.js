// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name and give it the string value 'Dane'.
// We create a conditional statement that if name exactly matches 'Mary', we console log 'Hi, Mary!'
// and if name is anything else, we console log 'How do you do?'
// Because name is set to 'Dane' and not 'Mary', the code does not run the if statement, but runs the else statment.
// The console.log would read 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare the variable secret.
// We declare the variable code and set it to the number value of 123.

// We write a conditional statment. If code exactly equals 123, the variable secret
// is set to the string value of 'super' and the variable code is multiplied by two.
// As the code is exactly 123, secret is now assigned the string value 'super' and code 
// is multiplied by two resulting in the product of 246.
// We write another conditional statement that if the code variable is greater
// than 250, the secret variable is assigned the string value 'duper'.
// The code variable (246) is less than 250, and will NOT be reassigned the value 'duper'.

// Then, we have written a console.log(secret).
// The console.log(secret) would read 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable isStudent to the Boolean value of true.
// We declare the variable age to the number 34.
// We declare the variable zip to the number 55407.

// We create a conditional statement with an if statment, two else if statements, and an else statment.
// The first true statement in the statement chain will be run.
// If the variable isStudent is exactly true and the variable zip is a number greater than 80,000,
// then console.log will read 'You're a student on the West Coast!'.
// If else, if the variable isStudent is exactly false or age is less than 30,
// then console.log will read 'What are your hobbies?'
// If else, if the variable isStudent is exactly true, 
// console.log will read 'Welcome to Prime!'
// Else, the console will log 'How about the weather?'

// The second else if statment runs, as it is the first in true statment in the statment chain.
// The console.log will read 'Welcome to Prime!'


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

