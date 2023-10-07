if (localStorage.getItem("visitas")) {
    let visitas = parseInt(localStorage.getItem("visitas"));
    visitas++;
    localStorage.setItem("visitas", visitas);
} else {
    localStorage.setItem("visitas", 1);
}

document.getElementById("visitas").textContent = localStorage.getItem("visitas");

const zerarContadorButton = document.getElementById("zerarContador");

zerarContadorButton.addEventListener('click', () => {
    localStorage.setItem("visitas", 0);
    document.getElementById("visitas").textContent = "0";
});