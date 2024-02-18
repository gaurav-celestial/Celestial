let a: number;

a = 20;

console.log(a);

let hobbies: string[];

hobbies = ["g"];

type Person = {
  fullName: string;
  age: number;
};

let person: Person;
let personArr: Person[];

person = {
  fullName: "gaurav yadav",
  age: 22,
};

let course: string | number = "web dev";

course = 123;

function insertAtBeginning<T>(arr: T[], val: T) {
  const newArr = [val, ...arr];
  return newArr;
}

const demoArr = [1, 2, 3, 4, 5];

const temp = insertAtBeginning(demoArr, 32);

console.log(temp);
