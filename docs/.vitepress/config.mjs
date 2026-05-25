import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "JRDoc",
  description: "Web dev doc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/jrc0de" }],
  },
})
