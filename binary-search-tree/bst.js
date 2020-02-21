class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(val){
    var newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
    } else{
      let traverse = this.root;
      while (traverse !== null){
        if (val === traverse.val) return undefined;
        if (traverse.val > newNode.val){
          if (traverse.left === null){
            traverse.left = newNode;
            return this;
          } else {
            traverse = traverse.left;
          }
        } else if(traverse.val < newNode.val){
          if(traverse.right === null){
            traverse.right = newNode;
            return this;
          } else {
            traverse = traverse.right;
          }

        }
      }
    }
  }

  find(val){
    if(!this.root) return null;
    else {
      let traverse = this.root;
      let found = false;
      while(traverse !== null && !found){
        if(traverse.val > val){
          traverse = traverse.left;
        } else if (traverse.val < val){
          traverse = traverse.right;
        } else {
          found = true ;
        }
      }

      return traverse;
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(10);
bst.insert(5);
bst.insert(23);
bst.insert(12);
