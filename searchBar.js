// var searchBarDom = document.getElementById('search-bar');
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// const getSearchResult = debounce(() => {
//   numberOfApiCalls += 1;
//   console.log('Number of API Calls : ' + numberOfApiCalls);
// }, 1000);

// searchBarDom.addEventListener('input', function (e) {
//   numberOfKeyPresses += 1;
//   console.log('Search Keyword : ' + e.target.value);
//   console.log('Number of Key Presses : ' + numberOfKeyPresses);
//   getSearchResult();
// });

// function debounce(callback, delay = 1000) {
//   var time;
//   return (...args) => {
//     clearTimeout(time);
//     time = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }
var searchBarDom = document.getElementById('search-bar');
var numberOfKeyPresses = 0;
var numberOfApiCalls = 0;

const getSearchResult = throttle(() => {
  numberOfApiCalls += 1;
  console.log('Number of API Calls : ' + numberOfApiCalls);
}, 1000);

searchBarDom.addEventListener('input', function (e) {
  numberOfKeyPresses += 1;
  console.log('Search Keyword : ' + e.target.value);
  console.log('Number of Key Presses : ' + numberOfKeyPresses);
  getSearchResult();
});


function throttle(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
function throttle(callback, delay = 1000) {
    let shouldWait = false;

    return (...args) => {
      if (shouldWait) return;

      callback(...args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    };
  }
//The concept of debouncing is pretty straightforward.
//It delays the function invocation by a defined period of time to avoid
//unnecessary invocations.
//So, the function will only be invoked if no event is triggered within that time.
//If the user triggers a new event during that time, the time will be reset.
