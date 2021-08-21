// --------------------------------------PRIORITY QUEUE STARTS----------------------------
class PriorityQueue {

    /**
     * @constructor
     * Creates a new Priority queue. Does not accept seed list yet.
     */
    constructor(order = "max", callback = (x) => x) {

        this.items = [];
        this.order = order;
        this.key = callback;
    }

    /**
     * print the Queue based on a callback. Defaults to (x) => x.
     * @param {Function } callback  
     */
    print(callback = (x) => x) {

        console.log("Front --> [ " + this.items.map(callback).join(", ") + " ] <-- Rear");
    }

    /**
     * Returns the element from 
     * @returns { any }
     */
    dequeue() {

        if (this.items.length === 0) {
            throw Error("Empty Queue !!")
        }
        const deleted = this.items[0];
        this.items.shift();
        return deleted;
    }

    /**
     * Return the size of the Queue.
     * @returns 
     */
    size() {

        return this.items.length;
    }
    /**
     * Enqueues the objects 
     * @param {any} val add object to the queue.
     */
    enqueue(val) {

        let i = 0;
        if (this.order === "max") {
            while (this.items[i] && this.key(val) <= this.key(this.items[i])) {
                i++;
            }
        } else {
            while (this.items[i] && this.key(val) >= this.key(this.items[i])) {
                i++;
            }
        }
        this.items.splice(i, 0, val);

    }

    /**
     * Get the rear element of the queue.
     * @returns { object }
     */
    getRear() {

        if (this.items.length === 0)
            throw Error("Empty Queue !!!");
        return this.items[this.size() - 1];
    }

    /**
     * Get the front element of the queue
     * @returns { object }
     */
    getFront() {
        if (this.items.length === 0)
            throw Error("Empty Queue !!!");
        return this.items[0];
    }

    /**
     * Returns true if the Priority Queue is empty
     * @returns { boolean }
     */
    isEmpty() {
        return this.items.length === 0;
    }

}
// -------------------------------------PRIORITY QUEUE ENDS---------------------

// -----------------------------------------MAIN STARTS------------------------------


let pq = new PriorityQueue("max", (x) => x.id); // Max Priority Queue - Keeps the highest priority item at Front to get it picked.
// let pq = new PriorityQueue("min", (x) => x.id); -- Min Priority Queue - Keeps the lowest priority item at Front to get it picked.
console.log(pq.isEmpty());
pq.enqueue({
    id: 10,
    name: "10"
});
pq.enqueue({
    id: 10,
    name: "100"
});
pq.enqueue({
    id: 8,
    name: "8"
});
pq.enqueue({
    id: 9,
    name: "9"
});
pq.dequeue();
// pq.dequeue();
pq.print((x) => x.name);
console.log("Front --> ", pq.getFront());
console.log("Rear --> ", pq.getRear());

// -----------------------------------------MAIN ENDS-----------------------------------