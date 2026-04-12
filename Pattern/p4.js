const prompt = require('prompt-sync')();

let n = Number(prompt("input number of rows: "));
for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`* `);
    }
    console.log();
}