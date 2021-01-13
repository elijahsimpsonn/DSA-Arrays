// Given an array of numbers, 
// Write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. 
// See the following example input and output.

//     Input:[1, 3, 9, 4]
//     Output:[108, 36, 12, 27]

// Linear Time (O(n)) has running times that are directly proportional to the size (n) of the input.

const productYo = (input) => {
    let result = [];
    let product = input.reduce((total, current) => total * current)
    for (let i = 0; i < input.length; i++){
        result[i] = product / input[i]
    }
    return result;
}

const input = [1, 3, 9, 4]
console.log(productYo(input))
