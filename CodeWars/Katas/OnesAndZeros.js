/* 
Ones And Zeros
https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
042126
*/

// Solution:
let integ = 0;
for (let i = 0; i < arr.length; i++) {
  integ = integ * 2 + arr[i];
}
return integ;

/*
Explanation (Horner's method):
Move from left to right, start with 0
For each position(index) double the previous result and add it to the value.

Example:
What integer corresponds to binary 11111?
array: [1,1,1,1,1];
0*2+1=1 for index 0,
1*2+1=3 for index 1,
3*2+1=7 for index 2,
7*2+1=15 for index 3,
15*2+1=31 for index 4.
The result: integer 31 corresponds to binary 11111
*/
