<template>
  <b-container fluid>
    <b-row>
      <b-navbar id="b-navbar" :style="navbar_style" type="dark">
        <a href="/"
          ><img
            id="logo"
            :src="require('../assets/RL-TRAINER.png')"
            height="100em"
          />
        </a>
        <b-navbar-nav id="b-navbar-nav-1">
          <b-nav-item class="b-navbar-nav-1-item" href="/packs"
            >Training packs</b-nav-item
          >
          <!-- <div class="dropdown-content">
            <a href="#">Bronze</a>
            <a href="#">Silver</a>
            <a href="#">Gold</a>
            <a href="#">Platinum</a>
            <a href="#">Diamond</a>
            <a href="#">Champion</a>
            <a href="#">Grand champion</a>
          </div> -->
          <b-nav-item class="b-navbar-nav-1-item" href="/maps"
            >Workshop Maps</b-nav-item
          >
          <b-nav-item class="b-navbar-nav-1-item" href="/theteam"
            >The Team</b-nav-item
          >
          <!-- <a href="https" target="_blank"> -->
            <b-nav-item href="/discord" class="b-navbar-nav-1-item">Discord</b-nav-item>
          <!-- </a> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <form>
            <div class="search-icon">
              <div class="search__container">
                <input
                  class="search__input"
                  type="text"
                  placeholder="Search"
                  maxlength="100"
                />
              </div>
            </div>
          </form>

          <b-nav-item-dropdown class="user" right>
            <!-- <div v-if></div> IF LOGGED IN-->
            <!-- <div v-else></div> IF NOT LOGGED IN-->
            <template #button-content>
              <em>xXProGamerXx69Xx</em>
            </template>
            <b-dropdown-item class="user-item" href="#"
              >Profile</b-dropdown-item
            >
            <b-dropdown-item class="user-item" href="#"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <!-- <b-nav-item-dropdown class="user" right>
          <template #button-content>
            <em>Profile</em>
          </template>
          <b-dropdown-item class="user-item" href="#">Login</b-dropdown-item>
          <b-dropdown-item class="user-item" href="#">Register</b-dropdown-item>
        </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-navbar>
    </b-row>
  </b-container>
</template>

<style scope>
@media screen and (max-width: 900px) {
  form {
    display: none;
  }
}

#logo {
  height: 2.3vw;
  width: auto;
  padding-left: 1vw;
}

#b-navbar a {
  padding-bottom: 0.1vw;
}

#b-navbar {
  text-align: center;
}

.b-navbar-nav-1-item {
  margin-right: 2.3vw;
  font-size: 1.3vw;
  letter-spacing: 1.6px;
  font-family: "Navine", Arial;
  text-transform: uppercase;
}

.b-navbar-nav-1-item:hover {
  border-bottom: 1px solid white;
}

.b-navbar-nav-1-item:first-child {
  margin-left: 1.3vw;
}

.b-navbar-nav-1-item:hover + .dropdown-content {
  cursor: pointer;
  display: block;
}

.dropdown-content:hover {
  cursor: pointer;
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #292929;
  min-width: 10.75vw;
  margin-left: 1.25vw;
  margin-top: 2.6vw;
  z-index: 1;
}

.dropdown-content a {
  color: #8e9494;
  padding: 12px 16px;
  font-family: "Navine", Arial;
  font-size: 1vw;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
}

.dropdown-content a:hover {
  color: white;
  text-decoration: none;
  font-size: 1.05vw;
}

.search-icon .search__input {
  width: 16vw;
  padding: 0.4vw 2vw;

  background-color: transparent;
  transition: transform 250ms ease-in-out;
  line-height: 18px;

  color: white;
  background-color: transparent;

  background-image: url(../assets/icons/search.svg);
  background-repeat: no-repeat;
  background-size: 0.7vw 0.7vw;
  background-position: 5% center;
  border-radius: 25vw;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  font-size: 0.9vw;
  outline: 0;
}

.search-icon .search__input::placeholder {
  color: rgba(87, 87, 86, 0.8);
  font-family: "Navine", Arial;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1vw;
  font-weight: bold;
}

/* .search-icon .search__input:hover,
.search__input:focus {
  padding: 0.3vw 0;
  outline: 0;
  border-radius: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #8e9494;
  background-position: 100% center;
} */

.user {
  font-family: Arial;
  font-size: 1.05vw;
  text-align: center;
  margin-left: 0.6vw;
}

.user-item {
  font-size: 1vw;
  padding-left: 0.3vw;
  padding-right: 0.3vw;
}

a {
  text-decoration: none;
  outline: none;
  border: none;
}
</style>

<script>
export default {
  props: {
    navbar_style: {
      required: true,
      type: String,
    },
  },
};
</script>
