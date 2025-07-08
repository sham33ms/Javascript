var score =80;
var season = "rainy";
// if
if (score>=50){
    console.log("Pass")

}
else{
    console.log("Fail")
}
// elseif
if (score>=100){
    console.log("Pass")

}
else if(score>=60){
    console.log("Just pass")
}
else{
    console.log("Fail")
}
// switch
switch(score){
    case 30:
        console.log("30");
        break;
    case 50:
        console.log("50");
        break;
    case 70:
        console.log("70");
        break;
    default:
        console.log("Error")  
}
// for
for(i=1; i<=5; i++) {
    console.log("for " + i);
    
}
// while
i=1;
while(i<=5){
    
    console.log("While " + i);
    i++;
}
// do while
i=1;
do{
     console.log("Do while " + i);
    i++;
}
while(i<=10)
// for of 