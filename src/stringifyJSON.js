// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  
  if (typeof obj === 'number') {
    return `${obj}`;
  }
  
  if (typeof obj === 'boolean') {
    return `${obj}`;
  }
  
  if (obj == undefined) {
    return 'null';
  }
  
  if (Array.isArray(obj)) {
    var result = '';
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += `${obj[i]},`;
    };
    
    if (obj.length > 0) {
      result = result.slice(0, -1);
    }
    
    result += ']';
    return result;
  }
  //wraps input into quotes
  //input: number type output: '2'
  //input: undefined output: 'null'
  //input: boolean output: 'true'/'false'
  //input: string output: ''abc''
  
  //input: array output: '[]'
  
  //input: object output: '{}'
  
};
