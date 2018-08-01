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