function calculadora() {
  // pantallas
  var pantalla1 = document.getElementById("pantalla1");
  var pantalla2 = document.getElementById("pantalla2");

  // Botones
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var raizCuadrada = document.getElementById("raizCuadrada");
  var elevacion = document.getElementById("elevacion");
  var factorizacion = document.getElementById("factorizacion");

  var resultado = document.getElementById("resultado");

  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var point = document.getElementById("point");

  // valores
  var operacion = null;
  var operador1 = null;
  var operador2 = null;

  // Events

  uno.addEventListener("click", () => {
    pantalla2.value += uno.value;
  });
  dos.addEventListener("click", () => {
    pantalla2.value += dos.value;
  });
  tres.addEventListener("click", () => {
    pantalla2.value += tres.value;
  });
  cuatro.addEventListener("click", () => {
    pantalla2.value += cuatro.value;
  });
  cinco.addEventListener("click", () => {
    pantalla2.value += cinco.value;
  });
  seis.addEventListener("click", () => {
    pantalla2.value += seis.value;
  });
  siete.addEventListener("click", () => {
    pantalla2.value += siete.value;
  });
  ocho.addEventListener("click", () => {
    pantalla2.value += ocho.value;
  });
  nueve.addEventListener("click", () => {
    pantalla2.value += nueve.value;
  });
  cero.addEventListener("click", () => {
    pantalla2.value += cero.value;
  });
  point.addEventListener("click", function () {
    if (pantalla2.value != "") {
      pantalla2.value += ".";
    } else {
      pantalla2.value = "0.";
    }
  });

  document
    .getElementById("cleanScreen")
    .addEventListener("click", clean_pantalla);

  suma.addEventListener("click", function () {
    operacion = "+";
    operador1 = obtener_operando();
    pantalla1.value = `${operador1} ${operacion}`;
  });

  resta.addEventListener("click", function () {
    operador1 = obtener_operando();
    if (operador1 == null || operador1 == "") {
      pantalla2.value = "-";
    } else {
      operacion = "-";
      pantalla1.value = `${operador1} ${operacion}`;
    }
  });

  multiplicacion.addEventListener("click", function () {
    operacion = "x";
    operador1 = obtener_operando();
    if (operador1 == "") {
      operador1 = 1;
    }
    pantalla1.value = `${operador1} ${operacion}`;
  });

  division.addEventListener("click", function () {
    operacion = "/";
    operador1 = obtener_operando();
    if (operador1 == "") {
      operador1 = 1;
    }
    pantalla1.value = `${operador1} ${operacion}`;
  });

  elevacion.addEventListener("click", function () {
    operacion = "^";
    operador1 = obtener_operando();
    if (operador1 == "") {
      operador1 = 1;
    }
    pantalla1.value = `${operador1} ${operacion}`;
  });

  // raiz
  raizCuadrada.addEventListener("click", function () {
    operador1 = obtener_operando();
    if (operador1 == "") {
      pantalla2.placeholder = "First input number";
    } else {
      result = Math.sqrt(operador1);
      pantalla1.value = "&radic;" + operador1;
      pantalla2.value = result;
    }
  });

  // factorial
  factorizacion.addEventListener("click", function () {
    operador1 = obtener_operando();
    if (operador1 == "") {
      pantalla1.value = "0!";
      pantalla2.value = 1;
    } else {
      result = factorial(operador1);
      pantalla1.value = operador1 + "!";
      pantalla2.value = result;
    }
  });

  resultado.addEventListener("click", function () {
    operador2 = pantalla2.value;
    pantalla1.value = `${operador1} ${operacion} ${operador2}`;

    operador1 = parseFloat(operador1);
    operador2 = parseFloat(operador2);

    if (operacion == "+") {
      pantalla2.value = operador1 + operador2;
    } else if (operacion == "-") {
      pantalla2.value = operador1 - operador2;
    } else if (operacion == "x") {
      pantalla2.value = operador1 * operador2;
    } else if (operacion == "/") {
      pantalla2.value = operador1 / operador2;
    } else if (operacion == "^") {
      pantalla2.value = Math.pow(operador1, operador2);
    }
  });
}

function clean_pantalla() {
  pantalla1.value = "";
  pantalla2.value = "";
  pantalla1.placeholder = "...";
  pantalla2.placeholder = "...";
}

function obtener_operando() {
  operando = pantalla2.value;
  pantalla2.value = "";
  return operando;
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n - 1);
  }
}
