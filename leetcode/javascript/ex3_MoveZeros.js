// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// [4,2,4,0,0,3,0,5,1,0]
// [0,0,1]
// [0,0,1,0,0,2]
// [0,0,0,0,0,0,1,1,1]

// Solution 1

let input = [4,2,4,0,0,3,0,5,1,0];

let moveZeros = (nums) => {
    let lastIndex = nums.length - 1;
    for(let i = 0; i <= lastIndex; i++){
        if(nums[i]===0){
        for(let j = i; j <= lastIndex ; j++){
                if(j !== lastIndex){
                    nums[j] = nums[j + 1];
                }else {
                    nums[j] = 0;
                }

        }
        i--;
        lastIndex--;
        }
    }
    return nums;
}

console.log(moveZeros(input));