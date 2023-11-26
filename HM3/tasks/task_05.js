/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    
    let n=0;
    let res;

    for (let i=0; i<array.length; i++) {
        n=n+array[i];
    }
    
    res=n/array.length;
    res=+res.toFixed(1);

    return res;
}









































module.exports = abs