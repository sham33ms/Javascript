// for of 
var array=["hi","hello","hi"]
for(key of array){
    console.log(key);
    
}
const object={
    name:"shameem",
    age:"22",
    place:"ngl"
}
for(key of Object.entries(object) ){
    console.log(key);
    
}
for(key of Object.values(object) ){
    console.log(key);
    
}
for(key of Object.keys(object) ){
    console.log(key);
    
}