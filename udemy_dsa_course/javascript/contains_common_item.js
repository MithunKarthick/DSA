// returns true if a common item is present in two given arrays
let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['x', 'y', 'a', 'z'];

// Solution 1
let containsCommonItem = (array1, array2 ) => {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
               return true;
            }
        }
    }
    return false;
}
// Time complexity = O(a*b)  ==> O(n^2) if input size are equal
// Space complexity = O(1)
console.log(containsCommonItem(arr1, arr2)); 

// Solution 2
let containsCommonItem1 = (array1, array2) => {
    let map = {};
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if(!map[element]){
            map[element] = true;
        }
    }
    for (let j = 0; j < array2.length; j++) {
        if(map[array2[j]]){
            return true;
        }
    }
    return false;
}
// Time complexity = O(a + b)  ==> O(n) if input size are equal
// Space complexity = O(a)     ==> O(n) if input size are equal
console.log(containsCommonItem1(arr1, arr2));


//Solution 3 
let containsCommonItem2 = (array1, array2) => {
    return array1.some(item => array2.includes(item));
}
console.log(containsCommonItem1(arr1, arr2));
// Time complexity  ==> ???
// Space complexity ==> ???