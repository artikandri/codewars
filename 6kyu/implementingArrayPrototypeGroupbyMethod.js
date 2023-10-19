/*

Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.

The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken.

Example:

[1,2,3,2,4,1,5,1,6].groupBy()
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
}

For more examples have a look at the example test cases


*/

Array.prototype.groupBy = function (callback) {
  let results = {};
  this.forEach((x, i) => {
    if (callback) {
      if (!results[callback(this[i])]) {
        results[callback(this[i])] = [x];
      } else {
        results[callback(this[i])].push(x);
      }
    } else {
      if (!results[x]) {
        results[x] = [x];
      } else {
        results[x].push(x);
      }
    }
  });
  return results;
};
