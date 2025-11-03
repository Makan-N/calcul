let premierNombre = document.getElementById("premierNombre")
let deuxiemeNombre = document.getElementById("deuxiemeNombre")
let plus = document.getElementById("plus")
let moins = document.getElementById("moins")
let diviser = document.getElementById("diviser")
let multiplication = document.getElementById("multiplication")
let resultat = document.getElementById("resultat")
let calcul = document.getElementById("calculer")
let remisaZero = document.getElementById("remiseAzero")
let afficheSigne = document.getElementById("afficheSigne")



plus.addEventListener("click", function () {
    afficheSigne.value = "+";
});

moins.addEventListener("click", function () {
    afficheSigne.value = "-";
});

diviser.addEventListener("click", function () {
    afficheSigne.value = "/";
});

multiplication.addEventListener("click", function () {
    afficheSigne.value = "x";
});



calcul.addEventListener("click", function () {


    let operation = afficheSigne.value

    switch (operation) {

        case "+":
            resultat.value = Number(premierNombre.value) + Number(deuxiemeNombre.value);
            break;

        case "-":
            resultat.value = Number(premierNombre.value) - Number(deuxiemeNombre.value);
            break;

        case "/":
            resultat.value = Number(premierNombre.value) / Number(deuxiemeNombre.value);
            break;


        case "x":
            resultat.value = Number(premierNombre.value) * Number(deuxiemeNombre.value);
            break;


    }









});







remisaZero.addEventListener("click", function () {

    resultat.value = "";
    premierNombre.value = "";
    deuxiemeNombre.value = "";
    afficheSigne.value = "";

});



