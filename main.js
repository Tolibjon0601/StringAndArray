// array misollari
// 1-misol
// Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

// Examples

// makeEnds([1, 2, 3]) → 1,3
// makeEnds([1, 2, 3, 4]) → 1,4
// makeEnds([7, 4, 6, 2]) → 7,2

// yechim:

// function makeEnds(nums){
//   return [nums[0],nums[nums.length-1]];
// }

// 2-misol
// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

// Examples

// plusTwo([1, 2], [3, 4]) → 1,2,3,4
// plusTwo([4, 4], [2, 2]) → 4,4,2,2
// plusTwo([9, 2], [3, 4]) → 9,2,3,4

// yechimi:
// function plusTwo(a, b){
//   let newArr=a.concat(b)
//   return newArr;
// }

// 3-misol

// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

// Examples

// has77([1, 7, 7]) → true
// has77([1, 7, 1, 7]) → true
// has77([1, 7, 1, 1, 7]) → false

// yechimi:
// function has77(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (
//       (nums[i] == 7 && nums[i + 1] == 7) ||
//       (nums[i] == 7 && nums[i + 2] == 7)
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// 4-misol
// Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// Examples

// swapEnds([1, 2, 3, 4]) → 4,2,3,1
// swapEnds([1, 2, 3]) → 3,2,1
// swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

// yechimi:
// function swapEnds(nums){
//   let temp=nums[0]
//   nums[0]=nums[nums.length-1]
//   nums[nums.length-1]=temp
//   return nums
// }

// string masalalar

// 1-masala
// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

// Examples

// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH
// yechim:

// function extraFront(str){
//   return str.slice(0,2).repeat(3)
// }

// 2-masala
// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

// Examples

// without2('HelloHe') → lloHe
// without2('HelloHi') → HelloHi
// without2('Hi') →

// yechilishi

// function without2(str){
//   if(str.length<2){
//   return str
//   }if(
//   str.substr(0,2)==str.slice(-2)){
//   return str.slice(2)
//   }
//   return str
// }
// 3-masala
// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

// yechilishi

// function middleThree(str){
//   let middle=Math.floor(str.length/2)
//   return str.substring(middle-1,middle+2)
// }

// 4-masala
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

// Examples

// comboString('Hello', 'hi') → hiHellohi
// comboString('Hi', 'Hello') → HiHelloHi
// comboString('aaa', 'b') → baaab

yechilishi:
function comboString(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  }
  return a + b + a;
}
