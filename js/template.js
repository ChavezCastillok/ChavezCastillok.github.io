Vue.component("cabecera", {
  template: `
    <div>
    <header id="cabecera">
            <opciones></opciones>
            <h1><a id="titulopp" name="inicio" href="index.html"><em>{{titulo}}</em></a></h1>
            <h5>Welcome to my web site</h5>
    </header>
    </div>
    `,
  data() {
    return {
      titulo: "ChavezCastillok"
    };
  }
});

Vue.component("opciones", {
  //html
  template: `
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
      menu: [
        {
          nombre: "Home",
          url: "index.html"
        },
        {
          nombre: "Blog",
          url: "https://radickl.wordpress.com/"
        },
        {
          nombre: "About me",
          url: "#contacto"
        }
      ]
    };
  }
});

Vue.component("pie", {
  //html
  template: `
    <div>
    <footer id="pie">
            <section class="pies">
                <p><small><a name="contacto"></a>Contact me:</small></p>
                <p><small>Email <a href="mailto:skachc@gmail.com"
                            class="enlace">skachc@gmail.com</a></small><br>
                    <small>From <em>San Cristóbal, Venezuela.</em></small>
                </p>
            </section>
            <section class="pies">
                <p>&copy; 2018 - {{ año }}</p>
                <p><small><a href="#inicio" class="enlace">↑ Volver al inicio ↑</a></small></p>
                <p><small>... end web.</small></p>
            </section>
    </footer>
    </div>
    `,
  data() {
    return {
      año: new Date().getFullYear()
    };
  }
});
