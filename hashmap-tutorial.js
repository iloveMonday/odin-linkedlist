class linkedLists {
    constructor() {
      this.startNode = new node();
    }
  
    append(value) {
      //adds to end of list
      let currentNode = this.startNode;
  
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.value = value;
      currentNode.nextNode = new node();
    }
    prepend(
      value //adds to start of list
    ) {
      let temp = this.startNode;
      this.startNode = new node();
      this.startNode.value = value;
      this.startNode.nextNode = temp;
    }
    size() {
      //returns size of list
      let index = 0;
      let currentNode = this.startNode;
      while (currentNode.nextNode !== null) {
        index++;
        currentNode = currentNode.nextNode;
      }
      return index;
    }
    head() {
      //returns first item in list
      return this.startNode.value;
    }
    tail(value) {
      //returns last item in list
      let currentNode = this.startNode;
  
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
    at(
      index //returns item at a specific index
    ) {
      let currentNode = this.startNode;
      let currentIndex = 0;
  
      while (currentIndex < index) {
        currentNode = currentNode.nextNode;
        if (currentNode.value === null) {
          return "error: Index not found";
        }
        currentIndex++;
      }
      return currentNode.value;
    }
    pop() {
      //removes last value
      let currentNode = this.startNode;
  
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
    }
    contains(value) {
      //returns true if the list contains an item
      let currentNode = this.startNode;
      if (currentNode.value === value) {
        return true;
      }
  
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        if (currentNode.value === value) {
          return true;
        }
      }
      return false;
    }
  
    find(value) {
      //finds the index of a specific value
      let currentNode = this.startNode;
      let index = 0;
      if (currentNode.value === value) {
        return index;
      }
  
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        index++;
        if (currentNode.value === value) {
          return index;
        }
      }
      return null;
    }
    toString() {
      //Prints the list as a string
      let currentNode = this.startNode;
      let listString = "";
  
      while (currentNode !== null) {
        if (currentNode.value !== null) {
          listString = listString + " -> " + currentNode.value;
        }
        currentNode = currentNode.nextNode;
      }
      return listString;
    }
  }



class node {
    constructor() {
      this.nextNode = null;
      this.value = null;
    }
  }


class hashMap {
    constructor() {
      this.loadfactor = 0.75;
      this.capacity = 16;
      this.arr = new Array(this.capacity).fill(null);
    }
  
    load() {
      let filledSpots = this.length();
      let maxEntries = this.loadfactor * this.capacity;
      if (maxEntries < filledSpots) {
        const oldArr = [...this.arr];
        this.arr = oldArr.concat(new Array(this.capacity).fill(null));
        this.capacity = this.capacity * 2;
        console.log("size doubled");
      }
      return filledSpots;
    }
  
    check(index) {
      if (index < 0 || index >= this.arr.length) {
        throw new Error("Trying to access index out of bounds");
        return false;
      }
    }
    hash(key) {
      let hashCode = 0;
  
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
     
  
      return hashCode % this.capacity;
    }
  
    set(key, value) {
      const hashCode = this.hash(key);
  
      if (this.arr[hashCode] === null) {
        this.arr[hashCode] = new linkedLists();
        this.arr[hashCode].append(value);
      } else {
        this.arr[hashCode].append(value);
      }
      this.load();
    }
    get(key) {
      const index = this.hash(key);
      if (this.check(index)) {
        return;
      }
      return this.arr[index];
    }
    has(key) {
      const hashCode = this.hash(key);
      if (this.arr[hashCode] !== null) {
        console.log("Key in hashmap");
        return true;
      } else {
        console.log("Key not in hashmap");
        return false;
      }
    }
    remove(key) {
      const hashCode = this.hash(key);
      if (this.arr[hashCode] !== null) {
        this.arr[hashCode] = null;
        console.log("Key removed");
        this.load();
        return true;
      } else {
        console.log("Key not in hashmap");
        return false;
      }
    }
    length() {
      let numElements = 0;
      let i = 0;
      while (i < this.arr.length) {
        if (this.arr[i] !== null) {
          numElements++;
        }
        i++;
      }
      return numElements;
    }
  
    clear() {
      this.arr.fill(null);
    }
    values() {
      let output = [];
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === null) {
          continue;
        } else {
          output.push(this.arr[i].toString());
        }
      }
      return output;
    }
    entries() {
      let output = [];
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === null) {
          continue;
        } else {
          output.push([i, this.arr[i].toString()]);
        }
      }
      return output;
    }
  }
  const test = new hashMap();
  
  test.set("apple", "red");
  test.set("banana", "yellow");
  test.set("carrot", "orange");
  test.set("dog", "brown");
  test.set("elephant", "gray");
  test.set("frog", "green");
  test.set("grape", "purple");
  test.set("hat", "black");
  test.set("ice cream", "white");
  test.set("jacket", "blue");
  test.set("kite", "pink");
  test.set("lion", "golden");
  test.set("moon", "silver");
  test.set("lion", "poopy");
  test.set("klasfdj", "laskdjf;l");
  test.set("aslkddddfjs", ";lkasjfjkkdk");
  test.set("b", "kljslkfjd");
  test.set("f", "e");
  test.set("g", "f");
  console.log(test.arr.length);
  console.log(test.length());
  console.log(test.entries());
