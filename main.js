
// function User(first, last) {
//   this.firstName = first 
//   this.lastName = last 
// }

// User.prototype.gettingFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last 
//   }
//   gettingFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }



// const Woo = new User('Woo young', 'Choi')
// const Sally = new User('Sally', 'Jane')

// console.log(Woo.gettingFullName())
// console.log(Sally.gettingFullName())

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel){
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('자전거', 2)
console.log(myBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const myCar = new Car('벤츠', 4, true)
console.log(myCar)
