const log = console.log.bind(console);
function SuperClass() {
    this.book = [1,2,3];
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
}
function SubClass() {
    this.subValue = false;
}
//继承父类
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
    return this.subValue;
}

let instance = new SubClass();
let instance1 = new SubClass();
log(instance.superValue)  //true
log(instance.subValue)    //false
log(instance.getSubValue()) //false
log(instance.getSuperValue()) //true
instance.book.push(4);
log(instance.book) //[1,2,3,4]
log(instance1.book) //[1,2,3,4]

//这种继承,父类如果有引用属性,所有实例共享
//也无法向父类传递参数


