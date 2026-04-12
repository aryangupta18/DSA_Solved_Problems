// let nums = [1,1,2,3,3,4,4,8]
let nums = [4,1,2,1,2]

let s = "--------- brute force -------"
// let sa = Array.from(new Set(nums));
// let ca = [];

// for(let i = 0; i < sa.length; i++){
//     let count = 0;
//     for(let j = 0; j < nums.length; j++){
//         if(nums[j] === sa[i]){
//             count++;
//         }
//     }
//     ca[i] = count;
// }
// let k = 0;
// while (k < ca.length){
//     if(ca[k] === 1) {
//         console.log(sa[k]);
//         break;
//     }
//     k++;
// }

let t = "--------- using XOR -------"
/*
Use XOR:

Duplicate numbers cancel out
Only unique number remains

nums = [4,1,2,1,2]
result = 0

0 ^ 4 = 4  
4 ^ 1 = 5  
5 ^ 2 = 7  
7 ^ 1 = 6  
6 ^ 2 = 4  
*/

let result = 0;

for(let num of nums){
    result ^= num;
}

console.log (result);