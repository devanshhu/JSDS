// -----------------------------------------Linked list starts-------------------------------------------
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newObject = { value, next: null };
        if (!this.head) {
            this.head = newObject;
            return;
        }
        let item = this.head;
        while (item.next) {
            item = item.next;
        }
        item.next = newObject;
    }

    addToFront(value) {
        const obj = { value, next: this.head };
        this.head = obj;

    }

    deleteFromFront() {
        if (!this.head) {
            throw Error("List empty !!!!");
        }
        if (this.head) {
            const obj = this.head;
            this.head = this.head.next;
            return obj;
        }
    }

    deleteFromRear() {

        if (!this.head) {
            throw Error("List empty!!!!");
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let item = this.head;
        while (item.next.next) {
            item = item.next;
        }
        item.next = null;
    }

    print() {
        let result = [];
        let item = this.head;
        while (item) {
            result.push(item.value);
            item = item.next;
        }
        console.log(result);
    }
}

const ll1 = new LinkedList();
ll1.append(1);
ll1.append(2);
ll1.append(3);
ll1.append(4);
ll1.addToFront(0);
ll1.deleteFromFront();
ll1.deleteFromRear();
ll1.deleteFromRear();
ll1.deleteFromRear();
ll1.deleteFromRear();
ll1.print();

//-------------------Linked list ends---------------------------------------------------