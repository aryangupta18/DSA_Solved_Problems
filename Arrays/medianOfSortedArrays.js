let nums1 = [1, 2],
  nums2 = [3, 4];
let n = [];
let n1 = 0,
  n2 = 0;
for (let i = 0; i < nums1.length + nums2.length; i++) {
  if (n1 >= nums1.length) {
    n[i] = nums2[n2];
    n2++;
    continue;
  } else if (n2 >= nums2.length) {
    n[i] = nums1[n1];
    n1++;
    continue;
  } else {
    if (nums1[n1] < nums2[n2]) {
      n[i] = nums1[n1];
      n1++;
    } else if (nums1[n1] > nums2[n2]) {
      n[i] = nums2[n2];
      n2++;
    } else {
      n[i] = nums2[n2];
      n[i + 1] = nums1[n1];
      i++;
      n1++;
      n2++;
    }
  }
}
if(n.length%2!==0){
    med = n[Math.floor(n.length/2)]
} else {
    med = (n[Math.floor(n.length/2)-1]+n[Math.floor(n.length/2)])/2
}
console.log(parseFloat(med))