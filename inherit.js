const log = console.log.bind(console);

//父类
function SuperClass(name) {
    this.name = name;
    this.num = [1,2,3];
}
SuperClass.prototype.getName = function() {
    log(this.name);
}

//子类,构造函数继承
function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}

//过度一个类,继承原型
function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
//子类继承父类原型
function inheritPrototype(subClass, superClass) {
    let p = inheritObject(superClass.prototype) //复制父类的原型
    p.constructor = subClass; //修正constructor属性
    subClass.prototype = p; //继承父类原型,类似subClass.prototype = new superClass();没有执行父类构造方法
}

inheritPrototype(SubClass, SuperClass); //子类继承父类原型



