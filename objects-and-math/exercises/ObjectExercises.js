let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brade",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
}

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
}

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
}

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.




let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

// Print out the relevant information about each animal.

function crewReports(arr) {
   for (let i = 0; i < arr.length; i++) {
      console.log(`
      ${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astronautID}
      ` );
   }

}

crewReports(crew);

// Start an animal race!

function fitnessTest (candidates) {
   let results = []
   let numSteps = 0;
   let turns = 0;
   for (let i = 0; i < candidates.length; i++) {
      numSteps = 0;
      turns = 0;
      while (numSteps < 20) {
         numSteps += candidates[i].move();
         turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));