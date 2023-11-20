// 'use strict';

// //------------------------- ADVANCE DOM AND EVENTS-----------------------------

// const div = document.createElement('div');
// div.classList.add('cookie-message');
// // div.textContent = 'we use cookie for improved functionality';
// div.innerHTML =
//   'we use cookie for improved functionality <button class="btn btn--close-cookie" >Got it </button>';

// const header = document.querySelector('.header');
// header.prepend(div);
// header.append(div.cloneNode(true));

// div.style.backgroundColor = 'red';
// div.style.width = '100%';

// console.log(div.style.backgroundColor);
// console.log(getComputedStyle(div).display);
// console.log(getComputedStyle(div).height);

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'logo';

// console.log(logo.src); //absolute path
// console.log(logo.getAttribute('src')); //relative path
// console.log(logo.dataset.versionNumber);

// //DOM traversing
// const h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// console.log(h1.parentElement);

// console.log(h1.closest('.header')); //closest parent

// console.log(h1.parentElement.previousElementSibling);
// console.log(h1.parentElement.nextElementSibling);

// //------------------------- OOP-----------------------------------

// const Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Person.prototype.species = 'Homo sapiens';

// const p1 = new Person('gaurav', 'yadav');
// console.log(Person.prototype);
// console.log(p1.__proto__);
// console.log(Person.prototype === p1.__proto__);

// console.log(p1.hasOwnProperty('species'));

// // console.log(p1.__proto__.__proto__);
// // console.log(Object.prototype); //Top of prototype chain

// console.dir(Person.prototype.constructor);

//ES6 CLASSES

// class PersonCl {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const p2 = new PersonCl('gaurav', 'yadav');

// console.log(p2);

const api = async function () {
  console.log('hi');
  const res = await fetch(
    'https://countries-api-836d.onrender.com/countries/name/india'
  );
  const data = await res.json();
  console.log(data[1].nativeName);
};

console.log('done');

api();

const prom = new Promise(function (resolve, reject) {
  if (Math.random >= 0.5) {
    resolve('you win');
  } else {
    reject('you lost');
  }
});

console.log(prom);
console.log('last');
