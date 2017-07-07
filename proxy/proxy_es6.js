const log = console.log.bind(console);

//真实类
class RealClass {
    doSomething() {
        log('real class do something');
    }
}

//代理类
class Proxy extends RealClass {
    //继承父类,构造函数会自动添加
    /*constructor() {
        super();
    }*/
    //super表示父类构造函数
    dosomething() {
        super.doSomething();
    }
}

let proxy = new Proxy();
proxy.doSomething()


