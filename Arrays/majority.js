// let nums = [1,2,2]
let nums = [3,2,3]

let s = "------ my solution -----"
// let i = 0;
// while(i <= Math.floor(nums.length/2)){
//     let c = 0;
//     for(let j = i+1; j < nums.length; j++){
//         if(nums[i] === nums[j]){
//             c++;
//         }
//     } 
//     if (c >= Math.floor(nums.length/2)) console.log( nums[i]);
//     i++;
// }

let T = "------ optimal solution -----"
let ans = nums[0]
let count = 1;
for (let i = 1; i < nums.length; i++){
    if(count === 0){
        ans = nums[i]
        count = 1
    } else if(ans === nums[i]) count++
    else count--
}

console.log(ans)
