function validate(){
    var email= document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirm_password= document.getElementById("retype").value
    var gender_male = document.getElementById("male").checked
    var gender_female = document.getElementById("female").checked
    var agreement = document.getElementById("register_agreement").checked
    var errorMsg = document.getElementById("errorMsg")
    
  
    if(email == ""){
        errorMsg.innerHTML = "Email must be filled"
    }
    else if(!email.endsWith(".com")){
        errorMsg.innerHTML = "Email must be end with .com"
    }
    else if(email.indexOf('@') == -1){
        errorMsg.innerHTML = "Email must be contains @"
    }
    else if(email.split('@').length>2){
        errorMsg.innerHTML = "Email must be contains only 1 @"

    }
    else if(password.length<6 || password.length>15){
        errorMsg.innerHTML = "Password must be 6-15 Characters"
    }
    else if(confirm_password ==''){
        errorMsg.innerHTML = "Confirm password must be filled"
    }
    else if(confirm_password!=password){
        errorMsg.innerHTML="Confirm password must be same with password"
    }
  
    else if(!gender_male && !gender_female){
        errorMsg.innerHTML = "Gender must be choosed"
    }
    else if(!agreement){
        errorMsg.innerHTML = "Agreement must be checked"
    }
    else{
        errorMsg.innerHTML = "";
        var gender=""
        if(gender_male){
            gender = "Male"
        }else if(gender_female){
            gender = "Female"
        }
        
    }


}
