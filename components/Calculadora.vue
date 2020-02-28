<template>
<div>
        <article id="calculadora">
            <h1>Calc CCK</h1>
            <p>
                <label for="entrada"><input type="text" id="num" placeholder="ingrese un número"></label>
                <button id="ToM">Guardar</button>
                <label for=""><output id="nmnum"></output></label>
                <button id="FromM">Utilizar</button>
            </p>
            <small>Operaciones unitarias</small>
            <p>
                <button id="x_al_cuadrado">x<sup>2</sup></button>
                <button id="inverso_de_x"><sup>1</sup>/<sub>x</sub></button>
                <button id="raiz_cuadrada_de_x">&radic;x</button>
                <button id="parte_entera_de_x">|x|</button>
            </p>
            <p>
                <button id="2_a_la_n"><sub>2</sub><sup>n</sup></button>
                <button id="factorial_de_n">n!</button>
            </p>
                <small>Operaciones binarias</small>
            <p>
                <button id="suma">+</button>
                <button id="resta">-</button>
                <button id="multiplicacion">x</button>
                <button id="division">/</button>
                <button id="x_a_la_y">x<sup>y</sup></button>
            </p>
            <p>
                <button id="realizar_op">=</button>
            </p>
            <small>Operaciones n arias</small>
            <p>
                <button id="sumatorio_de_nn">&sum;x,y,...</button>
                <button id="producto_de_nn">&Product;x,y,...</button>
            </p>
        </article>
        </div>
</template>

<script>

</script>