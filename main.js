//생성자 함수 연습 
function User(first, last) {
  this.firstName = first
  this.lastName = last 
}

User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const Heize = new User('Heize','Sally') 
const Tom = new User('Tom','Bradely') 

console.log(Heize.getFullName())
console.log(Tom)