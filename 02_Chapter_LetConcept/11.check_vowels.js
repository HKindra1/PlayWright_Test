let str = 'hello world';
let x = str.length;
let count = 0;

for (let i = 0; i < x; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count = count + 1;
    }
}

console.log(count);