/*
product by @chavezCastillok
*/

window.addEventListener('load', function(){

    // document.getElementById('currentYear').innerHTML = new Date().getFullYear()

    const app = new Vue({
        el:'#app',
    })

    let navbarTop = document.getElementById('navbarTop')

    document.getElementsByClassName('navbar-burger')[0].addEventListener('click', ()=>{
         navbarTop.classList.toggle('is-active')
    })

    console.log('Web site charged completed. Welcome!');
});

Vue.component('navbar-top', {
    template: `
    <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="index.html">
                <img src="images/ck.png" width="32" height="32" />
              </a>
              <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarTop"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarTop" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="index.html"> Home </a>

                <a class="navbar-item"> ... </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link"> Calcs </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="calc-basic.html">
                      Basica
                    </a>
                    <a class="navbar-item" href="calc-divisas.html">
                      Divisas
                    </a>
                    <a class="navbar-item" href="calc-nomina.html">
                      Nomina
                    </a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item" href="#"> More </a>
                  </div>
                </div>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <a href="https://github.com/ChavezCastillok">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </div>
                <div class="navbar-item">
                  <a href="https://twitter.com/chavezcastillok">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>

                <div class="navbar-item">
                  <a href="https://www.linkedin.com/in/kevin-chavez-castillo/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
                <div class="navbar-item">
                  <a href="https://chavezcastilloka.wordpress.com/">
                    <ion-icon name="logo-wordpress"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </nav>
    `
})