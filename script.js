let Username= "";
let Password= "";

function login() {
    thisUser = document.getElementById(userName);
    thisPass = document.getElementById(userPass);
    if(thisUser !== "Danchelle" && thisPass !== "Justin") {
       alert("try again!")
    }
    else{
    alert("Logged in");
}
}