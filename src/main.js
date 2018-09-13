import Vue from "vue";
import Vuex from "vuex";
import store from "./state/store";
import router from "./router";
import { sync } from "vuex-router-sync";
import App from "./App.vue";

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
