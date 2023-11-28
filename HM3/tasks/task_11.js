/*
Вы реализуете один раз функцию,
которая принимает другую функцию в качестве аргумента и возвращает новую версию этой функции,
которую можно вызвать только один раз.

Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать неопределенное значение).

Например:

logOnce = один раз(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> нет эффекта
*/
function once(func) {
    
    let call=false;
    let res;

    return function() {
        if (call==false) {
            res=func.apply(this, arguments);
            call=true;
        }
        else {
            return undefined;
        }
        return res;
    }

}

module.exports = once



