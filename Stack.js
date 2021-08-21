// ---------------------------------------- Stack starts here -----------------
class Stack {

    /** Create a stack
     * @constructor
     * @param { any[] } seed_array Seed Array - Last element will be the top
    */
    constructor(seed_array = []) {
        this.arr = seed_array;
    }
    /**
     * Push value into the stack. Accepts a single param & not an array.
     * @param { any } value Value to push
     */
    push(value) {
        if (Array.isArray(value))
            throw Error("Cannot push multiple values, Please insert one element at a time !");
        this.arr.push(value);
    }
    /**
     *  Removes element from the top of the stack. Throws error in case of Empty Stack.
     */
    pop() {
        if (this.arr.length === 0)
            throw Error("Stack  underflow !!");
        this.arr.length -= 1;
    }
    /**
     * Returns the current size of the stack.
     * @returns number
     */
    size() {
        return this.arr.length;
    }
    /**
     * returns the top of the stack.
     * @returns 
     */
    peek() {
        if (this.arr.length === 0)
            throw Error("Stack underflow !!!")
        return this.arr[this.size() - 1];
    }

    /**
     * Pretty prints the array based on a given predicate. defaults to (x) => x
     */
    print(callback = (x) => x) {
        console.log("[ " + this.arr.map(callback).join(", "), "]  <-- top");
    }
}
// --------------------------------Stack Ends here --------------------------------------

// ------------- MAIN STARTS ------------------------
let s = new Stack();
s.push({
    id: 4,
    name: "A"
})
s.push({
    id: 3,
    name: "B"
})
s.push({
    id: 2,
    name: "C"
})
s.push({
    id: 1,
    name: "D"
});

s.pop()
s.print(x => x.id); // => [ 4, 3, 2 ]  <-- top
s.print(x => x.name); // => [ A, B, C ]  <-- top

// -------------------MAIN ENDS-----------------------