function signup(){

var name = document.getElementById("sname").value;
var email = document.getElementById("semail").value;
var pass = document.getElementById("spass").value;

if(name=="" || email=="" || pass==""){
alert("Fill all fields");
}
else{
alert("Signup Successful");
}

}