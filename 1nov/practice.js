const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Destructuring arrays

// const arr = [2, 3, 4];
// const [x, , z] = arr;
// const [a, b] = [z, x];

// console.log(x, z);
// console.log(a, b);
// console.log(arr);

// const [f1, f2] = restaurant.order(0, 1);
// console.log(f1, f2);

// const arr2 = [1, 2, 3, [4, 5]];
// const [c, d, e, [f, g]] = arr2;
// console.log(c, d, e, f, g);

// //default values
// const [h, i, j = 10, k = 10] = [10, 20];
// console.log(h, i, j, k);

// Destructuring Objects

// restaurant.orderDelivery({ address: 'faridabad,india' }); //default parameters

// const { name, categories } = restaurant;
// const { name: restaurantName, openingHours: hours, categories } = restaurant;

// const { name = 'restaurant', owner = 'gaurav' } = restaurant;
// console.log(name, owner);

// let ab = 10;
// let cd = 20;

// const obj = {
//   ab: 100,
//   cd: 200,
// };
// console.log(ab, cd);

// ({ ab, cd } = obj);

// console.log(ab, cd);

// const {
//   thu: { open: o, close: cl },
// } = restaurant.openingHours;

// console.log(o, cl);

// const arrNew = [1, 2, 3];
// console.log(...arrNew);

// const oneMoreArr = [...restaurant.starterMenu, 'Burger'];
// console.log(oneMoreArr);

// const str = 'gaurav';

// console.log([...str, ' ', 'Sir']);

// const [one, ...others] = [1, 2, 3, 4, 5];
// console.log(one, others);

// const { thu, ...days } = openingHours;
// console.log(thu, days);

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// let noGuests = 0;

// noGuests &&= 10; //nullish colescing with logical asssignment
// console.log(noGuests);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// const arr4 = ['gaurav', 'saurav', 'mayank'];
// console.log(...arr4.entries());

// for (const [i, val] of arr4.entries()) {
//   console.log(`at place ${i + 1} : ${val}`);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.thu?.open);

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pasta',
//   'Burger',
//   'Fries',
//   'Burger',
// ]);
// console.log(ordersSet.has('Burger'));
// console.log(ordersSet.has('Burger'));
// ordersSet.add('Momos');
// ordersSet.delete('Momos');
// console.log(ordersSet);

// const uniqueOrders = [...ordersSet];
// console.log(uniqueOrders);
// console.log(new Set('gauravyadav'));
// console.log(new Set('jonasschmedtmann'));

// for (const order of ordersSet) console.log(order);

// const rest = new Map();
// rest.set(1, 'gaurav');
// rest.set(2, 'mayank');

// rest.set(openingHours, 'Restaurant').set(true, 'open');
// rest.set(document.querySelector('h1'), 'heading');

// console.log(rest);
// console.log(rest.get(true));
// console.log(rest.has('categories'));
// console.log(rest.size);

// const question = new Map([
//   ['question', 'Best language in the world?'],
//   [1, 'Javascript'],
//   [2, 'Java'],
//   [3, 'C'],
// ]);

// console.log(question);

// //convert object to map
// const hoursMap = Object.entries(openingHours);
// console.log(new Map(hoursMap));

// //map to array
// console.log([...question]);
// console.log(question.values());

// const airplane = 'Air India';
// console.log(airplane[0]);
// console.log(airplane.length);
// console.log(airplane.slice(1, -1));

// //fix capitalization in name
// const firstName = 'gAuRaV';

// const nameLower = firstName.toLowerCase();
// const finalName = nameLower[0] + nameLower.slice(1);
// console.log(finalName);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.startsWith('All'));
// console.log(announcement.includes('cometo'));

// const name = 'gaurav yadav';
// const newName = ['Gaurav', 'yadav'.toUpperCase()].join(' ');
// console.log(newName);
// console.log(name.split(' '));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const slicedStr = str.slice(-4);
//   console.log(slicedStr.padStart(str.length, '*'));
// };

// maskCreditCard(12345678);
// maskCreditCard(12345678421);
