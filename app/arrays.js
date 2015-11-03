exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr){
      return prev + curr;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(obj){
      return obj !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0, len = arr.length; i < len; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(obj){
      return obj === item;
    }).length;
  },

  duplicates : function(arr) {
    var dupes = {},
        ret = [];

    arr.forEach(function(obj){
      if(dupes[obj]) dupes[obj]++;
      else dupes[obj] = 1;
    });

    for(var obj in dupes){
      if(dupes[obj] > 1) ret.push(+obj);
    }

    return ret;
  },

  square : function(arr) {
    return arr.map(function(obj){
      return obj * obj;
    });
  },

  findAllOccurrences : function(arr, target) {
    var ret = [];
    arr.forEach(function(val, key){
      if(val === target) ret.push(key);
    });

    return ret;
  }
};
