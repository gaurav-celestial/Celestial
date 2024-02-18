//Question 1 sorting via object
const arr = [1, 5, 2, 5, 10, 4, 100];

const obj = {
  4: "four",
  3: "three",
  2: "two",
  6: "six",
};

const obj2 = {};

console.log(Object.keys(obj));

for (let i = 0; i < arr.length; i++) {
  obj2[arr[i]] = arr[i];
}

console.log(Object.values(obj2));
const arr2 = Object.keys(obj2);

// Question 2 sorting via bubble sort
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
