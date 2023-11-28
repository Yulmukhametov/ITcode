const multiFilter = require('../tasks/task_09')

const isOdd = function(el) {
  return el % 2 === 1;
};

const isEven = function(el) {
  return el % 2 === 0;
};

function isGTten(el){
  return el > 10;
}

describe('мультифитрация.', () => {
  const testCases1 = [
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], result: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] },
  ]
  
  testCases1.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = testCase.initValue.filter(multiFilter())
      expect(res).toEqual(testCase.result)
    })
  })
  
  const testCases2 = [
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1, 3, 5, 7, 9, 11, 13, 15]
    },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1, 3, 5, 7, 9, 11, 13, 15] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1, 3, 5, 7, 9, 11, 13, 15] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [1, 3, 5, 7, 9, 11, 13, 15] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], result: [1, 3, 5, 7, 9, 11, 13, 15] },
  ]
  
  testCases2.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = testCase.initValue.filter(multiFilter(isOdd))
      expect(res).toEqual(testCase.result)
    })
  })
  
  const testCases3 = [
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [ 2,  4,  6,  8, 10, 12, 14, 16 ] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [ 2,  4,  6,  8, 10, 12, 14, 16 ] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [ 2,  4,  6,  8, 10, 12, 14, 16 ] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [ 2,  4,  6,  8, 10, 12, 14, 16 ] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], result: [ 2,  4,  6,  8, 10, 12, 14, 16 ] },
  ]
  
  testCases3.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = testCase.initValue.filter(multiFilter(isEven))
      expect(res).toEqual(testCase.result)
    })
  })
  
  const testCases4 = [
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [] },
    { initValue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], result: [] },
  ]
  
  testCases4.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = testCase.initValue.filter(multiFilter(isOdd, isEven))
      expect(res).toEqual(testCase.result)
    })
  })
  
  const testCases5 = [
    { initValue: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , result: [ 12, 14, 16] },
    { initValue: [1, 2,3,4,5,6,7,8,9,10] , result: [] },
    { initValue: [5, 55, 74] , result: [74] },
  ]
  
  testCases5.forEach(testCase => {
    test(`Ожидается ${JSON.stringify(testCase.initValue)} равно ${JSON.stringify(testCase.result)}`, () => {
      const res = testCase.initValue.filter(multiFilter(isGTten, isEven))
      expect(res).toEqual(testCase.result)
    })
  })
})
