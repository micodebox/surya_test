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

const input = {
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

console.log(calculateNodesTotal(input));
