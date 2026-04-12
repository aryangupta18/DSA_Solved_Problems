const prompt = require('prompt-sync')();

let n = Number(prompt("input number of rows: "));
for(let j = n; j > 0; j--){
    for (let i = n-j; i > 0; i--) {
        process.stdout.write(` `);  
    }
    process.stdout.write(`*`);
    for (let i = 4*j-3; i > 0; i=i-2) {
        process.stdout.write(` `);  
    }
    process.stdout.write(`*`);
    console.log()
}
for(let j = n; j > 0; j--){
    process.stdout.write(` `);
}
process.stdout.write(`*`)
// console.log();
