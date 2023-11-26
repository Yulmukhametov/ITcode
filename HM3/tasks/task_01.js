function reverseString(str) {
    // 1
    return str.split('').reverse().join('')

    // 2
    // return [...str].reverse().join('')

    // 3
    // let result = ''
    //
    // for (const s of str)
    //     result = s + result
    //
    // return result

    // 4
    // const result = []
    //
    // for (const s of str)
    //     result.unshift(s)
    //
    // return result.join('')
}

console.log(reverseString('123'))









































module.exports = reverseString;