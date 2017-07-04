const log = console.log.bind(console);

function SuperClass(name){
    this.name = name;
    this.num = [1,2,3];
}
SuperClass.prototype.getName = function() {
    log(this.name);
}

//构造函数继承父类
function SubClass(name, time){
    SuperClass.call(this, name);
    this.time = time;
}
//原型继承父类
SubClass.prototype = new SuperClass()
//子类自定义原型方法
SubClass.prototype.getTime = function() {
    log(this.time);
}

let instance1 = new SubClass('in1', 1);
let instance2 = new SubClass('in2', 2);
instance1.num.push(4);
log(instance1.num);   //[1,2,3,4]
log(instance1.name)     //in1
log(instance2.num)    //[1,2,3]
log(instance2.time)     //2
instance1.getTime()    //1
instance1.getName()    //in1

//这种方式实现,调用父类构造方法两次