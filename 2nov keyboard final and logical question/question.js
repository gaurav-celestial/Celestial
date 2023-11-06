// *******
//         *
//        *
//       *
//      *
//     *
//    *
//   ********

const input = Number(prompt("number"));

for (let i = input; i > 0; i--) {
  i === input && console.log("*".repeat(i));
  i > 1 && i < input && console.log(" ".repeat(i - 1) + "*");
  i === 1 && console.log("*".repeat(input));
}
