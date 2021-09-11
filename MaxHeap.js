
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getArray() {
        return this.heap;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    getLeftChildIndex(parent) {
        return Math.floor(parent * 2 + 1);
    }
    getRightChildIndex(parent) {
        return Math.floor(parent * 2 + 2);
    }
    getParentIndex(child) {
        return Math.floor((child - 1) / 2);
    }


    hasLeftChild(parent) {
        return this.heap[this.getLeftChildIndex(parent)] !== undefined;
    }
    hasRightChild(parent) {
        return this.heap[this.getRightChildIndex(parent)] !== undefined;
    }
    hasParent(child) {
        return this.heap[this.getParentIndex(child)] !== undefined;
    }

    getLeftChild(parent) {
        return this.heap[this.getLeftChildIndex(parent)];
    }
    getRightChild(parent) {
        return this.heap[this.getRightChildIndex(parent)];
    }
    getParent(child) {
        return this.heap[this.getParentIndex(child)];
    }

    add(item) {

        this.heap[this.heap.length] = item;
        this.heapifyUp();
    }

    poll() {
        if (!this.heap.length)
            return undefined;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.length--;
        this.heapifyDown();
        return item;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) < this.heap[index]) {
            [this.heap[index], this.heap[this.getParentIndex(index)]] = [this.heap[this.getParentIndex(index)], this.heap[index]];
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let greaterChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index)) {
                greaterChildIndex = this.getLeftChild(index) < this.getRightChild(index) ? this.getRightChildIndex(index) : this.getLeftChildIndex(index);
            }
            if (this.heap[index] < this.heap[greaterChildIndex]) {
                [this.heap[index], this.heap[greaterChildIndex]] = [this.heap[greaterChildIndex], this.heap[index]];
            } else {
                break;
            }
            index = greaterChildIndex;
        }
    }
}


let mx = new MaxHeap();
mx.add(1);
mx.add(2);
mx.add(200);
mx.add(0);
mx.add(20);
mx.add(30);
mx.add(15);
mx.add(20);
mx.poll();
mx.poll();
mx.poll();
console.log(mx.getArray());