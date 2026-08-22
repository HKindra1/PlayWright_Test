let j = 0;
let k = 0;
for (let i = 1; i <= 16; i++) {
    j = i % 3;
    k = i % 5;
    if (j === 0 && k === 0) {
        console.log('FizzBuzz'); }
    else if (j === 0) {
        console.log('Fizz');
    } 
    else if (k === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}