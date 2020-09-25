/*
 * In javascript, data is broken down and catagorized into diffent data types. Data types determine what actions you can take
 * and how certain data can be manipulated and interact with the rest of your code.
 *
 * 1. Numbers - nubers are pretty self explanitory. Anything with a numeric value, unless it's wrapped in '' which javascript then interprets
 * as a string. Numbers are simple/primitive data types, immutable, and can be used in mathemathical operations
 * 
 *
 *
 * 2. Strings - characterized by being wrapped in '' or "", strings store a series of characters, like "hello world". Strings are immutable
 * and are thus considered simple/primitive data types. Strings have built in methods such as .length that can be useful in obtaining data
 * about strings in our code
 */ 
 // Example//
 let myString = "hello world";
 console.log(myString.length); // Prints 11 because myString contains 11 charachter (spaces are included in length)
 
 // Strings can also be concatenated using the concat() method, or by using + operator//
 
 let newString = ", what a beautiful day!";
 console.log(myString.concat(newString)); // Prints "Hello world, what a beautiful day!"
 
 // Because we can reassign variables declared by let, we can try out another method of concatenation and assign it to a variable we've already used
 
 newString = myString + newString;
 console.log(newString); // Prints "hello world, what a beautiful day!"
 
// strings are also indexed, so you can retrieve specific characters or group of characters within a string using bracket notation
// Example//
console.log(newString[newString.length -1]); 
// prints "!" because it is the last character in newString
 
/*
 * 3. Booleans - consist of true and false and are returned by comparisons. They are simple/primitive data types
 */ 
 
 console.log(10 > 5); // prints true//
 
 console.log(10 < 5); // prints false//
 
/* booleans are useful for control flow and determing actions our code will take bassed on the results of certain given parameters 
 * being true or false */
 
 
/* 4. Arrays - an array is an ORDERED, indexed collection of values. Can contain any data type; numbers, strings, booleans, objects, nested arrays,
 * functions, etc..  must be enclosed in brackets [] and values separated by ',' 
 * Arrays are complex data types
 * Arrays are also indexed, so you can use bracket notation to retrieve specific values based on where they are placed within the array */
 
 // Example //
 var myArray = [12, 'twinkie', true, ['a', 'b', 'c'], {nameFirst: "James", nameLast: "Thomason" }];
 
 console.log(myArray[1]); // prints 'twinkie'
 
 
/* 5. Objects - complex data type that stores unordered key value pairs. keys are strings and serve as indexes to retrieve their corresponding values.
 * Objects are contained in {} and are structured as follow: {key1: value1, key2: value2}
 * Objects can also contain multiple data tpes
 */
// Example //
const myObj = {nameFirst: "Jamey", nameLast: "Thomason", age: 32, hobbies: ["playing music", "reading", "video games"]};

// You can retrieve a specific value using either dot (.) or bracket ([]) notation
console.log(myObj.hobbies[0]); // prints "playing music", because it is at the [0] index of the array associated with the key 'hobbies'


/*
 * 6. Functions - run an action or series of actions given certain inputs as parameters or arguments passed through the function. Functions are complex data types
 */
 
 function add5(arg) {
   return arg += 5
 }
 
 add5(10); // returns 15 
 
 
// 7. undefined - results when your code uses a variable that has not yet been assigned or declared. 
// Example//
var x;
console.log(x); //printes undefined 
 
// 8. null - represents the absence of a value. null is considered a simple/primitive data type and is 
// treated as falsy by boolean operations

// 9. NaN - stands for Not-A-Number. NaN is returned when javascript expects the result of an operation to be a number but it isn't 

//10. Infinity - a variable in global scope and is a numeric value representing infinity. The value Infinity is greater than all other numbers.
//   -Infinity - The value of Number.NEGATIVE_INFINITY is the same as the negative value of the global object's Infinity property.

/*11. Primitive/simple and complex data types
 * PRIMITIVE, OR SIMPLE, DATA TYPES refer to data types that are atomic, immutable, and return other simple values when operated on.
 *these include:
 *   -Numbers
 *   -Strings
 *   -Booleans
 *   -Nan
 *   -undefined 
 *   -null
 *
 * COMPLEX DATA TYPES aggregate other values and can grow indefinitely in size and complexity
 * these include
 *   -function
 *   -arrays
 *   -objects
 *
 * 12. One major difference between the two is in how they are stored in memory. 
 *
 *    Simple data types are copied directly by value, meaning they are contained within the allotted memory given to a variable
 *    
 *    Complex data types, on the other hand, often exceed the amount of memory given to a variable, and are therefor copied by REFERENCE. This mean
 *    that a variable assigned to a complex data type actually contains a reference that directs javascript to the data rather than containing all the data
 *    in itself 
 */