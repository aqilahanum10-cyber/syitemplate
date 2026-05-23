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
            <button onclick="logout()" class="btn btn-outline-light btn-sm">
                Logout
            </button>
        `;
    } else {
        authArea.innerHTML = `
            <button onclick="goLogin()" class="btn btn-primary py-2 px-4">
                Login
            </button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
