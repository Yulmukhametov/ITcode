const runLengthEncoding = require('../tasks/task_07')

describe('кодировка строки.', () => {
    const testCases = [
        { initValue: "" , result: [] },
        { initValue: "abc" , result: [[1,'a'],[1,'b'],[1,'c']] },
        { initValue: "aab" , result: [[2,'a'],[1,'b']] },
        { initValue: "hello world!" , result: [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']] },
        { initValue: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb", result: [[34,'a'], [3,'b']] },
        { initValue: "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW", result: [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']] },
    ]
    testCases.forEach(testCase => {
        test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
            const res = runLengthEncoding(testCase.initValue)
            expect(res).toEqual(testCase.result)
        })
    })
})