// let s =  "()"
// let s = "()[{";
let s = "()[]{}";
// let s = "]{";
// let s = "()[]}{";
// let s = "(){}}{";
// let s = "[";
// let s = "(]";
// let s = "([])";
// let s = "([)]";

let msg = "====== without using stack ======";
// var isValid = function (s) {
//     let as = s.split("");
//     if (s.length === 1 || s.length === 0 || s.length % 2 !== 0 || as[0] === ')' || as[0] === ']' || as[0] === '}') return false;
//     else {
//         for (let k = 0; k < as.length; k++) {
//             let j = as.length - 1;
//             let i = k;
//             while (i < j) {
//                 if (as[i] === "(") {
//                     j = Math.min(j, as.slice(i, j + 1).indexOf(")"));
//                     if (j === -1) {
//                         return false;

//                     }
//                 } else if (as[i] === "[") {
//                     j = Math.min(j, as.slice(i, j + 1).indexOf("]"));
//                     if (j === -1) {
//                         return false;

//                     }
//                 } else if (as[i] === "{") {
//                     j = Math.min(j, as.slice(i, j + 1).indexOf("}"));
//                     if (j === -1) {
//                         return false;

//                     }
//                 } else {
//                     return false;
//                 }
//                 i++;
//             }
//         }
//     }
//     return true;
// };

let msg1 = "====== using stack ======";
var isValid = function (s) {
  let stack = [];
  let t = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      t++;
    } else {
      if (t === 0) return false;
      if (
        (stack[t-1] === "(" && s[i] === ")") ||
        (stack[t-1] === "{" && s[i] === "}") ||
        (stack[t-1] === "[" && s[i] === "]")
      ) {
        stack.pop();
        t--;
      } else return false;
    }
  }
  return t === 0;
};

console.log(isValid(s));
