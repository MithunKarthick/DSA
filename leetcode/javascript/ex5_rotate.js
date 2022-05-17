// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

let nums = [1,2,3,4,5,6,7];
let k = 3;

// Solution 1:
let rotate = (nums,k) => {
    let index = nums.length - 1;
    if(index === 0){
        return nums;
    }
    let temp = 0;
    for(let i = 0; i < k; i++ ){
        temp = 0;
        for(let j = index; j >= 0; j--){
            if(j !== 0){
                if(j === index){
                    temp = nums[index];
                }
                nums[j] = nums[j-1];
            }else{
                nums[j] = temp;
            }
        }
    }
    return nums;
}

console.log(rotate(nums,k));