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
 * first: returns a defined number of elements from the beginning of the array
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
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

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){
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

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, value){
    for ( let i = 0; i <= arr.length - 1; i++){
        if (arr[i] === value){
            return i;
        }
    }
    return (-1)
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, value){
    for ( let i = 0 ; i <= arr.length -1 ; i++){
        if (arr[i] === value){
            return true
        }
    }
    return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
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

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    let storageArray = [];
    for (let i = 0 ; i <= array.length - 1 ; i++){
        if (_.indexOf(storageArray, array[i]) === -1){
            storageArray.push(array[i]);
        }
    }
    return storageArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    let returnArray = []
    for (let i = 0 ; i<=array.length-1; i++){
        if(func(array[i], i, array)){
            returnArray.push(array[i]);
        }
    }
    return returnArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    let storageArray = [];
    for (let i = 0; i <= array.length-1; i++){
        if(!func(array[i], i, array)){
            storageArray.push(array[i]);
        }
    }
    return storageArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
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

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
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

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop){
    let newArray = _.map(array, function(object){
        for (let key in object){
            if (key === prop){
                return object[key];
            }
        }
    }
    )
    return newArray;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
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
    
    if (_.typeOf(collection)==="array"){
        for (let i = 0; i<=collection.length-1;i++){
            if (func(collection[i], i, collection)===false){
                return false;
            } 
        }
        return true;
    }
    if (_.typeOf(collection)==="object"){
        for (let key in collection){
            if (func(collection[key], key, collection)===false){
                return false;
            }     
        }
        return true;
    }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    if(func === undefined){
        if(_.typeOf(collection) === "array"){
            for (let i = 0 ; i<=collection.length-1; i++){
                if(collection[i]==true){
                    return true;
                }
            }
            return false;
        }

        if(_.typeOf(collection) === "object"){
            for (let key in collection){
                if(collection[key]==true){
                    return true;
                }
            }
            return false;

        }
    }
    
    if (_.typeOf(func) === "function"){
        if(_.typeOf(collection) === "array"){
            for (let i = 0 ; i<=collection.length-1; i++){
                if(func(collection[i], i, collection)===true){
                    return true;
                }
            }
            return false;
        }

        if(_.typeOf(collection) === "object"){
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