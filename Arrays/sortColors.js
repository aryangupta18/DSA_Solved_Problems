// let nums = [2,0,2,1,1,0]
let nums = [2,0,1]
// let nums = [2,0,1,0,2,1,2,1,0,2]
// let nums = [2,1];
// let nums = [0,1];
let s = "approach 1"
// let min = 0;
// let j = 0;
// let k = 0; 
// let n = 3
// while(k <= n){
//     for(let i = j+1; i < nums.length; i++){
//         if(nums[i] === min){
//             nums[i] = nums[i] + nums[j];
//             nums[j] = nums[i] - nums[j];
//             nums[i] = nums[i] - nums[j];
//             j++;
//         }        
//     }
//     k++;
//     min++;   
// }
// console.log(nums);


let t = "approach 2"
// we take 3 pointers, one which shifts zeros to stating and tracks loc, one which shifts twos to end and last which iterates through all elements
let j = 0, k = nums.length-1;
let i = 0;
while(i <= k){
    if(nums[i] === 0){
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
        j++;
        i++;
    }        
    else if(nums[i] === 2){
        nums[i] = nums[i] + nums[k];
        nums[k] = nums[i] - nums[k];
        nums[i] = nums[i] - nums[k];
        k--;
    }
    else i++;
}
console.log(nums);