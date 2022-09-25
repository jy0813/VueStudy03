import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";
import ChartPlugin from "./plugins/ChartPlugin.js";

Vue.config.productionTip = false;
//install() 이벤트 실행
Vue.use(ChartPlugin);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
