// function sayMyName(name){
//     console.log(`My Name is ${name}`);
// }

// sayMyName('Mnz')
// sayMyName('Munees')
 

const person ={
    name:'Munees',
    sayMyName:function (){
        console.log(`my name is ${this.name}`);
    }
}

// person.sayMyName()

globalThis.name="Muhammed munees pp"

function SayMyName (){
    console.log(`my name is ${this.name}`);
}

// SayMyName.call(person)

function Per(name){
    this.name=name
}

const p1=new Per('Mnz')
const p2=new Per('Munees')

// console.log(p1.name,p2.name);

SayMyName()