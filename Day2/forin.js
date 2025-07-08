// for in 
var arr =["hi","hello","hai"]
for(key in arr){
    console.log(key , " : ", arr[key] );
    
}
for(key in arr){
    console.log(key);  
}
for(key in arr){
    console.log(arr[key]);  
}
const obj={
    name:'shameem',
    age: 22,
    place: "nagercoil"
};
for (key in obj){
    console.log(key);
    
}
for (key in obj){
    console.log(obj[key]);
    
}
for (key in obj){
    console.log(key, ": ",obj[key]);
    
}