<template>
  <div>
    <div class="content">
      <div id="s1" class="repeat section-1">
        <a class="arrow" href="#s2">
          <img src="@/assets/icons/ARROW.png" alt="" />
        </a>
        <h2>Top Weekly</h2>
        <div class="map-wrapper">
          <PackComponent
            class="item"
            :map="{
              name: 'Big Fat Niggers',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/rank_backgrounds/BRONZE.png'),
              code: '0CB0-16C8-DAAD-B578'
            }"
          />
          <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/backgrounds/homepage-2.png'),
              code: '0CB0-16C8-DAAD-B578'
            }"
          />
          <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/backgrounds/homepage-3.png'),
              code: '0CB0-16C8-DAAD-B578'
            }"
          />
          <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/backgrounds/homepage-1.png'),
              code: '0CB0-16C8-DAAD-B578'
            }"
          />
        </div>
        <h2>Top Monthly</h2>
        <div class="map-wrapper">
                    <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/rank_backgrounds/BRONZE.png'),
              code: '0CB0-16C8-DAAD-B578',
              description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            }"
          />
          <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/backgrounds/homepage-2.png'),
              code: '0CB0-16C8-DAAD-B578',
              description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            }"
          />
          <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Goalie',
              image: require('@/assets/backgrounds/homepage-3.png'),
              code: '0CB0-16C8-DAAD-B578',
              description:
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            }"
          />
          <PackComponent
            class="item"
            :map="{
              name: 'Power Shots',
              author: 'Sayykii',
              type: 'Aerial',
              image: require('@/assets/backgrounds/homepage-1.png'),
              code: '0CB0-16C8-DAAD-B578',
              description:
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
            }"
          />
        </div>
        -->
      </div>
      <div id="s2" class="repeat section-2">
        <a class="arrow" href="#s3">
          <img src="@/assets/icons/ARROW.png" alt="" />
        </a>
      </div>
      <div id="s3" class="repeat section-3"></div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1441px) {
  .repeat .arrow {
    margin: 0;
    padding: 0;
  }
}

@media screen and (max-width: 1200px) {
  .content h2 {
    font-size: 20px;
    left: 1vw;
  }

  .arrow {
    display: none;
  }
}

.content {
  position: absolute;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}

h2 {
  color: white;
  font-family: Navine;
  font-size: 50px;
  font-weight: bold;
  left: 20.5vw;

  text-align: center;

  padding-top: 2vw;

  text-transform: uppercase;

  text-shadow: 3px 3px 4px black;

  /* writing-mode: vertical-rl; */
}
.repeat {
  width: 100%;
  display: block;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.section-1 {
  background-image: url(../assets/backgrounds/homepage-1.png);
}
.section-2 {
  position: relative;
  background-image: url(../assets/backgrounds/homepage-2.png);
}
.section-3 {
  background-image: url(../assets/backgrounds/homepage-3.png);
}

.arrow {
  position: absolute;
  transform: translate(-70%, -70%);
  bottom: 1vw;
  left: 50%;
  right: 50%;
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
  margin-left: 1.2vw;
  margin-top: 1.2vw;
}

@keyframes MoveUpDown {
  0%,
  100% {
    margin-bottom: 1vw;
  }
  50% {
    margin-bottom: 1.5vw;
  }
}
</style>

<script>
import PackComponent from "@/components/PackComponent";

export default {
  name: "Homepage",
  components: {
    PackComponent,
  },
};
</script>
