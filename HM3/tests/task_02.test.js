const isPalindrome = require('../tasks/task_02')

describe('Проверка , является ли строка полиндромом', () => {
    const testCases = [
        { initValue: 'aasdd', result: false },
        { initValue: 'qwq', result: true }
    ]
    testCases.forEach(testCase => {
        test(`Является ли строка ${testCase.initValue} полиндромом`, () => {
            const res = isPalindrome(testCase.initValue)
            expect(res).toBe(testCase.result)
        })
    })
})