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

    if (!authArea) return;

    if (user) {
        authArea.innerHTML = `
            <span style="color:white; margin-right:10px;">Halo, ${user}</span>
            <button onclick="logout()" class="nav-cta">Logout</button>
        `;
    } else {
        authArea.innerHTML = `
            <button onclick="goLogin()" class="nav-cta">Belum Login</button>
            <button onclick="goLogin()" class="nav-cta">Login</button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
