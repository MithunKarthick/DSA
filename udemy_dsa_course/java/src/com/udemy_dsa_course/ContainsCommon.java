package com.udemy_dsa_course;

import java.util.HashMap;

public class ContainsCommon {
 public static void main(String[] args) {
     ContainsCommon isCommon = new ContainsCommon();
     char[] array1 = {'a', 'b', 'c', 'd'};
     char[] array2 = {'x', 'y', 'r', 'z'};
     System.out.println(isCommon.checkCommon1(array1, array2));
     System.out.println(isCommon.checkCommon2(array1, array2));
 }

 // Solution 1
 // Time complexity = O(a*b)  ==> O(n^2) if input size are equal
 // Space complexity = O(1)
 boolean checkCommon1(char[] array1, char[] array2){
     for (int i = 0; i < array1.length; i++) {
         for (int j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]){
                return true;
            }
         }
     }
     return false;
 }

 // Solution 2 
// Time complexity = O(a + b)  ==> O(n) if input size are equal
// Space complexity = O(a)     ==> O(n) if input size are equal
 boolean checkCommon2(char[] array1, char[] array2){
     HashMap<Character,Boolean> map = new HashMap<>();

     for (int i = 0; i < array1.length; i++) {
        map.put(array1[i], true);
     }
     for (int i = 0; i < array2.length; i++) {
        if ( map.containsKey(array2[i]) ){
            return true;
        }
     }
     return false;
 }
}
