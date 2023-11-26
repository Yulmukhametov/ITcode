const flip = require('../tasks/task_10')

function print(a,b) {
  return a + " -> " + b;
}

const getSum = (args) => {
  return args.reduce((acc, num) => acc + num , 0)
}

describe('коррирование', () => {
  const testCases = [
    { initValue: [1, 2] , result: '2 -> 1' },
    { initValue: [105, 225] , result: '225 -> 105' },
  ]
  testCases.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = flip(print)(...testCase.initValue)
      expect(res).toEqual(testCase.result)
    })
  })
  
  const testCases1 = [
    { initValue: [1, 2] , result: 3 },
    { initValue: [105, 225] , result: 330 },
    { initValue: [155, 400, 500], result: 1055 },
    { initValue: [0], result: 0 },
    { initValue: [], result: 0 },
  ]
  
  testCases1.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = flip(getSum)(testCase.initValue)
      expect(res).toEqual(testCase.result)
    })
  })
})