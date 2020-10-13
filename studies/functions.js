 /* and easily to execute later in our code, as many times as we want. 
 * 
 * Using functions requires two phases:
 * 1. Declare, or define, our function
 * 2. Call our function (also referred to as executing, applying, or invocation) 
 *
 * Before we can use a function, we must first define it
 * The syntax for declaring a function is as follows:
 * Start with the function keyword, then the name of your function, then parentheses.
 * We can also choose to use parameters when defining our function, in which case we
 * would put those inside the parentheses. We can use any number of parameters as we'd
 * like, or not use any.
 * Parameters serve as placeholdes for ARGUMENTS that we will pass through the function
 * when we call it.
 */
 
 // Defining a function looks something like this:
 
 function multiply(num1, num2) {
     return num1 * num2; 
 }
 
/* this named function will take in two inputs, or arguments, and multiply them together 
 *  to give an output.
 * to call this function, we just need to use type it's name, parentheses, and in 
 * the parentheses, give two arguments to be run throught the function in place
 * of the parameters num1 and num2 
 */
 
 multiply(10, 5); 
 
 // this will pass 10 and 5 through our function and return 50
 
 // we can also assign an anonymous function to a variable. like so:
 
 var add = function(a, b) {return a + b};
 //now we can use the variable add to call this function
 
 console.log(add(5,5)); // gives us 10
 
 // we can also assign the result of a function to a variable
 
 var mySum = add(10, 15); 
 
 console.log(mySum); // gives us 25, which is now stored in the variable mySum
 
 
/* Closures in javascript refer to the ability of functions WITHIN functions, or 
 * nested functions, to access variables and data from it's parent scope. Closures 
 * can make use of variables declared within itself, it's outer function, AND global
 * variables.
 */
 
 let x =10;
 
 function addY(num) {
  let y = 5;
  return () => x + y;  // here we have a nested anonymous function that is able
 }                     // to utilize the variable called above in it's parent scope
                       // AND x, which is declared globally 
  