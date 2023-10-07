document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Formulário de contato enviado com sucesso!");
      window.location.href = "servicos.html";
    });
  });