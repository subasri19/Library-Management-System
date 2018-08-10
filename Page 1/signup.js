$(document).ready(function() {
    $("#signup").hide();
    $("h1").lettering();
});

function showSignup() {
    $(".signupTitle").click(function() {
        $("#login").hide();
        $("#signup").show();
    });
}

function showLogin() {
    $(".loginTitle").click(function() {
        $("#login").show();
        $("#signup").hide();
    });
}

function loginValidate() {
    var name = document.getElementById("usrname").value;
    var psw = document.getElementById("psw").value;
    if (name == "" || psw == "")
        alert("Please don't leave any column blank");
}

function signupValidate() {
    var name = document.getElementById("name").value;
    var usrname = document.getElementById("usrname1").value;
    var psw = document.getElementById("psw1").value;
    var psw1 = document.getElementById("psw2").value;
    var phno = document.getElementById("phno").value;
    var mail = document.getElementById("mail").value;

    if (name = "" || usrname == "" || psw == "" || psw1 == "" || phno == "" || mail == "") {
        alert("Please make sure if all the columns are filled");
        return;
    }

    var pswPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var phnoPattern = new RegExp("^[0-9]{10}$");
    var mailidPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!pswPattern.test(psw1) && !pswPattern.test(psw)) {
        alert("Your password must comprise of numbers, spl characters, upper and lowercase letters with length between  6 and 16");
        return;
    }
    if (psw1 != psw) {
        alert("Your passwords doesn't match");
        return;
    }
    if (!phnoPattern.test(phno)) {
        alert("Please enter a 10 digit phone number");
        return;
    }
    if (!mailidPattern.test(mail)) {
        alert("Please enter a valid mail id");
        return;
    } else {
        alert("You have been successfully registered. Please confirm your mail to proceed further.");
        return;
    }
}