exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var ret = '',
        charToCompare = '',
        count = 0;

    for(var i = 0, l = str.length; i < l; i++){
      if(str[i] === str[i + 1]){
        if(count < amount){
          ret += str[i];
          count++;
        }
      }
      else{
        if(count < amount){
          ret += str[i];
        }
        count = 0;
      }
    }

    return ret;
  },
  wordWrap: function(str, cols) {
    // I'm a bit confused as to what this function is supposed to do.
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
