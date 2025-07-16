class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert the value at end
  appendNode(value) {
    //1. create node instance
    const newNode = new Node(value);
    //2. check if Linkedlist is empty if empty then make newNode as head and tail , otherwise append new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // delete node at end
  deleteValueAtBegining() {
    let currentValue;
    if (this.head) {
      currentValue = this.head;
      do{
        currentValue.next = currentValue
      }while(currentValue.next!=null)
    
      
    } else {
      return;
    }

    console.log("currentValue", currentValue.next.next);
  }

  traversingLinkedList() {
    let currentValue = this.head;
    let result = "";
    while (currentValue) {
      result += currentValue.value + "==>";
      currentValue = currentValue.next;
    }

    console.log(result + "null");
  }
}

let list = new LinkedList();
console.log(list);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.appendNode(700);
list.traversingLinkedList();
list.deleteValueAtBegining();
