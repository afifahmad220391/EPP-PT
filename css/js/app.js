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

            alert("Log masuk berjaya.\n\n(Sementara dalam mod pembangunan)");

            // Akan disambungkan ke Google Apps Script pada fasa seterusnya.

        });

    }

});
