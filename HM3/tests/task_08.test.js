const formatDuration = require('../tasks/task_08')

describe('формат времени', () => {
    const testCases = [
        { initValue: 1 , result: "1 second" },
        { initValue: 62 , result: "1 minute and 2 seconds" },
        { initValue: 120 , result:"2 minutes" },
        { initValue: 3600 , result: "1 hour" },
        { initValue: 3662, result: "1 hour, 1 minute and 2 seconds" },
        { initValue: 15731080, result: "182 days, 1 hour, 44 minutes and 40 seconds" },
        { initValue: 253374061, result: "8 years, 12 days, 13 hours, 41 minutes and 1 second" },
        { initValue: 101956166, result: "3 years, 85 days, 1 hour, 9 minutes and 26 seconds" },
    ]
    testCases.forEach(testCase => {
        test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
            const res = formatDuration(testCase.initValue)
            expect(res).toEqual(testCase.result)
        })
    })
})