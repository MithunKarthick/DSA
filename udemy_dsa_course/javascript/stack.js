class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top.value;
    }
    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        if(this.length === 0){
            this.bottom = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

  }
  
  const myStack = new Stack();

  myStack.push('google').push('microsoft').push('amazon');
  console.log(myStack);
  myStack.pop();
  console.log(myStack);
  console.log(myStack.peek());

  