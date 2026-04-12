let arr = [1,2,3,4,5];
let size = arr.length;
let temp, prev = arr[size-1];
let j;
// solution 1
// for(let i = size-1; i >= 0; i--){
//     if (i === 0){
//         j = size-1;
//     } else {
//         j = (i-1)%size;
//     }
//     temp = prev;
//     prev = arr[j];
//     arr[j] = temp;
// }

// solution 2
let copy = arr[0];
for(let i = 0; i <= size-2; i++){
    arr[i] = arr[i+1];
}
arr[size-1] = copy;

console.log(arr);
