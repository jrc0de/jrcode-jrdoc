import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "JRDoc",
  description: "Web dev doc",
  themeConfig: {
    nav: [
      {
        text: "Langages",
        items: [
          { text: "JavaScript", link: "/javascript/variables" },
          { text: "HTML", link: "/html/fondamentaux" },
          { text: "CSS", link: "/css" },
          { text: "Markdown", link: "/markdown" },
        ],
      },
      {
        text: "Outils",
        items: [
          { text: "Bun", link: "/bun" },
          { text: "VSCode", link: "/vscode" },
          { text: "Git", link: "/git" },
          { text: "Zsh", link: "/zsh" },
        ],
      },
      {
        text: "Mobile",
        items: [
          { text: "Ionic", link: "/ionic" },
          { text: "Capacitor", link: "/capacitor" },
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
    },

    socialLinks: [{ icon: "github", link: "https://github.com/jrc0de" }],
  },
})
