// javascript event listneres

// addEventListner and removeEventListner

// const functionOne = () =>{
//     console.log("do something");
// }

// h2.addEventListener('click',functionOne);
// h2.removeEventListener('click',functionOne);
// h2.addEventListener('click',(event)=>{
//     event.target.textContent = 'helow'
// })
//addEventListner('click',function,event capture)
//by deafult event capature are false;
//this prevent event bubbling
//if we pass (true) then it start from outside , and
//event.stopPropagation() are use to stop next event

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState == "complete") {
    console.log("ready state");
    const section = document.querySelector("#view2");
    const div = section.querySelector("div");
    const h2 = div.querySelector("h2");

    section.addEventListener('click',(event)=>{
        event.stopPropagation()
        section.style.backgroundColor='red'
    },true)

    div.addEventListener('click',(event)=>{
        div.style.backgroundColor='yellow'
    },true)
    h2.addEventListener('click',(event)=>{
        event.target.textContent='hello world'
    },true)
  }
});

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState == "complete") {
      console.log("ready state");
      const section = document.querySelector("#view2");
      const div = section.querySelector("div");
      const h2 = div.querySelector("h2");

      section.addEventListener('click',(event)=>{

          event.target.style.backgroundColor='red'
      })

      div.addEventListener('click',(event)=>{
          event.target.style.backgroundColor='yellow'
      })
      h2.addEventListener('click',(event)=>{
          event.target.textContent='hello world'
      })
    }
  });

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState == "complete") {
      console.log("ready state");
      const section = document.querySelector("#view2");
      const div = section.querySelector("div");
      const h2 = div.querySelector("h2");

      section.addEventListener('click',(event)=>{
        //  section.classList.add('blue');
        section.classList.toggle('blue');
        //   section.style.backgroundColor='red'
      })

      div.addEventListener('click',(event)=>{
          div.style.backgroundColor='yellow'
      })
      h2.addEventListener('click',(event)=>{
          event.target.textContent='hello world'
      })

      //mouseover
      //mouseout
    }
  });
