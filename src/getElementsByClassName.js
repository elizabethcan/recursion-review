// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  //document.body: is the element that contains the content for the document. In documents with <body> contents, returns the <body> element, and in frameset documents, this returns the outermost <frameset> element.
  //element.childNodes: read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.
  //element.children: returns a collection of an element's child elements, as an HTMLCollection object. ... The difference between this property and childNodes, is that childNodes contain all nodes, including text nodes and comment nodes, while children only contain element nodes.
  //element.classList: is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
  
  //input: string output: an array of all elements whose class contains className
  //check document body for elements with className
  //check each element for children elements with className
  //repeat
  
  var result = [];
  
  var body = document.body;
  
  if (body.classList.contains(className)) {
    result.push(body);
  }
  
  currentElement = body.children; //html coll
    var array = Array.prototype.slice.call( currentElement )
    
    if (array.length > 0) {
      array.forEach(function(el) {
        if (el.classList.contains(className) {
          result.push(el);
        });
      });
    }
  // if (currentElement.length > 0) {
  //   for(var i = 0; i < currentElement.length; i++) {
  //     if (currentElement[i].classList.contains(className)) {
  //       result.push(currentElement[i]);
  //       currentElement = currentElement[i].children
  //       if (currentElement.length > 0) {
  //         for(var j = 0; j < currentElement.length; j++) {
  //           if (currentElement[j].classList.contains(className)) {
  //             result.push(currentElement[j]);
  //           }
  //         }
  //       }
  //     }
      //getElementsByClassName(className, currentElement[i]);
  //   }
  // }
  
  return result;
};
