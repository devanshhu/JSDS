// -----------------------------------------Linked list starts-------------------------------------------
class LinkedList {
    /**
     * @constructor
     * Create a linked-list based on given seed value. default value of head is null.
     */
    constructor(seed_head = null) {
        this.head = seed_head;
    }

    /**
     * Append element at the end of the list.
     * @param {any} value add param to linked-list.
     */
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

    /**
     * Add element to the first position in linked-list.
     * @param {*} value 
     */
    addToStart(value) {
        const obj = { value, next: this.head };
        this.head = obj;

    }

    /**
     * Deletes the first element of the linked-list. Throws error in case of empty linked-list.
     * @returns {any} Deleted element
     */
    deleteFromStart() {
        if (!this.head) {
            throw Error("List empty !!!!");
        }
        if (this.head) {
            const obj = this.head;
            this.head = this.head.next;
            return obj;
        }
    }

    /**
     * Deletes the last element of the linked-list. Throws error in case of empty linked-list.
     * @returns { any } Deleted element.
     */
    deleteFromEnd() {

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

    /**
     * 
     * @param {Function} callback Function to use for mapping of every object in linked-list.
     */
    print(callback = (x) => x) {
        if (!this.head)
            return [];
        let result = [];
        let item = this.head;
        while (item) {
            result.push(item.value);
            item = item.next;
        }
        console.log(result.map(callback));
    }

    /**
     * 
     * @param {Function} callback Function to use for mapping of every object in linked-list.
     * @returns { Array<any> } array of mapped elements
     */
    getLinkedList(callback = (x) => x) {
        if (!this.head)
            return [];
        let result = [];
        let item = this.head;
        while (item) {
            result.push(item.value);
            item = item.next;
        }
        return result.map(callback);
    }

    /**
     * Returns the size of linked-list.
     * @returns {number} size
     */
    size() {
        return this.item.length;
    }

    findElement(item, key = (x) => x) {



    }
}

const ll1 = new LinkedList();
ll1.append({
    id: 1,
    name: "A"
});
ll1.append({
    id: 2,
    name: "B"
});
ll1.append({
    id: 3,
    name: "C"
});
// ll1.deleteFromEnd();
// ll1.deleteFromEnd();
// ll1.deleteFromEnd();
// ll1.deleteFromEnd();
ll1.print(x => x.id);
console.log(ll1.getLinkedList(x => x.name))

//-------------------Linked list ends---------------------------------------------------