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