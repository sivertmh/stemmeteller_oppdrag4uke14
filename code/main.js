// Generell funskjon for stemmeknapp (ikke i bruk, vet ikke om jeg får implementert den)
function stem(stemParti, stemmerAntall){
    stemmerAntall++;
    stemParti.textContent = stemmerAntall;
    localStorage.setItem(stemmerAntall, stemmerAntall);
    oppdaterDiagram();
}

// Ap
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

function stemHoyre(){
  HrStemmer++;
  StemHr.textContent = HrStemmer;
  localStorage.setItem("HrStemmer", HrStemmer);
  oppdaterDiagram();
}

// Sp
let StemSp = document.getElementById("stemSp");
let antallSpStemmer = localStorage.getItem("antallSpStemmer") ? parseInt(localStorage.getItem("antallSpStemmer")) : 0;
StemSp.textContent = antallSpStemmer;

function stemSp(){
  antallSpStemmer++;
  StemSp.textContent = antallSpStemmer;
  localStorage.setItem("antallSpStemmer", antallSpStemmer);
  oppdaterDiagram();
}

// Frp

let StemFrp = document.getElementById("stemFrpKnapp");
let antallFrpStemmer = localStorage.getItem("antallFrpStemmer") ? parseInt(localStorage.getItem("antallFrpStemmer")) : 0;
StemFrp.textContent = antallFrpStemmer;

function stemFrp(){
  antallFrpStemmer++;
  StemFrp.textContent = antallFrpStemmer;
  localStorage.setItem("antallFrpStemmer", antallFrpStemmer);
  oppdaterDiagram();
}

// Diagram

function oppdaterDiagram () {
  var xValues = ["Arbeiderpartiet", "Høyre", "Senterpartiet", "Fremskrittspartiet"];
var yValues = [ApStemmer, HrStemmer, antallSpStemmer, antallFrpStemmer];
var barColors = [
  "#ef3340",
  "#086af1",
  "#00843d",
  "#d40f14"
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
      display: false,
      text: "Resultater fra årets valg"
    }
  }
});
}

oppdaterDiagram();