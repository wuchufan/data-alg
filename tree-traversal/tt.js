class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
      var queue = [];
      var visited = [];
      var node = this.root;
      queue.push(node);
      while(queue.length){
        node = queue.shift();
        visited.push(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return visited;
    }
    DFSPre(){
      var visited = [];
  
      const traverse = (node) => {
        visited.push(node);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return visited;
    }
    DFSPost(){
      var visited = [];

      const traverse = (node) => {

        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        visited.push(node);
      }
      traverse(this.root);
      return visited;
    }
    DFSInOrder(){
      var visited = [];

      const traverse = (node) => {

        if(node.left) traverse(node.left);
        visited.push(node);
        if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return visited;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
