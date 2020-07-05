var isOdd = function isOdd(num){
  //checks if the number is not odd and returns false
  if(num % 2 === 0){
    return false;
  //otherwise returns true
  } else {
    return true;
  }
}

//test cases
console.log(isOdd(2)); //expected false
console.log(isOdd(5)); //expected true
console.log(isOdd(8)); //expected false
console.log(isOdd(23)); //expected true
console.log(isOdd(50)); //expected false
console.log(isOdd(99)); //expected true

// repl output
// false
// true
// false
// true
// false
// true

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
//output
// 3 is odd: true
// 8 is odd: false
