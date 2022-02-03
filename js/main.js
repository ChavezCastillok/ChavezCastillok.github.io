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
  display_site_list(document.getElementById("sites"), sites_dev);
  display_tags_list(document.getElementById("lang_refs"), lang_references);
  display_tags_list(document.getElementById("devenv_refs"), devenvs_list);
  console.log("Thanks for your visit. Don't stop, nothing does.");
});
