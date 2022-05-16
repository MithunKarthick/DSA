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

let data = [2,1,1,2,3,5,1,2,4];

let firstRecurringCharacter = (data) => {
    let map = {};
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(map[element]){
            return element;
        }else {
            map[element] = 1;
        }
    }
    
}

console.log(Math.max(1,2));