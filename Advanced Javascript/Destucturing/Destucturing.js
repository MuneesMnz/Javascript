// const obj1={
//     name:"Ali",
//     dept:"MCA",
//     job:"Front End",
//     status:"good way"
// }

// // const number=[54,68,78,24]

// function myFun(){

    // object 
    // const { name,dept}=obj1;

    // const {name , ...others}=obj1

    // console.log(name,others);
// ----------------------------------------------------

    // Array 
    // const [a,b,c,d]=number

    // const [a, , ,d]=number  //for first and forth number

    // const [a,...balance]=number

    // console.log(a,balance);
// -------------------------------------------------------

    // Value Undifind Case 

    // const {name,dept,job,status}=obj1   // O/p  Ali MCA Front End undefined  (if we didn't give status value)
    // const {name,dept,job,status="good"}=obj1  // O/P Ali MCA Front End good  (if we didn't give status value)

    // const {name,dept,job,status="bad"}=obj1  //  O/P Ali MCA Front End good way (we give value to status in above obj1)

    // console.log(name,dept,job,status);

    // Same As Array 

    // -----------------------------------------------------  
// }

// myFun()


// const obj1={
//     name:"Ali",
//     dept:"MCA",
//     job:"Front End",
//     status:"good way"
// }

const number=[54,68,78,24]

// Function Argument Destructure && Function Return
// -----------------------------

// function myFun([a,b,c,d]){
//     console.log(a,b,d,c);
// }

// myFun(number)

// function myFun({name,dept,job,status}){
//     console.log(name,dept,job,status);
// }

// myFun(obj1)
 
// function Getvalue(){
//     return number
// }

// function myFun(){
//     let [a,b,c]=Getvalue();
//     console.log(a,b,c);
// }

// myFun()

let obj1={name:"Ali",dept:"MCA"}
let obj2={name:"AThul",dept:"MSC"}


function abc(){
    const {name,dept}=obj1
    const {name:name1,dept:dept2}=obj2
    console.log(name,dept,name1,dept2);
}
abc()