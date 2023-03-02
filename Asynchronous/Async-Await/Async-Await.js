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
}

async function trigger(){
    
  AddData({ id: 8, name: "Athul", dept: "MSC" })
   getData()
}

trigger()