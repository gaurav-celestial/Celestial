var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a;
a = 20;
console.log(a);
var hobbies;
hobbies = ["g"];
var person;
var personArr;
person = {
    fullName: "gaurav yadav",
    age: 22
};
var course = "web dev";
course = 123;
function insertAtBeginning(arr, val) {
    var newArr = __spreadArray([val], arr, true);
    return newArr;
}
var demoArr = [1, 2, 3, 4, 5];
var temp = insertAtBeginning(demoArr, 32);
console.log(temp);
