
var form = document.querySelector('form');

var fname = document.getElementById('fname');
var fnameValue = fname.value;
var fnameMessage = document.getElementById('fname-message');
var fnameError = document.getElementById('fname-error');

var lname = document.getElementById('lname');
var lnameValue = lname.value;
var lnameMessage = document.getElementById('lname-message');
var lnameError = document.getElementById('lname-error');

var email = document.getElementById('email');
var emailValue = email.value;
var emailMessage = document.getElementById('email-message');
var emailError = document.getElementById('email-error');

var password = document.getElementById('password');
var passwordValue = password.value;
var passwordMessage = document.getElementById('password-message');
var passwordError = document.getElementById('password-error');



function emptyCheck(e){
    e.preventDefault();

    var container = document.getElementById('container');
    var counter = 0;
    
    if (fname.value.trim() == ""){
        fnameMessage.innerHTML= "First Name cannot be empty";
        fnameError.style.visibility = "visible";
        fname.style.border = "1px solid hsl(0, 100%, 74%)"; 
    }

    if (lname.value.trim() == ""){
        lnameMessage.innerHTML= "Last Name cannot be empty";
        lnameError.style.visibility = "visible";
        lname.style.border = "1px solid hsl(0, 100%, 74%)"; 
    }

    if (email.value.trim() == ""){
        emailMessage.innerHTML= "Email Address cannot be empty";
        emailError.style.visibility = "visible";
        email.style.border = "1px solid hsl(0, 100%, 74%)";  
    }

    if (password.value == ""){
        passwordMessage.innerHTML= "Password cannot be empty";
        passwordError.style.visibility = "visible";
        password.style.border = "1px solid hsl(0, 100%, 74%)"; 
    }  

}

function emailCheck(e){
    e.preventDefault();
    emailMessage.innerHTML= "Looks like this is not an email";
    emailError.style.visibility = "visible";
    email.style.border = "1px solid hsl(0, 100%, 74%)";
    email.style.color = "hsl(0, 100%, 74%)"
    email.value = "email@example/com";    
}


form.addEventListener('submit', emptyCheck);

email.addEventListener('invalid', emailCheck);