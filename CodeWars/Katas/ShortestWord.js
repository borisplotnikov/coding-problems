/* 
Shortest Word
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
042426
*/

// Solution 1:

function findShort(s) {
  const words = s.split(/\s+/);
  let minLength = words[0].length;
  for (let i = 1; i < words.length; i++) {
    let length = words[i].length;
    if (length < minLength) {
      minLength = length;
    }
  }
  return minLength;
}

// Solution 2:

function findShort(s) {
  return Math.min(...s.split(/\s+/).map((word) => word.length));
}

/*
Explanation:

1. Loop through each word and, instead of storing all 
lengths or transforming the data first, you immediately 
compare each word’s length to a running minimum value 
and update that minimum whenever a smaller length is found.

2. Using a built-in function like min that takes a 
collection of values (such as an array of word lengths) 
and returns the smallest one in one step.
*/
