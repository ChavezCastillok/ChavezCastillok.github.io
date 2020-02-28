$(function () {
    var x = $('#num'); // caja de entrada 'input'

    // Botones unitarios:
    let b_x2 = $('#x_al_cuadrado');
    let b_1x = $('#inverso_de_x');
    let b_rx = $('#raiz_cuadrada_de_x');
    let b_ex = $('#parte_entera_de_x');
    let b_2n = $('#2_a_la_n');
    let b_fn = $('#factorial_de_n');
    // botones binarios:
    let b_sumar = $('#suma');
    let b_restar = $('#resta');
    let b_multiplicar = $('#multiplicacion');
    let b_dividir = $('#division');
    let b_elevar = $('#x_a_la_y');
    let b_resulta = $('#realizar_op');
    // n arios
    let b_sn = $('#sumatorio_de_nn');
    let b_pn = $('#producto_de_nn');

    x.on('click', function () { // limpia la entrada
        x.val('');
    });

    b_x2.on('click', function () { // eleva al cuadrado
        x.val(Math.pow(x.val(), 2));
    });

    b_1x.on('click', function () { // invierte el num
        x.val(1 / x.val());
    });

    b_rx.on('click', function () { // raiz cuadrada
        x.val(Math.sqrt(x.val()));
    });

    b_ex.on('click', function () { // parte entera del num, o valor absoluto.
        if (x.val() < 0) {
            x.val(-Math.ceil(x.val()));
        } else {
            x.val(Math.floor(x.val()));
        }
    });

    b_2n.on('click', function () { // 2 elevado a la n potencia
        x.val(Math.pow(2, x.val()));
    });

    b_fn.on('click', function () { // obtiene el factorial del num
        x.val(factorial(x.val()));
    });

    // operaciones binarias...
    let op1 = x.val(),
        op = '';
    b_sumar.on('click', function () {
        op1 = x.val();
        op = '+';
    });
    b_restar.on('click', function () {
        op1 = x.val();
        op = '-';
    });
    b_multiplicar.on('click', function () {
        op1 = x.val();
        op = '*';
    });
    b_dividir.on('click', function () {
        op1 = x.val();
        op = '/';
    });
    b_elevar.on('click', function () {
        op1 = x.val();
        op = 'p';
    });
    b_resulta.on('click', function () {
        if (op === '+') {
            x.val(+op1 + +x.val());
        } else if (op === '-') {
            x.val(op1 - +x.val());
        } else if (op === '*') {
            x.val(op1 * +x.val());
        } else if (op === '/') {
            x.val(op1 / +x.val())
        } else if (op === 'p') {
            x.val(Math.pow(op1, x.val()));
        }
        // al ejecutar la operacion, actualiza el operando 1 al resultado obtenido.
        op1 = x.val();
    });

    // operaciones n arias...
    b_sn.on('click', function () {
        // obtiene la sumatoria de n numeros
        let sum = 0,
            nums = x.val().split(',');
        for (let n of nums) {
            sum += +n;
        }
        x.val(sum);
    });

    b_pn.on('click', function () {
        // obtiene el producto de n numeros
        let pro = 1,
            nums = x.val().split(',');
        for (let n of nums) {
            pro *= +n;
        }
        x.val(pro);
    });

    // add task mod 06
    
});

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else if (n > 1) {
        return (n * factorial(n - 1));
    }
}