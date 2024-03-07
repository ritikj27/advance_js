// // example 2
// class Animals{
//     constructor(height,name){
//         this.height = height
//         this.name = name
//     }
//     walk(){
//         console.log(`${this.name} this animal can walk`);
//     }
// }

// class bigAnimals extends Animals{
//     constructor(name){
//         super(name)
//     }
//     zero(){
//         console.log("the hero");
//     }
// }
// const bird = new bigAnimals();
// bird.walk()
const walking = (name) => {
    return {
      walk: () => {
        console.log(`${name}, I'm a walker`);
      },
    };
  };

  const zero = () => {
    return {
      zero: () => {
        console.log("zero");
      },
    };
  };

  const createAnimals = (name, height) => {
    const obj = {
      name: name,
      height: height,
    };
    return {
      ...obj,
      ...walking(name),
      ...zero(),
    };
  };

  const bird = createAnimals("bird", 27);
  bird.walk(bird.name); // Pass the name of the bird
  bird.zero();

