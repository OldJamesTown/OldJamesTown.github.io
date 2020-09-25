/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, animalName) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === animalName.toLowerCase()) {
            return animals[i];
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
 // loop through animals to look for a match for name   
    for (let i = 0; i < animals.length; i ++) {
 // if a match is found, replace the animal obj with replacement obj      
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
 // replace          
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
// search animals array for animal object matching given name
    for (let i = 0; i < animals.length; i++) {
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    if (animal.name.length > 0 && animal.species.length > 0) {
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
                return;
            }
        } animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
