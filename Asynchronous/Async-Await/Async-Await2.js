// async function Abc(){
//     // return 12;
//     // return fetch('https://jsonplaceholder.typicode.com/posts/1')
//     return Promise.resolve(12)
// }

// const result=Abc();

// // console.log(result);
// result.then((res)=>{
//     console.log(res);
// })

// -----------------------------------------

console.log("Started");

getValue()
.then((jData)=>{
    console.log(jData);
})
.catch(()=>{

    console.log("error");

})
console.log("Ended");

async function getValue() {
  console.log("function content");

  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((data)=>{
  //     return data.json()
  // })
  // .then((data)=>{
  //     console.log(data);
  // })

  const data = await  fetch("https://jsonplaceholder.typicode.com/posts/1");
  const jsonData= await data.json()
  return jsonData

    // console.log(data);
    // console.log(jsonData);

    // -------------------------------------------------

    // TRY CATCH Method 
//     try{
//   const data = await  fetch("https://jsonplaceholder.typicode.com/pos/1");
//   const jsonData= await data.json()
//   return jsonData
//     }
//     catch(e){
//         console.log("error Handled");
//         console.log(e);
//     }

}
