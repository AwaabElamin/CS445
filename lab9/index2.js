const shoppingCart = (function () {

    let basket = [];

    return {
        upsertItem: function (product) {
            let flag = false;
            for (let i = 0; i < this.basket.length; i++) {
                if (this.basket[i].id === product.id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                this.basket.push(product);
            }
        },
        getItemsCount: function () {
            return basket.length;
        },
        getTotalPrice() {
            let total = 0;
            for (let i = 0; i < this.basket.length; i++) {
                total += this.basket[i].price * this.basket[i].count;
            }
            return total;
        },
        removeItemById(id) {
            let temp = null;
            for (let i = 0; i < this.basket.length; i++) {
                if (this.basket[i].id === id) {
                    temp = this.basket[i];
                    this.remove(i);
                    break;
                }
            }
            return temp;
        },
        remove(index) {
            for (let i = index; i < (this.basket.length) - 1; i++) {
                this.basket[i] = this.basket[i + 1];
            }
        }
    };

})();

// q2
class Subject {
    observers = {};

    on(event, fn) {
        if (!this.observers[event]) {
            this.observers[event] = [fn];
        } else {
            this.observers[event].push(fn);
        }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }

    off(event, fn) {
        this.observers[event] = this.observers[event].filter(f => f !== fn);
    }

}
const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
//output
// Corn
// foo: Corn
// cs445
// foo: cs445
subject.off('eat', foo);
subject.emit('eat', 'Banana');
//output
//Banana