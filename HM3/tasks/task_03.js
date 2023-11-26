/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {

    let n=0;

    for (let i=0; i<str.length; i++) {
        if (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" || str[i]==="y") {
            n++;
        }
    }

    return n;
}












































module.exports = getVowelsCount