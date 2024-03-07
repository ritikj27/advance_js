//at end of wait time
//final state

console.log("hello world");
const initApp = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", debounce(clickLog, 2000));
};
const clickLog = () => console.log(`clicked from debounce `);

document.addEventListener("DOMContentLoaded", initApp);

const debounce = (fn, delay) => {
  let id;
  console.log(`id at immediate load : ${id}`);
  return (...args) => {
    console.log(`previous id: ${id}`);
    if (id){console.log(`${id} before clear`); clearTimeout(id); }
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};



