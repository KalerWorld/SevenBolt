function ChangeMode(Mode){
    if(Mode=="Reg"){
        document.getElementById("Reg").classList.remove("hidden");
        document.getElementById("Auth").classList.add("hidden");
        document.getElementById("AuthMenu").classList.add("DeActive")
        document.getElementById("RegMenu").classList.remove("DeActive");
    }
    if(Mode=="Auth"){
        document.getElementById("Reg").classList.add("hidden");
        document.getElementById("Auth").classList.remove("hidden");
        document.getElementById("RegMenu").classList.add("DeActive");
        document.getElementById("AuthMenu").classList.remove("DeActive");
    }
}

function Registration(){
    UserName=document.getElementById("Name").value;
    Email=document.getElementById("Email").value;
    pass=document.getElementById("Pass").value;
    pass1=document.getElementById("Pass1").value;
    if(UserName&&Email&&pass&&pass1!=""){
        if(pass==pass1){
            alert("Вы успешно зарегестрировались")
        }
    }
    else{
        alert("Заполните поля")
        document.getElementById("Name").classList.add("Not");
        document.getElementById("Email").classList.add("Not");
        document.getElementById("Pass").classList.add("Not");
        document.getElementById("Pass1").classList.add("Not");
    }
}

function Auth() {
    Email=document.getElementById("Email").value;
    pass=document.getElementById("Pass").value;
    if(Email=="Bob@1"&&pass=="1"){
        alert("Вы вошли")
    }
    else{alert("Проверьте правильность заполнения полей");}
}