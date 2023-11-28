const getVowelsCount = require('../tasks/task_03')

describe('Проверка функции getVowelsCount', () => {
    const testCases = [
        { initValue: 'aaaa', result: 4 },
        { initValue: 'qwq', result: 0 },
        { initValue: 'feyad', result: 3 }
    ]
    testCases.forEach(testCase => {
        test(`Кол-во гласных в строке ${testCase.initValue} должно быть равно ${testCase.result}`, () => {
            const res = getVowelsCount(testCase.initValue)
            expect(res).toBe(testCase.result)
        })
    })
})