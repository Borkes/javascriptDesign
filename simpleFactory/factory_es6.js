const log = console.log.bind(console);

//工厂模式处理大量具有相同属性的小对象
class Animal {
    constructor() {
        if (new.target === Animal) { 
        //target 返回new命令作用于的那个构造函数,子类继承父类返回子类,没有用new,返回undefined
            throw new Error('Animal is abstract class')
        }
    }
    eat() {
        throw new Error('eat must be implemented');
    }
    say() {
        throw new Error('call must be implemented');
    }
}

const sym = Symbol('sym');
class Dog extends Animal {
    constructor() {
        super();
    }
    //私有方法
    [sym]() {
        log('this is private method');
    }
    say() {
        this[sym]()
        log('wang ~')
    }
    eat() {
        log('dog eat meat');
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }
    say() {
        log('miao ~');
    }
    eat() {
        log('cat eat fish');
    }
}

const AnimalType = {
    Cat: 'Cat',
    Dog: 'Dog'
}
//工厂方法,根据不同类型需求,创建不同实例
class AnimalFactory {
    constructor(){}

    static CreateAnimal(animalType = AnimalType.Cat) {
        //默认赋值cat
        switch(animalType) {
            case AnimalType.Cat:
                return new Cat();
            case AnimalType.Dog:
                return new Dog();
        }
    }
}

let cat = AnimalFactory.CreateAnimal(AnimalType.Cat);
cat.say();
cat.eat();

let dog = AnimalFactory.CreateAnimal(AnimalType.Dog);
dog.eat();
dog.say();
