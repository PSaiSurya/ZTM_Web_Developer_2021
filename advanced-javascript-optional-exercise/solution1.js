/*
Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function
that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

function group(array){
	let answer = [];
	let counter = 0;
	for(let i=0;i<array.length;i++){
		if(array[i] === array[i+1]){
			counter++;
		}
		else{
			removedArray = array.slice(i-counter,i+1);
			if(removedArray.length == 1){
				removedArray = removedArray[0]
			}
			answer.push(removedArray);
			counter = 0;
		}
	}
	return answer;
}

function filterAndGroup(array,type){
	let newArray = array.filter((value) => {
		if(typeof value === type){
			return value;
		}
	});
	return group(newArray);
}

function cleanRoom(arr){
	let Arr = arr.flat(Infinity);
	Arr.sort((a,b)=>a-b);
	let cleanedArray = [];
	let numberArray = filterAndGroup(Arr,'number');
	let stringArray = filterAndGroup(Arr,'string');
	if(numberArray.length > 0){
		cleanedArray.push(numberArray);
	}
	if(stringArray.length > 0){
		cleanedArray.push(stringArray);
	}
	return cleanedArray;
}

/*
testing for various inputs
*/

let test_cases = {
	"case 1" : [1, [2, 4], 591, [392, [391, [2, [5]]], 10, 2], 1, 1, 1, 20, 20],
	"case 2" : [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
	"case 3" : [1, '2', '3', 2],
	"case 4" : ['1', 2, 4, 591, '392', 391, '2', 5, 10, 2, '1', 1, '1', 20, 20],
	"case 5" : [1,"2",4,591,392,391,2,5,10,"2","1","1",1,20,20],
	"case 6" : [1,"2",4,591,392,391,2,5,10,"2","1","1",1,20,20]
};

for(test_case in test_cases){
	console.log(`Output for Test ${test_case}:\n`,cleanRoom(test_cases[test_case]));
}
