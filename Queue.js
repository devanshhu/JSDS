// -------------------- Queue STARTS -------------------------------
class Queue {

    constructor() {
        this.arr = [];
    }

    enqueue(value) {
        this.arr.push(value);
    }
    dequeue() {
        if (this.arr.length === 0)
            throw Error("Queue underflow !!!!");
        return this.arr.shift();
    }
    getFront() {
        if (this.arr.length === 0)
            throw Error("Queue Empty !!!!");
        return this.arr[this.size() - 1];
    }

    size() {
        return this.arr.length;
    }
    getRear() {
        if (this.arr.length === 0)
            throw Error("Queue Empty !!!!");
        return this.arr[0];
    }
    print() {
        console.log('Rear --> [ ' + this.arr.join(", ") + '] <-- Front');
    }
}
// ----------------------------------- QUEUE ENDS-----------------------------

// ---------------------------MAIN STARTS---------------------
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.print();
q.dequeue();
q.print();
console.log('Front --> ' + q.getFront());
console.log('Rear --> ' + q.getRear());

// -----------------------------MAIN ENDS------------------------