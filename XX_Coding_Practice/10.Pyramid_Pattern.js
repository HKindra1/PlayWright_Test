let data = 4;

for (let a = 1; a <= data; a++) {
    let row = ' '.repeat(data - a);
    row += '*'.repeat(2 * a - 1);
    console.log(row);
}


let data2= 4;

for (let i = 1; i <= data; i++) {
    let row = '';
    for (let j = i; j <4; j++) {
        row += ' ';
    }
    for (let z = 1; z <=2*i-1; z++)
    { row += '*'; }
    console.log(row);
}