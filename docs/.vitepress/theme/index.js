import DefaultTheme from "vitepress/theme"
import MeiViewer from "./MeiViewer.vue"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("MeiViewer", MeiViewer)
  },
}
