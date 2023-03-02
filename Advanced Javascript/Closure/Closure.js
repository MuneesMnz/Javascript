// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter);
//     }
//    return inner
// }
//  let fn= outer()
// fn()
// fn()
// -----------------------------------------------

// function add(a, b) {
//   function addData() {
//     const c = a + b;
//     return c;
//   }
//   return addData;
// }

// function main() {
//   const res = add(4, 5);
//   const val=res();
//   console.log(val);
// }

// main();

// --------------------------------------------------


var objs=[
    {name:"One",msg:"hello i'm one"},
    {name:"Two",msg:"hello i'm two"},
    {name:"Three",msg:"hello i'm Three"}

]

function main(){
    objs.forEach((value)=>{
        const bt=document.createElement("button");
        bt.innerHTML=value.name;
        // bt.onclick=()=>myCallBack(value);
        bt.onclick=getCallback(value.msg)
        document.body.appendChild(bt)
        
    })
}

// function myCallBack(val){
//     alert (val.msg)
// }

function getCallback(val){
    return function(){
        alert(val)
    }
}

main()