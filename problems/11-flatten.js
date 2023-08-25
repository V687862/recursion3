/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(arr) {
//   let result = [];

//   for (let item of arr) {
//     result = Array.isArray(item) ? result.concat(flatten(item)) : result.concat(item);
//   }

//   return result;

// }

function flatten(arr) {
  if (arr.length === 0) {
    return [];
  };
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)))
  } else {
    return [arr[0]].concat(flatten(arr.slice(1)));
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
