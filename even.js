const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

console.log(isEven(10));//true
console.log(isEven(11)); //false
console.log(isEven(-2));//true