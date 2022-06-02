/*
Indepedent Studio Services
https://issprops.com

Software Developer Candidate Assessment
*/

// #1
// Q: What is the difference between let and var
// A: When var is declared it is considered to be in a global scope while let is limited to it's block. The let variable is more suitable for situations where the variable
//    is not used for very long like loop and if statements. 



// #2
// Q: Write a function that takes 2 arguments, first one is an array, second one is a string. loop through the array and find a matching result of the second argument. return the matched index of the array, if there is any

function searchArray(arr, str) {
	//create a loop through the array going one by one
	for (let i=0; i<arr.length; i++) {
		//if iterating through the array a entry is found, return the number block it is on.
		if(arr[i] === str){
			return i;
		}
	}
	//if unable to be found, return string that says that it is not there
	return "String not found";
}	


// #3
// Q: Fix the bug
function average(a, b) {
	//return a + b / 2;
	//bug is created due to b / 2 being applied first due to Order of Operations.
	//added parenthesis for a + b to be prioritized.
	return (a + b) / 2;
}

console.log(average(2, 1));


// #4
// Q: What is the output?
let a = 22;
let b = 'abc';
let c = 51;
let d = a + b + c;

console.log(d);
//22abc51

// #5
// Q: Call the function in Q #2 with the following data and what is the output?
let animals = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Turtle', 'Bear'];
let find = 'Whale';
//"String not found"
