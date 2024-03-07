// at interval
// intermiate state

console.log("hello world");
const initApp =()=>{
    const button = document.querySelector('button');
    button.addEventListener('click',throttle(clickLog,2000))
}
const clickLog = ()=>console.log(`clicked `)

document.addEventListener('DOMContentLoaded',initApp)


const throttle = (fn,delay) =>{
    let lastTime = 0;
    console.log(`called throttle immediatrly`)
    let id = 0;
    return (...args)=>{
       const now = new Date().getTime();

       id++;

       if(now-lastTime < delay) return;
       lastTime = now;
       console.log(`event id :${id}`)
       fn(...args)
    }
}
//
