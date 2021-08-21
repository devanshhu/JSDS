// -------------------- Queue STARTS -------------------------------
class Queue {

    /**
     * @constructor
     * @param { any } seed_arr Seed array 
     */
    constructor(seed_arr = []) {
        this.arr = seed_arr;
    }

    /**
     * Add object to the front of the queue.
     * @param {*} value - Object to add to the queue.
     */
    enqueue(value) {
        this.arr.push(value);
    }

    /**
     * Remove an object from the end of the queue. Throws Error if queue is empty.
     * @returns {any} dequeued object.
     */
    dequeue() {
        if (this.arr.length === 0)
            throw Error("Queue underflow !!!!");
        return this.arr.shift();
    }

    /**
     * Returns the front of the queue
     * @returns { any }
     */
    getFront() {
        if (this.arr.length === 0)
            throw Error("Queue Empty !!!!");
        return this.arr[this.size() - 1];
    }

    /**
     * Returns the current size of the queue
     * @returns { number }
     */
    size() {
        return this.arr.length;
    }

    /**
     * Returns the rear of the queue
     * @returns 
     */
    getRear() {
        if (this.arr.length === 0)
            throw Error("Queue Empty !!!!");
        return this.arr[0];
    }

    /**
     * Prints the Queue based on a given callback. Callback defaults to (x) => x
     */
    print(callback = (x) => x) {
        console.log('Rear --> [ ' + this.arr.map(callback).join(", ") + '] <-- Front');
    }

    /**
     * 
     * @param {Function} callback Function to use for mapping of every object in Queue. First element is Rear & last element is Front.
     * @returns 
     */
    getQueue(callback = (x) => x) {
        return this.arr.map(callback);
    }
}
// ----------------------------------- QUEUE ENDS-----------------------------

// ---------------------------MAIN STARTS---------------------
let q = new Queue();
q.enqueue({
    id: 4,
    name: "D"
});
q.enqueue({
    id: 3,
    name: "C"
});
q.enqueue({
    id: 2,
    name: "B"
});
q.enqueue({
    id: 1,
    name: "A"
});
// q.print();
q.dequeue();
// q.print();
// console.log('Front --> ' + q.getFront());
// console.log('Rear --> ' + q.getRear());
console.log(q.getQueue((x) => x.id));

// -----------------------------MAIN ENDS------------------------