// ! second max

let arr = [5,6,3,7,8,1,9,10]

let max = arr[0]
let max2 = arr[0]

for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max2 = max
        max = arr[i]
    }
    else if(max > arr[i] && max2 < arr[i]){
        max2 = arr[i]
    }
}

console.log(arr);
console.log(max);
console.log(max2);