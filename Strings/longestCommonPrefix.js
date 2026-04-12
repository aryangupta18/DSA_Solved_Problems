// let strs = ["flower", "flow", "flight"];
let strs = ["dog","racecar","car"];
// let strs = ["flow", "", "flow"];

let pre = "";
let stat = false;

for (let i = 0; i < strs[0].length; i++) {
  let s = strs[0].substring(0, i + 1);
//   console.log(i,s)
  
  for (let j = 0; j < strs.length; j++) {
    if (s === strs[j].substring(0, i + 1)) {
        stat = true;
    }
    else {
      stat = false;
      break;
    }
  }
  if (stat) {
    pre = s;
    // console.log(pre,"\n");
}
}
console.log(pre);
