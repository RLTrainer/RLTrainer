<template>
  <b-container id="credit" fluid @showAlert="showAlert">
    <h2>THE TEAM</h2>
    <hr />
    <div class="content">
      <StaffCreditComponent
        class="item"
        job_class="Developer"
        user="xRexy"
        responsibilities="Administration|Website and Server Maintance"
        user_desc="Fullstack Developer"
        copy_data="xrexy#3616"
        :image_url="require('@/assets/personal/xrexy.png')"
        @showAlert="showAlert"
      />
      <StaffCreditComponent
        class="item"
        job_class="Designer"
        user="Xylia"
        user_desc="Interface Designer"
        responsibilities="Administration|UI Development"
        copy_data="X឵#3301"
        :image_url="require('@/assets/personal/xylia.png')"
        @showAlert="showAlert"
      />
      <StaffCreditComponent
        class="item"
        job_class="Developer"
        user="Sayykii"
        responsibilities="Administration|Website Maintance"
        user_desc="Fullstack Developer"
        copy_data="Sayykii#4632"
        :image_url="require('@/assets/personal/sayykii.png')"
        @showAlert="showAlert"
      />
    </div>
    <!-- <div class="content">
      <StaffCreditComponent
        class="item"
        job_class="Developer"
        user="xRexy"
        skills="none lol"
        user_desc="Even less than Sayykii"
        copy_data="xrexy#3616"
        :image_url="require('@/assets/personal/xrexy.png')"
        @showAlert="showAlert"
      />
      <StaffCreditComponent
        class="item"
        job_class="Designer"
        user="Xylia"
        user_desc="User Interface Designer"
        copy_data="X឵#3301"
        :image_url="require('@/assets/personal/xylia.png')"
        @showAlert="showAlert"
      />
      <StaffCreditComponent
        class="item"
        job_class="Developer"
        user="Sayykii"
        user_desc="Nothing"
        copy_data="Sayykii#4632"
        :image_url="require('@/assets/personal/sayykii.png')"
        @showAlert="showAlert"
      />
    </div> -->
    <b-alert
      :show="dismissCountDown"
      fade
      variant="success"
      class="alert"
      @dismiss-count-down="countDownChanged"
    >
      <h5>Successfully copied!</h5>
    </b-alert>
  </b-container>
</template>

<style scoped>
h2 {
  font-size: 5vw;
  color: #fff;
  font-family: Navine, Arial;
  text-align: center;
  font-weight: bold;
  margin-top: 2rem;
}

hr {
  border: 0;
  height: 3px;
  /* background: #fff; */
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #fff,
    rgba(255, 255, 255, 0)
  );
  background-size: cover;
  margin-bottom: 3.5rem;
  margin-top: 2rem;
}

#credit {
  position: absolute;
  background: url(../../assets/backgrounds/homepage-1.png) no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: auto;
  min-height: 100%;
}

.content .item {
  display: inline-block;
  margin-right: 2rem;
  margin-bottom: 2rem;
  left: 25%;
}
</style>

<script>
import StaffCreditComponent from "../StaffCreditComponent";

export default {
  components: {
    StaffCreditComponent,
  },
  data() {
    return {
      dismissSecs: 2.3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    resizeHandler() {},
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>
