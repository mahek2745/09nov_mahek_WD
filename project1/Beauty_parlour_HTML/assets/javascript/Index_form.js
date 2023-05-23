function formvalidation() {

    let email = document.getElementById('email_id').value;
    let password = document.getElementById('pass').value;

    
    if(email === "")
    {
        document.getElementById("email_msg").innerHTML= "Enter your valid email!";
        document.getElementById("email_msg").style.color= "red";
    }
    else{
        document.getElementById("email_msg").innerHTML= "";
    }

    
    if(password === "")
    {
        document.getElementById("pass_msg").innerHTML= "Enter your password!";
        document.getElementById("pass_msg").style.color= "red";
    }
    else{
        document.getElementById("pass_msg").innerHTML= "";
    }

}

