// import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from './router'
import VueClipboards from 'vue-clipboards'

Vue.use(VueClipboards)

// createApp(App).use(router).mount('#app')
Vue.config.productionTip = false

router.afterEach(to => {
  Vue.nextTick(() => {
      document.title = to.name || 'RLTrainer';
  });
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
