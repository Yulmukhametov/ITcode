const once = require('../tasks/task_11')

const sum = (a, b) => {
  return a + b
}

const getMultiply = (args) => {
  return args.reduce((acc, item) => acc * item , 1)
}

const getString = (a, b, c) => {
  return `${a}${b}${c}`
}

describe('Одноразовая функция', () => {
  const testCases = [
    { initValue: [1, 2] , result: 3 },
    { initValue: [5, 15] , result: 20 },
  ]
  
  testCases.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const logOnce = once(sum)
      let res = logOnce(...testCase.initValue)
      expect(res).toEqual(testCase.result)
      res = logOnce(...testCase.initValue)
      expect(res).toEqual(undefined)
    })
  })
  
  const testCases1 = [
    { initValue: [1, 2, 5] , result: '125' },
    { initValue: [5, 15, 34] , result: '51534' },
  ]
  
  testCases1.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const logOnce = once(getString)
      let res = logOnce(...testCase.initValue)
      expect(res).toEqual(testCase.result)
      res = logOnce(...testCase.initValue)
      expect(res).toEqual(undefined)
    })
  })
  
  const testCases2 = [
    { initValue: [1, 2, 3] , result: 6 },
    { initValue: [5, 15, 34] , result: 2550 },
    { initValue: [1, 2, 1, 4, 5, 7, 1, 2, 4, 5, 6] , result: 67200 },
  ]
  
  testCases2.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const logOnce = once(getMultiply)
      let res = logOnce(testCase.initValue)
      expect(res).toEqual(testCase.result)
      res = logOnce(testCase.initValue)
      expect(res).toEqual(undefined)
    })
  })
})