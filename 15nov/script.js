import addToCart from "./shopping.js"; //default import
import { quantity } from "./shopping.js";

// const state = {
//   cart: ["pizza", "pasta"],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// stateClone.user.loggedIn = false;
// console.log(stateClone);
// console.log(state);

addToCart("iphone");
console.log(quantity);

const temp = async function () {
  const res = await fetch(
    "https://countries-api-836d.onrender.com/countries/name/india"
  );
  const dat = await res.json();
  return dat[0];
};

const msg = await temp(); //top level await in type module
console.log(msg);

// -------PROMISES---------

// const getCountryData = function () {
//   fetch("https://countries-api-836d.onrender.com/countries/name/india")
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.status === 404) throw new Error("Not Found");
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     })
//     .finally(() => {
//       console.log("Fetched");
//     });
// };
// getCountryData();

// const fun3 = function () {
//   console.log("hi");
// };
// fun3();

// const fun2 = function () {
//   console.log("Test start");
//   setTimeout(() => console.log("0 sec timer"), 0);
//   Promise.resolve("Resolved promise 1").then((res) => console.log(res));

//   Promise.resolve("Resolved promise 2").then((res) => {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log(res);
//   });
//   console.log("Test end");
// };

// fun2();

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) resolve("You won the lottery 🏆");
//   else reject("You lost 😒");
// });

// lotteryPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, sec * 1000);
//   });
// };

// wait(2)
//   .then((res) => {
//     console.log("waited 2 sec");
//     return wait(1);
//   })
//   .then((res) => {
//     console.log("waited 1 one more sec");
//   });

// const resolvedPromise = Promise.resolve("resolved");
// const rejectedPromise = Promise.reject("rejected");

// resolvedPromise.then((res) => {
//   console.log(res);
// });

// rejectedPromise.catch((err) => {
//   console.log(err);
// });

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (err) => reject(err)
//     );
//   });
// };

// getLocation()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getCapitalCity = async function (country) {
//   try {
//     const res = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${country}`
//     );
//     const data = await res.json();
//     return data[0].capital;
//   } catch (err) {
//     throw err; //throwing error to return
//   }
// };

// const capital = getCapitalCity("japan");

// capital
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err, "from return"))
//   .finally(() => {
//     console.log("finished getting location");
//   });

const getJSON = async function (url) {
  return await fetch(url).then((res) => {
    return res.json();
  });
};

// const get3Countries = async function (c1, c2, c3) {
//   const data = await Promise.all([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//   ]);

//   data.map((d) => console.log(d[0].capital));

//   //   const data = Promise.all(res);
// };
// get3Countries("japan", "russia", "israel");

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject("Timeout");
    }, sec * 1000);
  });
};

// timeout(3).catch((err) => console.log("timeout"));

// console.log(timeout(2));

const promiseCombinators = async function (c1, c2, c3) {
  await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    timeout(0.5),
  ])
    .then((d) => console.log(d))
    .catch((err) => console.log(err));
};
promiseCombinators("japan", "russia", "israel");
