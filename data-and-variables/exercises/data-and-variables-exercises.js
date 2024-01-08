// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000; 
let distanceToMoonKm = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilometer);

// Calculate a space mission below

//1. Create and assign a miles to Mars variable. You can get the miles to Mars by multiplying the distance to Mars in kilometers by the miles per kilometer.
let milesToMars = distanceToMarsKm * milesPerKilometer;

//2. Next, we need a variable to hold the hours it would take to get to Mars. To get the hours, you need to divide the miles to Mars by the shuttle’s speed.
let hoursToMars = milesToMars / shuttleSpeedMph;

//3. Finally, declare a variable and assign it the value of days to Mars. In order to get the days it will take to reach Mars, you need to divide the hours it will take to reach Mars by 24.
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log("The Space Shuttle" ,shuttleName, "will take" ,daysToMars, "days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log("The Space Shuttle" ,shuttleName, "will take" ,daysToMoon, "days to reach the Moon.");

