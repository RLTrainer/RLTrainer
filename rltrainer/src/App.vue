<template>
  <div id="app">
    <div id="rank_container">
      <RankCard background="Beckwith-Park.png" rank_file="bronze-2.png" isLeft="true"/>
      <RankCard background="DFH-Stadium-Circuit.png" rank_file="silver-2.png"/>
      <RankCard background="Forbidden-Temple.png" rank_file="gold-2.png" isLeft="true"/>
      <RankCard background="Mannfield-Stadium.png" rank_file="platinum-2.png"/>
      <RankCard background="Neon-Fields.png" rank_file="diamond-2.png" isLeft="true"/>
      <RankCard background="Salty-Shores.png" rank_file="champ-2.png"/>
      <RankCard background="Utopia-Coliseum-Snowy.png" rank_file="gc-2.webp" isLeft="true"/>
    </div>
  </div>
</template>

<script>
import RankCard from './components/training_packs/RankCard.vue'

export default {
  name: 'App',
  components: {
    RankCard
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
</style>
