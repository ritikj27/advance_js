// pass by value and pass by refresnce

// primitive
let x = 10;
let y = x;
y+=1;
console.log(x);
console.log(y);

// structural
const A = [1,2,3];
const B = A;
A.push(4);
console.log(A);
console.log(B);


// immutable vs mutable

// primitive are immutable
let str = 'Dave';
str[0] = 'W';

console.log(str);


// reassignment are not same as mutable
str = 'Nothing';
console.log("reassignment of string =>",str)

// structural are mutable
B[0] = 9;
console.log(A);
console.log(B);


// impure fuction -> that means data can be mutate in the func



function impure(n){
    n.push(10);
    return n;
}
const n = [1,2,3,4];
console.log(impure(n))

// Note : const can,t make array immutable

// shallow copy vs deep copy

// shallow copy

// with the spread operator
console.log("spread operator")
const aArr = [1,2,3];
const bArr = [...aArr,4];
console.log(aArr);
console.log(bArr);

// with Object.assign();
const tArr = Object.assign([],aArr);
console.log(tArr);
console.log(tArr === aArr);
tArr.push(11);
console.log(tArr);
console.log(aArr)

// but if there are nested arrays or objects ..
tArr.push([8,9,10]);
const vArr = [...tArr];
console.log(vArr);
vArr[4].push(5);
console.log(vArr);
console.log(tArr)

// nested structural data types still share a reference

// Note Array.from() and slice() also create shallow copy

// Object.freeze();

const scoreObj = {
    "first":44,
    "second":12,
    "third":{"a":1,"b":2}
}
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj)
// still mutates - it is a shallow freeze

// Deep copy is needed to avoid this
// Array.isArray(
// serveral liberier like lodash ,Ramda and others
// have this feture bult-in

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj === scoreObj)

const DeepCopy = (obj) =>{
    if(typeof obj !== 'object' || obj === null) return obj;

    const newObj = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        let value = obj[key];

        newObj[key] = DeepCopy(value);
    }

    return newObj;
}

const newArrayCopy = DeepCopy(scoreObj);
console.log(newArrayCopy)
console.log(newArrayCopy === scoreObj)


// Now we CAn Make a pure function
let scoreArray = [10,11,12];

const pureAddToScoreHistory = (arr,score,cloneFun)=>{
    const newArray = cloneFun(arr);
    newArray.push(score);
    return newArray;
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray,18,DeepCopy);

console.log(pureScoreHistory === scoreArray);

// shallow copies vs deep copy (clones of data structure)

//shallow copies still share references of nested structure
// which allows for mutation of the original data

//object.freeze() created a shallow freeze

//deep copies share no reference

//all of this is important to know when constructiong pure func
// bcoz they required you to avoid mutating the original data

