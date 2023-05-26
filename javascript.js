function myFunction(){
    console.log("Nooooo");
    // document.write("Fu");
    document.getElementById("demo").innerHTML="Xim abu";
    alert("Geda vayo jindagii");
}
function task(){
    let a,b,c;
    a=5;
    b=6;
    c=a*b;
    document.write(c);
}
function one(){
let day =  new Date().getDay();
switch(day){
    case 0:
        document.write("Sunday");
    break;
    case 1:
        document.write("Monday");
    break;
    case 2:
    document.write("Tuesday");
break;
case 3:
    document.write("Wednesday");
break;
case 4:
    document.write("");
break;
case 5:
    document.write("Friday");
break;
case 6:
    document.write("Saturday");
break;
}
}