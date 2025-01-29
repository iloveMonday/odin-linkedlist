// const {Node} = require('./node-class');

//function for the balanced BST in the terminal

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function sortArray(array){
        return array.sort(function(a,b){return a - b}).filter(function(item, pos, ary){
        return !pos || item != ary[pos-1];
    });
  }


  class node {
    constructor(data = null, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    };
  };

  class tree {
    constructor(inputArray) {
        this.root = this.buildTree(inputArray, 0, inputArray.length -1);
        prettyPrint(this.root);
    }

    buildTree(inputArray, start, end){
        if (start > end) return null;


            let mid = parseInt((start + end )/ 2);
            let root = new node(inputArray[mid]);

            root.left = this.buildTree(inputArray, start, mid - 1);
            root.right = this.buildTree(inputArray, mid + 1, end);
            return root;

    }

    insert(value){

    }

    deleteItem(value){

    }

  };


  let testArray = [1, 2, 3, 4, 5, 6, 7];
  let odinArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  balancedBST = new tree (odinArray);