// Write an algorithm which searches through a 2D array,
// Whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];

// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// Polynomial Time O(n^k) has a running time that would be some input size n raised to some constant power k.
// This is O(n^2)

const zeroify = (input) => {
  let copy = [...input.map((row) => [...row])];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (copy[i][j] === 0) transformToZero(input, j, i);
    }
  }
};

const transformToZero = (input, x, y) => {
  input[y].fill(0);
  for (let i = 0; i < input.length; i++) {
    input[i][x] = 0;
  }
  return input;
};

const input = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

zeroify(input);
console.log(input);
