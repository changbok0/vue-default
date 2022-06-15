import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import i18nPlugin from "./plugins/i18n";
import store from "./store";

const i18nString = {
  en: {
    hi: "Hello!",
    save: "Save",
  },
  ko: {
    hi: "안녕하세요!",
    save: "저장",
  },
};
//createApp(App).use(router).mount("#app"); 아래 처리한것과 같음

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(VueSweetalert2);
app.use(i18nPlugin, i18nString);
app.use(store);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
app.mount("#app");
