
// const fruits = ['apple', 'banana', 'grapes','cherry','pineapple']
// //console.log('apple','banana','grapes')
// console.log(fruits)
// console.log(...fruits)

// const toObject = (a,b,...c) => ({a,b,c})

// console.log(toObject(...fruits))
// let a = 1
// let b = 4
// console.log(a,b, a === b)
// b = a
// console.log(a, b, a===b)
// a = 7
// console.log(a, b, a===b)
// let c = 1 
// console.log(b, c, b===c)

// let a = {k: 1}
// let b = {k: 1}
// console.log(a, b, a===b)
// a.k = 7 
// console.log(a, b, a===b)
// b = a 
// console.log(a, b, a===b)
// a.k = 2
// console.log(a, b, a===b)

// let c = b
// console.log(a, b, c, a===c)
import _ from 'lodash'
const user = { 
  name: 'Woo',
  age: 80,
  weight: 60,
  email: ['chl0933@naver.com']
}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)
user.age = 25 
console.log('user',user)
console.log('copyUser',copyUser)
user.email.push('keim98@kyonggi.co.kr')
console.log(user.email === copyUser.email)
console.log('user',user)
console.log('copyUser',copyUser)



