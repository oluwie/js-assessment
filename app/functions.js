exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str1) {
      return str + ', ' + str1;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(obj){
      return fn.bind(this, obj);
    });
  },

  partial : function(fn, str1, str2) {
    return function(str){
      return fn(str1, str2, str);
    };
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr){
      return prev + curr;
    });
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
      var otherArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(this, otherArgs);
    };
  },

  curryIt : function(fn) {
  }
};
