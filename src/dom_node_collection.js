class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(string) {
    if (!string) {
      return this.arr[0].innerHTML;
    } else {
      for (let i = 0; i < this.arr.length; i++) {
        this.arr[i].innerHTML = string;
      }
    }
  }

  empty() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].innerHTML = "";
    }
    return this;
  }

  append(element) {
    if (element instanceof DOMNodeCollection) {
      for (let i = 0; i < element.arr.length; i++) {
        const out = element.arr[i].outerHTML;
        for (let j = 0; j < this.arr.length; j++) {
          this.arr[j].innerHTML += out;
        }
      }
    } else if (typeof element === "string") {
      for (let k = 0; k < this.arr.length; k++) {
        this.arr[k].innerHTML += element;
      }
    } else {
      for (let l = 0; l < this.arr.length; l++) {
        this.arr[length].innerHTML += element;
      }
    }
  }

  attr(attribute, value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (!value) {
        return this.arr[i].getAttribute(attribute);
      } else {
        this.arr[i].setAttribute(attribute, value);
        return this;
      }
    }
  }

  addClass(name) {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].setAttribute("class", name);
    }
  }

  removeClass(name) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].getAttribute("class") === name) {
        this.arr[i].removeAttribute("class");
      }
    }
  }

  children(){
    let kids =[];
    this.arr.forEach(element => {
      kids = kids.concat(Array.from(element.children));
    });
    return new DOMNodeCollection(kids);
  }

  parent(){
    let adults = [];
    this.arr.forEach(element => {
      adults = adults.concat(Array.from(element.parent));
    });
    return new DOMNodeCollection(adults);
  }

  find(selector) {
    let nodes = [];
    // const selected = this.querySelectorAll(selector)
    this.arr.forEach(element => {
      const elements = Array.from(element.querySelectorAll(selector))
        nodes = nodes.concat(elements)      
    });
    return new DOMNodeCollection(nodes);
  }

  remove(){
    this.arr.forEach(element => {
        element.remove();
    });
  }
}

module.exports = DOMNodeCollection;

