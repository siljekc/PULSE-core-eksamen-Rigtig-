console.log("virker det?")

//UR-GALLERI TIL STARTSIDE//
const urBilleder = document.querySelector(".ur-billeder");
const venstrePil = document.querySelector(".venstre-pil")
const hoejrePil = document.querySelector(".hoejre-pil")

// Holder styr på hvilket billede der vises//
let nuvaerendeUr = 0;

// Funktion til at skifte billede//
function skiftUr() {
    urBilleder.style.transform = `translateX(-${nuvaerendeUr * 100}%)`;
}

// gør så der skiftes til næste ur i rækken når der klikkes//
hoejrePil.addEventListener("click", function() {
    nuvaerendeUr++;

    if (nuvaerendeUr > 2) {
        nuvaerendeUr = 0;
    }

    skiftUr();
});

// Forrige ur//
venstrePil.addEventListener("click", function() {
    nuvaerendeUr--;

    if (nuvaerendeUr < 0) {
        nuvaerendeUr = 2;
    }

    skiftUr();
});
