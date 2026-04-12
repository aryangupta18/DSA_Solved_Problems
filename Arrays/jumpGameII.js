// let nums = [2, 3, 1, 1, 4];
// let nums = [0,1];
// let nums = [3, 2, 1];
let nums = [1, 2, 3];
// let nums = [0];


let s = "======= solution 1 ======";
// let jumps = 0;
// let i = 0;
// while (i < nums.length - 1) {
//   if (i === 0) {
//     jumps++;
//     i++;
//   } else {
//     i = i + nums[i];
//     if (i < nums.length) jumps++;
//   }
// }
// console.log(jumps);

let s1 = "======= solution 2 ======";
const n = nums.length;
if (n <= 1) return 0;

let jumps = 0;
let currEnd = 0;
let maxReach = 0;

// Greedy level scan up to n-2.
for (let i = 0; i < n - 1; i++) {
  maxReach = Math.max(maxReach, i + nums[i]);

  if (i === currEnd) {
    jumps++;
    currEnd = maxReach;

    // Optimization: break as soon as last index is reachable.
    if (currEnd >= n - 1) break;
  }
}
console.log(jumps)