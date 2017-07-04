const log = console.log.bind(console);

function SuperClass(id){
    this.num = [1,2,3];
    this.id = id;
}
SuperClass.prototype.showNum = function() {
    log(this.num);
}

function SubClass(id) {
    SuperClass.call(this, id); //调用父类构造,继承父类自身属性,不包括prototype
}

let instance1 = new SubClass(1);
let instance2 = new SubClass(2);
instance1.num.push(4);
log(instance1.num);   //[1,2,3,4]
log(instance1.id)     //1
log(instance2.num)    //[1,2,3]
log(instance2.id)     //2
//log(instance1.showNum()) //报错
//这类继承没有继承继承原型prototype



