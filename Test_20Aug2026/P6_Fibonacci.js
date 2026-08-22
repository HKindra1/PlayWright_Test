let x=10;
let fib=1;
let fib2=1;
for (let i=0;i<x;i++){
console.log(fib);
let temp = fib + fib2;
fib = fib2;
fib2 = temp;
}