// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object that takes inputs and assigns them as the values to  respective keys
    
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // split fullName into first and last 
            const firstName = fullName.split(' ')[0];
            const lastName = fullName.split(' ')[1];
            
            // iterate through contacts to see if first and last names match 
            for (let i = 0; i < contacts.length; i++) {
                if (firstName.toLowerCase() === contacts[i].nameFirst.toLowerCase() && lastName.toLowerCase() === contacts[i].nameLast.toLowerCase()) {
                // return the object at the given index in contacts
                    return contacts[i];
                } 
            // return undefined if there's no match
            } return undefined;
            
        }, 
        removeContact: function(contact) {
        // find the index of contact within contacts array    
            const contactIndex = contacts.indexOf(contact);
        // remove the object at said index from contacts array using splice
            contacts.splice(contactIndex, 1);
        },
        printAllContactNames: function() {
        // create an array to store name
            const contactNames = [];
        // loop through contacts and add first and last names to array
            for (let i = 0; i < contacts.length; i++) {
                contactNames.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            } 
        // return names from array, joined by \n to line break between names
            return contactNames.join('\n');
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
