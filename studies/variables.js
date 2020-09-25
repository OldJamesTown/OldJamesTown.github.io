/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * 4. In addition to var, we can also use keywords let and const to assign data. There are benifits 
 * there are specific qualities and benifits to each, depending on the context
 * 
 * var is the most flexible. Data assigned to a variable using var: 
 *      - can be reassigned, meaning you can assign it to a different value after it has been declared
 *      - can be globally scoped or scoped to a function
 *      - is hoisted, which means it is lifted to the top of a block of code when it runs, for example
 */     function addX(num) {return num + x};
        var x = 10; 
        console.log(addX(5));
        // we are able to use the variable x in our function even though it's declared AFTER
        // the function is defined because it's hoisted to the top when executed
 
 
 
 
 /* let is more specific and can be used to temporarily assign variables like counters during loop functions
 *      - can also be reassigned
 *      - is NOT hoisted
 *      - can also be scoped globally or within a function AS WELL AS being blcok scoped, meaning it can store a variable within
 *      one block of code (for example; withing a for loop). This means that you can use let to hold a value in one specific block of code 
 *      and it will not affect anything outside of the {}
 */
 // Example //
 for (let i = 0; i <= 10; i++) {
     console.log(i);
 }
 //console.log(i); would not work because i cannot be used here
 
 
 /* Lastly, const can also be used to assign data to memory, but in a more permanent sense. 
 *     - cannot be reassigned once assigned
 *     - is NOT hoisted
 *     - can be global, function, or block scoped
 */
 
 // Example:
 
 const name = "Jamey";
 
 // cannot reassign name. name = "Tom" will throw an error. 
 
 
 // 
 