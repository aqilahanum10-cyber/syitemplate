document.addEventListener("DOMContentLoaded", function () {

    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    console.log("signUp:", signUpButton);
    console.log("signIn:", signInButton);

    signUpButton.addEventListener("click", function (e) {
        e.preventDefault();
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", function (e) {
        e.preventDefault();
        container.classList.remove("right-panel-active");
    });

});
