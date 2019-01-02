// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = ''
  if (obj == undefined) {
    result += 'null';
  } else if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += `${stringifyJSON(obj[i])},`;
    };
    
    if (obj.length > 0) {
      result = result.slice(0, -1);
    }
    
    result += ']';
  } else if (typeof obj === 'object') {
    result += '{';
    
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') { 
        result += `${stringifyJSON(key)}:${stringifyJSON(obj[key])},`;
      }
    }
    
    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    
    result += '}';
    
  } else if (typeof obj === 'string') {
    result += `"${obj}"`;
  } else if (typeof obj === 'number') {
    result += `${obj}`;
  } else if (typeof obj === 'boolean') {
    result += `${obj}`;
  } 

  //wraps input into quotes
  //input: number type output: '2'
  //input: undefined output: 'null'
  //input: boolean output: 'true'/'false'
  //input: string output: ''abc''
  
  //input: array output: '[]'
  
  //input: object output: '{}'
  return result;
};
