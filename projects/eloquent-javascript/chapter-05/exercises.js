// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce((flatArr, currentArr) => {
    flatArr = flatArr.concat(currentArr);
    return flatArr;
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  if (test(val)) {
    body(val);
    return loop(update(val), test, update, body);
  } 
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
    for (let element of array) {
      if (! test(element)) {
        return false;
      }
    } return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
   let counted = countBy(text, i => { 
    let script = characterScript(i.codePointAt(0));
    return script ? script.direction : "none"; 
    })
  .filter(({name}) => name != "none"); 
  
  console.log(counted);
  if (counted.length == 0) return "ltr"; 
  
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
