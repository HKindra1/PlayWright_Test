let x = [5, 10, 13, 8, 22];
let largest = x[0];

for (let i = 1; i < x.length; i++) {
    if (x[i] > largest) {
        largest = x[i];
    }
}

console.log(largest);