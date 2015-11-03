exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
   return new Promise(function(resolve){
     return resolve(value);
   })
  },

  manipulateRemoteData : function(url) {
    return fetch(url)
      .then(function(data){
          return data.json();
       })
      .then(function(data){
        return data.people.map(function(obj){
          return obj.name;
        });
      })
      .then(function(data){
        return data.sort();
      });
  }
};
