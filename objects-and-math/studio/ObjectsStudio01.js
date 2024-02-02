// Code your selectRandomEntry function here:
let newIdNumbers = [];

function selectRandomEntry (arr) {
    
    let index = Math.floor(Math.random() * arr.length);
    newIdNumbers.push(arr[index]);
    return arr.splice(index,1);
}



// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let candidate = [];

// Code your template literal and console.log statements:

for (let i = 0; i < 3; i++) {
console.log(selectRandomEntry(idNumbers));
}

for (let i = 0; i < animals.length; i++) {
  let canID = animals[i].astronautID;
    if (newIdNumbers.includes(canID)) {
      candidate.push(animals[i]);
    }
}

console.log(`${candidate[0].name}, ${candidate[1].name}, and ${candidate[2].name} are going to space!`);