// ! PUTTING ALL 0s TO LEFT

let arr = [0,1,0,3,12]
// let arr = [0,1,1,0,1,0,1,1,0,1,1,0]
let j=0

for ( let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
        j++
    }
}
console.log(arr);
