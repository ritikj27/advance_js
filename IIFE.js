//IIFE - Immediately - Invoked Expression

//Variations :

//with anonymous arrow function inside

(() => {
  //do stuff
})();

// function name
(function () {

})();

(
  //with a function name(allow for recursion)
  function IIFE(num) {
    num++;
    console.log(num);
    return num !== 5 ? IIFE(num) : console.log("finised");
  }
)((num = 0));

//REason 1) Does not pollute the global object namespace

//global
const x = "waterevr";

const helloWorld = () => "nothing is here";

console.log(x);
console.log(helloWorld());
(() => {
  const x = "zero";
  const helloWorld = () => "world is here";
  console.log(x);
  console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

// Reason 2). Private Varibles and Methods from closure
console.log('---Reason 2');

const inc = (() =>{
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`i have ${num} this much credits`);
    return ()=>{
        counter++;
        credits(counter);
    }
})();

inc();
inc();
inc();
inc();

//REason 3 - module pattern
console.log("R-3")
const Score = (()=>{
    let count = 0;
    return{
        inc:()=>{count++},
        reset:()=>{count=0},
        current:()=>{ return count}
    }
})();

console.log(Score.current());
Score.inc();
Score.inc()
console.log(Score.current());
Score.reset();


//Revaling pattern is the variation of the module pattern
console.log("new pattern")
const gameer = (()=>{
    let count = 0;
    const increment = ()=>{count++}
    const reset = ()=>{count=0}
    const current = ()=>{ return count}
    return{
        inc:increment,
        reset:reset,
        current:current
    }
})();

console.log(gameer.current());
gameer.inc();
gameer.inc()
console.log(gameer.current());
// Injecting a namespace object
((namespace)=>{
    namespace.count = 0;
    namespace.current =  function(){
        return `current ${this.count}`
    }
    namespace.inc = function(){
        this.count++;
    }
    namespace.reset = function(){
        this.count=0;
    }

})(window.App = window.App || {})

App.inc()
console.log(App.current())
