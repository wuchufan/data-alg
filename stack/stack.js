class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else{
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;

    }

    return ++this.size;
  }

  pop(){
    if(this.size === 0){ return null }
    else if(this.first === this.last){
      this.last = null;
    }
    else {
      let temp = this.first;
      this.first = temp.next;
      temp.next = null;

    }
    return --this.size;
  }

}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
