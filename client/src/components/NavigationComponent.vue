<template>
  <div>
    <b-navbar id="b-navbar" :style="navbar_style" type="dark">
      <a href="#"
        ><img
          id="logo"
          :src="require('../assets/RL-TRAINER.png')"
          height="100em"
        />
      </a>
      <b-navbar-nav id="b-navbar-nav-1">
        <b-nav-item class="b-navbar-nav-1-item" href="#"
          >Training packs</b-nav-item
        >
        <div class="dropdown-content">
          <a href="#">Bronze</a>
          <a href="#">Silver</a>
          <a href="#">Gold</a>
          <a href="#">Platinum</a>
          <a href="#">Diamond</a>
          <a href="#">Champion</a>
          <a href="#">Grand champion</a>
        </div>
        <div class="split"></div>
        <b-nav-item class="b-navbar-nav-1-item" href="#"
          >Workshop Maps</b-nav-item
        >
        <b-nav-item class="b-navbar-nav-1-item" href="#">Credit</b-nav-item>
        <b-nav-item class="b-navbar-nav-1-item" href="#">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <form>
          <div class="search-icon">
            <div class="search__container">
              <input class="search__input" type="text" placeholder="Search" maxlength="29" />
            </div>
          </div>
        </form>

        <b-nav-item-dropdown class="user" right>
          <template #button-content>
            <em>xXProGamerXx69Xx</em>
          </template>
          <b-dropdown-item class="user-item" href="#">Profile</b-dropdown-item>
          <b-dropdown-item class="user-item" href="#">Sign Out</b-dropdown-item>
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
  </div>
</template>

<style scope>
#logo {
  height: 4.5em;
  width: auto;
  padding-left: 1em;
}

.b-navbar-nav-1-item {
  margin-right: 2.6em;
  font-size: 2.3em;
  letter-spacing: 1.6px;
  font-family: "Navine", Arial;
  margin-top: 0.3em;
  text-transform: uppercase;
}

.b-navbar-nav-1-item:hover {
  border-bottom: 1px solid white;
}

.b-navbar-nav-1-item:first-child {
  margin-left: 1.3em;
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
  min-width: 19.1em;
  margin-left: 3em;
  margin-top: 5.5em;
  z-index: 1;
}

.dropdown-content a {
  color: #8e9494;
  padding: 12px 16px;
  font-family: "Navine", Arial;
  font-size: 1.7em;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
}

.dropdown-content a:hover {
  color: white;
  text-decoration: none;
  font-size: 1.8em;
}

#search {
  background-color: transparent;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #8e9494;
  font-family: "Navine", Arial;
  font-size: 1.4em;
  width: 16em;
  height: 2em;
  color: white;
}
#search:focus {
  border-color: white;
}

.search-icon .search__input {
  width: 16em;
  padding: 0.5em 1em;

  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;

  color: white;
  background-color: transparent;

  background-image: url(../assets/icons/search.svg);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  font-size: 1.6em;
}

.search-icon .search__input::placeholder {
  color: rgba(87, 87, 86, 0.8);
  font-family: "Navine", Arial;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1em;
  font-weight: bold;
}

.search-icon .search__input:hover,
.search__input:focus {
  padding: 0.5em 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #8e9494;
  border-radius: 0;
  background-position: 100% center;
}

.user {
  font-family: Arial;
  font-size: 2.2em;
  margin-left: 0.6em;
}

.user-item {
  font-size: 1.5em;
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
