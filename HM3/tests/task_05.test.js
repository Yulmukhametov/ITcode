const abs = require('../tasks/task_05')

describe('Среднее арифметическое', () => {
    const testCases = [
        { initValue: [1,2,3], result: 2 },
        { initValue: [ 2,5,8 ], result: 5 },
        { initValue: [ 11, 15, 12, 123, 624 ], result: 157 },
        { initValue: [ 11, 15, 12, 1242, 125125, 623124 ], result: 124921.5 },
        { initValue: [ 11, 15, 12, 123, 624, 52123, 8341234 ], result: 1199163.1 },
    ]
    testCases.forEach(testCase => {
        test(`Ожидается ${testCase.initValue} равно ${testCase.result}`, () => {
            const res = abs(testCase.initValue)
            expect(res).toBe(testCase.result)
        })
    })
})