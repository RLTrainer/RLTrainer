<template>
  <div id="card-container">
    <img :src="require('../../assets/backgrounds/' + background)" id="background" v-if="isLeft"/>
    <img :src="require('../../assets/backgrounds/' + background)" id="background" class="flipped" v-else/>
    <div class="card-block-left">
      <img :src="require('../../assets/ranks/' + rank_file)" id="rank"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankCard",
  props: {
    background: String,
    rank_file: String,
    isLeft: Boolean
  },
};
</script>

<style scoped>
#card-container {
  position: relative;
}
.card-block-left {
  position: absolute;
  transform: translateY(-100%);
  height: 100%;
  max-width: 12%;
  min-width: 12%;
  padding-left: 10px;
  z-index: 10;
  background: rgba(0,0,0,.5);
}

.flipped {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.card-block-right {
  position: absolute;
  transform: translateY(-100%);
  height: 100%;
  max-width: 12%;
  min-width: 12%;
  padding-left: 10px;
  z-index: 10;
  background: rgba(0,0,0,.5);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}


 #background {
  object-fit: cover;
  width: 100%;
  max-height: 12em;
  overflow: hidden;

  filter: blur(4px);
  -webkit-filter: blur(4px);

  transition: max-height 0.4s;
  z-index: 0;
}

#background:hover {
  max-height: 22em;
  overflow: hidden;

  filter: blur(0);
  -webkit-filter: blur(0);
}

#rank {
  text-align: center;
  min-width: 50%;
  max-width: 50%;
  justify-content: center;
}

</style>
