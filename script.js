function convert()
{
var a;
var b;
a=Number(document.getElementById("val").value);
b=document.getElementById("unit").value.toUpperCase();
if(b=="C"){
    let F=(9/5*a)+32;
    document.getElementById("res").innerHTML="RESULT:"+F +"F";
}
else if(b=="F"){
     let c=(a-32)*5/9;
    document.getElementById("res").innerHTML="RESULT:"+c+"C";
}
else {
    document.getElementById("res").innerHTML = "Please enter unit as C or F";
}
}