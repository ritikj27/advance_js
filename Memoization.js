// ask fun to remmber the result

// pure functiom
// input -> processing -> output
// dec memory and inc speed
const initApp = async () =>{
    const multiply = cacheMemoization(multiplyBy10);
    const add = cacheMemoization(addMany)
    console.log(multiply(10))
    console.log(multiply(10))
    console.log(add(1,2,3,4))
    console.log(add(1,2,3))
    console.log(add(1,2,3,4))
    // console.log(multiply(5))
}
document.addEventListener('DOMContentLoaded',initApp);



const multiplyBy10 = (num) =>{
    return num*10;
}
const fib = (pos)=>{
    if(pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);
}


const memoization = ()=>{
    let cache = {};
    return (num)=>{
        if(num in cache){
            console.log(cache);
            return cache[num];
        }
        else{
            cache[num] = num*10;
            return cache[num];
        }
    }
}


const add3 = (a,b,c) => a+b+c;

const addMany = (...args) =>{
    return args.reduce(((acc,curr)=>acc+=curr),0)
}

const cacheMemoization = (fn) =>{
    const cache = {};
    return (...args) => {
        if(args.toString() in cache){
            console.log(cache);
            return cache[args.toString()];
        }
        else{
            const result = fn(...args);
            cache[args.toString()] = result;
            return result;
        }
    }
}
