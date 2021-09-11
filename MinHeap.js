class MinHeap {
    constructor() {
        this.items = [];
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
        return this.items[this.getLeftChildIndex(parent)] !== undefined;
    }
    hasRightChild(parent) {
        return this.items[this.getRightChildIndex(parent)] !== undefined;
    }
    hasParent(child) {
        return this.items[this.getParentIndex(child)] !== undefined;
    }

    getLeftChild(parent) {
        return this.items[this.getLeftChildIndex(parent)];
    }
    getRightChild(parent) {
        return this.items[this.getRightChildIndex(parent)];
    }
    getParent(child) {
        return this.items[this.getParentIndex(child)];
    }

    peek() {
        if (this.items.length === 0)
            return undefined;
        return this.items[0];
    }

    poll() {
        const item = this.peek();
        this.items[0] = this.items[this.items.length - 1];
        this.items.length--;
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.items[this.items.length] = item;
        this.heapifyUp();
    }


    heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.getParent(index) > this.items[index]) {
            console.log("swapping ", index, this.getParentIndex(index));
            [this.items[this.getParentIndex(index)], this.items[index]] = [this.items[index], this.items[this.getParentIndex(index)]];
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {

        let index = 0;
        while (this.hasLeftChild(index)) {

            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getLeftChild(index) > this.getRightChild(index)) {
                smallerChildIndex = this.getRightChild(index);
            }
            if (this.items[index] > this.items[smallerChildIndex]) {
                [this.items[index], this.items[smallerChildIndex]] = [this.items[smallerChildIndex], this.items[index]];
            } else {
                break;
            }
            index = smallerChildIndex;
        }

    }

    printHeap() {
        console.log(this.items);
    }

}

let mh = new MinHeap();
mh.add(10)
mh.add(9)
mh.add(8)
mh.add(6)
mh.add(3)
mh.add(7)
mh.add(21)
mh.add(2)
mh.printHeap()
