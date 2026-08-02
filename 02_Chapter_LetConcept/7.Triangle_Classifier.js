let X = 20;
let Y = 20;
let Z = 20;

if (X === Y && Y === Z) {
    console.log("The triangle is equilateral.");
} else if (X === Y || Y === Z || X === Z) {
    console.log("The triangle is isosceles.");
} else {
    console.log("The triangle is scalene.");
}