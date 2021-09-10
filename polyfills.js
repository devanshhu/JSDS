Array.prototype.myFilter = function (cb) {
    let that = this;
    let result = [];
    for (let i = 0; i < that.length; i++) {
        if (cb(that[i]))
            result.push(that[i]);
    }
    return result;
}

Array.prototype.myMap = function (cb) {
    let that = this;
    let result = [];
    for (let i = 0; i < that.length; i++) {
        result.push(cb(that[i]));
    }
    return result;
}

Array.prototype.myReduce = function (cb, initialValue) {

    var acc = initialValue;
    let i = 0;
    while (i < this.length) {
        acc = cb(acc, this[i], i, this);
        i++;
    }
    return acc;

}

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i]);
    }
}

let a = [1, 2, 3, 4];
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].myFilter(x => x % 2 === 0)); // [1,3,5,7,9]
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(x => x * 2)); // [2,4,6,8,10,12,14,16,18,0]
// console.log([1, 2, 3, 4].myReduce((x, y) => x + y, 0)); // 10
a.myForEach((x) => x * 2);
console.log(a); // 
