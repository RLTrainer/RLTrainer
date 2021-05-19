<template>
  <div id="app">
    <NavigationComponent navbar_style="padding-left: 4px; background-color: #292929"/>
    <b-img class="bg" :src="require('./assets/backgrounds/homepage-1.png')"></b-img>
    <b-img class="bg" :src="require('./assets/backgrounds/homepage-2.png')"></b-img>
    <b-img class="bg" :src="require('./assets/backgrounds/homepage-3.png')"></b-img>
  </div>
</template>

<script>
import Vue from 'vue'
import NavigationComponent from './components/NavigationComponent'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  components: {
    NavigationComponent
  }
}
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

 .bg {
   filter: brightness(75%);
   width: 100%;
 }

body {
  margin: 0;
  padding: 0;
}

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #292929;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #121212;
}

</style>
