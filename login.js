document.addEventListener("DOMContentLoaded", function () {
    const showPasswordButton = document.getElementById("showConfirmPassword");
    const passwordInput = document.getElementById("password");
  
    showPasswordButton.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Ocultar senha";
      } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Mostrar senha";
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Login efetuado com sucesso!");
      window.location.href = "perfilhome.html";
    });
  });