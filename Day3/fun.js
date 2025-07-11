//fn declaration
function fun(){
    return "hello";
}
console.log(fun());
//fn expression  
var fun1= function(){
    return "hii";
}
console.log(fun1());
//arrow fun
const mul=()=>{
    return "hahha"
}
console.log(mul());
//parameters and args
function subs(a,b) {
    console.log(a-b);
    
}
subs(6,5)
//return statements
function rtrn(p) {
    return p*p;
}
console.log(rtrn(2));
// fn scope
function scpe(a,b){
   var local = "hi am local"
    console.log(local)
    return a+b;
}
console.log(scpe(6,8));
// console.log(local); // we cant print it out of the fn scope.
// higher order fn 
function hf(a,b,op){
    return op (a ,b, "ndbj")
    // return op("jhguv")
}
function add(a,b,str){
    return a+b , str
    // return str
}
console.log(hf(5,3,add));
//fn call back
 function fetchData(a) { setTimeout(() =>console.log(a),2000); } 
fetchData("hv")

 // set interval
 let count =0;
 const fon= setInterval(()=>{
    console.log("count:" , count)
    count++;
    if (count >4){
        clearInterval(fon)
        console.log("mudinju");
        
    }
  },200)

 
 