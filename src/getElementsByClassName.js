// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var result = [];
  element = element || document.body;

  if (element.classList.contains(className)) {
    result.push(element);
  }
  
  var currentElement = element.children;
  for(var i = 0; i < currentElement.length; i++) {
    result = result.concat(getElementsByClassName(className, currentElement[i]));
  }
  
  return result;
};
