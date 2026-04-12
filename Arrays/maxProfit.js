let a = [1, 5, 3, 6, 10, 4, 7, 2];
let maxProfit = 0;
let min = a[0];
let i = 0;
while (i < a.length){
    if(a[i]<min){
        min = a[i];
    }
    if(a[i] - min > maxProfit){
        maxProfit = a[i] - min;
    }
    i++;
}
console.log(maxProfit);
