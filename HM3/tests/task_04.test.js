const fibonaccii = require('../tasks/task_04')

describe('Числа фибоначи', () => {
    const testCases = [
        { initValue: 1, result: 1 },
        { initValue: 0, result: 0 },
        { initValue: 2, result: 1 },
        { initValue: 3, result: 2 },
        { initValue: 12, result: 144 },
        { initValue: 22, result: 17711 },
        { initValue: 20, result: 6765 },
    ]
    testCases.forEach(testCase => {
        test(`Ожидается ${testCase.initValue} равно ${testCase.result}`, () => {
            const res = fibonaccii(testCase.initValue)
            expect(res).toBe(testCase.result)
        })
    })
})