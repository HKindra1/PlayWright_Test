let x=10
for (let i=0;i<x;i++){
    console.log(i);
}

let a = 10;
console.log(a);

for (let a = 0; a < 10; a++) {
    console.log(a);
    badCodeFn();
}

function badCodeFn() {
    console.log("Hello");
}