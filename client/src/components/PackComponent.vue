<template>
  <div class="card" v-clipboard="map.code">
    <div
      :style="{
        background: 'url(' + map.image + ') no-repeat center center',
      }"
      class="card-image"
    >
      <img class="type-image" :src="this.getTypeImage" alt="{{map.type}}">

      <span>{{ map.code }}</span>
      <span>Uploaded by <span style="display: inline-block;">{{map.author}}</span></span>
    </div>

    <div class="card-text">
      <h2 id="map-title">
        {{ map.name }}
        <!-- <span class="author">{{ map.author }}</span> -->
      </h2>
      <!-- <div id="desc">
        <p>{{ map.description }}</p>
      </div> -->
      <!-- <p id="code">{{ map.code }}</p> -->
    </div>
    <!-- <div class="card-stats">
      <div class="stat">
        <div class="value">132</div>
        <div class="type">Likes</div>
      </div>
      <div class="stat">
        <div class="value">32</div>
        <div class="type">Comments</div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
@media screen and (max-width: 1200px) {
  .card {
    width: 30vw;
    font-size: 10px;
  }

  .card-text #desc {
    height: 0;
  }

  #map-title {
    font-size: 10px;
    text-align: center;
  }

  #map-title span {
    font-size: 9px;
  }

  .card .card-stats {
    display: none;
  }

  p {
    display: none;
  }

  /* .card-image {
    display: none;
  } */

  .value {
    display: none;
  }

  .type {
    display: none;
  }

  .card-image span>* {
    display: none;
  }
}

.type-image {
  width: 20%;
  height: auto;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,.6));
  position: absolute;
  display: flex;
}

.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";

  width: 18vw;
  height: 22vh;

  border-radius: 18px;
  background: black;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: Roboto, Arial;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  margin: 1px;
  border: none;
}

/* #desc {
  height: 11vh;
  overflow: hidden;
} */

#code {
  font-size: 90px;
  padding-top: 0.5vw;
  display: none;
}


.card-image span {
  position: relative;
  top: 40%;
  color: white;
  font-size: 25px;
  font-family: "Navine", Arial;
  display: none;
}

.card-image {
  z-index: 1;
  grid-area: image;
}
.card-text {
  grid-area: text;
}
.card-stats {
  grid-area: stats;
}

.card-image {
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: contain;
  height: 16vh;

  border-bottom: 3px solid #1da1da;
}

.card-text {
  grid-area: text;
  margin-top: 1vh;
}
.card-text .author {
  color: rgb(255, 7, 110);
  font-size: 15px;
}
.card-text p {
  color: grey;
  font-size: 14px;
  font-weight: 300;

  padding: 0;
  margin: 0;
}
.card-text h2 {
  font-size: 28px;
  font-family: Navine, Arial;

  color: white;
}

.card-image span {
  text-shadow: 3px 3px 4px black;
}

.card-image span:last-child{
  color: white;
  font-size: 16px;
}
.card-type

/* .card-image span:last-child span {
  color: aqua;
} */

.card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(255, 7, 110);
}

.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  padding: 10px;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
}

.card:hover .card-image span {
  display: block;
}

/* .card:hover .card-image>* {
  filter: blur(1px);
} */
</style>

<script>
export default {
  props: {
    map: {
      required: true,
      type: Object,
    },
  },
  computed: {
    getTypeImage() {
      return require(`@/assets/map_type_icons/${this.map.type}.png`);
    }
  }
};
</script>
