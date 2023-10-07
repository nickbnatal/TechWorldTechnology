const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });
  const progressActive = document.querySelectorAll(".progress-step-active");
  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

const showConfirmPasswordButton = document.getElementById('showConfirmPassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
showConfirmPasswordButton.addEventListener('click', () => {
  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text';
    passwordInput.type = 'text';
    showConfirmPasswordButton.textContent = 'Ocultar senha';
  } else {
    confirmPasswordInput.type = 'password';
    passwordInput.type = 'password';
    showConfirmPasswordButton.textContent = 'Mostrar senha';
  }
});

var form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('As senhas não são iguais. Por favor, digite novamente!');
    
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
  } else {
    alert('Cadastro efetuado com sucesso!');
    window.location.href = 'perfilhome.html';
  }
});