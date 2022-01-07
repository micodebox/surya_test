/*
Question 5

Given the same input as above, place parentheses around the vowels.
For example:
["d(o)g", "c(a)t", "m(ou)s(e)", "sky", "(e)l(e)v(e)n"]
Notice how consecutive vowels are grouped. That is, "m(ou)s(e)" is correct; 
"m(o)(u)s(e)" is incorrect.

Test by run node question5.js in Shell
*/

const input = ["dog", "cat", "mouse", "sky", "eleven"];

const vowelsWrapped = (array) => array.map(item => item.split(/([aeiou]{1,})/g).map(characters => characters.match(/[aeiou]/) ? `(${characters})` : characters).join(''));

console.log(vowelsWrapped(input));
