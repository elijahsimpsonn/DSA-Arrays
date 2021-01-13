// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma
// Output: False
// Input: amazon, azonam
// Output: true



const rotation = (input1, inputRotated) => {
    input1 += input1;
    return input1.includes(inputRotated)
}

console.log(rotation("amazon", "azonam")); // true
console.log(rotation("amazon", "azonma")); // false

