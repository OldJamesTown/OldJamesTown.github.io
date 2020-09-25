/* We can use If/else if/else statements to control the flow of our code by directing it based on a series of conditions.
 * If statements begin with the keyword 'if' followed by a condition, followed by an action, or series of actions. 
 * If the condition is met, then the action/actions are executed.
 */
 
 // Example
 var x = 15;
 //first we set a condition 
 if (x > 10) {
 //since our variable x is greater than 10, the following line of code will be executed
    console.log("Is greater than 10");
 }
 
 //Syntax -  the condition for an if statement is located in parentheses just after 'if'
 // then the action you want the code to take if the condition is met resides within curly brackets {} after the condition
 
/* You can add multiple conditions to an if statement by using else if. If the first condition is not met, then 
 * the next else if block will run, and if passed, the following code will be executed.
 * Finally, you can add a catch all at the end using else. Placing an else statement at the end of your
 * if statement will execute the coresponding action if none of the conditions are met.
 */
 
 //Example:
 var myFavoriteColor = "green";
 
 if (myFavoriteColor === "blue") {
     console.log("My favorite color is blue");
 } else if (myFavoriteColor === "yellow") {
     console.log("My favorite color is yellow"); 
 } else if (myFavoriteColor === "green") {
     console.log("My favorite color is green");
 } else {
     console.log("I don't have a favorite color");
 }
 //prints to the console "My favorite color is green". 
 
 // Note: if/else statements run in order from top to the bottom, as soon as a condition is met, the following action will be executed and the rest 
 // of the code will not run. 
 
 
 // Alternatively, you can use a switch statement, which can be more practical if you have a lot of conditions to check
 
 // The above example can be worded a slightly different, less convoluted way using a swithc statement
 
 switch (myFavoriteColor) {
  case 'blue':
   console.log("My favorite color is blue");
   break;
  case 'yellow':
   console.log("My favorite color is yellow");
   break;
  case 'green': 
   console.log("My favorite color is green");
   break;
  default: 
   console.log("I don't have a favorite color");
 }
 
 // Much cleaner! important to note that a break must be inserted after each case. Also, 'default' acts like 'else' does in an if/else statement
 // by executing a default action if none of the conditions are met.