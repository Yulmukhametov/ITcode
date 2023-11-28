/*Ваша задача — написать такую кодировку.
  Для данной строки верните массив массивов [[i1, s1], [i2, s2], …, [in, sn]],
так что можно восстановить исходную строку, реплицируя символ sx ix раз и объединяя. Ваша кодировка длины серии должна быть минимальной, т.е.
. для всех i значения si и si+1 должны различаться.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
function runLengthEncoding(str) {

  let n = 1;
  let arr = [];

  for (let i = 1; i<str.length; i++) {
    if (str[i-1]==str[i]) {
      n++;
    } else {
      arr.push([n, str[i-1]]);
      n = 1;
    }

    if (i==str.length-1) {
      arr.push([n, str[i]]);
    }
  }

  return arr;
}

console.log(runLengthEncoding("abc"))













































































module.exports = runLengthEncoding