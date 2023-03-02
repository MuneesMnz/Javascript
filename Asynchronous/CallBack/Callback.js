// function a(callback){
//     console.log('inside function a')
//     callback()
// }
// function b(){
//     console.log('Inside Function B');
// }

// a(b)

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

function AddData(data,callback){
    
        Student.push(data)
        callback()
    
}


AddData({id:4,name:"Manu",dept:"MCA"},getData)

