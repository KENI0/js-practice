// const a = 'hello~ fruits and animal'
// const b = 'chl0933@naver.com'
// const c = '    hi~    '
// console.log(a.slice(7, 13))
// console.log(a.replace('fruits', ''))
// console.log(b.match(/.+(?=@)/))
// console.log(c.trim())

// const pi = 3.14159269359879
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// console.log(Math.abs(-12))
// console.log(Math.min(10, 200))
// console.log(Math.max(20, 5000))
// console.log(Math.ceil(5.15413123))
// console.log(Math.floor(5.15413123))
// console.log(Math.round(5.15413123))
// console.log(Math.round(Math.random()*10))


// console.log(numbers[0])
// console.log(fruits[1])
// console.log(fruits.length)
// console.log(numbers.find(el => el < 4))
// console.log(numbers.concat(fruits))
// console.log(numbers)

// const a = fruits.forEach(function(fruit, i) { 
  //   return `${fruit}-${i}`
  // })
  // console.log(a) // 반환이 안되는 모습! 
  
  // const b =fruits.map((fruit, i) => 
  //   ({
    //     id: i,
    //     name: fruit
    //   })
    // )
    // console.log(b)


    // const a = numbers.map(number => number < 3)
    // console.log(a)

    // const b = numbers.filter(number => number < 3)
    // console.log(b)

    // const a = fruits.find(fruit => {
    //   return /^b/.test(fruit)
    // })
    // console.log(a)

    // const b = fruits.findIndex(fruit => /^g/.test(fruit))
    // console.log(b)

    // numbers.push(5)
    // console.log(numbers)
    // fruits.unshift('hi')
    // console.log(fruits)
    const numbers = [1, 2, 3, 4, 5, 6]
    const fruits = ['apple', 'banana', 'grapes']

    numbers.splice(1, 1, 'f')
    console.log(numbers)