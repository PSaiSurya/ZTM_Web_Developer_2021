/*
Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different
numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
*/

function finalAnswer(array){
	if(array.length===1){
		return array[0];
	}
	else if(array.length > 1){
		return array;
	}
	return "No combinations of two numbers are possible";
}

function findNumbers(puzzleArray,requiredSum){
	let answerArray = [];
	for(let i = 0; i < puzzleArray.length;i++){
		for(let j = 1;j<puzzleArray.length;j++){
			if(puzzleArray[i] + puzzleArray[i+j] === requiredSum){
				answerArray.push([puzzleArray[i],puzzleArray[i+j]]);
			}
		}
	}
	return finalAnswer(answerArray);
}

/*
testing for various inputs
*/

let test_cases = {
	"case 1" : [[1,2,3], 4],
	"case 2" : [[ 4,2, 3,4,7], 8],
	"case 3" : [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],14],
	"case 4" : [[2,3,4],9]
};

for(test_case in test_cases){
	console.log(`Output for Test ${test_case}:\n`,findNumbers(test_cases[test_case][0],test_cases[test_case][1]));
}
