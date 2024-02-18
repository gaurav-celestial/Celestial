// alert("hello");

//type coercion
console.log(true == 1);
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("fs"));

console.log(false == 0);
console.log("1" + 1);

var person = new Object();
person["firstname"] = "gaurav";
person["lastname"] = "yadav";
console.log(person);

person.dob = 2001;
console.log(person);

console.log(JSON.stringify(person));

const person2 = `{
    "firstName":"mayank",
    "lastName":"choudhary"
}`;
console.log(typeof JSON.parse(person2));

const fun = function () {
  console.log("hello");
};

function fun2() {
  console.log("hi");
}

fun.person = "gaurav";

console.dir(fun);
console.dir(fun2);

fun();

const obj = {
  name: "object",
  isObj: true,
};

console.log(obj);

function fun3(obj2) {
  obj2.isObj = false;
}

fun3(obj);

console.log(obj); //mutating original object because of pass by reference

var a = 0;
var a = 1;

let b = 0;

console.log(window); //variable environment of global context
