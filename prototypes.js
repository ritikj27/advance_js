const music = {
  play: true,
};

const person = {
  alive: true,
};
// music.__proto__ = person
// js now as getPrototypeOf and setProtoTypeof methods

Object.setPrototypeOf(music, person);
// console.log(Object.getPrototypeOf(music))
// console.log(music.play)
// console.log(music.alive)
// console.log(music)

// prototype chain
const guitar = {
  string: 6,
  __proto__: music,
};

// console.log(guitar.string);
// console.log(guitar.alive);
// console.log(guitar.play);

// No circular __proto reference allowed person.__proto__
//  __proto must be null or object
// object can direclty inherit from another object

const cars = {
  doors: 4,
  seats: 2,
  get seaterMethod() {
    return this.seats;
  },
  set seaterMethod(material) {
    return (this.seats = material);
  },
};

const luxjury = {};
Object.setPrototypeOf(luxjury, cars);
luxjury.seaterMethod = "noting";
// console.log(luxjury.seats);
// console.log(cars.seats);

// methods
// console.log(luxjury.valueOf())

// console.log(Object.keys(luxjury));

Object.keys(luxjury).forEach((item) => {
  // console.log(item)
});

// for in methods as access to the proto pros and inherit
for (let key in luxjury) {
  //  console.log("for in",key)
}

// consturtor
function Animal(species) {
  this.species = species;
  this.eats = true;
}
Animal.prototype.walk = function () {
  console.log(`yeah this animal can walk . ${this.species}`);
};

const Bear = new Animal("Bear");
Bear.walk();
console.log(Bear.__proto__);
console.log(Animal.prototype);

// ES6 class
