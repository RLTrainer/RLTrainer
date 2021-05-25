<template>
  <div>
    <div class="content">
      <div id="s1" class="repeat section-1">
        <a class="arrow" href="#s2">
          <img src="../../assets/icons/ARROW.png" alt="" />
        </a>
        <h2>Top Weekly</h2>
        <div class="map-wrapper">
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-1.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-2.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-3.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-1.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
        </div>
        <h2>Top Monthly</h2>
        <div class="map-wrapper">
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-1.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-2.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-3.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
          <MapComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              image: require('@/assets/backgrounds/homepage-1.png'),
              code: '0CB0-16C8-DAAD-B578',
            }"
          />
        </div>
      </div>
      <div id="s2" class="repeat section-2">
        <MapCard />
        <a class="arrow" href="#s3">
          <img src="../../assets/icons/ARROW.png" alt="" />
        </a>
      </div>
      <div id="s3" class="repeat section-3"></div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1300px) {
  .map-wrapper h2 {
    font-size: 30px;
  }
}

.content {
  position: absolute;
  height: 100%;
  width: 100%;
}
h2 {
  color: white;
  font-family: Navine;
  font-size: 60px;
  font-weight: bold;
  position: relative;
  left: 20.5vw;

  padding-top: 1vw;
  padding-bottom: 1vw;
}
.repeat {
  width: 100%;
  display: block;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(85%);
}

.section-1 {
  background-image: url(../../assets/backgrounds/homepage-1.png);
}
.section-2 {
  position: relative;
  background-image: url(../../assets/backgrounds/homepage-2.png);
}
.section-3 {
  background-image: url(../../assets/backgrounds/homepage-3.png);
}

.arrow {
  position: absolute;
  bottom: 0%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  animation: MoveUpDown 1.6s linear infinite;
  -webkit-animation: MoveUpDown 1.6s linear infinite;
}

.arrow img {
  width: 6rem;
  height: auto;
  min-height: 6rem;
}

.map-wrapper {
  display: flex;
  justify-content: center;
}

.map-wrapper .item {
  display: inline-block;
  margin-left: 1vw;
}

@keyframes MoveUpDown {
  0%,
  100% {
    margin-bottom: 10em;
  }
  50% {
    margin-bottom: 11em;
  }
}
</style>

<script>
import MapCard from "../MapCard";
import MapComponent from "../MapComponent";

export default {
  name: "Homepage",
  components: {
    MapComponent,
    MapCard,
  },
};
</script>
