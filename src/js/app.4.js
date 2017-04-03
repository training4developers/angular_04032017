

function outer() {

    var t = 5;

    setTimeout(() => {
        t = 10;
    }, 2000);

    return function inner() {
        console.log(t);
    };
}

var fn = outer();
fn();

setTimeout(() => {
    fn();
}, 4000);

console.dir(fn);
