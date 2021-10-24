//Always Hungry
//Write a function that is given an array and each time the value is "food" it should console log "yummy". 
//If "food" was not present in the array console log "I'm hungry" once.

/* alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry" */

//Write a function - Done
//Write an array - Done
//value = food - Done
//console.log "yummy" - Done
//else console.log "I'm hungry"

var i = 0

function alwaysHungry(arr) {
    // your code here
    var count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log('yummy')
            count++
        }
    } 
    if (count == 0) {
        console.log("I'm hungry")
    }
} 

//alwaysHungry([3.14, "food", "pie", true, "food"])
//alwaysHungry([4, 1, 5, 7, 2])

//High Pass Filter
//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

var i = 0

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for ( i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        } 
    }
    return filteredArr;
}
//var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result); // we expect back [6, 8, 10, 9]

//-----------------------------------------------------------------------

//Better than average
//Given an array of numbers return a count of how many of the numbers are larger than the average.

var i = 0

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for ( i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum /= arr.length;

    var count = 0
    // count how many values are greater than the average
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] > sum) {
            count++
        }
    }
    return count;
}
//var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); // we expect back 4

//-----------------------------------------------------------------------

//Array Reverse
//Write a function that will reverse the values an array and return them.

var i = 0
var temp = 0

function reverse(arr) {
    // your code here
    for ( i = 0; i < arr.length; i++) {
        temp  = arr[i];
        
    }
    return arr;
}
   
//var result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//-----------------------------------------------------------------------

//Fibonacci Array
//Fibonacci numbers have been studied for years and appear often in nature. 
//Write a function that will return an array of Fibonacci numbers up to a given length n. 
//Fibonacci numbers are calculated by adding the last two values in the sequence together. 
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

//Return an array of 10 numbers.
//

var i = 0

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for (i = 2; i < n; i++) {
        fibArr.push(fibArr[i-2] + fibArr[i-1]);
        }
    return fibArr;
    }
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]