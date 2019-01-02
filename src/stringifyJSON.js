// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return `'${obj}'`;
  }
  
  if (typeof obj === 'number') {
    return `'${obj}'`;
  }
  
  if (typeof obj === 'boolean') {
    return `'${obj}'`;
  }
  
  if (obj === undefined) {
    return `'null'`;
  }
  
  //wraps input into quotes
  //input: number type output: '2'
  //input: undefined output: 'null'
  //input: boolean output: 'true'/'false'
  //input: string output: ''abc''
  
  //input: array output: '[]'
  
  //input: object output: '{}'
  
};
