/*
 iteration 1 space space star star star space space    0 0 1 1 1 0 0 
 iteration 2 space space star space star space space  0 0 1 0 1 0 0
 iteration 3 space space star star star space space   0 0 1 1 1 0 0
 iteration 4 space space space star space space space  0 0 0 1 0 0 0 
 
 iteration 1 star star star
 iteration 2 star space star
 iteration 3 star star star
 iteration 4 space star space
 
  space pattern = 0 1 | 0 2 4 6 | 0 2 4 | 0 1 3 5
  star pattern = 3 2 3 1 1 1 3 3 3 1 2 2 2 
  space pattern = 4 5 4 6 6 6 4 4 4 6 5 5 5 5 

  i tried to make this pattern in one go that's why there's a mess above

  total char in line = 7

   ***
   * *
   ***
    *
    *
    *
   ***
  * * *
 *  *  *
    *
   * *
  *   *
 *     *
 
*/

// solution 1

const head = [3, 2, 3, 1, 1, 1];

head.forEach((s, i) => {
  const pad = 7 - s;

  s % 2 !== 0
    ? console.log(" ".repeat(pad / 2) + `*`.repeat(s) + " ".repeat(pad / 2))
    : pad % 2 === 1
    ? console.log(" ".repeat(pad / 2) + `* *` + " ".repeat(pad / 2))
    : console.log("g");
});

const body = [3, 3, 3];

body.forEach((b, i) => {
  const pad = 7 - b;

  i === 0 &&
    console.log(" ".repeat(pad / 2) + "*".repeat(b) + " ".repeat(pad / 2));
  i === 1 &&
    console.log(
      " ".repeat(pad / 2 - 1) +
        "*" +
        " " +
        "*" +
        " " +
        "*" +
        " ".repeat(pad / 2 - 1)
    );

  i === 2 &&
    console.log(
      " ".repeat(pad / 2 - 2) +
        "*" +
        "  " +
        "*" +
        "  " +
        "*" +
        " ".repeat(pad / 2 - 2)
    );
});

const legs = [1, 2, 2, 2];
let midPad = 1;

legs.forEach((l, i) => {
  const pad = 7 - l;
  if (i === 0)
    console.log(" ".repeat(pad / 2) + "*".repeat(l) + " ".repeat(pad / 2));
  else {
    let outerPad = pad - midPad;
    console.log(
      " ".repeat(outerPad / 2) +
        "*" +
        " ".repeat(midPad) +
        "*" +
        " ".repeat(outerPad / 2)
    );
    midPad += 2;
  }
});

// solution 2 incomplete

// const loopPattern = [0, 1, 0, 2, 4, 6, 0, 2, 4, 0, 1, 3, 5];
// const spacePattern = [4, 5, 4, 6, 6, 6, 4, 4, 4, 6, 5, 5, 5, 5];

// const neck = 3;

// let maxChar = 7;

// loopPattern.forEach((lp, i) => {
//   const stars = maxChar - spacePattern[i];

//   if (lp % 2 !== 0) {
//     console.log(("*" + " ".repeat(lp) + "*").padStart(20));
//   }

//   if (lp % 2 === 0) {
//     if (i > neck)
//       console.log((" ".repeat(lp / 2) + "*" + "".repeat(lp / 2)).padStart(20));
//     else {
//       console.log(
//         (" ".repeat(lp / 2) + "***" + "".repeat(lp / 2)).padStart(20)
//       );
//     }
//   }
// });

// ------------------PATTERN 2 --------------------

//    *******
//         *
//        *
//       *
//      *
//     *
//    *
//   ********

let input = Number(prompt("enter a number between 4 and 30"));

input = input >= 4 && input <= 30 ? input : undefined;

console.log(`

`);

let str = "";
let str2 = "";
let state = input - 2;

if (input) {
  for (let i = input; i > 0; i--) {
    if (i === input) {
      for (let j = 1; j <= input; j++) {
        str += "*";
      }
      console.log(str);
      str = "";
    } else if (i === 1) {
      for (let j = 1; j <= input; j++) {
        str += "*";
      }
      console.log(str);
      str = "";
    } else {
      for (let j = 1; j <= input; j++) {
        str2 += " ";
      }
      console.log(str2.substring(0, state) + "*");
      state--;
      str2 = "";
    }
  }
} else {
  alert("please choose between 4 and 30");
}
