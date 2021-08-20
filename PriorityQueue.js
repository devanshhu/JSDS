// --------------------------------------PRIORITY QUEUE STARTS----------------------------
class PriorityQueue {

    constructor() {

        this.items = [];
    }

    print() {

        console.log("Rear --> [ " + this.items.join(", ") + " ] <-- Front");
    }

    dequeue() {

        if (this.items.length === 0) {

            throw Error("Empty Queue !!")
        }
        const deleted = this.items[0];
        this.items.shift();
        return deleted;
    }

    size() {

        return this.items.length;
    }
    enqueue(val) {
        if (typeof val === 'object') {

        } else {
            let i = 0;
            while (val > this.items[i])
                i++;
            this.items.splice(i, 0, val);
        }
    }
    getFront() {

        if (this.items.length === 0)
            throw Error("Empty Queue !!!");
        return this.items[this.size() - 1];
    }

    getRear() {
        if (this.items.length === 0)
            throw Error("Empty Queue !!!");
        return this.items[0];
    }

}
// -------------------------------------PRIORITY QUEUE ENDS---------------------

// -----------------------------------------MAIN STARTS------------------------------
let pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(1);
pq.dequeue();
pq.dequeue();
pq.print();
console.log("Front --> ", pq.getFront());
console.log("Rear --> ", pq.getRear());

// -----------------------------------------MAIN ENDS-----------------------------------