// Comenzamos..
function main() {

    const app = new Vue({
        el: '#page',
        data: {
            tasapc: 0.14,
            tasadv: 25000,
            tasadc: 3100,
            ves: 50000,
            cop: 100000,
            usd: 10
        },
        methods: {

        },
        computed: {
            ves_cop(){
                // Cambia el monto ingresado en bs a pesos colombianos
                return (this.ves * this.tasapc).toFixed(2);
            },
            ves_usd(){
                return (this.ves / this.tasadv).toFixed(2);
            },
            cop_ves(){
                // Cambia el monto ingresado en pesos colombianos a bs
                return (this.cop / this.tasapc).toFixed(2);
            },
            cop_usd(){
                return (this.cop / this.tasadc).toFixed(2);
            },
            usd_ves(){
                return (this.usd * this.tasadv).toFixed(2);
            },
            usd_cop(){
                return (this.usd * this.tasadc).toFixed(2);
            }
        },
    });

    // Area de interaccion basica con el usuario

    document.getElementById('alertajs').addEventListener('click', mostrar_alerta);
    document.getElementById('confirmjs').addEventListener('click', mostrar_confir);
    document.getElementById('promptjs').addEventListener('click', mostrar_prompt);

    // end area interactiva --------------------------

    imagen_sol() // imagen Canvas

    let fecha = new Date(); // Generación de la fecha actual y muestra al pie.
    document.getElementById('fechalpie').innerHTML = fecha.toString();

    // CRONÓMETRO ------------------------------------
    localStorage.c = (localStorage.c || '0.0');

    var t, cl = document.getElementById('crono');

    function incr() {
        localStorage.c = +localStorage.c + 0.1;
    }

    function mostrar() {
        cl.innerHTML = (+localStorage.c).toFixed(1);
    }

    function arrancar() {
        t = setInterval(function () {
            incr();
            mostrar()
        }, 100);
    }

    function parar() {
        clearInterval(t);
        t = undefined;
    }

    function cambiar() {
        if (!t) arrancar();
        else parar();
    }

    document.getElementById('cambiar').addEventListener('click', cambiar);
    document.getElementById('inicializar').addEventListener('click', function () {
        localStorage.c = '0.0';
        mostrar();
    });

    mostrar();
    // fin area de manejo del cronómetro.

    console.log('Gracias por visitar mi sitio, sigueme en Twitter como @cckev1n');
}
// End main -------------------------------------------

function mostrar_alerta() {
    alert('¡¡¡Mensaje de alerta elevado!!!');
    document.getElementById('resultprompt').innerHTML = 'Se elevo una alerta.';
}

function mostrar_confir() {
    if (confirm('¿Decisión final?')) {
        document.getElementById('resultprompt').innerHTML = 'Decisión correcta.';
    } else {
        document.getElementById('resultprompt').innerHTML = '## Indeciso ##';
    }
}

function mostrar_prompt() {
    let lugar = document.getElementById('resultprompt');
    let edad = parseInt(prompt('Dime tu edad: '));
    if (isNaN(edad)) { // isNaN devuelve true si num es un literal de numero incorrecto.
        lugar.innerHTML = 'Debes ingresar tú edad en formato númerico. [0-9]';
    } else if (edad < 1) {
        lugar.innerHTML = 'El número ingresado no es una edad valida.';
    } else if (edad > 12 && edad < 70) {
        lugar.innerHTML = 'Gracias por visitar mi sitio, puedes contactarme via twitter o Telegram como @ChavezCastillok :D';
    } else {
        lugar.innerHTML = 'Gracias por visitar mi sitio... Con que ' + edad + ' años... ;)';
    }
}

function imagen_sol() {
    let lienzo = document.getElementById('miCanvas');
    // relleno con gradiente radial o circular
    let contexto = lienzo.getContext('2d');
    contexto.rect(0, 0, lienzo.width, lienzo.height); // crea un rectangulo

    let gradiente = contexto.createRadialGradient(200, 50, 10, 238, 50, 300);
    gradiente.addColorStop(0, 'red');
    gradiente.addColorStop(0.5, 'orange');
    gradiente.addColorStop(1, 'black');
    contexto.fillStyle = gradiente;
    contexto.fill();

    // escribir sobre el lienzo
    contexto.font = 'bold 24pt Consolas'; // define la fuente, su estilo y tamaño
    contexto.fillStyle = 'red';
    contexto.fillText('El sol ardiente', 50, 380);
    contexto.strokeStyle = 'yellow';
    contexto.strokeText('El sol ardiente', 50, 380);
}

window.addEventListener('load', main, false);