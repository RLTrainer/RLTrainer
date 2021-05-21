<template>
  <div>
      <NavigationComponent
        id="nav"
        navbar_style="padding: 0.6vw; background-color: #292929; width: 100%;"
      />
    <div class="content">
      <div id="s1" class="repeat section-1">
        <!-- <RankCard rank_name="Silver V" rank_type="Shooter" /> -->
        <a class="arrow" href="#s2"
          ><img src="../../assets/icons/ARROW.png" alt=""
        /></a>
      </div>
      <div id="s2" class="repeat section-2">
        <!-- <RankCard rank_name="Gold V" rank_type="Type" /> -->
        <a class="arrow" href="#s3"
          ><img src="../../assets/icons/ARROW.png" alt=""
        /></a>
      </div>
      <div id="s3" class="repeat section-3">
        <RankCard rank_name="Diamond V" rank_type="Defender" />
        <StaffCreditComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: absolute;
  height: 100%;
  width: 100%;
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
  left: 50%;
  bottom: 0%;
  animation: MoveUpDown 1.6s linear infinite;
  -webkit-animation: MoveUpDown 1.6s linear infinite;
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
import NavigationComponent from "../NavigationComponent";
import RankCard from "../RankCard";
import StaffCreditComponent from "../StaffCreditComponent";

export default {
  name: "Homepage",
  components: {
    NavigationComponent,
    RankCard,
    StaffCreditComponent,
  },
};
</script>
