const log = console.log.bind(console);

//已经初始化好了的单例
let singleton = function() {
    /*私有变量*/
    let privateV = 'something private';
    function showPrivate() {
        log(privateV)
    }

    /*公有变量*/
    return {
        publicMethod() {
            showPrivate();
        },
        publicV: 'this is public variable'
    }
}

let single1 = singleton();

log(single1 == single2)
single1.publicMethod(); //something private
log(single1.publicV)    //this is public variable
log(single1.privateV)   //undefined





