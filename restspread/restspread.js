//rest :-destrcuturing & function parameters

let arr=[12,34,3453,24,45334,2];
let[ , , ...values]=arr;
let obj={
    x:10,y:20,z:30,p:40,o:50
}
let{ x, y, ...others}=obj;
console.log(others);
console.log(values);
function total(...price){
    console.log(price);
    console.log(price.reduce((acc,val)=>acc+val));
  
}
total(67,34,65,3356,4432)

//spread : cobining an copying (from left side)
let arr1=[10,20];
let arr2=[30,40];
let arr3=[50,60];
let copy=[...arr1,...arr2];
let combine=[...arr3,...arr2];
console.log(copy);
console.log(combine);

