/*
* Написать функцию, которая форматирует продолжительность, заданную в секундах, удобным для человека способом.

Функция должна принимать неотрицательное целое число.
*  Если оно равно нулю, оно просто возвращает «now».
*  В противном случае продолжительность выражается как комбинация years, days, hours, minutes и seconds.
*
Гораздо проще понять на примере:
* Для seconds = 62, ваша функция должна вернуть результат.
    "1 minute and 2 seconds"
* Для seconds = 3662 ваша функция должна вернуть результат.
    "1 hour, 1 minute and 2 seconds"
Для целей год состоит из 365 дней, а день — из 24 часов.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year и т.д.
*  Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом.
*  Единица времени используется во множественном числе, если целое число больше 1.
*

* Компоненты разделяются запятой и пробелом («,»).
*  За исключением последнего компонента, который разделяется символами «and», как если бы он был написан на английском языке.
Более значимые единицы времени наступят раньше, чем наименее значимые.
*  Следовательно, 1 second and 1 year неверно, но 1 year and 1 second верно.
*
Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 seconds и 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
Компонент вообще не появится, если его значение равно нулю.
*  Следовательно, 1 minute and 0 seconds недопустимы, но они должны составлять всего 1 minute.
Единицу времени необходимо использовать «насколько это возможно».
*  Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 second.
*  Формально длительность, указанная в компоненте, не должна превышать любую допустимую более значимую единицу времени.
*
* * */
function formatDuration (seconds) {
    //1min=60sec
    //1hour=3600sec
    //1day=86400sec
    //1year=31536000sec

    let res="";
    let time={};

    while (seconds!=0) {
        if (Math.floor(seconds/31536000)>0) {
            if (Math.floor(seconds/31536000)>1) {
                time.year=Math.floor(seconds/31536000)+" years";
            }
            else {
                time.year=Math.floor(seconds/31536000)+" year";
            }
            seconds=seconds-(Math.floor(seconds/31536000)*31536000);
            continue;
        }
        else if (Math.floor(seconds/86400)>0) {
            if (Math.floor(seconds/86400)>1) {
                time.day=Math.floor(seconds/86400)+" days";
            }
            else {
                time.day=Math.floor(seconds/86400)+" day";
            }
            seconds=seconds-(Math.floor(seconds/86400)*86400);
            continue;
        }
        else if (Math.floor(seconds/3600)>0) {
            if (Math.floor(seconds/3600)>1) {
                time.hour=Math.floor(seconds/3600)+" hours";
            }
            else {
                time.hour=Math.floor(seconds/3600)+" hour";
            }
            seconds=seconds-(Math.floor(seconds/3600)*3600);
            continue;
        }
        else if (Math.floor(seconds/60)>0) {
            if (Math.floor(seconds/60)>1) {
                time.min=Math.floor(seconds/60)+" minutes";
            }
            else {
                time.min=Math.floor(seconds/60)+" minute";
            }
            seconds=seconds-(Math.floor(seconds/60)*60);
            continue;
        }
        else {
            if (seconds==1) {
                time.sec=seconds+" second";
            }
            else {
                time.sec=seconds+" seconds";
            }
            seconds=0;
        }
    }

    let valArr = Object.values(time);

    for (let i=0;i<valArr.length;i++) {
        if (i==valArr.length-2) {
            res=res+valArr[i]+" and ";
        }
        else if (i==valArr.length-1) {
            res=res+valArr[i];
        }
        else {
            res=res+valArr[i]+", ";
        }
    }

    return res;
}

console.log(formatDuration(7265));

















































































































module.exports = formatDuration