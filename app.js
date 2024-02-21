function login(){
    const user = "Fernando@gmail.com";
    const password = "12345";

    let userCurrent= document.getElementById("user").value;
    let passwordCurrent= document.getElementById("password").value;

    if(user == userCurrent && password == passwordCurrent)
        alert ("Bienvenido "+user+"!");
    console.log(user,password);
}