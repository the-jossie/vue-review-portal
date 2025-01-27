import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

Vue.use(Toast, {});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
