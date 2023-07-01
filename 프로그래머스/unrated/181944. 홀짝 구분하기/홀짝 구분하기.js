const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    num = Number(input[0]);
    if(num%2 === 0){
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
});

//다른사람의 좋은 코드 예시
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }).on('line', function (line) {
//     const result = Number(line) % 2 ? 'odd' : 'even'
//     console.log(line, 'is', result)
// })
