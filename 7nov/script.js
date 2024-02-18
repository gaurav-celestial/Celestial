// Please find the below question to solve.
// Find the unique elements from a given array and also the duplicates
// EG: givenArray =  [1,2,3,4,3,2,1]
// uniqueArray = [1,2,3,4]
// duplicateItems = [1,2,3]

// Duplicate Items
const arr = [9, 8, 1, 2, 3, 4, 3, 2, 1, 1];
console.log(arr);
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  let state = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      state++;
      if (state !== 1 && !arr2.includes(arr[i])) {
        arr2.push(arr[i]);
      }
    }
  }
}
console.log(arr2);

// unique array solution 1
const arr3 = [];

for (let i = 0; i < arr.length; i++) {
  let state = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      state++;
      if (state === 1 && !arr3.includes(arr[i])) {
        arr3.push(arr[i]);
      }
    }
  }
}
console.log(arr3);

// unique array solution 2

const arr4 = [5, 10, 1, 2, 3, 5, 3];
const uniqueArray = [...new Set(arr4)];
