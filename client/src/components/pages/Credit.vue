<template>
  <b-container id="credit" fluid>
      <h2>THE STAFF</h2>
      <StaffCreditComponent id="content" />
  </b-container>
</template>

<style scoped>
h2 {
  font-size: 5vw;
  color: white;
  font-family: "Navine", Arial;
}
#credit {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(../../assets/backgrounds/homepage-1.png);
  background-repeat: repeat;
}
</style>

<script>
import StaffCreditComponent from "../StaffCreditComponent";

export default {
  components: {
    StaffCreditComponent,
  },
};
</script>
