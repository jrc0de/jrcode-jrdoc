import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "JRDoc",
  description: "Web dev doc",
  appearance: "force-dark",
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/jrc0de" }],
    nav: [
      {
        text: "Langages",
        items: [
          { text: "JavaScript", link: "/javascript/variables" },
          { text: "HTML", link: "/html/fondamentaux" },
          { text: "CSS", link: "/css" },
          { text: "SQL", link: "/sql/basiques" },
          { text: "Markdown", link: "/markdown" },
          { text: "MEI", link: "/mei" },
        ],
      },
      {
        text: "Frameworks",
        items: [
          { text: "Vue.js", link: "/vue" },
          { text: "Ionic", link: "/ionic" },
          { text: "Capacitor", link: "/capacitor" },
        ],
      },
      {
        text: "Outils",
        items: [
          { text: "Bun", link: "/bun" },
          { text: "Git", link: "/git" },
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
      "/sql/": [
        {
          text: "SQL",
          items: [
            { text: "Basiques", link: "/sql/basiques" },
            { text: "Types de données", link: "/sql/types" },
          ],
        },
      ],
      "/mei/": [
        {
          text: "MEI",
          items: [
            { text: "Introduction", link: "/mei/introduction" },
            { text: "Notes", link: "/mei/notes" },
            { text: "Paroles", link: "/mei/lyrics" },
          ],
        },
      ],
    },
  },
})
