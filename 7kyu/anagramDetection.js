/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"

*/

const { differenceWith, flatMap, countBy, isEqual } = require("lodash");

var isAnagram = function (test, original) {
  const diffs = [
    differenceWith([...original.toLowerCase()], [...test.toLowerCase()]),
    differenceWith([...test.toLowerCase()], [...original.toLowerCase()]),
  ];
  const [countTest, countOriginal] = [
    countBy([...test.toLowerCase()]),
    countBy([...original.toLowerCase()]),
  ];
  return (
    test.length === original.length &&
    !flatMap(diffs).length &&
    isEqual(countTest, countOriginal)
  );
};
