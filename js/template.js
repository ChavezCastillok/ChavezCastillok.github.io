Vue.component('cabecera', {
    template: `
    <div>
    <header id="cabecera">
            <h1 id="titulopp"><a name="inicio" href="index.html"><em>{{titulo}}</em></a></h1>
            <opciones></opciones>
    </header>
    </div>
    `,
    data() {
        return {
            titulo: 'CCKevin'
        }
    }
});

Vue.component('opciones', {
    template: //html
        `
    <div>
        <nav id="menu">
            <ul>
                <li v-for="opcion of menu"><a :href="opcion.url">{{opcion.nombre}}</a></li>
            </ul>
        </nav>
    </div>
    `,
    data() {
        return {
            menu: [{
                    nombre: 'Inicio',
                    url: 'index.html'
                },
                {
                    nombre: 'Calculadora',
                    url: 'calculadora.html'
                },
                {
                    nombre: 'Frases',
                    url: 'frases.html'
                },
                {
                    nombre: 'Cronómetro',
                    url: 'index.html#crono'
                },
                {
                    nombre: 'Contactar',
                    url: '#contacto'
                }
            ]
        }
    }
});

Vue.component('pie', {
    template: //html
        `
    <div>
    <footer id="pie">
            <section class="pies">
                <p><small><a name="contacto"></a>Información de contacto:</small></p>
                <p><small>Email <a href="mailto:socialcck@outlook.com"
                            class="enlace">socialcck@outlook.com</a></small><br>
                    <small>Twitter && Telegram <a class="enlace" href="https://twitter.com/chavezcastillok">
                            @ChavezCastillok</a></small><br>
                    <small>San Cristóbal, Venezuela.</small>
                </p>
            </section>
            <section class="pies">
                <p><small id="fechalpie"></small></p>
                <p><small><a href="#inicio" class="enlace">↑ Volver al inicio ↑</a></small></p>
            </section>
            <section class="pies">
                <p>&copy; 2018-2019</p>
                <p><small>... end web.</small></p>
            </section>
    </footer>
    </div>
    `
});
