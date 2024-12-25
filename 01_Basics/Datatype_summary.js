// for interview purpose

// Js is Dynaically Typed language mean isme hum type define nhi krte (eg const int a = 23; Js me hume int lgane ki jarurat nhi h)

// There are type of data type 1. Premitive 2. Non-Premitive. (kis tarah se data ko memory m rakha gya or access kiya jaye us basis pr us k basis pr do catagery m divide kiya gya h)

/* 1. Premitive datatype :- 7 type :  String , Number , Boolean , Null , Undefined, Symbol,BigInt

2. Non premitive(Refernce Datatype) :- Arrays , objects , Function.*/
// eg Array 
const heros = ["Shaktiman", "naagraj", "Doga"];

//Obeject
let myobj = {
    name :"Vaibhav",
    age :23,
}

//Function
const myfunction = function(){
    console.log("Hello World");
    
}

// to find the datatype
console.log(typeof(heros));


/* Return type of variables in JavaScript

1) Primitive Datatypes

Number => number

String => string

Boolean => boolean

null => object

undefined => undefined

Symbol => symbol

BigInt => bigint

2) Non-primitive Datatypes

Arrays => object

Function => function

Object => object */