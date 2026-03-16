function checkPassword(){

let pass = document.getElementById("password").value;

if(pass === "forever123"){

document.getElementById("loginBox").style.display = "none";
document.getElementById("mainContent").style.display = "block";

}

else{
alert("Wrong password ❤️");
}

}