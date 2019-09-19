const DOMNodeCollection = require("./dom_node_collection.js");

function $l(selector){

  if( typeof selector === 'string'){ //$(.class-name)
    // debugger
    let cssSelector = document.querySelectorAll(selector);
    let selectorArr = Array.from(cssSelector);
    return new DOMNodeCollection(selectorArr);
  }else{
    // debugger
    return new DOMNodeCollection([selector]);
  }

}

window.$l = $l;