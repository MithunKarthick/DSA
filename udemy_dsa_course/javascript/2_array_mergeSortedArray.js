// // Solution 1  ==> error
// let mergeSortedArray1 = (arr1, arr2) => {
//   //validate input
//   if (!typeof arr1 == "array" && !typeof arr2 == "array") {
//     return "Need array!";
//   }

//   let index = 0;
//   while(index != arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       const element = arr1[i];
//       if(index === arr2.length - 1){
//         arr1.push(arr2[index]);
//         index++;
//         break;
//       }
//       if (arr2[index] <= element) {
//         arr1.splice(i, 0, arr2[index]);
//         index++;
//         break;
//       }
//     }
//   } 
//   return arr1;
// };

//Solution 2
function mergeSortedArray2(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
 

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];

// console.log(mergeSortedArray1(arr1, arr2));
console.log(mergeSortedArray2(arr1, arr2));
