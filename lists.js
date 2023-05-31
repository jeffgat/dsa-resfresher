class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        // cut off the tail, cause tail can't have a next
        this.tail.next = null;
        this.length--;
        // reset head and tail after setting length to 0 above
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let removedHead = this.head;
        this.head = removedHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return removedHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(val) {
        if (val >= this.length) {
            return null;
        }
        let current = this.head;
        let index = 0;
        while (current.next) {
            index++;
            if (index === val) {
                return current;
            }
            current = current.next;
        }
    }
    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index === 0) this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);

        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

// let list = new SinglyLinkedList();
// list.push('0');
// list.push('2');
// list.push('3');
// list.push('4');
// const x = list.remove(2);
// list.push('5');
// list.get(3);
// list.print();
// list.reverse();
// list.print();

class DNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new DNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        console.log('this', this);
        return this;
    }
    pop() {
        if (!this.head) return undefined;

        const oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        
    }
}

const list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.pop(100);
