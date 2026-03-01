function signup(){
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
let cpass=document.getElementById("cpass").value;

if(pass!==cpass){
msg.innerText="Password mismatch";
return;
}

localStorage.setItem(email,pass);
msg.innerText="Signup success";
}