<template>
  <div id="app">
    <h1><a href="login">log me in nigga</a></h1>
    <div @hover="onHover" id="rank_container">
      <RankCard background="Beckwith-Park.png" rank_file="BRONZE.png"/>
      <RankCard background="DFH-Stadium-Circuit.png" rank_file="SILVER.png"/>
      <RankCard background="Forbidden-Temple.png" rank_file="GOLD.png"/>
      <RankCard background="Mannfield-Stadium.png" rank_file="PLATINUM.png"/>
      <RankCard background="Neon-Fields.png" rank_file="DIAMOND.png"/>
      <RankCard background="Salty-Shores.png" rank_file="CHAMPION.png"/>
      <RankCard background="Utopia-Coliseum-Snowy.png" rank_file="GRAND_CHAMPION.webp"/>
    </div>
  </div>
</template>

<script>
import RankCard from './components/training_packs/RankCard.vue'

export default {
  name: 'App',
  components: {
    RankCard
  },
  methods: {
    onHover() {
      console.log("qj mu kura");
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1A1A1A;
  color:white;
}

#rank_container {
  padding: 0;
}

body::-webkit-scrollbar {
  width: 14px;
}

body::-webkit-scrollbar-track {
  background: #292828;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(95, 97, 83, .6);
}

</style>
