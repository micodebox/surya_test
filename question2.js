/*
Question 2

Given an array of string, such as
["A", "B", "C", "Z", "Q"]
return an object such as
{ "A": 0, "B": 1, "C": 2, "Z" : 3, "Q": 4 }
The numbers here are the positions of the string in the input array.

Test by run node question2.js in Shell
*/

const input = ["A", "B", "C", "Z", "Q"];

const getPositions = (array) => array.reduce(
  (accum, item, index) => ({
    ...accum,
    [item]: index
  }),
  {}
);

console.log(getPositions(input));
