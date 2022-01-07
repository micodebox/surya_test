// Grouped all question 1 ~ question 5 answers and modified variable names for Run in shared mode and provide output

/*
Question 1

Given an array of strings such as
["A", "B", "C"]
return an array of objects such as
[ {"name": "A"}, {"name": "B"}, {"name": "C"} ]

Test by run node question2.js in Shell
*/

const input1 = ["A", "B", "C"];

const convertToObject = (array) => array.map((item) => ({
  name: item
}));

console.log(convertToObject(input1));

/*
Question 2

Given an array of string, such as
["A", "B", "C", "Z", "Q"]
return an object such as
{ "A": 0, "B": 1, "C": 2, "Z" : 3, "Q": 4 }
The numbers here are the positions of the string in the input array.

Test by run node question2.js in Shell
*/

const input2 = ["A", "B", "C", "Z", "Q"];

const getPositions = (array) => array.reduce(
  (accum, item, index) => ({
    ...accum,
    [item]: index
  }),
  {}
);

console.log(getPositions(input2));

/*
Question 3

Suppose the tree
          1
         / \
        2   4
       /   / \
      3   5   6
is represented by the object
tree = {
  value: 1,
  children: [ { value: 2,
    children: [ { value: 3,
      children: []
    }
    ]
  },
  { value: 4,
    children: [ { value: 5,
      children: []
    },
    {
      value: 6,
      children: []
    }
    ]
  }
  ]
}
How would you total up the "value" of all the nodes. For example, here
the answer would be 1 + 2 + 3 + 4 + 5 + 6 = 21.

Test by run node question3.js in Shell
*/

const input3 = {
  value: 1,
  children: [{
    value: 2,
    children: [{
      value: 3,
      children: []
    }]
  }, {
    value: 4,
    children: [{
      value: 5,
      children: []
    }, {
      value: 6,
      children: []
    }]
  }]
};

const calculateNodesTotal = (obj) => {
  if (obj.children.length == 0) {
    return obj.value;
  }

  return obj.value + obj.children.reduce((accum, child) => accum + calculateNodesTotal(child), 0);
};

console.log(calculateNodesTotal(input3));

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

const input4 = ["dog", "cat", "mouse", "sky", "eleven"];

const filterVowels = (array) => array.filter(item => item.split('').filter(character => ['a', 'e', 'i', 'o', 'u'].includes(character)).length >= 2);

console.log(filterVowels(input4));

/*
Question 5

Given the same input as above, place parentheses around the vowels.
For example:
["d(o)g", "c(a)t", "m(ou)s(e)", "sky", "(e)l(e)v(e)n"]
Notice how consecutive vowels are grouped. That is, "m(ou)s(e)" is correct; 
"m(o)(u)s(e)" is incorrect.

Test by run node question5.js in Shell
*/

const input5 = ["dog", "cat", "mouse", "sky", "eleven"];

const vowelsWrapped = (array) => array.map(item => item.split(/([aeiou]{1,})/g).map(characters => characters.match(/[aeiou]/) ? `(${characters})` : characters).join(''));

console.log(vowelsWrapped(input5));
