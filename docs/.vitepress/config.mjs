import { defineConfig } from "vitepress"
import { withMermaid } from "vitepress-plugin-mermaid"

export default withMermaid(
  defineConfig({
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    title: "JRDoc",
    description: "Web dev doc",
    appearance: "force-dark",
    themeConfig: {
      logo: "/img/rocket.png",
      footer: {
        copyright: "© 2026 JRCode",
      },
      nav: [
        {
          text: "Langages",
          items: [
            { text: "JavaScript", link: "/javascript/variables" },
            { text: "HTML", link: "/html/fondamentaux" },
            { text: "CSS", link: "/css/introduction" },
            { text: "SQL", link: "/sql/basiques" },
            { text: "Markdown", link: "/markdown" },
            { text: "MEI", link: "/mei/introduction" },
          ],
        },
        {
          text: "Frameworks",
          items: [
            { text: "Vue.js", link: "/vue/templating" },
            { text: "Ionic", link: "/ionic/ionic" },
          ],
        },
        {
          text: "Outils",
          items: [
            { text: "Bun", link: "/bun" },
            { text: "Git", link: "/git/starting" },
            { text: "Zsh", link: "/zsh" },
            { text: "VSCode", link: "/vscode" },
            { text: "Photopea", link: "/photopea" },
          ],
        },
      ],

      docFooter: {
        prev: "Page précédente",
        next: "Page suivante",
      },
      outline: {
        label: "Sur cette page",
      },
      notFound: {
        title: "PAGE INTROUVABLE",
        quote: "On dirait que vous avez emprunté un lien rompu ou une page qui n'existe plus.",
        linkLabel: "Retour à l'accueil",
        linkText: "Retour à l'accueil",
        code: "404",
      },

      sidebar: {
        "/javascript/": [
          {
            text: "JavaScript",
            items: [
              { text: "Variables", link: "/javascript/variables" },
              { text: "Opérateurs", link: "/javascript/operateurs" },
              { text: "Structures de contrôle", link: "/javascript/structures" },
              { text: "Fonctions", link: "/javascript/fonctions" },
              { text: "Commentaires", link: "/javascript/commentaires" },
            ],
          },
        ],
        "/html/": [
          {
            text: "HTML",
            items: [
              { text: "Fondamentaux", link: "/html/fondamentaux" },
              { text: "Eléments", link: "/html/elements" },
              { text: "Commentaires", link: "/html/commentaires" },
            ],
          },
        ],
        "/css/": [
          {
            text: "CSS",
            items: [
              { text: "Introduction", link: "/css/introduction" },
              { text: "Divers", link: "/css/divers" },
            ],
          },
        ],
        "/sql/": [
          {
            text: "SQL",
            items: [
              { text: "Basiques", link: "/sql/basiques" },
              { text: "Types de données", link: "/sql/types" },
            ],
          },
        ],
        "/git/": [
          {
            text: "Git",
            items: [
              { text: "Initialisation", link: "/git/starting" },
              { text: "Synchronisation", link: "/git/sync" },
              { text: "Supressions", link: "/git/delete" },
              { text: "Branches", link: "/git/branch" },
            ],
          },
        ],
        "/ionic/": [
          {
            text: "Ionic",
            items: [
              { text: "Ionic framework", link: "/ionic/ionic" },
              { text: "Capacitor", link: "/ionic/capacitor" },
            ],
          },
        ],
        "/mei/": [
          {
            text: "MEI",
            items: [
              { text: "Introduction", link: "/mei/introduction" },
              { text: "Portées et clés", link: "/mei/staves" },
              { text: "Mesures", link: "/mei/measures" },
              { text: "Notes et durées", link: "/mei/notes" },
              { text: "Paroles", link: "/mei/lyrics" },
              { text: "Verovio", link: "/mei/verovio" },
            ],
          },
        ],
        "/vue/": [
          {
            text: "Vue.js",
            items: [
              { text: "Structure d'un projet", link: "/vue/structure" },
              { text: "Syntaxe de template", link: "/vue/templating" },
            ],
          },
        ],
      },
    },
  }),
)
