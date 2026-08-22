let str = 'racecar';
let isPalindrome = true;
let str2='';
let len = str.length;
for (let i = len-1; i >=0; i--)
{
str2 = str2 + str[i];
}
if (str === str2) { console.log('Palindrome'); }
else { console.log('Not a Palindrome'); }