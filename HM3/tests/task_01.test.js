const reverseString = require('../tasks/task_01');

describe('Тестирование задания 01', () => {
    const taskCases = [
        { value: 'qwe', result: 'ewq'},
        { value: 'asd', result: 'dsa'},
        { value: 'qwerty', result: 'ytrewq'}
    ]
    taskCases.forEach(task => {
        test(`Строка ${JSON.stringify(task.value)} на выходе должна быть равна ${JSON.stringify(task.result)}`, () => {
            const res = reverseString(task.value)
            expect(res).toBe(task.result)
        })
    })
})
