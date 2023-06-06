import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { messages } from "./core/traslations";

const i18n = createI18n({
  locale: "en",
  messages,
});
createApp(App).use(i18n).mount("#app");
