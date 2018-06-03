class Queue {
  constructor() {
    this.line = [];
    this.frontPointer = 0;
    this.backPointer = 0;
  }

  add(val) {
    this.line[this.backPointer] = val;
    this.backPointer++;
    return this; //need to return otherwise you can't chain
  }

  remove() {
    this.frontPointer++;
    return this;
  }

  print() {
    console.log("full queue: ", this.line);
    console.log(
      "current queue",
      this.line.slice(this.frontPointer, this.backPointer)
    );
  }
}

let testQueue = new Queue()
  .add(1)
  .add(2)
  .remove()
  .add(3)
  .add(4)
  .add(5)
  .remove();

testQueue.print(); //[3,4,5]
