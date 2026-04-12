let try1 = "======= TRY 1 ======";

// let nums = [2,0,1]
// [0,1,0,3,12] RAISES ERROR
// let j = nums.length-1;
// for (let i = j+1; i < nums.length; i++) {
//   if (nums[i] === 0) {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//     j--;
//   }
// }
// console.log(nums);

let try2 = "======= TRY 2 ======";
// let nums = [2,1] //raises error
// let nums = [0,1,0,3,12]
// let j = 0;
// for (let i = j+1; i < nums.length; i++) {
//   if (nums[i] !== 0) {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//     j++;
//   }
// }
// console.log(nums);

let try3 = "======= TRY 3 ======";
// let nums = [0,1,0,3,12] // this fails
// // let nums = [1, 3, 12];
// // let nums = [1,0,1];
// // let nums = [1,0,0,1];
// // let nums = [1,0,0,1];
// let j = 0;
// let k = nums.length - 1;
// if (!new Set(nums).has(0)) {
//   console.log(nums);
// } else {
//   for (let i = j + 1; i < nums.length; i++) {
//     if (nums[i] !== 0 && nums[j] < nums[i]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       j++;
//     } else {
//       [nums[i], nums[k]] = [nums[k], nums[i]];
//       k--;
//       i++;
//       console.log("k");
//     }
//   }
// }
// console.log(nums);

let try4 = "======= TRY 4 ======";
let nums = [1, 0, 1];
// let nums = [0, 1, 0, 3, 12];
let j = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    j++;
  }
}

console.log(nums);
