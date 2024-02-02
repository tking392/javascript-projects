// Code your orbitCircumference function here:
function orbitCir (r) {
  return Math.round(2*Math.PI*r);
}

console.log(orbitCir(10));

// Code your missionDuration function here:

function missionDuration (numOrb, orbRadius = 2000, orbSpd = 28000) {
  let d = numOrb * orbitCir(orbRadius);
  let t = d/orbSpd;
  t = Math.round(t*100)/100;
  console.log(`The mission will travel ${d}km around the planet, and it will take ${t} hours to complete.`)
  return t;
  
}

console.log(missionDuration(5,2000,28000));
// Copy/paste your selectRandomEntry function here:
//  let newIdNumbers = [];

// function selectRandomEntry (arr) {
    
//     let index = Math.floor(Math.random() * arr.length);
//     newIdNumbers.push(arr[index]);
//     return arr.splice(index,1);
// }

function randomSelection(arr)
 {
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }

// Code your oxygenExpended function here:

// function oxygenExpended (indexCrewArr, newRadius, newSpd) {
//   let t = missionDuration (3, newRadius, newSpd);
//   let oTwo = Math.round(crew[indexCrewArr].o2Used(t)*1000)/1000;
//   return console.log(`${crew[indexCrewArr].name} will perform the spacewalk, which will last ${t} hours and require ${oTwo}kg of oxygen.`);
// }

function oxygenExpended(candiateObj)
{
  let noOFOrbits=3;
  let duration = missionDuration(noOFOrbits);
  //let duration = missionDuration(noOFOrbits, 1500, 25000);
  let oxygenused = Math.round(candiateObj.o2Used(duration)*1000)/1000;
  //console.log(${candiateObj.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenused} kg of oxygen.);
  return oxygenused;
}



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];


randomCandidate = randomSelection(crew);
console.log(oxygenExpended(randomCandidate));
// console.log(oxygenExpended(2,8000,40000));

 