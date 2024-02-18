// function buildFunctions() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// const a = buildFunctions();

// console.log(a);
// a[0]();
// a[1]();
// a[2]();

// var ab = 10;
// var ab = 10;

// for (var v = 0; v < 10; v++) {
//   console.log(v);
// }

// console.log(v);

// function buildFunctions2() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function (j) {
//         return function () {
//           console.log(j);
//         };
//       })(i)
//     );
//   }
//   return arr;
// }

// const b = buildFunctions2();

// b[0]();
// b[1]();
// b[2]();

// function makeGreeting(language) {
//   if (language === "hindi") {
//     return function (name) {
//       console.log("Namaste " + name);
//     };
//   }
//   if (language === "english") {
//     return function (name) {
//       console.log("Hello " + name);
//     };
//   }
// }

// const greet = makeGreeting("hindi");
// greet("gaurav");

const arr1 = [1, 2, 3, 4, 5];

const mapForEach = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
};

const arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});

console.log(arr1);
console.log(arr2);

console.log(new Number(6));
const str = new String("hello");

String.prototype.checkLength = function (limit) {
  return this.length > limit;
};

console.log(str.checkLength(3));
