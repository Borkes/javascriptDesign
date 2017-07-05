const log = console.log.bind(console);

//观察者模式和发布订阅类似
const Observer = (function(){
    let __message = {}; //私有变量

    return {
        regist(type, fn) { //订阅
            if (!__message[type]) {
                __message[type] = [fn]; //订阅的方法加入队列
            } else {
                __message[type].push(fn);
            }
        },
        fire(type, args) { //发布
            if (!__message[type]) {
                return;
            }
            let events = {
                type: type,
                args: args || {}
            }
            for(let i = 0, len = __message[type].length; i < len; i++) {
                __message[type][i].call(this, events); //依次执行某type类型订阅事件
            }
        },
        remove(type, fn) { //注销订阅事件
            if (__message[type].length > 0) {
                for (let i = __message[type].length - 1; i >=0; i--) {//从最后一个开始注销
                    __message[type][i] === fn && __message[type].splice(i ,1);
                }
            }
        }
    }
})();

Observer.regist('test', (e) => {
    log(e.type, e.args.msg);
})
Observer.fire('test', {msg: 'hello world'}) //test hello world

var fn = function(e) { //显示注册,方便注销
    log(e.type, '显示注册');
}

Observer.regist('test', fn);
Observer.fire('test'); //触发两个订阅
Observer.remove('test', fn);
Observer.fire('test'); //触发一个订阅