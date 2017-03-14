function words(sentence){
  var re = /[\s+|\n|\t]/;
  var array = sentence.split(re);
  var valueArray = [];
  var keyArray=[];
  var returnObject = {};
  
  for(var i = 0; i < array.length; i++) {
    var key = 0;
    valueArray[i] = array[i]
    
    for(var j = 0; j < array.length; j++){
      if(valueArray[i] === array[j]){
        key++;
        keyArray[i] = key; 
      }
    }
    returnObject[valueArray[i]] = keyArray[i];
  }
  
  return returnObject;
}

module.exports = words;
