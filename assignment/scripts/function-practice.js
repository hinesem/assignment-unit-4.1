console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}



// Call the function to test
console.log('Test - should say "Hello World!"', hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}`;
}
// Remember to call the function to test
let name = 'Eric';

console.log(helloName(name));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;// return firstNumber + secondNumber;
}
// let num1 = 1;
// let num2 = 2;
console.log(addNumbers(4, 1));

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c){
 return a * b * c;
}
console.log(multiplyThree(2, 2, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
 return lastInArray[lastInArray.length -1];
}
let lastInArray = ['a', 'b', 'c'];
console.log(getLast(lastInArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let newArray = ['h', 'i', 'j', 'k'];

function find( value, array ){
  for (let i of newArray) {
    if (i === value) {
    console.log(`${value} is present`)
    break;
    } else if (i !== value) {
      console.log(`${value} is not present`);
    }
  }
}
console.log(find('z', newArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  const firstLetterArray = string.split("");
    if (firstLetterArray[0] === letter) {
      console.log(`${letter} is the first letter in ${string}`);
    } else if (firstLetterArray[0] !== letter) {
      console.log(`${letter} is not the first letter in ${string}`)
    } else if (firstLetterArray[0] === " ") {
      console.log('array is empty')
    }
  }


console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!




// function greet(name = 'person') {
//   console.log(`Hello, ${name}`);
// }




/*
// arrow function
// they can be assigned to a variable usitn let greet = value
let greet = (name) => {
  console.log(`Hello, ${name}!`)
};

greet('Annie');
greet('Bob');
greet('Charlie');
greet();

let add = (x, y) => x + y; //this is very common in prof engineering and JS

// function add(x, y) {
//   return x + y;
// }

function addB(x, y = 10) {
  console.log('x:', x);
  console.log('y:', y);
  return x + y;
}
let sum = add(2, 3);

console.log(sum);


// let getLast = (array) => { // a swapping replacement for function
//   return array[array.length -1];
// };

let getLast = array => array[array.length -1]; // this does the same thing
console.log(getLast([2, 4, 6]));
// if you have only one parameter (no commas) you may remove the parentheses

//let getLast = array => array [array.length -1]; // you may omit curly braces if this is your only return value



// study technical details of arrow functions

// variable and parameter scope
/*
let num = 7;
let otherNum = 100;

if (num > 0) {
  console.log(num); 
} // the curly braces crete a "block" SCOPE and these can have their own variables

// ie

if (num > 0) {
  let otherNum = 87
  console.log(num + otherNum); // will throw an error "reference" error 
  // because if you're outside of the scope, you can't drill down into and reference it
}
console.log(otherNum);

if (num < 0) {
  let otherNum = 12
  console.log(num - otherNum);
}
// we wouldn't know which "otherNum" to pick!

// what does this have to do with funciton?

function add(x, y) {
  return x + y; // this x and y  only exist in the curly braces
}
console.log(x); // this will show reference error bc x isn't defined

// the only thing you can't do is go DOWN, you can go UP, however
*/


// let count = 0;

// function increaseCount(){
//   count += 1;
// }

// increaseCount();
// increaseCount();
// increaseCount();
// console.log(count); // will log 3 

// // "closure" > reaching up into the code. reaches up into the scope and chanages something. technically console.log is an effect. so is reaching into the DOM usuing innterHTML
// //closure refers to pulling into the variable


// // return statement is the last thing a funciton will do ie

// function divide(x, y) {
//   return x / y;
// }

// console.log(divide(3, 2));

// // if we divide by 0 we get "inifinity" returned. and we fix this by:


// function divide(x, y) {
//   if (y === 0) {
//   return NaN;
//   }
//   return x / y;
// }

// console.log(divide(3, 0));

// // hoisting. function declaraations do this if we put this BEFORE our funciton declaration, it will still work! 
// /*
// console.log(divide(3, 2));

// */

/*
function greet() {
  console.log('Hello funciton');
}

let count = 0;
let display = document.querySelector('#count-display');

function increaseCount(by = 1) {
  count += by;
  display.innerHTML = count;
}

//innerHTML changes the HTML, this and querySelector. use them to do damage right now
*/