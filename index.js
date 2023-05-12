'use strict';

// YOU KNOW WHAT TO DO //
/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/**
 * identity: takes in any value and returns the same value
 * 
 * @param {Object, Array or Value} value: the value to be returned
 * 
*/
function identity(value){
    return value;
}

/**
 * .typeOf: takes any value and returns its datatype as a string. Works
 * with string, array, object, function, undefined, number, boolean,
 * and null datatypes.
 * 
 * @param {Object, Array or Value} value: the value the datatype of which
 * is returned by the function. 
 * 
*/
function typeOf(value){
    switch (true){
        case (typeof value === "string"):
            return "string";
        case (typeof value === "number"):
            return "number";
        case (Array.isArray(value)):
            return "array";
        case (typeof value === "function"):
            return "function";   
        case (value instanceof Object):
            return "object";
        case (typeof value === "boolean"):
            return "boolean";
        case (typeof value === "undefined"):
            return "undefined";
        case (value === null):
            return "null";
    }
}

/** 
 * .first: returns a defined number of elements from the beginning of the input array in a new array.
 * Returns the array's first element if 'num' argument is not a number or undefined. 
 * 
 * @param {Array} arr: the array the elements of which are returned
 * @param {Number} num: the number of elements from the input array to be returned in a new array.
* 
*/
function first(arr, num){
    if(!Array.isArray(arr)){
        return [];
    }
    if (this.typeOf(num) !== "number"){
        return arr[0];
    } 
    if (num > arr.length){
        return arr;
    }
    else {
        let storageArray = [];
        for (let i = 0 ; i <= num - 1; i++){
            storageArray.push(arr[i]);
        }    
        return storageArray;
    }
}

/** 
 * .last: returns a defined number of elements from the end of the input array in a new array.
 * Returns the last element of the input array if the 'num' argument is not a number or undefined.
 * 
 * @param {Array} arr: the array the last element(s) of which are returned in a new array.
 * @param {Number} num: the number of items returned from the end of the input array.
 * 
*/
function last(arr, num){
    if(this.typeOf(arr) !== "array"){
        return [];
    }
    if (this.typeOf(num) !== "number"){
        return arr[arr.length-1];
    }
    if (num > arr.length){
        return arr;
    } 
    else {
        let storageArray = [];
        for (let i = arr.length-1; i >= arr.length - num ; i--){
            storageArray.unshift(arr[i]);
        }
        return storageArray;
    }
}

/** 
 * .indexOf: returns the index of an element in the input array in case the input value is equal
 * to the element's value. Returns the index of the first element the value of which is equal to
 * the input value.
 * 
 * @param {Array} arr: the array the elements of which are evaluated against the input value.
 * @param {Value} value: the value that is compared to the value of elements in the input array.
 * 
*/
function indexOf(arr, value){
    for ( let i = 0; i <= arr.length - 1; i++){
        if (arr[i] === value){
            return i;
        }
    }
    return (-1)
}

/** 
 * .contains: returns true in case a defined value is the value of an element in the input array. If
 * the input value does not equal the value of an element in the input array, the function returns
 * false.
 * 
 * @param {Array} arr: the array the elements of which are evaluated for equality to the input value.
 * @param {Value} val: the value that is evaluated against the elements of the input array.
 * 
*/
function contains(arr, value){
    for ( let i = 0 ; i <= arr.length -1 ; i++){
        if (arr[i] === value){
            return true
        }
    }
    return false;
}

/** 
 * .each: executes a defined function on all members of a defined collection. Works for both arrays
 * and objects. For arrays, the value of each element is passed into the defined function. For objects
 * the value of each property is passed into the defined function.
 * 
 * @param {Array or Object} collection: the collection the elements of which are passed into a defined function.
 * @param {Function} func: the function that executes on each member of the collection.
 * 
*/
function each(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0 ; i <= collection.length - 1; i++){
            func(collection[i], i, collection);
        }
    } else {
        for (let key in collection){
            func(collection[key], key, collection);
        }
    }
}

/** 
 * .unique: takes an input array and returns an array with duplicates removed.
 * 
 * @param {Array} array: the array the duplicates of which will be removed from the output array.
 *   
*/
function unique(array){
    let storageArray = [];
    for (let i = 0 ; i <= array.length - 1 ; i++){
        if (_.indexOf(storageArray, array[i]) === -1){
            storageArray.push(array[i]);
        }
    }
    return storageArray;
}

/** 
 * .filter: takes an input array and executes a defined callback function on each element. If the callback
 * returns true, the element is pushed into a new array; if the callback returns false, the element is passed
 * over. .filter returns a new array of all elements that, when passed through the callback function, return 
 * true.
 * 
 * @param {Array} array: the array the elements of which are passed to the callback function.
 * @param {Function} func: the callback function through which the input array's elements are passed. This
 * function must return a boolean value for .filter to work properly.
 * 
*/
function filter(array, func){
    let returnArray = []
    for (let i = 0 ; i<=array.length-1; i++){
        if(func(array[i], i, array)){
            returnArray.push(array[i]);
        }
    }
    return returnArray;
}

/** 
 * .reject: takes an input array, passes each element through a callback function, and returns an array populated
 * by the elements that, when they are passed through the callback function, return false. 
 * 
 * @param {Array} array: the array the elements of which are passed through the callback function.
 * @param {Function} func: the callback function that executes on each element of the input array. This 
 * function must evaluated to a boolean in order for .reject to work properly.
 * 
*/
function reject(array, func){
    let storageArray = [];
    for (let i = 0; i <= array.length-1; i++){
        if(!func(array[i], i, array)){
            storageArray.push(array[i]);
        }
    }
    return storageArray;
}

/** 
 * .partition: separates the elements of an array into two arrays according to whether their passing
 * through a callback function returns true or false. Both the 'true' and 'false' arrays are returned
 * by .partition in a single array. The first element of the returned array is an array of those elements
 * that return true after being passed through the callback, while the second element is an array of those
 * elements that fail after passing through the callback.
 * 
 * @param {Array} array: the array the elements of which are passed through the defined callback function.
 * @param {Function} func: the callback function through which each element of the input array is passed. This function
 * must return a boolean value in order for .partition to work.
 * 
*/
function partition(array, func){
    let returnArray = [];
    let passArray = [];
    let failArray = [];
    for (let i = 0; i<=array.length-1; i++){
        if(func(array[i], i, array)){
            passArray.push(array[i]);
        }
        if(!func(array[i], i, array)){
            failArray.push(array[i]);
        }
    }
    returnArray.push(passArray);
    returnArray.push(failArray);
    return returnArray;
}

/** 
 * .map: takes an input collection (i.e., an array or object) and executes a defined callback function on each member. The
 * result of each callback are then saved to a new array, which is returned after all members have been passed to 
 * the callback function.
 * 
 * @param {Array or Object} collection: the array or object the members of which are passed to a defined callback.
 * @param {Function} func: the callback function through which members of the input collection are passed.
 * 
*/
function map(collection, func){
    let returnArray = [];
    
    if (_.typeOf(collection) === "array"){
        for (let i = 0; i <= collection.length-1 ; i++){
            let newVal = func(collection[i], i, collection);
            returnArray.push(newVal);
        }
    }
    if (_.typeOf(collection) === "object"){
        for (let key in collection){
            let newVal = func(collection[key], key, collection);
            returnArray.push(newVal);
        }
    }
    return returnArray;
}

/** 
 * .pluck: takes an input array of objects and a defined property, and loops through the array of objects 
 * to determine if the defined property is in each object. If so, the value of the defined property is
 * push into an array, and the array is returned after all elements have been evaluated for the presence of
 * the defined property. The returned array, then, is populated with the values of the defined property of
 * each object, if the property exists in the object.
 * 
 * @param {Array} array: an array of objects, the objects of which are evaluated for the presence of the defined property
 * @param {String} prop: a property, represented as a string, the presence of which is evaluated in each object of
 * the input array.
 * 
*/
function pluck(array, prop){
    let newArray = map(array, function(object){
        for (let key in object){
            if (key === prop){
                return object[key];
            }
        }
    }
    )
    return newArray;
}

/** 
 * .every: takes an input collection (i.e., and array or object) and executes a callback function on each
 * member of the collection. Returns true in case all members of the collection return true after their call-
 * back execution, and returns false if some member of the collection returns false after its callback execution.
 * 
 * @param {Array or Object} collection: the collection the elements of which are passed through a callback
 * @param {Function} func: the callback function through which each member of the input collection is passed. This
 * function must return a boolean value for .every to work properly.
 * 
*/

function every(collection, func){
    if (func === undefined){
        func = function(val){
            if (val){
                return true;
            }
            if (!val){
                return false;
            }
        }
    }
    
    if (typeOf(collection)==="array"){
        for (let i = 0; i<=collection.length-1;i++){
            if (func(collection[i], i, collection)===false){
                return false;
            } 
        }
        return true;
    }
    if (typeOf(collection)==="object"){
        for (let key in collection){
            if (func(collection[key], key, collection)===false){
                return false;
            }     
        }
        return true;
    }
}

/** 
 * .some: takes an input collection (i.e., an array or object) and passes each member of the collection
 * to a callback function. Returns true in case any member of the collection returns true after being passed
 * through the callback function. If no members return true, then .some returns false.
 * 
 * @param {Array or Object} collection: the array or object the members of which are passed through a callback
 * function.
 * @param {Function} func: the callback function through which members of the input collection are passed. This function
 * must return a boolean to work properly.
 * 
*/

function some(collection, func){
    if(func === undefined){
        if(typeOf(collection) === "array"){
            for (let i = 0 ; i<=collection.length-1; i++){
                if(collection[i]==true){
                    return true;
                }
            }
            return false;
        }

        if(typeOf(collection) === "object"){
            for (let key in collection){
                if(collection[key]==true){
                    return true;
                }
            }
            return false;

        }
    }
    
    if (typeOf(func) === "function"){
        if(typeOf(collection) === "array"){
            for (let i = 0 ; i<=collection.length-1; i++){
                if(func(collection[i], i, collection)===true){
                    return true;
                }
            }
            return false;
        }

        if(typeOf(collection) === "object"){
            for (let key in collection){
                if(func(collection[key], key, collection)===true){
                    return true;
                }
            }
            return false;
        }
    }
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    let result;
    // was seed passed
    if (seed === undefined){ // declare conditional to evaluate if 
        result = array[0];
        for (let i = 1; i<=array.length-1;i++){
            result = func(result,array[i], i, array);
        }
    }
    // else it's
    else {
        result = seed;
        for (let i = 0; i<=array.length-1; i++){
            result = func(result, array[i], i, array);
        }
    }
    return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object1, object2, ...objects){
    for (let key in object2){
        object1[key] = object2[key];
    }
    for (let i = 0; i<=objects.length-1; i++){
        for (let key in objects[i]){
            object1[key] = objects[i][key];
        }
    }
    return object1;
}


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
module.exports.identity = identity;