/*

You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

*/

function explode(arr) {
  if (arr.every((x) => !Number.isInteger(x))) return "Void!";
  if (arr.some((x) => typeof x === "string")) {
    const n = arr.find((x) => typeof x === "number");
    return Array(n)
      .fill(1)
      .map((x) => arr);
  } else {
    const sum = arr[0] + arr[1];
    return Array(sum)
      .fill(1)
      .map((x) => arr);
  }
}
