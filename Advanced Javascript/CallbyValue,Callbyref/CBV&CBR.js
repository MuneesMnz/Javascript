function one() {
  var a = {
    value:100
  };
  two(a);
  console.log('one',a.value);
}

function two(a) {
  a.value = a.value + 1;
  console.log('two',a.value);
} 

one()

function tr(){
    let a=true
    fl(a);
    console.log("true" , a);
}

function fl (val){
    val=false;

    console.log("false",val);
}

tr()


//  in Array and Object there are passing a refference in to the stack
// from the HEAP memory so That The Two Function Values Are Changing 
// First It store in HEAP and passing a Refference to the Stack Memmory


// Intigers And String And Boolean Are Just Passing Value In To the
//  Stack directly


// Small Size Values passing to Stack like intiger,string ,boolean etcc...


//  big size values passing to HEAP and send a refference to Stack
// like array and Object 


// Stack is Using For Keeping Local Variables (Small Data Structure) its life only 
// closing The function Bracket


// HEAP is Using For Keep Array or Object Storing (For Big Data Structure) it can 
// Access After A long Time

