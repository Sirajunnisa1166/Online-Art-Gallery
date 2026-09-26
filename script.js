function togglePassword() {

    const password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


// =============================
// LOGIN FORM
// =============================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById("email").value.trim();


            const password =
                document.getElementById("password").value.trim();


            if (email === "" || password === "") {

                alert(
                    "Please enter your email and password."
                );

                return;
            }


            alert(
                "Login successful! Welcome to ArtVista Gallery."
            );


            window.location.href =
                "index.html";

        }
    );

}