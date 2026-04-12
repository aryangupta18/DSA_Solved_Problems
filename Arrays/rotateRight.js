let arr = [1,2,3,4,5];
let size = arr.length;
let copy = arr[size-1];
for(let i = size-1; i > 0; i--){
    arr[i] = arr[i-1];
}
arr[0] = copy;

console.log(arr);