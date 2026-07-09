function double(n) {
    return n * 2;
}
console.log("Test 1 (Positive):", double(5));
console.log("Test 2 (Negative):", double(-3));
console.log("Test 3 (Zero):", double(0));

function square(n) {
    return n * n;
}
console.log("Test 1 (Positive):", square(8));
console.log("Test 2 (Negative):", square(-14));
console.log("Test 3 (Zero):", square(0));

function isEven(n) {
    return n % 2 === 0;
}
console.log("Test 1 (Positive):", isEven(19.7));
console.log("Test 2 (Negative):", isEven(-94));
console.log("Test 3 (Zero):", isEven(0));

function isOdd(n) {
    return n % 2 !== 0;
}
console.log("Test 1 (Positive):", isOdd(12.6));
console.log("Test 2 (Negative):", isOdd(-76.52));
console.log("Test 3: Zero:", isOdd(0));

function multiply(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
console.log("Test 1 (Positive):", multiply(7));
console.log("Test 2 (Negative):", multiply(-16.4));
console.log("Test 3 (Zero):", multiply(0));

function addition(n) {
    return n + 5;
}
console.log("Test 1(Positive):", addition(14));
console.log("Test 2 (Negative):", addition(-9));
console.log("Test 3 (Zero)", addition(0));