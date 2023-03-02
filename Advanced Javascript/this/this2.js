// const Arrow={
//     a:1,
//     b:2,
//     c:()=>{
//         console.log(this);
//     }
// }
// let bb=Arrow.c;
// Arrow.c()
// bb()
const Normal = {
  a: 1,
  b: 2,
  c: function (a,b) {
    console.log(this ,a,b);
  },
};

const NewObj = {
  k: 45,
  j: 56,
};

let aa = Normal.c;

// aa();

// Normal.c();

// ----------------------------------


// aa.call(Normal);
// aa.call(NewObj);

// Abc.c();
// console.log(Abc);

// -----------------------------------

// Normal.c=Normal.c.bind(Normal)


// let k=Normal.c;
// k()
// ------------------------------------

// call,bind,apply 

// aa.apply(Normal ,[1,2])
// aa.call(Normal,'Hello',2)


// -------------------------------------

// let k=Normal.c.bind(Normal);
// k(4,2)
