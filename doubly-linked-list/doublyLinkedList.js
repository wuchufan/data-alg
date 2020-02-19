
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add item at the end
  push(val){
    let newNode = new Node(val);
    if (this.length === 0){
      this.head = newNode;
      this.tail = this.head;

    }
    else {
      let newTail = newNode;
      this.tail.next = newNode;
      newTail.prev = this.tail;
      this.tail = newTail;

    }
    this.length++;
    return this;
  }
  //remove the last item;
  pop(){
    var removed = this.tail;
    if (!this.head){ return undefined}
    else if (this.length === 1){
      this.head = null;
      this.tail = null;

    }
    else{
    this.tail = removed.prev;
    this.tail.next = null;
    removed.prev = null;
    }
    this.length--;
    return removed;
  }
  //remove the node from beginning
  shift(){
    var removed = this.head;
    if(!this.head){ return undefined}
    else if(this.length === 0){
      this.tail = null;
      this.head = null;
    }
    else{
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
  //add node to the beginning
  unshift(val){
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //get the index of list
  get(index){

    var node = null;
    if (index >= this.length || index < 0) { return null}
    if (index <= this.length/2){
      let count = 0;
      node = this.head;
      while (count < index){
        node = node.next;
        count++;
      }
    } else {
      node = this.tail;
      let count = this.length - 1;
      while (count > index){
        node = node.prev;
        count--;
      }
    }

    return node;
  }
  //take index and value to update an node
  set(index,val){
    var updatedNode = this.get(index);
    if (!updatedNode) {return false}
    else {
      updatedNode.val = val;
      return true;
    }
  }
  //add a node at the certain position
  insert(index,val){
    var positionNode = this.get(index);
    if(!positionNode) {return false}
    if (index === this.length - 1){ this.length++; return !!this.push(val) }
    else if (index === 0){ this.length++; return !!this.unshift(val) }
    else {
      let newNode = new Node(val);
      let beforeNode = positionNode.prev;
      positionNode.prev = newNode;
      newNode.next = positionNode;
      newNode.prev = beforeNode;
      beforeNode.next = newNode;
      this.length++;
      return true
    }
  }

  remove(index){
    var foundNode = this.get(index);
    if(!foundNode) {return false}
    if(index === this.length - 1) {this.length--; return !!this.pop();}
    if(index === 0) { this.length--; return !!this.shift();}
    else{
      let beforeNode = foundNode.prev;
      let afterNode = foundNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      foundNode.prev = null;
      foundNode.next = null;
      this.length--;
      return true;
    }

  }
}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
