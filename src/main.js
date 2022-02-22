import { createApp } from "vue";
import App from "./App.vue";
// doc 1. 添加repl样式
import "@vue/repl/style.css";

// doc ???
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: "id:repl",
};

createApp(App).mount("#app");
