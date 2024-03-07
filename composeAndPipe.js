//functional programming

//often uses pipe and compose = HOF

//A higher order function is any function which takes a
//function as an argument,returns a functions or both

//here how "compose" fun work

//start with small unary (one parameter) function
const add2 = (x) => x+2;
const subtract1 = (x) => x-1;
const multiply5 = (x) => x*5;

//Notice how the functions execute from inside to outside & right to left


const result = multiply5(subtract1(add2(4)));
console.log(result);

//Making our own compose and pipe functions

//Note : Ramda.js and lodash liberies have their own build-in
// compose and pipe functions ,lodash calls pipe "flow"

// higher order function "reduce" takes a list of value and applies a
// function to each of these values , accumlating a single result

//To get the compose order from right to left as we see with nested
// function call in our example above  ,we ned reduceright

const compose = (...fn) => (val) => fn.reduceRight((prev,fun) => fun(prev),val);
console.log(compose(multiply5,subtract1,add2)(4));


// To do the same ,but read from left to right ... we use "pipe"
// it is the same except uses reduce insted of reduceRight
const pipe = (...fn) => (val) => fn.reduce((prev,fun) => fun(prev),val);
console.log(pipe(multiply5,subtract1,add2)(4));


// word count
const string = "hello world , what is the javscript and react and nodejs"

const splitWord = (st) =>st.split(' ');
const countword = (arr) =>arr.length;

const wordCount = pipe(splitWord,countword)

console.log("world counted done",wordCount(string));

const pal1 = 'taco cat';
const pal2 = 'UFO tofu';
const pal3 = 'Dave';

const split = (string) => string.split('');
const join = (string) =>string.join('');
const lower = (string) =>string.toLowerCase();
const reverse = (array) =>array.reverse()




const fwd = pipe(splitWord,join,lower);

const rev = pipe(fwd,split,reverse,join)

console.log(fwd(pal1) === rev(pal1))
console.log(fwd(pal2) === rev(pal2))
console.log(fwd(pal3) === rev(pal3))

// clone/copy functions within a pipe or compose function

//1) clone the object before an impure function mutates it
const scoreObj = {home:0,away:0}

const shallowCopy = (obj) => Array.isArray(obj) ? [...obj] : {...obj};

const inc = (obj) =>{
    obj.home += 1
    return obj
}

const homeScore = pipe(shallowCopy,inc);
console.log(homeScore(scoreObj));

console.log(homeScore(scoreObj) === scoreObj)

//Positive :Fewr Function calls
//Negative : Create impure functions and testing difficulties


// 2) curry the function to create a partial that is unary
let incrementHomeB = (cloneFn) => (obj) =>{
    const newObj = cloneFn(obj);
    newObj.home += 1;
    return newObj;
}

// create the partial by applying the first argument in adanvce
incrementHomeB = incrementHomeB(shallowCopy);

const homeScoreB = pipe(incrementHomeB)

console.log(homeScoreB(scoreObj));
console.log(scoreObj);

// positive:pure fun with clear dependencies
// negative :More calls to the cloning function

// 3) Insert the clone fun as a dependencies
const incrementHomeC = (obj,cloneFn) =>{
    const newObj = cloneFn(obj);
    newObj.home += 1 //mutation
    return newObj
}
const homeScoreC = pipe(
    x=>incrementHomeC(x,shallowCopy)
)
console.log(homeScoreC(scoreObj))
console.log(scoreObj)

//Positive : pure function with clear dependencies
//Negative : Non-unary functions in your pipe / compose chain
