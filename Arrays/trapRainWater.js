let height = [0,1,0,2,1,0,1,3,2,1,2,1]
// let height = [4,2,0,3,2,5]

// * firstly we will calculate the max heights of the bars from left and right
let l = []
let r = []
let maxR = height[height.length-1]
let maxL = height[0]
l[0] = maxL
r[height.length - 1] = maxR

// ! do not start loops from the first or the last element, start from either the second or the last second  
for(let i = 1; i < height.length; i++){
    // l[i] = Math.max(maxL, height[i])
    // maxL = l[i]
    maxL = Math.max(maxL, height[i])
    l[i] = maxL
}
for(let i = height.length-2; i >= 0; i--){
    r[i] = Math.max(maxR, height[i])
    //! maxR = l[i]
    maxR = r[i]
}
console.log(l,r);


// * the we will check at a certain position which bar has the lesser heighnt among the left annd the right bar
// * the with the lesser height will be substracted with the height of the current bar
// * which will give us the height of the water trapped
let tw = 0
for(let i = 0; i < height.length; i++){
    tw += Math.min(l[i], r[i]) - height[i]
    console.log(`${Math.min(l[i], r[i])} - ${height[i]} = ${Math.min(l[i], r[i]) - height[i]}`)
}

console.log(tw)