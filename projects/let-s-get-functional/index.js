// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-oldjamestown");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 * // MAKE SURE YOU ARE IN YOUR GITHUB DIRECTORY FOLDER BEFORE RUNNING
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// use filter to sort through the array
   return  _.filter(array, function(customer) {
        return customer.gender === 'male';
    }).length;
};

var femaleCount = function(array) {
// use reduce to count how many customers in array are female
    // let result = 0;
    return _.reduce(array, function(result, customer, i) {
      if (customer.gender === 'female') {
          result += 1;
      }
    return result;
    }, 0); 
};

var oldestCustomer = function(array) {
//     let oldest = ''; 
// // use each to compare age of every customer
//     _.each(custArray, function(e, i, a) {
//       if (e.age > a[i - 1].age) {
//           oldest = e.name;
//       } 
//     }); return oldest;
// };
    
    // let ages = _.pluck(custArray, age)
    // const oldestIndex = ages.indexOf(Math.max(...ages));
    // return custArray[oldestIndex]['name'];
    
return _.reduce(array, function(prev, current) {
    return (prev.age > current.age) ? prev : current;
}).name;
};

var youngestCustomer = function(array) {
    return _.reduce(array, function(prev, current) {
        return (prev.age < current.age) ? prev : current;
}).name;
};

var averageBalance = function(array) {
    const balances = _.map(array, (customer) => {
       return Number(customer.balance.replace(/[$,]+/g,""));
    });
    return _.reduce(balances, function(total, current) {
        total += current;
        return total;
    }, 0)/balances.length;
};

var firstLetterCount = function(array, letter) {
    return _.reduce(array, function(accumulator, customer, i) {
        if (customer.name[0].toLowerCase() === letter.toLowerCase()) {
            accumulator += 1;
        } return accumulator;
    }, 0);
};

var friendFirstLetterCount = function(array, customerName, letter) {
// identify which customer object has the given name and assign it to customer    
    let customer;
    for (let i = 0; i < array.length; i++) {
        if(array[i].name === customerName) {
            customer = array[i];
        }
    }
// declare variable friends and assign it to the friends array of given customer    
    let friends = customer.friends;
// use reduce to tally number of friends with first letter    
   return _.reduce(friends, function(accumulator, friend, i) {
        if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
            accumulator += 1;
        } return accumulator;
    }, 0);
};

var friendsCount = function(array, name) {
    const friendObjs = _.filter(array, function(customer){
        let friends = customer.friends;
        return _.some(friends, function(friend){
          return friend.name === name;
      });
    });
    
    return _.map(friendObjs, (customer) => {
        return customer.name;
    });
};

var topThreeTags = function(array) {
// Use pluck to retrieve all tags from each customer   
    const tagsArrs = _.pluck(array, 'tags');
// Condense into single array of tags    
    const tags = [].concat.apply([], tagsArrs);
// Use reduce to tally how many times each tag is used   
    const tagTallies = _.reduce(tags, (totals, tag) => {
        if(!totals[tag]) {
            totals[tag] = 1;
        } else {
            totals[tag]++;
        } return totals;
    }, {});
// sort our tagTallies object by it's values in descending order and return the first three elements from
// the resulting array
   return Object.keys(tagTallies).sort(function(a,b){return tagTallies[b]-tagTallies[a]}).slice(0, 3);
};
var genderCount = function(array) {
    return _.reduce(array, (totals, customer) => {
        let custGen = customer.gender;
        if(!totals[custGen]) {
            totals[custGen] = 1;
        } else {
            totals[custGen]++;
        }
        return totals;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
