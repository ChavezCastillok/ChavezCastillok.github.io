let socialMediaIcons = [
  {
    name: "logo-github",
    uri: "https://github.com/ChavezCastillok",
    username: "ChavezCastillok",
  },

  {
    name: "logo-linkedin",
    uri: "https://www.linkedin.com/in/kevin-chavez-castillo/",
    username: "kevin-chavez-castillo",
  },
  {
    name: "logo-instagram",
    uri: "https://instagram.com/ChavezCastilloka",
    username: "ChavezCastilloka",
  },
  {
    name: "logo-twitter",
    uri: "https://twitter.com/chavezcastillok",
    username: "chavezcastillok",
  },
];

const sites_dev = [
  {
    name: "Get from Youtube",
    ws: "https://github.com/ChavezCastillok/get-from-youtube",
    src: "https://github.com/ChavezCastillok/get-from-youtube",
  },
  {
    name: "Notask",
    ws: "https://notask.netlify.app/",
    src: "https://github.com/ChavezCastillok/Notask",
  },
  {
    name: "Radicalcs",
    ws: "https://radicalcs.netlify.app/",
    src: "https://github.com/ChavezCastillok/radicalcs",
  },
  {
    name: "Garage a tu gusto",
    ws: "https://garageatugusto.netlify.app/",
    src: "https://github.com/ChavezCastillok/garage-atu-gusto",
  },
  {
    name: "cckevin",
    ws: "https://cckevin.neocities.org/",
    src: "https://cckevin.neocities.org/",
  },
  {
    name: "and more!",
    ws: "",
    src: "#",
  },
];

const lang_references = [
  {
    name: "HTML",
    ionicon: '<ion-icon name="logo-html5"></ion-icon>',
    link: "https://www.whatwg.org/",
    class: "is-danger",
  },
  {
    name: "CSS with BULMA",
    ionicon: '<ion-icon name="logo-css3"></ion-icon>',
    link: "https://www.bulma.io/",
    class: "is-info",
  },
  {
    name: "Javascript",
    ionicon: '<ion-icon name="logo-javascript"></ion-icon>',
    link: "https://www.lenguajejs.com/",
    class: "is-warning",
  },
  {
    name: "SvelteJS",
    ionicon: "",
    link: "https://www.svelte.dev/",
    class: "is-danger",
  },
  {
    name: "Typescript",
    ionicon: "",
    link: "https://www.typescriptlang.org/",
    class: "is-link",
  },
  {
    name: "Python",
    ionicon: '<ion-icon name="logo-python"></ion-icon>',
    link: "https://www.python.org/",
    class: "is-success",
  },
  {
    name: "SQL",
    ionicon: '<ion-icon name="cloud-outline"></ion-icon>',
    link: "https://es.wikipedia.org/wiki/SQL",
    class: "is-info",
  },
];

const devenvs_list = [
  {
    name: "Fedora OS",
    ionicon: '<ion-icon name="logo-tux"></ion-icon>',
    link: "https://getfedora.org/",
    class: "is-info",
  },
  {
    name: "Visual Studio Code",
    ionicon: '<ion-icon name="code-working-outline"></ion-icon>',
    link: "https://code.visualstudio.com/",
    class: "is-link",
  },
  {
    name: "Mozilla Firefox",
    ionicon: '<ion-icon name="logo-firefox"></ion-icon>',
    link: "https://www.mozilla.org/firefox/browsers/",
    class: "is-danger",
  },
  {
    name: "Chromium",
    ionicon: '<ion-icon name="logo-chrome"></ion-icon>',
    link: "https://www.chromium.org/Home",
    class: "is-info",
  },
];

const sites_card = [
  {
    username: "@notask",
    picture: "https://notask.netlify.app/favicon.png",
    title: "Notask",
    subtitle: "Notes and task list",
    description:
      "This is a simple app for notes, tasks and or list to do. Make your first Notask and starting work. @notask.",
    tags: ["#bulmacss", "#responsive", "#sveltejs"],
    uri_src: "https://github.com/ChavezCastillok/Notask",
    uri_web: "https://notask.netlify.app/",
  },
  {
    username: "@garageatugusto",
    picture: "https://garageatugusto.netlify.app/img/gatg.png",
    title: "Garage a tu Gusto",
    subtitle: "roductos nuevos y usados + Servicios",
    description:
      "Gatug es un Catalogo de productos y precios a la venta, mas una ventana publicitaria para otros servicios.",
    tags: ["#bulmacss", "#sveltejs", "#typescript"],
    uri_src: "https://github.com/ChavezCastillok/garage-atu-gusto",
    uri_web: "https://garageatugusto.netlify.app/",
  },
];

function display_tags(list) {
  let string = "";
  list.forEach((item) => {
    string += `<a class='tag is-info is-light' href="#">${item} </a>`;
  });
  return string;
}

function display_socialmedia_icons(node, list) {
  node.innerHTML = "";
  list.forEach((red) => {
    node.innerHTML += `
    <li>
                <a href="${red.uri}" target="_blank">
                  <ion-icon name="${red.name}" />
                </a>
              </li>
    `;
  });
}

function display_card_list(node, list) {
  node.innerHTML = "";
  list.forEach((tag) => {
    node.innerHTML += `
    <div class="column card p-3 m-2">
          <div class="card-header">
            <p class="card-header-title">
              <a href="https://notask.netlify.app/" target="_blank">${
                tag.username
              }</a>
            </p>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="${tag.picture}"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">${tag.title}</p>
                <p class="subtitle is-6">${tag.subtitle}</p>
              </div>
            </div>

            <div class="content">
            ${tag.description}
            ${display_tags(tag.tags)}
            </div>
          </div>
          <div class="card-footer">
            <p class="card-footer-item">
              <a
                class="mt-3 pr-3"
                href="${tag.uri_src}"
                target="_blank"
              >
                <span class="icon">
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </span>
              </a>
            </p>
            <p class="card-footer-item">
              <a
                class="mt-3 pr-3"
                href="${tag.uri_web}"
                target="_blank"
              >
                <span class="icon">
                  <ion-icon name="log-out-outline" size="large"></ion-icon>
                </span>
              </a>
            </p>
          </div>
        </div>
    `;
  });
}

function display_tags_list(node, list) {
  node.innerHTML = "";
  list.forEach((tag) => {
    node.innerHTML += `
    <div class="control m-1">
      <a href="${tag.link}" target="_blank" class="tags has-addons">
        <span class="tag ${tag.class}">
        ${tag.name}
        </span>
        <span class="tag">${
          tag.ionicon != ""
            ? tag.ionicon
            : '<ion-icon name="link-outline"></ion-icon>'
        }</span>
      </a>
    </div>
    `;
  });
}

function display_site_list(node, list) {
  node.innerHTML = "";
  list.forEach((tag) => {
    node.innerHTML += `
    <div class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd">
      <div class="content box">
        <p>
        <a href="${tag.ws}" target="_blank">
        <span class="icon.text">
          <span class="icon">
            <ion-icon name="link-outline"></ion-icon>
          </span>
        <span><strong>${tag.name}</strong></span>
        </a>   
        </p>
        <p>
          <a href="${tag.src}" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <ion-icon name="logo-github"></ion-icon>
            </span>
            <span>src</span>
          </span>
          </a>
        </p>
      </div>
    </div>
    `;
  });
}

addEventListener("load", () => {
  // display_card_list(document.getElementById("cards"), sites_card);
  // display_site_list(document.getElementById("sites"), sites_dev);
  // display_tags_list(document.getElementById("lang_refs"), lang_references);
  // display_tags_list(document.getElementById("devenv_refs"), devenvs_list);

  display_socialmedia_icons(
    document.getElementById("socialIcons"),
    socialMediaIcons
  );
  console.log("Thanks for your visit. Don't stop, nothing does.");

  //   let now = new Date();
  //   let date = document.getElementById("date");

  //   date.innerText = now.toDateString();
  //   date.setAttribute(
  //     "datetime",
  //     `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
  //   );
});
