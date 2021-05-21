import { createApp } from "vue"; 
/* import Vue from "vue"; */
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount('#app')
// Vue.config.productionTip = false

/* new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
}) */
