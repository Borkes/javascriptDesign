const log = console.log.bind(console);
// 单例模式,一般用在系统间各种模式的通信协议上
let __instance = (function () {
    let instance;
    return (newInstance) => {
        if (newInstance) {
            instance = newInstance;
        }
        return instance;
    }
})()   //立即执行,保证只执行一次, 锁住instance

class Universe {
    constructor() {
        this.name = 'singleton';
        if(__instance()) { //单例是否已经实例化过,如果有则直接返回
            return __instance();
        }
        return __instance(this); //第一次实例化,instance保存 Universe 
    }
}

let u1 = new Universe();
let u2 = new Universe();

log(u1 === u2); //true
log(u1.name, u2.name)    //singelton


//简化写法,保证单例在__instance2中处理
let __instance2 = (function() {
    let instance;
    return (newInstance) => {
        if(!instance) {
            instance = newInstance;
        }
        return instance;
    }
})();

class Universe2 {
    constructor() {
        this.name = 'singelton';
        return __instance2(this); //返回一个实例化后的对象
    }
}


//不使用其他立即执行函数,与single_3.js类似
class Universe3 {
    constructor() {
        if (!Universe3.instance) {
            /*init*/
            this.name = 'singelton3';
            this.method = () => {
                log('universe3 method');
            }
            Universe3.instance = this;
        };
        return Universe3.instance;
    }
    hello() {
        log('hello world')
    }
}

let u3 = new Universe3();
let u4 = new Universe3();
log(u3 === u4);
u3.method();
u4.method();
u3.hello();