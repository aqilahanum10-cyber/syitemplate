function showAlert(message) {
    let alertBox = document.getElementById("registerAlertBox");
    if (!alertBox) {
        alertBox = document.createElement("div");
        alertBox.id = "registerAlertBox";
        alertBox.style.cssText = `
            background: #e44e4e;
            color: white;
            padding: 10px;
            text-align: center;
            border: 1px solid #b32929;
            border-radius: 8px;
            width: 100%;
            margin-top: 10px;
        `;
        document.getElementById("registerForm").appendChild(alertBox);
    }
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}

document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

    // Validasi frontend
    if (username.length < 3) {
        showAlert("Nama minimal 3 karakter");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert("Format email tidak valid");
        return;
    }
    if (password.length < 8) {
        showAlert("Password minimal 8 karakter");
        return;
    }

    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    });
    const data = await res.json();
    if (data.status === "success") {
        alert("Registrasi berhasil, silakan login");
        document.getElementById("container").classList.remove("right-panel-active");
    } else {
        showAlert(data.message || "Gagal registrasi");
    }
});
