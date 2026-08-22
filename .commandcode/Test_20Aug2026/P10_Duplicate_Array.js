let x = [5, 10, 13, 8, 13, 22, 5, 10];
let y = [];

for (let i = 0; i < x.length; i++) {
    if (y.indexOf(x[i]) === -1) {
        y.push(x[i]);
    }
}

console.log(y);
//console.log(y.indexOf(11));