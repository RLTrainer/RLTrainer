<template>
  <div>
    <b-navbar id="b-navbar" :style="navbar_style" type="dark">
      <a href="#"><b-img :src="require('../assets/RL-TRAINER.png')" height="100em"></b-img></a>
      <div id="split"></div>

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
            <input placeholder="Search" type="text" id="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scope>
.b-navbar-nav-1-item {
  margin-right: 2.6em;
  font-size: 2.3em;
  letter-spacing: 1.6px;
  font-family: "Navine", Arial;
  margin-top: 0.35em;
  text-transform: uppercase;
}

.b-navbar-nav-1-item:hover {
  border-bottom: 1px solid white;
}

.b-navbar-nav-1-item:first-child {
  margin-left: 1.3em;
}

font-awesome-icon {
  padding-left: 2em;
}

.split {
  margin-right: 0.2em;
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
  color: #8E9494;
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
  border-bottom: 2px solid #8E9494;
  font-family: "Navine", Arial;
  font-size: 1.4em;
  width: 16em;
  height: 3em;
  color: white;
}
#search:focus {
  border-color:white;
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