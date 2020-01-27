function calc() {
    // Entrada del numero: variable global
    x = document.getElementById('num');
    // btns para guardar el numero y para usarlo
    let tom = document.getElementById('ToM'); // boton to memory
    let from = document.getElementById('FromM'); // boton from memory
    from.className = 'ocultar_btn'; // oculta el boton utilizar hasta que se guarde un num
    // Botones unitarios:
    let b_x2 = document.getElementById('x_al_cuadrado');
    let b_1x = document.getElementById('inverso_de_x');
    let b_rx = document.getElementById('raiz_cuadrada_de_x');
    let b_ex = document.getElementById('parte_entera_de_x');
    let b_2n = document.getElementById('2_a_la_n');
    let b_fn = document.getElementById('factorial_de_n');
    // botones binarios:
    let b_sumar = document.getElementById('suma');
    let b_restar = document.getElementById('resta');
    let b_multiplicar = document.getElementById('multiplicacion');
    let b_dividir = document.getElementById('division');
    let b_elevar = document.getElementById('x_a_la_y');
    let b_resulta = document.getElementById('realizar_op');
    // botones n-arios
    let b_sn = document.getElementById('sumatorio_de_nn');
    let b_pn = document.getElementById('producto_de_nn');
    // Acciones ante eventos
    x.addEventListener('click', function(){
        x.value = '';
    });
    x.addEventListener('input', validar); // por desarrollar
    tom.addEventListener('click', function () {
        // Boton guardar
        //document.getElementById('nmnum').innerHTML = x.value;
        tom.innerHTML = x.value || 'Guardar';
        if (tom.innerHTML == 'Guardar')
            from.className = 'ocultar_btn';
        else
            from.className = 'mostrar_btn';
    });
    from.addEventListener('click', function () {
        // Boton utilizar
        // x.value = document.getElementById('nmnum').value;
        x.value = tom.innerHTML;
        tom.innerHTML = 'Guardar';
        from.className = 'ocultar_btn';
    });
    // operaciones unitarias.
    b_x2.addEventListener('click', cuadrado_de_x);
    b_1x.addEventListener('click', inverso_de_x);
    b_rx.addEventListener('click', raiz_cuadrada_de_x);
    b_ex.addEventListener('click', parte_entera_de_x);
    b_2n.addEventListener('click', function () {
        x.value = Math.pow(2, x.value);
    });
    b_fn.addEventListener('click', function () {
        x.value = factorial(x.value);
    });
    // operaciones binarias
    b_sumar.addEventListener('click', sumar);
    b_restar.addEventListener('click', restar);
    b_multiplicar.addEventListener('click', multiplicar);
    b_dividir.addEventListener('click', dividir);
    b_elevar.addEventListener('click', elevar);
    b_resulta.addEventListener('click', realizar_ob); // produce la operación y muestra el resultado
    // operaciones n-arias
    b_sn.addEventListener('click', function () {
        // sumatorio de n numeros
        let sum = 0,
            nums = x.value.split(',');
        for (let n of nums) {
            sum += +n;
        }
        x.value = sum;
    });
    b_pn.addEventListener('click', function () {
        // producto de n numeros
        let pro = 1,
            nums = x.value.split(',');
        for (let n of nums) {
            pro *= +n;
        }
        x.value = pro;
    });
}

// Funciones...

function validar() {
    // que de entrada sean numeros... por ejemplo:
    // si no es numeros lo que ingresa el usuario se pone rojo.
    // sino se pone verde
}
// Operaciones unitarias
function cuadrado_de_x() {
    x.value *= x.value;
}

function inverso_de_x() {
    x.value = 1 / x.value;
}

function raiz_cuadrada_de_x() {
    x.value = Math.sqrt(x.value);
}

function parte_entera_de_x() {
    if (x.value < 0) {
        x.value = -Math.ceil(x.value);
    } else if (x.value >= 0) {
        x.value = Math.floor(x.value);
    }
}

// operaciones binarias
function sumar() {
    op1 = x.value;
    op = '+';
}

function restar() {
    op1 = x.value;
    op = '-';
}

function multiplicar() {
    op1 = x.value;
    op = '*';
}

function dividir() {
    op1 = x.value;
    op = '/';
}

function elevar() {
    op1 = x.value;
    op = 'p';
}

function realizar_ob() {
    if (op === '+') {
        x.value = +op1 + +x.value;
    } else if (op === '-') {
        x.value = +op1 - +x.value;
    } else if (op === '*') {
        x.value = +op1 * +x.value;
    } else if (op === '/') {
        x.value = +op1 / +x.value;
    } else if (op === 'p') {
        x.value = Math.pow(op1, x.value);
    }
}

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else if (n > 1) {
        return (n * factorial(n - 1));
    }
}

window.addEventListener('load', calc, false);