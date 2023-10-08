
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
  
    myEach(collection, (item, key, collection) => {
      result.push(callback(item, key, collection));
    });
  
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
  
    myEach(collection, (item, key, collection) => {
      if (predicate(item, key, collection) && result === undefined) {
        result = item;
      }
    });
  
    return result;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
  
    myEach(collection, (item, key, collection) => {
      if (predicate(item, key, collection)) {
        result.push(item);
      }
    });
  
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  

  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }