function Person(fName,lName){
    this.firstname=fName
    this.lastName=lName
}

const person1=new Person('Muhammed','Munees')
const person2=new Person('Ali','Akbar')

Person.prototype.getFullName=function(){
    return this.firstname + ' ' + this.lastName
}

console.log(person1.getFullName());
console.log(person2.getFullName());