// ---------------------------------------- Stack starts here -----------------
class Stack {
    constructor() {
        this.arr = [];
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        if (this.arr.length === 0)
            throw Error("Stack  underflow !!");
        this.arr.length -= 1;
    }
    size() {
        return this.arr.length;
    }
    peek() {
        return this.arr[this.size()];
    }
    print() {
        console.log("[ " + this.arr.join(", "), "]  <-- top");
    }
}
// --------------------------------Stack Ends here --------------------------------------

// ------------- MAIN STARTS ------------------------
let s = new Stack();
s.push(4);
s.push(3);
s.push(2);
s.push(1);
s.pop()
s.print();

// -------------------MAIN ENDS-----------------------