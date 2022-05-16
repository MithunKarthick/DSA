//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

package com.udemy_dsa_course;

import java.util.HashMap;

public class FirstRecurringCharacter {
    
    public int[] data = {2,5,1,2,3,5,1,2,4};
    public static void main(String[] args){
        FirstRecurringCharacter instance = new FirstRecurringCharacter();
        System.out.println(instance.getFirstRecurringChar(instance.data));
    }

    public int getFirstRecurringChar(int[] array){
        HashMap<Integer,Integer> map = new HashMap<>();
        for (int i = 0; i < array.length; i++) {
            if(map.containsKey(array[i])){
                return array[i];
            }else {
                map.put(array[i], i);
            }
        }
        return 0;
    }
}
