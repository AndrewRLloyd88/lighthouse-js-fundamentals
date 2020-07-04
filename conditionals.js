const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


// const temperature = 13;

// What does temperature have to be for the program to tell us to pick a scarf? 
// const temperature = -2

// What about for it to tell us that short sleeves are OK?
const temperature = 45;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
const age = 16;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
} else if (isCitizen && age < 18){
  console.log(18 - age + " years until you can vote");
} else {
  console.log("you must be a citizen to vote");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}


if (!raining) {
  console.log("Leave your umbrella at home!");
}
