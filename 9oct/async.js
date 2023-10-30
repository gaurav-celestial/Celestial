// const getCountry = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     const data = await res.json();
//     if (res.status === 404) throw new Error("Cannot find that country");
//     return `capital of ${data[0].name.common} is ${data[0].capital[0]}`;
//   } catch (err) {
//     // alert(err);
//     alert(err.message);
//     throw new Error("Something went wrong");
//   }
// };

// const data = getCountry("india").then((data) => {
//   console.log(data);
// });

// (async function () {
//   try {
//     const data = await getCountry("india");
//     console.log(`2.${data}`);
//   } catch (err) {
//     console.log(`2.${err.message}`);
//   } finally {
//     console.log("3.Fetching data Completed");
//   }
// })();

/////////////////////// PROMISE.ALL //////////////////////////////

const getJSON = async function (url) {
  const res = await fetch(url);
  if (res.status === 404) throw new Error("Country not found");
  return res.json();
};

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const countries = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(countries);
//   } catch (err) {
//     alert(err.message);
//   }
// };

// get3Countries("india", "pakistan", "china");

///////////////////  PROMICE.RACE  ///////////////////////////

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

(async function () {
  const country = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/romania`),
    getJSON(`https://restcountries.com/v3.1/name/bangladesh`),
    timeout(1),
  ]);
  console.log(country);
})();

///////////////////  PROMICE.RACE  ///////////////////////////
