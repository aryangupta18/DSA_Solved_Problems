const prompt = require('prompt-sync')();

let n = Number(prompt("input number of rows: "));
for (let i = 1; i <= n; i++) {
    let c = 64;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${String.fromCharCode(Number(c)+j)} `);
    }
    console.log();
}