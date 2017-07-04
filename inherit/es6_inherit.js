const log = console.log.bind(console);

//定义父类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

//子类
class ColorPoint extends Point {
    constructor(x,y,color) {
        super(x, y) //必须先调用父类构造
        this.color = color;
    }
}
//与es5不同的是,先用super()创造父类实例对象this,然后用子类的构造函数修改this
let cp = new ColorPoint(25,8,'green');
log(cp instanceof ColorPoint) //true
log(cp instanceof Point) //true

