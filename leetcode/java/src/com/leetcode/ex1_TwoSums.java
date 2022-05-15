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

package com.leetcode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ex1_TwoSums {

	public static void main(String[] args) {
		int[] nums = {2,7,11,15};
		int target = 9;
		ex1_TwoSums twoSums = new ex1_TwoSums();
		System.out.println(twoSums.getTwoSums1(nums, target));
		System.out.println(twoSums.getTwoSums2(nums, target));
	}

	// Solution 1
	// Time complexity = O(n^2)
	// Space complexity = O(1)
	private List<Integer> getTwoSums1 (int[] nums, int target) {
		List<Integer> result = new ArrayList<>();
		for (int i = 0; i < nums.length; i++) {
			for (int j = 0; j < nums.length; j++) {
				if( ( i != j ) && ( nums[i] + nums[j] == target ) ){
					result.add(0, i);
					result.add(1,j);
					break;
				}
			}
			if (result.isEmpty() != true)
				break;
		}
		return result;
	}

	// Solution 2
	// Time complexity = O(n^2)
	// Space complexity = O(1)
	private List<Integer> getTwoSums2 (int[] nums, int target){
		List<Integer> result = new ArrayList<>();
		HashMap<Integer,Integer> map = new HashMap<>();		
		for (int i = 0; i < nums.length; i++) {
			map.put(nums[i],i);
		}
		for (int i = 0; i < nums.length; i++) {
			int search = target - nums[i];
			if(map.containsKey(search)){
				int value = map.get(search);
				if(value != i){
					result.add(0,i);
					result.add(1, value);
					return result;
				}
			}
		}
		return result;
	}
}
