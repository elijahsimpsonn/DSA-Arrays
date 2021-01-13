// You are given an array containing positive and negative integers. 
// Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12


const bigBoiSum = (arr) => {
    if (arr.length < 2){
        return undefined
    }
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let i = 0; i < arr.length; i++) {
        const value = arr[i]
        if (value > largest) {
            secondLargest = largest
            largest = value
        } else if (value > secondLargest) {
            secondLargest = value
        }
    }
    const largestSum = largest + secondLargest
    return largestSum
}

const numbers = [4, 6, -3, 5, -2, 1]

console.log(bigBoiSum(numbers))