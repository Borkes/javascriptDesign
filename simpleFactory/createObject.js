const log = console.log.bind(console);

//创建新对象来创建工厂模式
function createBook(name, time, type) {
    let o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function() {
        log(this.name);
    }
    return o;
}

let book1 = createBook('javascript', 2015, 'js');
let book2 = createBook('thinking in java', 2014, 'java');
book1.getName();
book2.getName();
