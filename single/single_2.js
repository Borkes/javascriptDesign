const log = console.log.bind(console);


//在使用的时候初始化,节约资源
const Singleton = (function () {
    let instantiated
    function init() {
        return {
            publicMethod() {
                log('public method');
            },
            publicProperty: 'public property'
        }
    }
    return {
        getInstance() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    }
})(); //()立即执行写在里面也可以

let single1 = Singleton.getInstance(); //获取实例
let single2 = Singleton.getInstance();

log(single1 === single2) //true
single1.publicMethod(); //public method

