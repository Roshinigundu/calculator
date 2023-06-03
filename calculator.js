function add(){
    var a=parseInt(document.getElementById("no1").value);
    var b=parseInt(document.getElementById("no2").value);
    var c=a+b;
    console.log(c)
    document.getElementById("result").innerHTML=c;
}
function sub(){
    var a=parseInt(document.getElementById("no1").value);
    var b=parseInt(document.getElementById("no2").value);
    var c=a-b;
    console.log(c)
    document.getElementById("result").innerHTML=c;
}
function mul(){
    var a=parseInt(document.getElementById("no1").value);
    var b=parseInt(document.getElementById("no2").value);
    var c=a*b;
    console.log(c)
    document.getElementById("result").innerHTML=c;
}
function div(){
    var a=parseInt(document.getElementById("no1").value);
    var b=parseInt(document.getElementById("no2").value);
    var c=a/b;
    console.log(c)
    document.getElementById("result").innerHTML=c;
}