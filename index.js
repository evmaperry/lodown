'use strict';

/**
 * identity: takes in any value and returns the same value.
 * 
 * @param {Object, Array or Value} value: the value to be returned.
 * 
 * @return {Object, Array Or Value}: the same collection or value input as
 * an argument. This function returns what is provided as an argument in 
 * the function invocation.
*/

function identity(value){
    return value;
}

/**
 * typeOf: takes any value and returns its datatype as a string. Works
 * with string, array, object, function, undefined, number, boolean,
 * and null datatypes.
 * 
 * @param {Object, Array or Value} value: the value the datatype of which
 * is returned by the function. 
 * 
 * @return {String}: the name of the type of value of the argument, i.e.,
 * "string" or "number".
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
 * first: returns a defined number of elements from the beginning of the 
 * input array in a new array. Returns the array's first element if 'num' 
 * argument is not a number or undefined. 
 * 
 * @param {Array} arr: the array the elements of which are returned
 * @param {Number} num: the number of elements from the input array to be 
 * returned in a new array.
 * 
 * @return {Array}: an array of values derived from the beginning of the 
 * input array. The number of elements in the return array is derived from 
 * the num argument provided at invocation.
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
 * last: returns a defined number of elements from the end of the input 
 * array in a new array. Returns the last element of the input array if 
 * the 'num' argument is not a number or undefined.
 * 
 * @param {Array} arr: the array the last element(s) of which are 
 * returned in a new array.
 * @param {Number} num: the number of items returned from the 
 * end of the input array.
 * 
 * @return {Array}: an array of values derived form the end of the 
 * onput array. The number of elements in the return array is a function 
 * of the num argument provided at invocation. 
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
 * indexOf: returns the index of an element in the input array in case the 
 * input value is equal to the element's value. Returns the index of the first 
 * element the value of which is equal to the input value. If the provided value 
 * is not found in the provided array, then the function returns -1.
 * 
 * @param {Array} arr: the array the elements of which are evaluated against 
 * the input value.
 * @param {Value} value: the value that is compared to the value of elements 
 * in the input array.
 * 
 * @return {Number}: either the index of the provided array at which the value is 
 * located or, if the value is not in the array, -1.
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
 * contains: returns true in case a defined value is the value of an element 
 * in the input array. If the input value does not equal the value of an element 
 * in the input array, the function returns false.
 * 
 * @param {Array} arr: the array the elements of which are evaluated for 
 * equality to the input value.
 * @param {Value} val: the value that is evaluated against the elements of the 
 * input array.
 * 
 * @returns {Boolean}: either true or false. True if the provided value is located 
 * somewhere in the provided array, and false if not.
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
 * each: executes a defined function on all members of a provided collection. 
 * Works for both arrays and objects. This method does not explicitly return any values.
 * 
 * For arrays: the value of each element is passed into the callback function. 
 * The callback function can take as arguments the element, the index, and the 
 * original array provided at invocation. 
 * 
 * For objects: the value of each property is passed into the defined callback function. 
 * The callback function can take as arguments the value, key, and the original object 
 * provided at invocation.
 * 
 * @param {Array or Object} collection: the collection the elements of which are passed 
 * into a defined function.
 * @param {Function} func: the function that executes on each member of the collection.
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
 * unique: takes an input array and returns an array with duplicates removed.
 * 
 * @param {Array} array: the array the duplicates of which are excluded from the 
 * output array.
 *   
 * @return {Array}: equivalent to the input array provided at invocation, but 
 * without duplicates.
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
 * filter: takes an input array and executes a defined callback function on each 
 * element. If the callback returns true, the element is pushed into a new array; 
 * if the callback returns false, the element is passed over. Filter returns a new 
 * array of all elements that, when passed through the callback function, return true.
 * 
 * @param {Array} array: the array the elements of which are passed to the 
 * callback function.
 * @param {Function} func: the callback function through which the input 
 * array's elements are passed. This function must return a boolean value 
 * for .filter to work properly.
 * 
 * @return {Array}: an array of those elements from the input array that return 
 * true once passed to the provided callback function.
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
 * reject: takes an input array, passes each element through a callback function, and 
 * returns an array populated by the elements that, when they are passed through the 
 * callback function, return false. 
 * 
 * @param {Array} array: the array the elements of which are passed through the 
 * callback function.
 * @param {Function} func: the callback function that executes on each element 
 * of the input array. This function must evaluated to a boolean in order for .reject 
 * to work properly.
 * 
 * @return {Array}: an array of those elements from the input array that return false 
 * once passed to the provided callback function.
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
 * partition: separates the elements of an array into two arrays according to whether 
 * their passing through a callback function returns true or false. Both the 'true' and
 * 'false' arrays are returned by .partition in a single array. The first element of
 * the returned array is an array of those elements that return true after being passed 
 * through the callback, while the second element is an array of those elements that fail 
 * after passing through the callback.
 * 
 * @param {Array} array: the array the elements of which are passed through the defined 
 * callback function.
 * @param {Function} func: the callback function through which each element of the input 
 * array is passed. This function must return a boolean value in order for .partition to 
 * work.
 * 
 * @return {Array}: an array of two nested arrays. The first nested array contains those 
 * elements of the input array that return true once passed to the provided callback 
 * function. The second nested array contains those elements of the input array that return 
 * false once passed to the provided callback function.
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
 * map: takes an input collection (i.e., an array or object) and executes a defined 
 * callback function on each member. The return value of each callback is then saved 
 * to a new array, which is finally returned after all members have been passed through 
 * the callback function.
 * 
 * For arrays: the value of each element is passed into the callback function. The 
 * callback function can take as arguments the element, the index, and the original 
 * array provided at invocation. 
 * 
 * For objects: the value of each property is passed into the defined callback function. 
 * The callback function can take as arguments the value, key, and the original object 
 * provided at invocation.
 * 
 * @param {Array or Object} collection: the array or object the members of which are 
 * passed to a defined callback.
 * @param {Function} func: the callback function through which members of the input
 * collection are passed.
 * 
 * @return {Array or Object}: this function returns the same type, either Array or Object,
 * that is provided as the collection argument at invocation. The elements of a returned 
 * Array or the values of a returned Object are updated by the provided callback function.
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
 * pluck: takes an input array of objects and a provided property written as a string, and 
 * loops through the array of objects to determine if the provided property is in each object. 
 * If so, the value of that property is push into an array, and the array is returned after
 * all elements have been evaluated for the presence of the provided property. The returned
 * array, then, is populated with the values of the provided property of
 * each object (if the property exists in the object).
 * 
 * @param {Array} array: an array of objects, the objects of which are evaluated for the 
 * presence of the defined property
 * @param {String} prop: a property, represented as a string, the presence of which is 
 * evaluated in each object of the input array.
 * 
 * @return {Array}: an array containing the property values of those objects in the input 
 * array that have the property name provided as an argument at invocation.
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
 * every: takes an input collection (i.e., and array or object) and executes a callback
 * function on each member of the collection. Returns true in case all members of the 
 * collection return true after their callback execution, and returns false if some 
 * member of the collection returns false after its callback execution.
 * 
 * @param {Array or Object} collection: the collection the elements of which are passed
 * through a callback.
 * @param {Function} func: the callback function through which each member of the input
 * collection is passed. This function must return a boolean value for .every to work
 * properly.
 * 
 * @return {Boolean}: returns true or false depending on if all elements of an input Array
 * or all values of an input Object return true when passed to a provided callback function.
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
 * some: takes an input collection (i.e., an array or object) and passes each member of 
 * the collection to a callback function. Returns true in case any member of the collection 
 * returns true after being passed through the callback function. If no members return true, 
 * then .some returns false.
 * 
 * @param {Array or Object} collection: the array or object the members of which are passed 
 * through a callback function.
 * @param {Function} func: the callback function through which members of the input collection 
 * are passed. This function must return a boolean to work properly.
 * 
 * @return {Boolean}: returns true or false, depending on if one element of an input Array 
 * or one value of an input Object returns true when passed to a provided callback function.
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

/** 
 * reduce: takes an input array, a callback function, and a seed value. The callback 
 * function is first called on the seed value (if the seed value is provided), but otherwise 
 * is called on the first element of the array. The returned result of this first call is 
 * routed into the next call of the callback function, which executes on the succeeding 
 * element of the array. Thus a "previous value" or "accumulator" is also passed through 
 * on each callback execution.
 * 
 * @param {Array} array: the list of elements over which the callback function executes.
 * @param {Function} func: the callback function that is called over successive elements 
 * of the input array. This function's definition determines how the "previous value" is 
 * changed as the callback executes on successive elements.
 * @param {Array, Object or Value} seed: an optional Array, Object or Value that serves 
 * as the starting point for the execution of .reduce.
 * 
 * @return {Array, Object or Value}: the datatype that is returned by this function is 
 * determined by the seed value and the logic of the callback function. Normally you'd 
 * want to update the same collection or value when reducing an input array, but the value 
 * returned by the callback function each iteration could be unrelated to values derived 
 * from previous iterations. 
*/

function reduce(array, func, seed){
    let result;
    if (seed === undefined){ 
        result = array[0];
        for (let i = 1; i<=array.length-1;i++){
            result = func(result,array[i], i, array);
        }
    }
    else {
        result = seed;
        for (let i = 0; i<=array.length-1; i++){
            result = func(result, array[i], i, array);
        }
    }
    return result;
}

/** 
 * extend: takes a target object and any number of source objects, and copies the 
 * properties from the source objects to the targe object, then returns the updated 
 * target object.
 * 
 * @param {Object} object: the object to which all properties from source objects 
 * will be copied.
 * @param {Array} objects: the array that contains the objects the properties of 
 * which are copied to the target object.
 * 
 * @return {Object}: the target object updated to contain the properties of the 
 * objects provided as arguments at invocation.
*/

function extend(object, ...objects){
    for (let i = 0; i<=objects.length-1; i++){
        for (let key in objects[i]){
            object[key] = objects[i][key];
        }
    }
    return object;
}

module.exports.each = each;
module.exports.identity = identity;
module.exports.extend = extend;
module.exports.reduce = reduce;
module.exports.every = every;
module.exports.some = some;
module.exports.pluck = pluck;
module.exports.map = map;
module.exports.partition = partition;
module.exports.reject = reject;
module.exports.filter = filter;
module.exports.unique = unique;
module.exports.indexOf = indexOf;
module.exports.contains = contains;
module.exports.last = last;
module.exports.first = first;
module.exports.typeOf = typeOf;