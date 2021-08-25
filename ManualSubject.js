
class ManualSubject {
    constructor() {
        this.cb = undefined;
        return {
            subscribe: function (cb, val) {
                this.cb = cb;
            },
            next: function (value) {
                this.cb(value);
            }
        }
    }

}

const obj = new ManualSubject();
obj.subscribe(res => console.log(res));
obj.next(true);
obj.next(1);
obj.next("world");
obj.next({ x: 1 });