// AP
let StemAp = document.getElementById("stemAp");
let ApStemmer = localStorage.getItem("ApStemmer") ? parseInt(localStorage.getItem("ApStemmer")) : 0;
StemAp.textContent = ApStemmer;

function stemAp(){
    ApStemmer++;
    StemAp.textContent = ApStemmer;
    localStorage.setItem("ApStemmer", ApStemmer);
    oppdaterDiagram();
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
    oppdaterDiagram();
}

// Diagram

function oppdaterDiagram () {
  var xValues = ["Arbeiderpartiet", "Høyre"];
var yValues = [ApStemmer, HrStemmer];
var barColors = [
  "#ef3340",
  "#086af1",
];

new Chart("valgResultat", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Resultat fra årets valg"
    }
  }
});
}

oppdaterDiagram();