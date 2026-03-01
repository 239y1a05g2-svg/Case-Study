function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

if(email==="madhu@gmail.com" && pass==="1234"){
alert("Login Success");
window.location="../home/home.html";
}
else{
alert("Invalid Credentials");
}

}