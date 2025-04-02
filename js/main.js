// AP
let StemAp = document.getElementById("stemAp");
let ApStemmer = localStorage.getItem("ApStemmer") ? parseInt(localStorage.getItem("ApStemmer")) : 0;
StemAp.textContent = ApStemmer;

function stemAp(){
    ApStemmer++;
    StemAp.textContent = ApStemmer;
    localStorage.setItem("ApStemmer", ApStemmer);
}

// Høyre
let StemHr = document.getElementById("stemHoyre");
let HrStemmer = localStorage.getItem("HrStemmer") ? parseInt(localStorage.getItem("HrStemmer")) : 0;
StemHr.textContent = HrStemmer;

// Funksjon som øker antall stemmer med 1 hver gang man trykker på "Stem Høyre"-knappen
function stemHoyre(){
    HrStemmer++;
    StemHr.textContent = HrStemmer;
    localStorage.setItem("HrStemmer", HrStemmer);
}
