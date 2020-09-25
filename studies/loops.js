/* 
 * FOR LOOPS 
 * can be used to iterate through a sequence of values or indexes in an array and perform an action at each iteration
 * are structured as follows: 
 * for (starting point; condition for the loop to continue; executes after the block is executed) {
        some operation;  
 }
*/ 
//Example:

var myArray = [];
let x = 1;
for (let i = 0; i < 5; i++) {
    myArray.push(x);
    x += 1;
}

console.log(myArray); // prints array [1, 2, 3, 4, 5] because the loop pushes a number, defined by x, to an empty array at each index up to 5.

// We can now loop over the array backwards by using myArray.length -1 as our starting point and using -- operator to decrement by 1 each time
var myBackwardArray = []
for (let i = myArray.length -1; i >= 0; i--) {
    myBackwardArray.push(myArray[i]);
}
console.log(myBackwardArray); // prints [5, 4, 3, 2, 1]


// FOR -IN LOOPS
// behave much in the same way but are used to iterate ove OBJECTS by taking a variable and assigning it to each indiviual key in an object one by one
// Example:
// creating an object and assigning it to variable myInfo
var myInfo = {nameFirst: "Jamey", nameLast: "Thomason", age: 32}
var myInfoArray = []
for (var key in myInfo) {
    myInfoArray.push(myInfo[key]);
}
 
console.log(myInfoArray); // prints an array called myInfoArray that contains the VALUES from the object we passed through the for -in loop


// Alternatively, we can use WHILE LOOPS to run a block of code repeatedly until a specified condition is met. 
//Example:
let num = 0;

while (num < 10) {
    num += 1;
}

console.log(num); // prints to the console 10 because the while loop starts at 0 and adds 1 to itself over and over until num equals 10

// We can do the same in reverse
while (num > 0) {
    num -= 1;
}
console.log(num); // num now equals 0

