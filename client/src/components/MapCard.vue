<template>
  <div>
    <ul>
      <li
        class="booking-card"
        style="background-image: url(../assets/backgrounds/homepage-2.png )"
      >
        <img id="bgimg" src="../assets/backgrounds/homepage-3.png" alt="" />
        <div class="book-container">
          <div class="content">
            <button class="btn">42B5-985A-EF76-12A1</button>
          </div>
        </div>
        <div class="informations-container">
          <h2 class="title">Power Shots</h2>
          <p class="sub-title">you will learn how to flip yes</p>
          <p class="price">Created by: xRexy</p>
          <div class="more-information">
            <div class="info-and-date-container"></div>
            <p class="disclaimer">A very good map yes</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Sofia", sans-serif;
}

h2 {
  color: #0a4870;
  font-weight: 500;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

ul .booking-card {
  position: relative;
  width: 300px;
  display: flex;
  flex: 0 0 350px;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 30px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  text-align: center;
  color: #0a4870;
  transition: 0.3s;
}

ul .booking-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 72, 112, 0);
  transition: 0.3s;
}

ul .booking-card .book-container {
  height: 0px;
  position: fixed;
}

ul .booking-card .book-container .content {
  position: relative;
  opacity: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  transform: translateY(-10px);
  transition: 0.3s;
}

ul .booking-card .book-container .content .btn {
  /* 	border: 3px solid white; */
  position: relative;
  padding: 10px 10px;
  background: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3em;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

ul .booking-card .book-container .content .btn:hover {
  background: white;
  border: 0px solid white;
  color: #0a4870;
}

ul .booking-card:hover::before {
  background: rgba(10, 72, 112, 0.6);
}

ul .booking-card:hover .book-container .content {
  opacity: 1;
  transform: translateY(0px);
}

@media (max-width: 768px) {
  ul .booking-card::before {
    background: rgba(10, 72, 112, 0.6);
  }
  ul .booking-card .book-container .content {
    opacity: 1;
    transform: translateY(0px);
  }
  ul .booking-card .informations-container {
    transform: translateY(0px);
  }
  ul .booking-card .informations-container .more-information {
    opacity: 1;
  }
}

h1 {
  margin: 10px 20px;
}
</style>
