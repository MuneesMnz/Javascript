// let promise=new Promise((resolve,reject)=>{
//     if (10<20){
//         resolve()
//     }else{
//         reject()
//     }
// })

// promise.then(()=>{
//     console.log("Promise Success Resolve Works");
// }).catch(()=>{
//     console.log("Promise Failed Reject Works");
// })



const Student=[
    {id:1,name:"Ali",dept:"MCA"},
    {id:3,name:"MNZ",dept:"MCA"},
    {id:5,name:"Akbar",dept:"MSC"}
]

function getData(){
    let list=""

        Student.forEach((value)=>{
            list +=`<tr><td>${value.id}</td><td>${value.name}</td><td>${value.dept}</td></tr>`
        })
        document.getElementById('data').innerHTML=list

}
function AddData(data){
    Student.push(data)
    return new Promise((resolve,reject)=>{
        let a=true
        if (a){
            resolve()
        }else{
           reject()
        }
       
        
    })
       
    
}


AddData({id:4,name:"Manu",dept:"MCA"}).then(getData).catch(()=>{
    console.log("error occured");
})


let p1=new Promise((resolve,reject)=>{
    resolve("promise 1")
})

let p2=25;
let p3=Promise.resolve("Another Promise Example")


Promise.all([p1,p2,p3])
.then((res)=>{
console.log(res);
})
