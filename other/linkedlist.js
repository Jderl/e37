// Node Object 
class Node {
    constructor(data, next = null) {
        this.data = data; 
        this.next = next; 
    }
}

// Create Linked List of node objects 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  // count indices
    }
    // Clear list 

    clearList(){
        this.head = null;
        this.size = 0;  // count indices
    }

    // Insert node at start 
    insertStart(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert node at end
    insertEnd(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert node based on specific index 
    insertPosition(data, index) {
        // Check if position is out of range
        if (index > 0 && index > this.size) {
            return console.log('Slot not available');
        }
        // Check if the index is the start position 
        if (index === 0) {
            this.insertStart(data);
            return;
        }

        //otherwise the position is greater than 0 and within range
        const node = new Node(data);
        let current, previous;

        // Set first to current
        current = this.head;
        let count = 0;

        // Iterate to find the right location
        while (count < index) {
            previous = current; // Node before the index
            count++;
            current = current.next; // Node after the index
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }

    // Display nodes from the list 
    printLinkedList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Invocation of methods 
const nodeList = new LinkedList();
nodeList.insertStart(2);
nodeList.insertStart(3);
nodeList.insertStart(4);
nodeList.insertPosition(1000, 2 ); // Inserting at index 2
nodeList.insertEnd(45);
nodeList.printLinkedList(); // This will display the node's data


// nodeList.insertStart(5);
// nodeList.insertStart(59);
// nodeList.clearList();
// nodeList.printLinkedList();
