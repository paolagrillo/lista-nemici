let lista = document.getElementById("lista");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let cancella = document.getElementById("cancella");
let modalitaElimina = false;
let nomi = JSON.parse(localStorage.getItem("nomi")) || [];

function creaNome(nome) {
    let p = document.createElement("p");
    p.textContent = nome;

    let x = document.createElement("button");
    x.textContent = "X";
    x.classList.add("btn-x");
    x.style.display = "none";
    x.addEventListener("click", function() {
        p.remove();
        nomi = nomi.filter(function(n) { return n !== nome; });
        localStorage.setItem("nomi", JSON.stringify(nomi));
    });

    p.appendChild(x);
    lista.appendChild(p);
}

nomi.forEach(function(nome) {
    creaNome(nome);
});

btn.addEventListener("click", function() {
    let nome = input.value;
    nomi.push(nome);
    localStorage.setItem("nomi", JSON.stringify(nomi));
    creaNome(nome);
    input.value = "";
});

cancella.addEventListener("click", function() {
    modalitaElimina = !modalitaElimina;
    let bottoniX = document.querySelectorAll(".btn-x");
    bottoniX.forEach(function(x) {
        x.style.display = modalitaElimina ? "inline" : "none";
    });
});