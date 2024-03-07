const initApp = async () =>{
    const button1 = document.getElementById('1');
    button1.addEventListener('click',paras1);

    const button2 = document.getElementById('2');
    button2.addEventListener('click',paras2);
}
document.addEventListener('DOMContentLoaded',initApp)

const paras1 = () =>{
    const start = Date.now();

    const main = document.querySelector('main');

    let i=0;
    while(i<500){
        main.innerHTML += `<p>my value is ${i}</p>`
        i++;
    }

    const end = Date.now() - start;
    console.log(`duration : ${end}`)

}
const paras2 = () =>{
    const start = Date.now();
    const main = document.querySelector('main');
    const fragment = document.createDocumentFragment();

    let i=0;
    while(i<1000){
       const p = document.createElement('p');
       p.textContent = `My value is ${i}`;
       fragment.append(p);
       i++;
    }
    main.append(fragment)
    const end = Date.now() - start;
    console.log(`duration : ${end}`)

}

