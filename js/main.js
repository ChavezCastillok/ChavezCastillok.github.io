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
    name: "Fedora",
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
    <div class="control">
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

addEventListener("load", () => {
  display_tags_list(document.getElementById("lang_refs"), lang_references);
  display_tags_list(document.getElementById("devenv_refs"), devenvs_list);
  console.log("Thanks for your visit. Don't stop, nothing does.");
});
