let browser = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];

console.log(browser);
console.log(browser[4]); 

browser.push("Brave"); // Adds "Brave" to the end of the array
console.log(browser);
console.log(browser[browser.length-1]);

browser.pop(1);
console.log(browser);

browser=browser.slice(1, 3); // Creates a new array with elements from index 1 to 2 
console.log(browser); // Output: ["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave"]