//Pure Functions

//A PArt of the functional Programming Paradigm

//why write Pure Functions ?
// 1) clean code
// 2) Easy to test
// 3) Easy to debug
// 4) Decoupled be added to your utility fun
/// 5)could be added to your utility functions

//Rules for Pure Functions
// 1) The same input always gives the output
// 2) No side effects

//Lets breaks this down with example

//1) The same input always gives the same output

const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Dave", "Greay"));

//we can replace the fun with the output
//this is called "referential transparency"

// pure function should have at least one parameter
const test = ()=>"dave";
const teststring = 'dave';

//2) No side effects

//This also means accessing the scope outside the function makes
//the fun impure
const z = 5;
const sum = (x,y) => x+y+z;
console.log(sum(2,2));

//Pure Function cannot:
//Access a database ,API,file System,storage etc;
//Modify the DOM
//or even log to the console

//that said ,clearly "impure" functions are necessry
//but they are harder to test and debug

//further , no input state can be modified
//That is, no data should be "mutated"
//consider all input data to be immutable


// impure function Exmp 1
console.log("Impure Exp 1")
let x = 1;
const inc = () => x+=1;
console.log(inc());
console.log(x);

// impure function Exmp 2
console.log("Impure Exp 2")
const myArray = [1 , 2 , 3];
const addToArray = (arr,data) =>{
    arr.push(data);
    return arr;
}
console.log(addToArray(myArray,4));
console.log(myArray)

//refactor exp 1
console.log("refactor");
const incR = (num) => num+=1;
console.log(incR(x));
console.log(x);

//refactor exp 2
console.log("refactor 2");
const addToArrayR = (arr,data) => [...arr,data];
console.log(addToArrayR(myArray,4));
console.log(myArray)

//Also notice how pure function always returb something
//No return means you definitly do not have a pure function
// Hof are pure function
// filter , map , reduce

//Review the rules for pure functions
//1) The same input always gives the same output
//2) No side effects (no mutation)

//The goal : write small ,pure functions when you can for code
//that is clean ,easy to test,and easy to debug
