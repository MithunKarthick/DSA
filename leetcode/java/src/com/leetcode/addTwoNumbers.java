package com.leetcode;
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Ex

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

import java.util.ArrayList;
import java.util.LinkedList;

class addTwoNumbers {
    public static void main(String[] args){
        ArrayList<LinkedList<Integer>> input = getInputs();
        LinkedList<Integer> result =  addTwoNum(input.get(0), input.get(1));
        System.out.println(result);
    }

    public static ArrayList<LinkedList<Integer>> getInputs(){
        LinkedList<Integer> list1 = new LinkedList<>();
        list1.add(2);
        list1.add(4);
        list1.add(3);
        LinkedList<Integer> list2 = new LinkedList<>();
        list2.add(5);
        list2.add(6);
        list2.add(4);
        ArrayList<LinkedList<Integer>> input =  new ArrayList<>();
        input.add(list1);
        input.add(list2);
        return input;
    }

    public static LinkedList<Integer> addTwoNum(LinkedList<Integer> l1, LinkedList<Integer> l2){
        LinkedList<Integer> result = new LinkedList<>();
        int length1 = l1.size();
        int length2 = l2.size();
        int length = length1 > length2 ? length1 : length2;
        int reminder = 0;
        int sum = 0;

        for (int i = 0; i < length; i++) {
            sum = 0;
            if (i >= length1) {
                l1.addLast(0);
            }
            if (i >= length2) {
                l2.addLast(0);
            }
            
            sum = l1.get(i) + l2.get(i) + reminder;
            if(sum >= 10){
                sum = sum - 10;
                reminder = 1;
            }else{
                reminder = 0;
            }
            result.addLast(sum);
            if(i == length-1 && reminder != 0){
                result.addLast(reminder);
            }
        }
        return result;
    }
}