<template>
  <div class="card" v-clipboard="map.code">
    <div
      :style="{
        background: 'url(' + map.image + ') no-repeat center center',
      }"
      class="card-image"
    >
      <span>{{ map.code }}</span>
    </div>
    <!-- <div class="card-image"></div> -->

    <div class="card-text">
      <h2>
        {{ map.name }} <span class="author">{{ map.author }}</span>
      </h2>
      <p>Some random ass description</p>
      <!-- <p id="code">{{ map.code }}</p> -->
    </div>
    <div class="card-stats">
      <div class="stat">
        <div class="value">132</div>
        <div class="type">Likes</div>
      </div>
      <div class="stat">
        <div class="value">32</div>
        <div class="type">Comments</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  width: 14vw;
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 1px;
}

@media screen and (max-width: 1300px) {
  .card {
    width: 40vw;
    font-size: 8px;
    text-align: left;
  }

  p {
    display: none;
  }

  .card-image {
    display: none;
  }

  span {
    display: none;
  }
}

#code {
  padding-top: 0.5vw;
}

.card-image span {
  position: relative;
  top: 40%;
  color: white;
  font-size: 30px;
  font-family: "Navine", Arial;
  display: none;
}

.card-image {
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
  height: 12vh;
}

.card-text {
  grid-area: text;
  margin: 25px;
}
.card-text .author {
  color: rgb(255, 7, 110);
  font-size: 15px;
}
.card-text p {
  color: grey;
  font-size: 16px;
  font-weight: 300;
}
.card-text h2 {
  margin-top: 0px;
  font-size: 28px;
}

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
  transform: scale(1.02);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}

.card:hover .card-image span{
  display: block;
}
</style>

<script>
export default {
  props: {
    map: {
      required: true,
      type: Object,
    },
  },
};
</script>
