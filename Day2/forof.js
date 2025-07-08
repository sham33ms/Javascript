// for of 
var array=["hi","hello","hi"]
for(key of array){
    console.log(key);
    
}
const objct={
    name:"shameem",
    age:"22",
    place:"ngl"
}
for(key of Object.entries(objct) ){
    console.log(key);
    
}
for(key of Object.values(objct) ){
    console.log(key);
    
}
for(key of Object.keys(objct) ){
    console.log(key);
    
}