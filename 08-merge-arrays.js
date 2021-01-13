// Imagine you have 2 arrays which have already been sorted.
// Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

//     Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//     Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// This has a time complexity of O(n(logn)) and O(n) space complexity.

const firstNum = [1, 3, 6, 8, 11];
const secondNum = [2, 3, 5, 8, 9, 10];

const mergeArrays = (arr1, arr2) => {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
};

console.log(mergeArrays(firstNum, secondNum));

// This is the Greedy Approach. This has a time complexity of O(n) time & O(n) space complexity.

const mergeTwo = (arr1, arr2) => {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || arr1[index1] < arr2[index2])) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
};

console.log(mergeTwo(firstNum, secondNum));
