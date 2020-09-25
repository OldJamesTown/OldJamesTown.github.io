/* in javascript there are many methods and properties
 * that can be used to manipulate strings. 
 * while strings are immutable, meaning you cannot change a character within
 * a string, you can use these methods to manipulate strings and return 
 * new strings. 
 *
 * One of the more common and useful string properties is length
 * we can use .length to get a strings length
 */ 
 
 let myString = "Hello World";
 
 console.log(myString.length); 
 // gives us 11 because there are 11 characters (spaces are included) in myString
 
 //we can use indexOf() to find the index of a specific character within a string
 
 console.log(myString.indexOf('r')); 
 // this gives 8 because 'r' occurs at index 8 in myString
 
 // we can use slice to return a section of a string based on specified indexes
 
 myString.slice(0, 5); 
 
 //returns grabs the characters from inxex 0 to (but not including) 5 from myString and returns "Hello"
 
 // convert a string to upper or lower case using toUpperCase() and toLowerCase() methods respectively
 
 myString.toUpperCase(); //gives us "HELLO WORLD"
 myString.toLowerCase(); //gives us "hello world"
 
 
 // we can also concatenate strings using concat() method  
 
 var string1 = "Hi there, ";
 var string2 = "my name is Jamey.";
 var string3 = string1.concat(string2);
 
 console.log(string3); //prints "Hi there, my name is Jamey."
 
 
 // you can also do the same thing using arthmetic operators 
 
 var string4 = "What's your name?";
 var string5 = string3 + ' ' + string4;
 
 console.log(string5); //prints "Hello there, my name is Jamey. What's your name?"
 
 