let arr = [1,2,3,4,5];
let step = 1;
let size = arr.length;

//! approach 1
// let b = [];
// for(let i = size-step; i < size; i++){
//     b[i] = arr[i];
// }

// if(step === 2){
//     let cp = arr[step]
//     for(let i = 0; i < size-step; i++){
//         arr[i+step] = arr[i];
//     }
//     arr[size-1] = cp;
// } else {
//     for(let i = 0; i < size-step; i++){
//         arr[i+step] = arr[i];
//     }
// }

// let k = 0;
// for(let i = size-step; i < size; i++){
//     arr[k] = b[i];
//     k++;
// }
// console.log(arr);

console.log(arr);

//! approach 2
// for(let i = 0; i < size; i++){
//     c[i] = arr[(i+step)%size]
// }
// console.log(c);

let s = "APPORACH 3 - BY REVERSING THE ARRAY"
//! apprach 3
// * we will reverse the array three times 
// * first - from the index (0, n-1) which will give us [5,4,3,2,1]
// * second - from index (0, step) assuming step = 2 we will get [4,5,1,2,3]
// * third - from index (step, n-1) assuming step = 2 we will get [4,5,3,2,1]

function reverse(arr, i, j){
    while(i<=j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    console.log(arr);
}

reverse(arr, 0, size-1);
reverse(arr, 0, step);
reverse(arr, step+1, size-1);