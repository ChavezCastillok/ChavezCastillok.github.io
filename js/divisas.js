function reset_equivalencias() {
  montoUSD.value = "";
  montoCOP.value = "";
  montoVES.value = "";
}

function main() {
  // const launch_calc = document.getElementById("launch-calc");
  // // var calc_basic = document.getElementById("calc");
  // const modal_calc = document.getElementById("modal-calc");

  // launch_calc.addEventListener("click", (e) => {
  //   // if (calc_basic.style.display == "" || calc_basic.style.display == "none") {
  //   //   calc_basic.style.display = "block";
  //   //   launch_calc.innerText = "Ocultar calc";
  //   // } else {
  //   //   calc_basic.style.display = "none";
  //   //   launch_calc.innerText = "Usar calc";
  //   // }
  //   e.stopPropagation();
  //   modal_calc.classList.toggle("is-active");
  // });

  var tasa_USDCOP = document.getElementById("USDCOP");
  var tasa_USDVES = document.getElementById("USDVES");
  var tasa_VESCOP = document.getElementById("VESCOP");

  var montoUSD = document.getElementById("usd");
  var montoCOP = document.getElementById("cop");
  var montoVES = document.getElementById("ves");

  localStorage.tasaUC = localStorage.tasaUC || "3400";
  localStorage.tasaUV = localStorage.tasaUV || "1775000";

  tasa_USDCOP.value = parseFloat(localStorage.tasaUC);
  tasa_USDVES.value = parseFloat(localStorage.tasaUV);
  tasa_VESCOP.value = tasa_USDCOP.value / tasa_USDVES.value;

  montoUSD.addEventListener("keyup", function () {
    let usd = parseFloat(montoUSD.value);
    montoCOP.value = usd * parseFloat(localStorage.tasaUC);
    montoVES.value = usd * parseFloat(localStorage.tasaUV);
  });
  montoUSD.addEventListener("click", () => {
    montoUSD.value = "";
  });

  montoCOP.addEventListener("keyup", function () {
    let pesos = parseFloat(montoCOP.value);
    montoUSD.value = pesos / parseFloat(localStorage.tasaUC);
    montoVES.value = montoUSD.value * parseFloat(localStorage.tasaUV);
  });
  montoCOP.addEventListener("click", () => {
    montoCOP.value = "";
  });

  montoVES.addEventListener("keyup", function () {
    let bolivares = parseFloat(montoVES.value);
    montoUSD.value = bolivares / parseFloat(localStorage.tasaUV);
    montoCOP.value = montoUSD.value * parseFloat(localStorage.tasaUC);
  });
  montoVES.addEventListener("click", () => {
    montoVES.value = "";
  });

  tasa_USDCOP.addEventListener("keyup", function () {
    localStorage.tasaUC = tasa_USDCOP.value;
    tasa_VESCOP.value =
      parseFloat(localStorage.tasaUC) / parseFloat(localStorage.tasaUV);
    reset_equivalencias();
  });
  tasa_USDVES.addEventListener("keyup", function () {
    localStorage.tasaUV = tasa_USDVES.value;
    tasa_VESCOP.value =
      parseFloat(localStorage.tasaUC) / parseFloat(localStorage.tasaUV);
    reset_equivalencias();
  });
}

window.addEventListener("load", main, false);
