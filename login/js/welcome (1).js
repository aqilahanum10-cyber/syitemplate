document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");
    const authArea = document.getElementById("authArea");

    if (user) {
        authArea.innerHTML = `
            <span class="text-light me-2">Halo, ${user}</span>
            <button onclick="logout()" class="btn btn-outline-light btn-sm">Logout</button>
        `;
    } 
    else {
        authArea.innerHTML = `
            <a href="login/index.html" 
                class="btn btn-primary py-2 px-4"
                style="margin-left:20px;">
                Login
            </a>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
