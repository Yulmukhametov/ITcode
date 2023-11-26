/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {

    let a;

    if (str===str.split('').reverse().join('')) {
        a = true;
    }
    else {
        a = false;
    }

    return a;
}

















































module.exports = isPalindrome