//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

class Car {
  constructor(make, model, year, color, mpg){
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.mpg = mpg;
  }
}

let fox = new Astronaut('Fox', 7, 12);

// console.log(fox);
// console.log(fox.age, fox.color);

// fox.age = 9;
// fox.color = 'red';

// console.log(fox);
// console.log(fox.age, fox.color);


let myCar = new Car('Tesla', 'Model S', 2019);
console.log(myCar);
//Try modifying or adding properties below.