// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    return this;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail = this.tail.next = { value: value, next: null };
    this.length++;
    return this;
  }

  prepend(value) {
    this.head = { value: value, next: this.head };
    this.length++;
    return this;
  }

  _getObjectByIndex(index) {
    let object = null;
    for (let i = 0; i <= index; i++) {
      if (i === 0) {
        object = this.head;
        continue;
      }
      object = object.next;
    }
    return object;
  }

  _getObjectByValue(value) {
    let object = null;
    let found = false;
    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        object = this.head;
      } else if (i === this.length) {
      } else {
        object = object.next;
      }
      if (object.value === value) {
        found = true;
        return object;
      }
    }
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length - 1) {
      this.append(value);
    } else {
      let object = this._getObjectByIndex(index - 1);
      object.next = { value: value, next: object.next };
      this.length++;
    }
    return this;
  }

  delete(index, value) {
    let object = {};
    if (index === 0) {
      this.head = this._getObjectByIndex(0).next;
    } else if (index === this.length - 1) {
      object = this._getObjectByIndex(index - 1);
      object.next = null;
      this.tail = object;
    } else {
      object = this._getObjectByIndex(index - 1);
      object.next = object.next.next;
    }
    this.length--;
    return this;
  }

  printList(linkedList) {
    const array = [];
    let currentNode = linkedList ? linkedList.head : this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  reverse() {
    let pointer = this.head;
    let newHead = null;
    let newTail = null;
    let newNode = null;
    let reversedList = {};
    for (let i = 0; i < this.length; i++) {
      newNode = new Node(pointer.value);
      newNode.next = newHead;
      newHead = newNode;
      pointer = pointer.next;
      if(i === 0){
          newTail = newHead;
      }
    }
    reversedList.head = newHead;
    reversedList.tail = newTail;
    reversedList.length = this.length;
    return reversedList;
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 2);
myLinkedList.delete(3);

myLinkedList.printList();
myLinkedList.printList(myLinkedList.reverse());

