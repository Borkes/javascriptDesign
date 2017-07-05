const log = console.log.bind(console);

function Universe() {
    const instance = this;
    this.proper = 'proper1';
    this.method = function() {
        log('this is a method');
    }
    //覆写构造方法
    Universe = function() {
        return instance;
    }
}

let un1 = new Universe();
let un2 = new Universe();
log(un1 === un2) //true
un1.method()     //this is a method

