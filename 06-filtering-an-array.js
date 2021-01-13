// Imagine you have an array of numbers. 
// Write an algorithm to remove all numbers less than 5 from the array. 
// DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

const filterMe = (arr) => {
    let result = [];

    arr.map(num => {
        if(num >= 5) {
            result.push(num)
        }
    })
    return result
}

const numbers = [1, 2, 4, 5, 8, 10, 59]
console.log(filterMe(numbers))
