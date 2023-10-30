/* QUESTION 1 */

// input: arr=['hello', 'how','are','you', 'today?']
// output:
// hello
// how
// are
// you
// today?
// empty array

const arr = ["hello", "how", "are", "you", "today"];
const arr2 = [];
const length = arr.length;

for (let i = 0; i < length; i++) {
  const val = arr.shift();
  console.log(val);
}

console.log(arr);

/* QUESTION 2 */
// input: "How are you today?";
// output: "woH era uoy ?yadot";

const input = "How are you today";
const inputArr = [...input];
let anArr = [];
let finalArr = [];

let spaceCount = 0;

inputArr.forEach((i, index) => {
  if (i === " ") {
    spaceCount++;
    finalArr[spaceCount - 1] = [...anArr];
    anArr = [];
  } else if (index === inputArr.length - 1) {
    anArr.push(i);
    finalArr[spaceCount] = [...anArr];
  } else {
    anArr.push(i);
  }
});

const finalArr2 = finalArr.map((fa) => {
  const currentArr = [...fa];
  let currentFinal = [];
  for (let i = currentArr.length - 1; i >= 0; i--) {
    currentFinal.push(currentArr[i]);
  }
  return currentFinal;
});

console.log(finalArr2);

// QUESTION 3

// input: "arr= [1,2,3,[4,5,[6,7],8,9],10,11]";
// output: "arr=[1,2,3,4,5,6,7,8,9,10,11]";
const input2 = [1, 2, 3, [4, 5, [6, 7], 8, 9], 10, 11];
let finalTempArr = [];
let finalTempArr2 = [];
let indexOfArray1;
let indexOfArray2;

const finalInput = input2.map((i2, i) => {
  if (typeof i2 === "object") {
    indexOfArray1 = i;
    i2.map((i2, i) => {
      indexOfArray2 = i;
      if (typeof i2 === "object") {
        finalTempArr2.push(...i2);
      } else {
        finalTempArr.push(i2);
      }
    });
    finalTempArr.splice(indexOfArray2, 0, ...finalTempArr2);
  } else {
    return i2;
  }
});

finalInput.splice(indexOfArray1, 1);
finalInput.splice(indexOfArray1, 0, ...finalTempArr);

console.log(finalInput);
