let nums1 = [1,2,3];
let nums2 = [2,5,6,0,0];
let m = 3;
let n = 3;

let c = [];
let s = "my approach"
// let j = 0;
// let k = (m > n)?m:n;

// for(let i = 0; i < k; i++){
//     if( nums1[i] >= nums2[i]){
//         c[j] = nums2[i];
//         c[j+1] = nums1[i];
//         j += 2;
//     } else if((nums1[i] === undefined || nums1[i] === 0) ){
//         c[j] = nums2[i];
//         j++;
//     }else if((nums2[i] === undefined || nums2[i] === 0)){
//         c[j] = nums1[i];
//         j++;
//     }else {
//         c[j] = nums1[i];
//         c[j+1] = nums2[i];
//         j += 2;
//     }
// }

let s1 = "another approach";
let i = 0, j = 0;

while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
        c.push(nums1[i]);
        i++;
    } else {
        c.push(nums2[j]);
        j++;
    }
}

while (i < m) {
    c.push(nums1[i]);
    i++;
}

while (j < n) {
    c.push(nums2[j]);
    j++;
}

console.log(c);
