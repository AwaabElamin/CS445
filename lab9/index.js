class Product {
    constructor(id, name, description, price, count) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
    }
    toString() {
        let temp = `{id: ${this.id}, name: ${this.name}, description: ${this.description}, price: ${this.price}, count: ${this.price}}\n`;
        return temp;
    }
}
class ShoppingCart {
    basket = [];
    constructor() {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = this;
        }
        return ShoppingCart.instance;
    }
    upsertItem(product) {
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
    }
    getItemsCount() {
        return this.basket.length;
    }
    getTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.basket.length; i++) {
            total += this.basket[i].price * this.basket[i].count;
        }
        return total;
    }
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
    }
    remove(index) {
        for (let i = index; i < (this.basket.length) - 1; i++) {
            this.basket[i] = this.basket[i + 1];
        }
    }
    toString() {
        return this.basket.forEach(product => `${product}`);
    }
}

onload = function () {
    this.document.getElementById("submit").onclick = doit;
    document.getElementById("btnRemove").onclick = removeIt;
    this.instance1 = new ShoppingCart();
}
function removeIt(){
    let removeProduct = null;
    let temp = document.getElementById("txtRemove").value;
    removeProduct = instance1.removeItemById(temp);
    if (removeProduct !== null) {
        let temp = `<table class="table">
        <tr>
            <th>id</th><th>name</th><th>description</th><th>price</th><th>count</th>
        </tr>
        <tr>
            <td>${removeProduct.id}</td><td>${removeProduct.name}</td><td>${removeProduct.description}</td>
            <td>${removeProduct.price}</td><td>${removeProduct.count}</td>
        </tr>`;
        document.getElementById("remove").innerHTML = temp;
    }else{
        document.getElementById("remove").innerHTML = "this item is not";
    }
}
function doit() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let count = document.getElementById("count").value;



    let product = new Product(id, name, description, price, count);
    instance1.upsertItem(product);
    // instance1.basket.forEach(
    //     product => {
    //         document.getElementById("productsTable").innerHTML +=
    //         `<tr><td>${product}</td></tr>`;
    //     });
    // product = new Product(id, 'cofee1', 'Coffee Grounds from Ethiopia', 10, 2);
    // instance1.upsertItem(product);
    // product = new Product(id, 'cofee1', 'Coffee Grounds from Ethiopia', 10, 3);
    // instance1.upsertItem(product);
    document.getElementById("itemCount").value = instance1.getItemsCount();
    document.getElementById("totalPrice").value = instance1.getTotalPrice();
   


    console.log("getItemsCount: " + instance1.getItemsCount());
    console.log("getTotalPrice: " + instance1.getTotalPrice());
    console.log("removeItemById: " + instance1.removeItemById(3));
    console.log(instance1.basket.toString());
}

