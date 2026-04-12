let nums = [5, 7, 7, 8, 8, 10], target = 8;

// let nums = [5,7,7,8,8,10], target = 6

// let nums = [], target = 0

let try1 = "====== without binary sreach ======";
// let index = [-1, -1];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === target) {
//     if (index[0] === -1) index[0] = i;
//     index[1] = i;
//   }
// }
// console.log(index);

let try2 = "====== with binary sreach ======";
let index = [-1, -1];
let i = 0;
let j = nums.length - 1;
let mid = Math.floor((i + j) / 2);
if (nums[mid] > target) j = mid;
if (nums[mid] <= target) i = mid + 1;
while (i <= j) {
  if (nums[i] === target) {
    if (index[0] === -1) index[0] = i;
    index[1] = i;
  }
  i++;
}
console.log(index);
