// for each allow as to loop through something
// but it doesnt return something
// less usefull than other HOC
// forEach doesnt awit for anything

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
  //   getPostSerilaized(ids)
  getPostSerilaizedWithReduce(ids);
};

document.addEventListener("DOMContentLoaded", initApp);

const getPost = async (id) => {
  return await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
};

const useForEach = (ids) => {
  ids.forEach(async (id) => {
    const data = await getPost(id);
    console.log(data);
  });
};

const getPostSerilaized = async (ids) => {
  for (let i = 0; i < ids.length; i++) {
    const data = await getPost(ids[i]);
    console.log(data);
  }

  for (const id of ids) {
    const data = await getPost(id);
    console.log(data);
  }
  console.log("I m waiting for you");
};

// It works with the await keyword.
// The await keyword cannot be used due to the callback function.
// It may lead to incorrect output.

// Promise with map
const getPostsConcurrently = async (ids) => {
  //this is fast,any of promise failed ,it rejected all
  // const post  = await Promise.all(ids.map((id)=>getPost(id)))

  //if we need to get status
  const post = await Promise.allSettled(ids.map((id) => getPost(id)));
  console.log(post);
  console.log("I m waiting for you");
};

const getPostSerilaizedWithReduce = async (ids) => {
  await ids.reduce(async (acc, id) => {
    // wait for the previous item to complete
    await acc;
    //get the next item
    const post = await getPost(id);
    console.log(post);
  }, Promise.resolve());
  console.log("I m waiting for you");
};
