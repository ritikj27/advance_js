// currying takes a fucntion that receives more than one
//parameter and break it into a series of unary (one parameter) functions

// therefore , a curried function only takes one parameter at a time

function sandwish(in1){
    return (in2) =>{
        return (in3) =>{
            return `${in1} ,${in2} ,${in3}`;
        }
    }
}
// console.log(sandwish("1")("2")("3"))


const ezSand = (in1)=>(in2) =>(in3) => `${in1},${in2},${in3}`
// console.log(ezSand("1")("2")("3"))


// example 2

const curry = (fn) =>{
    return curried =  (...args) =>{
        if(fn.length !== args.length){
            return curried.bind(null,...args);
        }
        return fn(...args);
    }
}

const total = (x,y,z) => x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30))
