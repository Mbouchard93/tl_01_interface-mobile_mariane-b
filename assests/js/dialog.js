  /**

   * @param {string} title 
   * @param {string} date 
   * @param {string} img 
   * @param {string} desct 
   * @param {string} autor 
   */

class DialogBlog {
    constructor(title,  date, img, desct, autor) {
      this.title = title;
      this.date = date
      this.img = img;
      this.desct = desct;
      this.autor = autor;
    }
  }
  
/**
 * @type {DialogBlog[]}
 */

  const dialogBlogs = [
    new DialogBlog(
      "Le parcous d'une programmeur en apprentissage",
      'Date : 01 mai 2024',
      "./assests/img/article/bug_article.jpg",
      `Lors de la dernière session, j'étais encore en train d'apprendre et tout me semblait nouveau. J'utilisais souvent des articles en ligne, des tutoriels ou ChatGPT pour m'aider à résoudre mes problèmes. C'est là que j'ai compris que ChatGPT est super utile, mais ça ne remplace pas une bonne compréhension de la documentation ou une base solide de connaissances. J'ai lu tellement d'articles sur les différentes méthodes en JavaScript que c'est devenu une habitude quotidienne.

      En gros, la création de la page s'est bien passée. J'ai pris une approche plus réfléchie et méthodique en préparant une maquette, en déterminant mes besoins et en établissant la structure avant de commencer à coder. Tout était clair quand j'ai commencé à coder. Par contre, j'ai eu un défi avec l'implémentation de l'overlay. Même si j'avais déjà créé des overlays en HTML, cette fois, quand j'ai créé la fonction pour l'overlay, elle ne parcourait pas les éléments du tableau et renvoyait un tableau d'objets vide. J'ai vite compris que je devais passer le tableau en paramètre et utiliser ma fonction avec le tableau d'articles en utilisant l'index pour parcourir tous les éléments du tableau. J'ai aussi eu un peu de difficulté avec le responsive. J'aurais aimé que le visuel soit plus agréable, surtout en version mobile. J'ai fait avec les connaissances que j'avais et beaucoup d'essais-erreurs. Il y a sûrement une façon de rendre mon code plus propre et moins répétitif, mais je suis quand même fier du résultat.
      
      Pour la création du site, j'ai consulté toutes les pages web des différentes bibliothèques que je présente, mais les résumés des articles ont été créés par Copilot par manque de temps. Je n'ai pas pu étudier toutes les bibliothèques en détail, mais ce travail m'a permis de faire une sorte de veille technologique j'ai très hâte d'apprendre d'avantage sur les différente librairie a notre disposition.`,
      "Auter : Mariane Bouchard"
    ),
    new DialogBlog(
      "Simplicité et Flexibilité : Un voyage à travers la découverte de Vue.js",
      'Date : 07 mai 2024',
      "./assests/img/article/vue_article.jpg",
      `Vue.js est un framework JavaScript idéal pour créer des interfaces utilisateur grâce à sa flexibilité et sa facilité d'utilisation.
      Il permet de décrire la structure HTML de manière déclarative et met à jour automatiquement le DOM lorsque l'état JavaScript change.
      Les composants rendent le code plus modulaire et réutilisable, et l'adoption progressive permet de commencer petit et d'étendre progressivement.
      Cependant, Vue.js a une communauté plus petite que React et Angular, ce qui peut limiter les ressources et les tutoriels disponibles.
      Étant relativement nouveau, il peut manquer de maturité et de stabilité.La complexité des projets peut augmenter avec leur taille, 
      et Vue.js n'est peut-être pas le meilleur choix pour les grands projets d'entreprise.De plus, il peut y avoir des problèmes de compatibilité
       avec certains navigateurs et un manque de contrôle total sur les performances.Enfin, Vue.js offre moins de plugins que ses concurrents.
      Malgré ces inconvénients, Vue.js reste un excellent choix pour les étudiants en développement web, offrant une solution puissante 
      et flexible pour créer des interfaces utilisateur.Bonne programmation!`,
      "Auteur : Lea lambert"
    ),
    new DialogBlog(
      "Plongée dans React : Réutilisation des composants et défis d’apprentissage",
      'Date : 17 mai 2024',
      "./assests/img/article/react_article.jpg",
      `React.js, souvent appelé simplement React, est une bibliothèque JavaScript open source développée par Meta (anciennement Facebook) pour la construction d’interfaces utilisateur. 
      Il est connu pour sa facilité d’apprentissage, sa haute performance et sa capacité à créer des composants réutilisables. React utilise une syntaxe appelée JSX qui combine JavaScript et 
      HTML, facilitant la création de composants d’interface utilisateur. Il utilise également un DOM virtuel pour optimiser les performances, rendant les modifications plus rapides car seule
      une petite partie du HTML est modifiée, au lieu de la page entière. Cependant, React a aussi ses inconvénients. L’environnement change très rapidement, ce qui oblige les développeurs
      à réapprendre constamment. De plus, les erreurs rencontrées par les développeurs peuvent inclure des échecs de rechargement, des incompatibilités entre les différentes bibliothèques
      d’informations, et des problèmes liés à l’émulateur et au navigateur associé5. Malgré ces défis, React reste une bibliothèque JavaScript populaire pour le développement d’applications 
      web et mobiles6.
      `,
      "Auteur : Roberta Simard"
    ),
    new DialogBlog(
      "Angular : Un cadre complet pour le développement web - Avantages, fonctionnalités et défis",
      'Date : 04 juin 2024',
      "./assests/img/article/angular_article.jpg",
      `Angular est un framework open-source basé sur TypeScript qui facilite la création d’applications Web complexes grâce à sa structure solide et ses fonctionnalités avancées. 
      Il permet aux développeurs de transformer des documents HTML statiques en contenu dynamique et offre une architecture de composants polyvalente, idéale pour la construction
       de projets de toutes tailles. De plus, Angular est constamment mis à jour et dispose d’une documentation détaillée, permettant aux développeurs de rester à jour avec les
        dernières avancées en matière de développement web. Cependant, Angular a aussi ses défis. Par exemple, il peut être difficile d’améliorer les performances d’une application Angular 
        qui est lente ou trop lourde. De plus, bien qu’Angular impose une approche structurée basée sur des composants et facilite l’échange de données entre les composants, cela peut augmenter 
        la complexité du code et la courbe d’apprentissage.`,
      "Auter : Robert Nill"
    ),
    new DialogBlog(
      "Svelte : Une révolution dans la compilation pour des applications front-end plus rapides",
      'Date : 21 mai 2024',
      "./assests/img/article/svelte_article.jpg",
      `Svelte et Angular sont deux frameworks JavaScript destinés au développement d’applications Web, cependant, ils diffèrent considérablement dans leurs approches. Angular, créé par Google, est un framework complet qui fournit une solution intégrée pour la construction d’applications Web. Il adopte l’architecture MVC (Model-View-Controller) et offre un ensemble solide d’outils et de fonctionnalités. 
      De plus, Angular est construit sur TypeScript, une extension de JavaScript qui apporte des capacités de typage statique.
      D’un autre côté, Svelte se distingue en étant un compilateur qui transforme votre code en JavaScript optimisé lors de la construction. Cela supprime le besoin d’un framework d’exécution,
       ce qui se traduit par des tailles de bundle plus petites et des temps de chargement plus rapides. Svelte introduit également le concept de déclarations réactives, où les variables peuvent
        être déclarées comme réactives et mettent à jour automatiquement le DOM chaque fois que leur valeur change.`,
      "auteur"
    ),
    new DialogBlog(
      "Ember.js : Accélérer le développement grâce à la philosophie de la convention sur la configuration",
      'Date : 07 juin 2024',
      "./assests/img/article/ember_article.jpg",
      `: Ember.js est un framework pour les applications web ambitieuses. Il est reconnu pour sa philosophie de “convention sur configuration”,
       qui peut considérablement accélérer le processus de développement. Cette philosophie signifie que, plutôt que de passer du temps à configurer 
       votre application pour qu’elle fonctionne comme vous le souhaitez, Ember.js fournit des conventions intelligentes qui vous permettent de vous concentrer 
       sur la logique métier de votre application. Cela peut conduire à une productivité accrue, une meilleure lisibilité du code et une maintenance plus facile. Cependant, 
      il est important de noter que cette approche peut nécessiter un certain temps d’apprentissage pour comprendre et utiliser efficacement ces conventions.`,
      "Auter : Ruby Lemay"
    ),
    new DialogBlog(
      "Preact : Une alternative légère à React pour des applications web plus performantes",
      'Date : 01 juin 2024',
      "./assests/img/article/preact_article.jpg",
      `Preact est une alternative plus petite et plus légère à React, offrant une grande partie de la même API tout en ayant une taille de bundle beaucoup plus petite. 
      Cette taille réduite peut conduire à des temps de chargement plus rapides et à une meilleure performance globale de l’application. Preact est donc idéal pour les développeurs qui 
      cherchent à optimiser leurs applications web sans sacrifier la facilité d’utilisation et la familiarité de l’API de React. Cependant, il est important de noter que, 
      bien que Preact soit compatible avec la plupart des fonctionnalités de React,
       certaines fonctionnalités moins courantes ou plus récentes de React peuvent ne pas être disponibles ou fonctionner différemment dans Preact.`,
      "Auteur : Alycia key"
    ),
    new DialogBlog(
      "jQuery : Simplifier la manipulation du document HTML et les interactions Ajax",
      'Date : 29 avril 2024',
      "./assests/img/article/jquery_article.jpg",
      `jQuery est une bibliothèque JavaScript rapide et concise qui simplifie grandement la manipulation du document HTML, le traitement des événements, l’animation et les interactions Ajax.
       Grâce à sa syntaxe facile à utiliser, jQuery permet aux développeurs de créer des applications web dynamiques avec moins de code et moins de complexité. 
       De plus, jQuery offre une compatibilité cross-browser, ce qui signifie que votre code fonctionnera de manière cohérente sur différents navigateurs. 
       Cependant, il est important de noter que, bien que jQuery simplifie de nombreux aspects du développement JavaScript, il peut parfois masquer les détails de bas niveau de JavaScript, 
       ce qui peut rendre plus difficile la compréhension de ce qui se passe réellement sous le capot.`,
      "Auteur : Roger Lambert"
    ),
    new DialogBlog(
      "Locomotive Scroll : Transformer l’expérience de défilement sur votre site web",
      'Date : 05 mai 2024',
      "./assests/img/article/locomotivescroll_article.jpg",
      `Locomotive Scroll est une bibliothèque JavaScript puissante qui peut révolutionner l’expérience de défilement sur votre site web.
       Elle offre aux développeurs la possibilité de créer des effets de défilement fluides et personnalisés, améliorant ainsi l’interaction de l’utilisateur avec le site. Cependant, il est important de noter que, bien que Locomotive Scroll offre une grande flexibilité, il peut y avoir des moments où vous n’avez pas un contrôle total sur les performances. 
      De plus, comme toute bibliothèque, elle nécessite une certaine courbe d’apprentissage pour être utilisée efficacement`,
      "Auter : Shery Blod"
    ),
  ];

/**
 * 
 * @param {Object} dialog 
 * @param {string} dialog.title 
 * @param {string} dialog.date 
 * @param {string} dialog.img 
 * @param {string} dialog.desct 
 * @param {string} dialog.autor 
 * @returns {HTMLDivElement} 
 */
  
function createOverlay(dialog) {
  const overlayDiv = document.createElement("div");
  const closeButton = document.createElement("button");
  const btnDialog = document.createElement("img");
  const title = document.createElement("h3");
  const date = document.createElement ('time')
  const img = document.createElement("img");
  const desct = document.createElement("p");
  const autor = document.createElement("p");
  const timeReadingElement = document.createElement("p");
  const nbWordsElement = document.createElement("p");

  let nbWords = dialog.desct.split(" ").length;
  let timeReading = Math.ceil(nbWords / 150);

  title.textContent = dialog.title;
  date.textContent = dialog.date
  img.src = dialog.img;
  desct.textContent = dialog.desct;
  autor.textContent = dialog.autor;
  timeReadingElement.textContent = timeReading + " " + "minutes";
  nbWordsElement.textContent = nbWords + " " + "Mots";
  btnDialog.src = "./assests/img/icone/close.svg";

  const containerOverlay = document.createElement("div");
  containerOverlay.classList.add("container_overlay", "none");
  overlayDiv.classList.add("container_article");
  closeButton.classList.add("btn--dialog");
  closeButton.appendChild(btnDialog);
  overlayDiv.appendChild(closeButton);
  overlayDiv.appendChild(title);
  overlayDiv.appendChild(date)
  overlayDiv.appendChild(img);
  overlayDiv.appendChild(desct);
  overlayDiv.appendChild(autor);
  overlayDiv.appendChild(timeReadingElement);
  overlayDiv.appendChild(nbWordsElement);

  containerOverlay.appendChild(overlayDiv);

  closeButton.addEventListener("click", () => {
    containerOverlay.classList.replace("visible", "none");
  });

  containerOverlay.addEventListener("click", (e) => {
    if (e.target === containerOverlay) {
      containerOverlay.classList.replace("visible", "none");
    }
  });

  return containerOverlay;
}

/**

 * @type {{title: string, img: string, desct: string}[]}
 */

const articles = [
    {
      title: "Résolution de Problèmes",
      img: "./assests/img/cards/bug.svg",
      desct:
        "Cet article décrit les défis rencontrés lors de la création d’une page web interactive, en mettant l’accent sur les problèmes spécifiques, les sources consultées et les solutions qui ont permis la création du site",
    },
    {
      title: " Découverte de Vue",
      img: "./assests/img/cards/vue.svg",
      desct:
        "Une bibliothèque JavaScript progressive pour la construction d’interfaces utilisateur, qui se distingue par sa flexibilité et sa simplicité d’utilisation.",
    },
    {
      title: "Exploration de React",
      img: "./assests/img/cards/react.svg",
      desct:
        "Une bibliothèque JavaScript pour la construction d’interfaces utilisateur, connue pour la réutilisation des composants, mais avec une courbe d’apprentissage abrupte.",
    },
    {
      title: "Angular Cadre Complet",
      img: "./assests/img/cards/angular.svg",
      desct:
        "Robuste pour le développement d’applications web , offrant une structure claire, des fonctionnalités intégrées, un support pour TypeScript, mais avec une courbe d’apprentissage plus raide.",
    },
    {
      title: "Svelte Compilation Innovante",
      img: "./assests/img/cards/svelte.svg",
      desct:
        "Svelte est un nouveau venu dans le monde des frameworks front-end. Il se distingue par son approche de compilation, qui peut conduire à des applications plus rapides.",
    },
    {
      title: "Ember Convention sur Configuration",
      img: "./assests/img/cards/ember.png",
      desct:
        "un cadre de travail pour les applications web ambitieuses. Il est connu pour sa philosophie de “convention sur configuration”, ce qui peut accélérer le développement.",
    },
    {
      title: "Preact Alternative Légère",
      img: "./assests/img/cards/preact.svg",
      desct:
        "Preact est une alternative plus petite à React. Elle offre une grande partie de la même API tout en ayant une taille de bundle beaucoup plus petite.",
    },
    {
      title: "jQuery Manipulation Facile",
      img: "./assests/img/cards/jquery.svg",
      desct:
        " jQuery est une bibliothèque JavaScript rapide et concise qui simplifie la manipulation du document HTML, le traitement des événements, l’animation et les interactions Ajax.",
    },
    {
      title: "Révolutionner l’expérience de défilement",
      img: "./assests/img/cards/locomotivescroll.png",
      desct:
        "une bibliothèque JavaScript puissante, peut transformer l’expérience de défilement sur votre site web. Apprenez à créer des effets de défilement fluides et personnalisés",
    },
  ];

  /**
 * @type {HTMLInputElement}
 */
const input = document.querySelector(".input_search");

/**
 * @type {HTMLDivElement}
 */
const container = document.querySelector(".container_card");

/**
 * @param {{title: string, img: string, desct: string}} article 
 * @param {number} index 
 * @returns {HTMLDivElement} 
 */

function toHtml(article, index) {
  const div = document.createElement("div");
  const titre = document.createElement("h3");
  const img = document.createElement("img");
  const desct = document.createElement("p");
  const button = document.createElement("button");
  button.classList.add("btn--article");

  div.setAttribute("data-search", article.title);
  div.className = "card";
  titre.textContent = article.title;
  img.src = article.img;
  desct.textContent = article.desct;
  button.textContent = `Lire l'article`;

  const overlay = createOverlay(dialogBlogs[index]);
  button.addEventListener("click", () => {
    if (overlay.classList.contains("none")) {
      overlay.classList.replace("none", "visible");
    } else {
      overlay.classList.replace("visible", "none");
    }
  });



  div.appendChild(titre);
  div.appendChild(img);
  div.appendChild(desct);
  div.appendChild(button);
  div.appendChild(overlay);

  return div;
}

articles.forEach((article, index) => {
  container.appendChild(toHtml(article, index));

});
