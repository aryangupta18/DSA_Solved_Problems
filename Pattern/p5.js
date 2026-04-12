const prompt = require('prompt-sync')();

let n = Number(prompt("input number of rows: "));
for (let i = 1; i <= n; i++) {
    for (let k = n-i; k > 0; k--){
        process.stdout.write(`  `);
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`* `);
    }
    console.log();
}