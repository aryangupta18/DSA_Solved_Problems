let a = [1,2,3,3,4,4,4,5,6,7,7];
let size = a.length;

let s0 = "my solution"
// by replacing the duplicate elements with 0
// for (let i = 0; i < size; i++){
//     for (let j = i+1; j < size; j++){
//         if(a[i] === a[j]){
//             a[j] = 0;
//             continue;
//         } else {
//             break;
//         }
//     }
// }
// console.log(a);


let s = "leetcode's duplicay of aay element problem";
// by using two pointers and checking if there is a unique element at one pos then copy it to other position
// * remember we just need all the unique element to be at one side and we dont care about the rest 
// * return the total no of unique elements

let j = 1;
for(let i = 0; i < size-1; i++){
    if (a[i] !== a[i+1]){
        a[j] = a[i+1];
        j++;
    }
}
console.log(j);