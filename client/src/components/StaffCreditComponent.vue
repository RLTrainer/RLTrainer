<template>
  <div class="card-container">
    <span :class="job_class">{{ job_class }}</span>
    <img
      class="round"
      :src="image_url"
      :alt="user"
    />
    <h3>{{ user }}</h3>
    <p v-for="__desc in desc_arr" :key="__desc">{{ __desc }}</p>
    <div class="buttons">
      <button
        :value="copy_data"
        class="primary"
        v-clipboard="copy_data"
        @click="$emit('showAlert', $event.target.value)"
      >
        Discord
      </button>
    </div>
    <div class="skills">
      <h6>Responsibilities</h6>
      <ul>
        <li v-for="__res in responsibilities_arr" :key="__res">{{ __res }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

/* * {
  box-sizing: border-box;
}

body {
  background-color: #28223f;
  font-family: Montserrat, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;
  margin: 0;
} */

h3 {
  margin: 10px 0;
  font-size: 1.8em;
}

p {
  font-size: 1.2em;
  line-height: 21px;
}

.card-container { 
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
}

.card-container .Pro {
  color: #231e39;
  background-color: #febb0b;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.card-container .Developer {
  color: #231e39;
  background-color: #ff6363;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.card-container .Designer {
  color: #231e39;
  background-color: #3ad661;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.card-container .round {
  border: 1px solid rgb(169, 169, 169);
  border-radius: 50%;
  padding: 7px;
}

button.primary {
  background-color: #7299da;
  border: 1px solid #7299da;
  border-radius: 3px;
  color: #231e39;
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899c;
}

.skills {
  background-color: #1f1a36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid #2d2747;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>

<script>
export default {
  props: {
    job_class: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    user_desc: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
      default() {
        return "None";
      },
    },
    copy_data: {
      type: String,
      required: true,
      default() {
        return "https://discord.gg/actualDiscord";
      },
    },
    image_url: {
      type: Object,
      required: true,
    },
  },
  computed: {
    responsibilities_arr() {
      return this.responsibilities.split('|');
    },
    desc_arr() {
      return this.user_desc.split('*n');
    },
  }
};
</script>
