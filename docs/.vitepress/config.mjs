import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "JRDoc",
  description: "Web dev doc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Technologies",
        items: [
          { text: "TypeScript", link: "/typescript" },
          { text: "Bun", link: "/bun" },
          { text: "Ionic", link: "/ionic" },
          { text: "Capacitor", link: "/capacitor" },
          { text: "Git", link: "/git" },
          { text: "Zsh", link: "/zsh" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/jrc0de" }],
  },
});
