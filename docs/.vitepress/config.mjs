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
    sidebar: [
      {
        text: "Technologies",
        items: [
          { text: "JavaScript", link: "/javascript" },
          { text: "HTML", link: "/html" },
          { text: "CSS", link: "/css" },
          { text: "Bun", link: "/bun" },
          { text: "Ionic", link: "/ionic" },
          { text: "Capacitor", link: "/capacitor" },
          { text: "VSCode", link: "/vscode" },
          { text: "Git", link: "/git" },
          { text: "Zsh", link: "/zsh" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/jrc0de" }],
  },
})
