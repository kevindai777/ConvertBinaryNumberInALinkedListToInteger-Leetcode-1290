//Objective is to convert a linked list of binary numbers to an integer value

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(0)
head.next.next = new Node(1)


//O(n) solution that uses bit manipulation to get the integer value

let value = 0
while (head) {
    value = (value << 1) + head.val 
    head = head.next
}

return value