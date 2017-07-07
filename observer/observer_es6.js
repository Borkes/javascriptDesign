const log = console.log.bind(console);

/**
 * Set实例操作, let set = new Set() 或者传数组参数 new Set(array)
 * set.size 成员数量
 * set.add(value) 添加
 * set.delete(value) 删除
 * set.has(value) 判断是否有
 * set.clear()  清空
 */

//用Set,实现单事件订阅
class Observer {
    constructor() {
        this.objSet = new Set(); //es6 Set结构,成员唯一,没有重复值
    }
    attach(obj) {
        this.objSet.add(obj); //add() 向Set中加入成员
    }
    detach(obj) {
        this.objSet.delete(obj);
    }
    fire() {
        for(let item of this.objSet) {
            item.update && item.update();
        }
    }
}

class Config {
    constructor(name = 'config') {
        this.name = name;
    }
    update() {
        log('I am', this.name);
    }
}

let c1 = new Config('c1')
let c2 = new Config('c2')
let c3 = new Config('c3')
let c4 = new Config('c3') //对象在set中总是不相等的

let obs = new Observer();
obs.attach(c1);
obs.attach(c2);
obs.attach(c2); //set中成员是唯一的,只有一个c2
obs.attach(c3);
obs.attach(c4)

obs.fire(); //4个触发
obs.detach(c2)
obs.fire() //3个触发
