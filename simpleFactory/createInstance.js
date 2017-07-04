const log = console.log.bind(console);

class Basketball {
    constructor(name) {
        this.name = 'basketball';
    }
    getBallName(){
        log('this ball`s name is ', this.name);
    }
    toString() {
        log('basketball');
    }
}

class Football {
    constructor() {
        this.name = 'football';
    }
    getBallName() {
        log('this ball`s name is', this.name);
    }
    toString() {
        log('football');
    }
}

//返回实例方式创建工厂模式
const SportFactory = function(name) {
    switch(name) {
        case 'NBA':
        return new Basketball();
        case 'wordCup':
        return new Football();
    }
}

let football = SportFactory('wordCup');
football.toString();
football.getBallName()

