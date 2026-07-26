document.addEventListener("DOMContentLoaded", () => {

    const loginButton = document.querySelector("button");

    if(loginButton){

        loginButton.addEventListener("click", function(e){

            e.preventDefault();

            const pr = document.querySelector('input[type="text"]').value.trim();
            const password = document.querySelector('input[type="password"]').value.trim();

            if(pr === ""){
                alert("Sila masukkan No. PR");
                return;
            }

            if(password === ""){
                alert("Sila masukkan Kata Laluan");
                return;
            }

            const API_URL = "https://script.google.com/macros/s/AKfycbzOuvnZvar69XHxbw8fivoJX0BrivS-vAbATjt8_MUszr8OegDnQfIyjnyQadyGXD-keg/exec";

fetch(`${API_URL}?pr=${encodeURIComponent(pr)}&password=${encodeURIComponent(password)}`)
    .then(response => response.json())
    .then(data => {
if (data.success) {
    data.pr = pr;
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/EPP-PT/pages/ahli.html";
} else {
            alert("No. PR atau Kata Laluan tidak betul.");
        }

    })
    .catch(error => {
        console.error(error);
        alert("Tidak dapat berhubung dengan sistem. Sila cuba lagi.");
    });

        });

    }

});
