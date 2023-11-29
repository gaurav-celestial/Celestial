// * Given two matrices represented as 2D arrays, write a function to perform matrix multiplication.
// Array 1 [[1,2] [3,4]] Array 2 [[5,6],[7,8]]
// Output : [  [ (1* 5 + 1*6), (2*5 + 2*6)],  [(3*7 + 3*8), (4*7 + 4*8) ]   => [ [11, 22], [45, 60] ]

// * Flatten Array: Write a function that flattens a nested array.  (Use recursion)
//  For example, given [1, [2, [3, 4], 5], 6], the output should be [1, 2, 3, 4, 5, 6].

// Question 1

const arr1 = [
  [1, 2],
  [3, 4],
  [1, 2],
];

const arr2 = [
  [5, 6],
  [7, 8],
  [5, 6],
];

const finalArr = [];

arr1.map((a, i) => {
  const [z, x] = a;
  const [c, v] = arr2[i];

  const temp = [z * c + z * v, x * c + x * v];
  finalArr.push(temp);
});

console.log("Question 1 ", finalArr);

// Question 2

const brr = [1, [2, [3, 4], 5], 6];
const val = 1;

const finalBrr = [];

const fun = function (brr) {
  for (let i = 0; i < brr.length; i++) {
    if (brr[i].length) {
      fun(brr[i]);
    } else {
      finalBrr.push(brr[i]);
    }
  }
};
fun(brr);

console.log("Question 2 ", finalBrr);
