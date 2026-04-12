let n = 1;
if( n === 1) {
    console.log('1');
    return;
}
n = Math.abs((n-1)*10 - 9);
console.log(n);
let digits = Array.from(String(n), Number);
let s = '';
if(digits.length === 1) {
    s = `1${n}`;
} else if(digits[0] === digits[1]) {
    s = `2${digits[0]}`;
} else {
    s = `1${digits[0]}1${digits[1]}`;
}
console.log(s);