// Array Rotation: Implement a function to rotate an array to the right by k steps.
// * For example, given the array [1, 2, 3, 4, 5] and k = 2, the output should be [4, 5, 1, 2, 3].

const arr = [1, 2, 3, 4, 5];

let key = 3;

let arr2 = [];

const arr3 = arr.splice(-key);
arr.unshift(...arr3);

console.log(arr3);
console.log(arr);
