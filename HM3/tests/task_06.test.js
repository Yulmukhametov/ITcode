const myLanguages = require('../tasks/task_06')

describe('Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.', () => {
    const testCases = [
        { initValue: {"Java": 10, "Ruby": 80, "Python": 65} , result: ["Ruby", "Python"] },
        { initValue: {"Hindi": 60, "Dutch" : 93, "Greek": 71}, result: ["Dutch", "Greek", "Hindi"] },
        { initValue: {"C++": 50, "ASM": 10, "Haskell": 20}, result: [] },
    ]
    testCases.forEach(testCase => {
        test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
            const res = myLanguages(testCase.initValue)
            expect(res).toEqual(testCase.result)
        })
    })
})