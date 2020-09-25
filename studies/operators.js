// Operators are tools we use to manipulate, or act on, data in our code


/* 1. ASSIGNMENT OPERATORS
 * as the name emplies, assign data, like assigning a value to a variable
 *Includes:
 *
 *    =  
 *    +=
 *    -=
 *    *=
 *    /=
 *    %=
 *    **=
 */

//Examples
let x = 10; 
// You can combine certain arithmetic operators with = to perform basic mathematical operations on a value and reassign it simultaneously
//Example
x += 10; 
// the value of x is now 20
x *= 3; 
// now the value of x is 60, etc..


/* 2. ARITHMETIC OPERATORS
 * perform basic mathematical operations on numbers 
 *Includes:
 * 
 *  +
 *  -
 *  *
 *  /
 *  **
 */  
 //Example:

var y = 6 + 6;

y = y / 3; // y is now equal to 4

/* a couple of notable arithmetic operators are as follows:
 *
 *   % - modulus returns the remainder after two numbers are divided. This is helpful for determining if a number is odd or even
 *   ++ increment is used to add 1 to a value after each iteration, typically used in loops
 *   -- decrement is used in same manor but subtracts 1
 */
 // Example:
 console.log(25%5); //prints 0
 
/*
 * 3. COMPARISON OPERATORS
 * comparison operators compare to values and return a boolean (true or false)
 * Includes:
 *
 *  ==      equal to
 *  ===     strictly equal to (value and type)
 *  !=      not equal
 *  !==     not strictly equal to
 *  >       greater than
 *  <       less than
 *  >=      greater than OR equal to
 *  <=      less than OR equal to
 */
 // Examples//
 console.log(10 < 5); //prints false
 
 console.log(125 >= 125); //prints true
 
 function beginsWith(char, string) {
     var string = string.toLowerCase();
     if (char.toLowerCase() === string[0]) {
         return true;
     }
 }
 
 beginsWith('t', 'tapdancing'); // returns true
 
/* 4. LOGICAL OPERATORS 
 * add stipulations that take into account multiple operations involving comparison operators
 *Include:
 *
 *  &&      means both conditions must be true
 *  ||      allows one OR the other condition to be true
 *  !       Bang operator, reverses the truthiness of an operation
 */
 // Examples:
 let num = 10;
 if (num > 0 && num < 15) {
     return true;
 } 
 // returns true because both conditions are met
 
 if (num > 0 || num > 15) {
     return true;
 }
 // still returns true because only one of the two conditions had to be true given the || operator 
 
/* SHORT-CIRCUIT EVALUATION
 *
 * Logical operators || and && can be exploited replace false or non existant values. 
 
 
/* 5. UNARY OPERATORS 
 * are operators that takes a single operand, or argument, and performs an operation
 * a few of these unary operators include:
 *   - typeof 
 *       returns the data type of whatever operand follows it
 */      typeof 23;       // returns number
         typeof "Hey";    // returns string
//   - unary plus 
//       tries to convert an operand to a number
         +'4';     // takes string '4' and returns 4 as a number
         // can also convert booleans true and false to 1 or 0 respectively
         +true;    // returns 1 
         +false;   // returns 0
//    - unary negation 
//       performs the same task of converting to a number while also negating
         -'3';    // returns -3
         -true;   // returns -1
         -false;  // returns -0
//    - (!) or Logical Not
//       converts an operand into it's boolean equivalent before negating it
         !false;  // returns true
         !true;   // reutrns false
         !0;      // returns true
         !5;      // returns false
         
         
/*  6. Ternary Operator 
 *  takes three operands:
 *  a condition followed by a question mark (?), then an expression to execute
 *  if the condition is truthy, followed by a colon (:), and then an expression 
 *  to execute if the condition is falsy
 *  Can be used as a shortcut for if statements
 */
 
 function drinkMilk(isItSpoiled) {
  return (isItSpoiled ? "Throw it out" : "Drink that shit!");
 }
 
drinkMilk(false); //  expected to return "Drink that shit!"
 