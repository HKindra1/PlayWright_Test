let browser = ["Chrome", "Firefox", "Safari", "Edge", "Opera", 'Brave'];

browser=browser.splice(1, 3); // Removes elements from index 1 to 2 and returns them in a new array
console.log(browser); // Output: ["Firefox", "Safari", "Edge"]

browser = ["Chrome", "Firefox", "Safari", "Edge", "Opera", 'Brave'];

browser=browser.splice(1, 3, "Brave"); // Removes elements from index 1 to 2 and adds "Brave" at index 1
console.log(browser); 