const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

//access an item in our aray
console.log(packingList[3]);

//while loop
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

//Output
//Kitchen stuff to pack:
// bowls
// plates
// pots
// pans
// eating utensils
// glasses
// cups
// cooking utensils
