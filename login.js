

function validate(){

    let password=document.getElementById("psw").value;
    let confirmpassword=document.getElementById("psw1").value;

  
    if(password==confirmpassword){
        console.log("sucessfull")
        document.getElementById("join1").innerHTML="Password is equal";
    }else{
        console.log("Incorrect pass")
        document.getElementById("join2").innerHTML="Password is not equal"
    }
    }