package com.udemy_dsa_course;

public class ContainsCommon {
 public static void main(String[] args) {
     ContainsCommon isCommon = new ContainsCommon();
     char[] array1 = {'a', 'b', 'c', 'd'};
     char[] array2 = {'x', 'y', 'a', 'z'};
     System.out.println(isCommon.checkCommon(array1, array2));
 }

 boolean checkCommon(char[] array1, char[] array2){
     for (int i = 0; i < array1.length; i++) {
         for (int j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]){
                return true;
            }
         }
     }
     return false;
 }
}
