<template>
  <div id="app">
    <NavigationComponent
      navbar_style="padding: 0.6vw; background: linear-gradient(to top, rgb(43, 37, 71), rgb(19, 16, 33)); width: 100%;"
    />
    <router-view></router-view>
  </div>

  <!-- 1f1a36 -->
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NavigationComponent from "./components/NavigationComponent";

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
  components: {
    NavigationComponent,
  },
};
</script>

<style>
@font-face {
  font-family: "Navine";
  src: local("Navine"), url(./assets/fonts/NavineDemo.ttf) format("truetype");
}
@font-face {
  font-family: "QuarcaCond";
  src: local("QuarcaCond"), url(/assets/fonts/QuarcaCond.otf) format("truetype");
}

body,
html {
  margin: 0;
  padding: 0;
}

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #121212;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #292929;
}

.alert {
  position: fixed;
  bottom: 1vw;
  right: 2vw;
}
</style>
