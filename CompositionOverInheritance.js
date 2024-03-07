// js object composition vs inheritance
class Pizza{
    constructor(size,crust,sauce){
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare(){ console.log("Preparing...")}
    bake(){console.log("Baking...")}
    ready(){console.log('Ready!')}
}

// Problem : Repeating methods - NOT DRY
class salad{
    constructor(size,dressing){
        this.size = size;
        this.dressing = dressing
    }
    prepare(){ console.log("Preparing...")}
    bake(){console.log("Baking...")}
    ready(){console.log('Ready!')}
}

class stuffedCrustPizza extends Pizza{
    stuff(){
        console.log('stuffed the crust....');
    }
}
class butteredCrustPizza extends Pizza{
    butter(){
        console.log('Buttering the crust....')
    }
}

//Problem : Repeating methods - NOT DRY
class stuffedButteredCrustPizza extends Pizza{
    stuff(){
        console.log('stuffed the crust....')
    }
    butter(){
        console.log('Buttering the crust....')
    }
}

const piz = new stuffedButteredCrustPizza();
piz.stuff();
piz.butter();

// instead , use composition for methods
const prepare = ()=>{
    return {
        prepare:()=>console.log('Preparing ....')
    }
}
const bake = ()=>{
    return {
        bake:()=>console.log('Baking....')
    }
}
const toss = ()=>{
    return {
        toss:()=>console.log('tossing....')
    }
}
const ready = ()=>{
    return {
        ready:()=>console.log('ready....')
    }
}
const stuff = ()=>{
    return {
        stuff:()=>console.log('stuffing....')
    }
}
const butter = ()=>{
    return {
        butter:()=>console.log('buttering....')
    }
}

const createPizza = (size,crust,sauce) =>{
    const pizza = {
        size:size,
        crust:crust,
        sauce:sauce,
        toppings:[]
    }
    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}
const createSalad = (size,dressing) =>{
    return {
        size:size,
        dressing:dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}
const createStuffedButteredCrustPizza = (pizza) =>{
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
}

const anotherPizza = createPizza('medium','thin','original');
const someBodysPizza = createStuffedButteredCrustPizza(anotherPizza)
//or
const davesPizza = createStuffedButteredCrustPizza(createPizza('medium','thin','original'))
const davessalad = createSalad('side','ranch')

davesPizza.bake();
davesPizza.stuff();
davesPizza.prepare();
console.log(davesPizza);
console.log(davessalad)

const addTopping = (pizza,topping) =>{
    pizza.toppings.push(topping);
    return pizza;
}

const jimsPizza = createPizza("md","thin","original")
console.log(jimsPizza);
console.log(addTopping(jimsPizza,'pepperoni'))
console.log(jimsPizza) //mutation!

//


// example 2
class Animals{
    constructor(height,name){
        this.height = height
        this.name = name
    }
    walk(){
        console.log(`${this.name} this animal can walk`);
    }
}

class bigAnimals extends Animals{
    zero(){
        console.log("the hero")
    }
}
