/*
Question 1

Given an array of strings such as
["A", "B", "C"]
return an array of objects such as
[ {"name": "A"}, {"name": "B"}, {"name": "C"} ]

Test by run node question2.js in Shell
*/

const input = ["A", "B", "C"];

const convertToObject = (array) => array.map((item) => ({
  name: item
}));

console.log(convertToObject(input));
