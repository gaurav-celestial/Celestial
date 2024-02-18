///////////////////////// CLASSES AND OBJECTS ///////////////////////////////

// class Product {
//   constructor(firstName, price, discount) {
//     this.firstName = firstName;
//     this.price = price;
//     this.discount = discount;
//   }
// }

// const product = new Product("phone", 22000, 5);
// console.log(product);

// const Product2 = class {
//   constructor(firstName, price, discount) {
//     this.firstName = firstName;
//     this.price = price;
//     this.discount = discount;
//   }
//   get getDiscountValue() {
//     return this.discount;
//   }

//   set setDiscountValue(val) {
//     this.discount = val;
//   }

//   discountValue() {
//     return this.price * (this.discount / 100);
//   }
// };

// const product2 = new Product2("chair", 5000, 10);
// console.log(product2.getDiscountValue);
// console.log((product2.setDiscountValue = 8));
// console.log(product2.discountValue());

// class Product3 {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
//   getType() {
//     return this.firstName + " is normal product";
//   }
// }

// class Furniture extends Product3 {
//   constructor(firstName) {
//     super(firstName);
//   }

//   getType() {
//     return this.firstName + " is Furniture";
//   }
// }

// const product3 = new Product3("bottle");
// console.log(product3);
// console.log(product3.getType());

// const product4 = new Furniture("bed");
// console.log(product4);
// console.log(product4.getType());

//////////////////////////// SETS ///////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 5, 3, 4];
// const set = new Set(arr);

// set.add({ course: "javascript" });
// set.delete(1);
// set.clear();
// console.log("Array", arr);
// console.log("Set", ...set);
// console.log(set.has(10));
// console.log(set.size);

/////////////////////////// MAPS //////////////////////////////////////

// const a = {
//   fName: "gaurav",
//   age: 22,
// };

// const b = {
//   fName: "mayank",
//   age: 22,
// };

// const myMap = new Map([
//   [a, "one"],
//   [b, "two"],
// ]);

// myMap.set(3, "three");
// myMap.delete(3);
// myMap.clear();
// console.log(myMap.has(1));
// console.log(myMap.size);

// console.log(myMap);

///////////////////////// ARRAY METHODS ///////////////////////////

// const arr = ["a", "b", "c", "d", "e"];
// console.log(arr);
// console.log(arr.slice(-1));
// arr.splice(-1);
// console.log(arr);
// console.log(arr.splice(1));
// console.log(arr.concat(["f", "g", "h"]));
// console.log(arr.join("+"));
// console.log(arr.push);

// const transactions = [200, 500, 100, 50, 20, 10];

// const filtered = transactions.filter((tr) => {
//   return tr >= 100;
// });

// const highestVal = transactions.reduce((acc, cur, idx, arr) => {
//   console.log(acc, cur);
//   if (cur > acc) {
//     acc = cur;
//     return acc;
//   }
//   return acc;
// }, 0);

// console.log(highestVal);

// const find = transactions.find((tr) => tr < 100);

// console.log(find);
// console.log(transactions.includes(500));
// console.log(transactions.some((tr) => tr > 200)); //true
// console.log(transactions.every((tr) => tr > 200)); //false

// const arr3 = [1, 2, 3, 5, 1, 8];
// console.log(arr3.flat());
// console.log(new Set(arr3.flat()));

// const temp = arr3.flatMap((item) => {
//   return [item * 10];
// });

// console.log(temp);

///////////////////////// ARRAY METHODS ///////////////////////////
