class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter = counter + 1;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  getNthElement(n) {
    let counter = 0;
    let node = this.head;
    while (node && counter <= n) {
      counter++;
      node = node.next;
    }
    return node;
  }
  removeNthElement(n) {
    let counter = 0;
    let prevElementIndex = n - 1;
    let node = this.head;
    while (node && counter <= n) {
      counter = counter + 1;
      if (counter === prevElementIndex) {
        node.next = node.next.next;
      }
    }
    return "removed " + n + "th element";
  }

  removeNthElementFromEnd(n) {
    const size = this.size();
    let node = this.head;
    const position = size - n;
    let prevIndex = position - 1;
    let counter = 0;
    while (node) {
      node = node.next;
      counter++;
      if (counter === prevIndex) {
        node = node.next.next;
      }
      return node;
    }
  }

  iterateOverAll() {
    let node = this.head;
    let tempArr = [];
    while (node) {
      tempArr.push(node);
      node = node.next;
    }
    return tempArr;
  }
}

let linkedList = new LinkedList();

linkedList.insertFirst("Yo Man, supp");
linkedList.insertFirst("Aur kya chal raha hai");
linkedList.insertFirst("Hey vishal whats up?");
linkedList.insertFirst("Impact");

// console.log(linkedList.getNthElement(1));
// console.log(linkedList.removeNthElement(2));
// console.log(linkedList.iterateOverAll());
// console.log(linkedList.size());
console.log(linkedList.removeNthElementFromEnd(2));
// var removeNthFromEnd = function(head, n) {
//     if (!head) {
//       return;
//     }
//     if (n === 0) {
//       head = head.next;
//       return;
//     }

//      const previous = getAt(head, getSize(head) - n);
//     if (!previous || !previous.next) {
//       return;
//     }
//     previous.next = previous.next.next;

//     while (head) {
//       return head
//       head = head.next;
//     }
// };

//   function getAt(head,index) {
//       let counter = 0;
//       let node = head;
//       while (node) {
//         if (counter === index) {
//           return node;
//       }
//       counter++;
//       node = node.next;
//     }
//     return null;
//   }

// function getSize(node) {
//     let counter = 0;
//     if (node) {
//         node = node.next;
//         counter++
//     }
//     return counter
// }
