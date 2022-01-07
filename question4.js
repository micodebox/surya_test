/*
Question 4

Given an array of words, pick out only those words that have two or
more vowels in them. For the purposes of this question, a vowel is one
of the letters a, e, i, o, u.
For example, given
["dog", "cat", "mouse", "sky", "eleven"]
return
["mouse", "eleven"]

Test by run node question4.js in Shell
*/

const input = ["dog", "cat", "mouse", "sky", "eleven"];

const filterVowels = (array) => array.filter(item => item.split('').filter(character => ['a', 'e', 'i', 'o', 'u'].includes(character)).length >= 2);

console.log(filterVowels(input));
