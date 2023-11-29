let arr = ["abcd", "efgh", "ijkl", "mnopz"];

// output
// ["aeim", "bfjn", "cgko", "dhlp","z"];

const arr2 = [];
let strLen2 = arr[0].length;

//storing length of the highest length element of arr = will be arr2 length dynamically

arr.forEach((a) => {
  if (strLen2 < a.length) {
    strLen2 = a.length;
  }
});

//filling the arr2
for (let i = 0; i < strLen2; i++) {
  let str = "";
  arr.map((a) => {
    if (a[i] === undefined) return;
    str += a[i];
  });
  arr2[i] = str;
}

console.log(arr2);
