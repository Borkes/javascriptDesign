
/**
 * 观察者模式中提到Set
 * Map结构的键值,不限于字符串,任何类型都可以做键
 * map.set(key, value)
 * m.get(key)  value
 * m.delete(key)
 * m.has(key) 
 * map.size
 */


class Event {
    constructor() {
        this.subscribers = new Map();
    }
    on(fn, type) {
        let subs = this.subscribers;
        if (!subs.get(type)) {
            return subs.set(type, [fn]);
        }
        subs.set(type, subs.get(type).push(fn));
    }
    emit(content, type) {
        for (let fn of this.subscribers.get(type)) {
            fn(content);
        }
    }
}

let event = new Event();
event.on((content) => console.log('publsh content: ', content), 'myEvent');
event.emit('hello', 'myEvent');

