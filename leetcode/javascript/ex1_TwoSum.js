//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//You can return the answer in any order.
//
//Example 1:
//
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//Example 2:
//
//Input: nums = [3,2,4], target = 6
//Output: [1,2]
//Example 3:
//
//Input: nums = [3,3], target = 6
//Output: [0,1]

var nums = [2,5,5,11];
var target = 10;

/* Solution 1 */
var twoSum1 = function (nums, target) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if ( i != j && nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        break;
      }
    }
    if (result.length > 0) {
        break;
    }
  }
  return result;
};
// Time complexity = O(n^2)
// Space complexity = O(1)
console.log(twoSum1(nums, target));

/* Solution 2 */

let twoSum2 = (nums, target) => {
  let map = {};
  nums.forEach((element,index) => {
      map[element] = index;
  });
  for( let i = 0; i < nums.length; i++){
    let search = target - nums[i];
    if(map[search] && map[search] !== i){
      return [i,map[search]];
    }
  }
}
// Time complexity = O(n)
// Space complexity = O(n)
console.log(twoSum2(nums, target));
