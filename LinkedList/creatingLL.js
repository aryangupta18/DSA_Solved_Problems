class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class NewList {
  constructor() {
    this.head = null;
  }

  addNode(val) {
    let nn = new Node(val);
    if (!this.head) {
      this.head = nn;
      return;
    }
    let ptr = this.head;
    while (ptr.next) {
      ptr = ptr.next;
    }
    ptr.next = nn;
  }

  printList() {
    let ptr = this.head;
    let res = "";
    while (ptr) {
      res += ptr.value;
      ptr = ptr.next;
      res += "->";
    }
    console.log(res+"null");
  }
}

let ll = new NewList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.printList();
