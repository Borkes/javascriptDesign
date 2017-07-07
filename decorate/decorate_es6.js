const log = console.log.bind(console);

//装饰者模式,为已有的功能添加更多的功能
class Sale { //根据需要改变价格
    constructor(price) {
        [this.decoratorList, this.price] = [[], price]; //解构
    }
    decorate(decorator) {
        if (!Sale[decorator]) {
            throw new Error(`this ${decorator} is not exist`);
        }
        this.decoratorList.push(Sale[decorator]);
    }

    getPrice() {
        for (let d of this.decoratorList) {
            this.price = d(this.price);
        }
        return this.price.toFixed(2);
    }

//静态方法不会被实例继承,而是直接通过类来调用,但可以被子类继承
    static addColor(price) {
        return price + price * 8 /100;
    }
    static addSize(price) {
        return price + price * 5 /100;
    }
}

let sale = new Sale(100);
sale.decorate('addColor'); //加颜色装饰
log(sale.getPrice())
sale.decorate('addSize'); //加尺寸装饰
log(sale.getPrice())