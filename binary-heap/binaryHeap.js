class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
    return this.values
  }
  extractMax(){
    if (!this.values.length) return null;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  sinkDown(){
    const length = this.values.length;
    let idx = 0;

    while(true){
      const element = this.values[idx];
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      let swap = null;
      if (leftChildIdx < length){
        if (element < leftChild){
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length){
        if((swap === null && element < rightChild) || (swap !== null && leftChild < rightChild)){
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

}
class Node{
  constructor(val,priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val,priority){
    let newNode = new Node(val,priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values
  }
  dequeue(){
    if (!this.values.length) return null;
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  sinkDown(){
    const length = this.values.length;
    let idx = 0;

    while(true){
      const element = this.values[idx];
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      let swap = null;
      if (leftChildIdx  > length){
        if (element.priority  > leftChild.priority){
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length){
        if((swap === null && element.priority  > rightChild.priority) || (swap !== null && leftChild.priority  > rightChild.priority)){
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

}
let heap = new MaxBinaryHeap()
heap.insert(55);
heap.insert(80);
heap.insert(20);
heap.insert(30);
heap.insert(50);
heap.insert(88);
heap.insert(44);
heap.insert(67);

let er = new PriorityQueue();
er.enqueue('something',1);
er.enqueue('blaba',2);
er.enqueue('bbafao',3);
er.enqueue('qoiwdj',4);
er.enqueue('qoiwdj',45);
