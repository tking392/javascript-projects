const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel = input.question("Please input starting fuel level: ");
let numberofAstronauts = input.question("Please input the number of Astronauts going on the mission: ");
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = Number(startingFuelLevel);

  while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
    startingFuelLevel = input.question("Fuel Level Insufficient! Please refuel and re-enter Fuel Level: ");
    startingFuelLevel = Number(startingFuelLevel);
  }
 
  console.log("Fuel Level Locked-in!");

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numberofAstronauts = Number(numberofAstronauts);

while (numberofAstronauts <= 0 || numberofAstronauts > 7 || isNaN(numberofAstronauts)) {
  numberofAstronauts = input.question("Error! Please enter a valid Number of Astronauts for the mission (Party size: 1 - 7): ");
  numberofAstronauts = Number(numberofAstronauts);
}
  
console.log("Number of Astronauts Locked-in!")
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel - 100 * numberofAstronauts >= 0) {
  startingFuelLevel = startingFuelLevel -= 100*numberofAstronauts;
  shuttleAltitude = shuttleAltitude += 50;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${shuttleAltitude} km.`;

if (shuttleAltitude >= 2000) {
  output += " Orbit achieved!";
} else {
  output += " Failed to reach orbit.";
}

console.log(output);