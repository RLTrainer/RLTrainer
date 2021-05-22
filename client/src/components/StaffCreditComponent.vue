<template>
  <div class="container">
    <div class="row">
      <div class="card col-lg-3 col-md-8 col-sm-6 col-xs-2">
        <h2>xrexy</h2>
        <div class="title title--programmer">Programmer</div>
        <!-- <div class="desc">
            David can develop any kind of software, he started learning to code
            for about 10 years!
          </div> -->
        <img class="avatar" src="../assets/personal/xrexy.png" alt="xrexy" />
        <!-- <div class="actions">
            <button class="actions__like">
              like &nbsp; <i class="fas fa-heart"></i>
            </button>
            <button class="actions__trade">
              trade &nbsp; <i class="fas fa-exchange-alt"></i>
            </button>
            <button class="actions__cancel">
              close &nbsp; <i class="fas fa-times"></i>
            </button>
          </div> -->
      </div>
      <div class="card col-lg-3 col-md-8 col-sm-6 col-xs-2">
        <h2>Xylia</h2>
        <div class="title title--designer">Designer</div>
        <!-- <div class="desc">
              Morgan has collected ants since they were six years old and now has
              many dozen ants but none in their pants.
            </div> -->
        <img class="avatar" src="../assets/personal/xylia.png" alt="xylia" />
        <!-- <div class="actions">
              <button class="actions__like">
                like &nbsp; <i class="fas fa-heart"></i>
              </button>
              <button class="actions__trade">
                trade &nbsp; <i class="fas fa-exchange-alt"></i>
              </button>
              <button class="actions__cancel">
                close &nbsp; <i class="fas fa-times"></i>
              </button>
            </div> -->
      </div>
      <div class="card col-lg-3 col-md-8 col-sm-6 col-xs-2">
        <h2>Sayykii</h2>
        <div class="title title--programmer">Programmer</div>
        <!-- <div class="desc">
            Isaac know very well every dollar and can identify fake ones from 10
            miles away.
          </div> -->
        <img
          class="avatar"
          src="../assets/personal/sayykii.png"
          alt="sayykii"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

.container {
  display: block;
  position: relative;
}

.card {
  margin: 1rem;
  width: 200px;
  height: 300px;
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 12px 32px 4px rgba(black, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.title {
  color: white;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  transition: 0.2s;
  cursor: pointer;
  margin-bottom: 2vw;
}

.title--programmer {
  background-color: #8c14fc;
}

.title--programmer:hover {
  cursor: default;
}

.title--designer {
  background-color: #0be397;
}

.title--programmer:hover {
  cursor: default;
}

.desc {
  text-align: center;
}
/* 
.actions {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.actions__like:hover {
  background-color: #00b16a;
}

.actions__trade:hover {
  background-color: #3498db;
}

.actions__cancel:hover {
  background-color: #c0392b;
}

.actions__github:hover {
  background-color: #6f42c1;
}

.actions__discord:hover {
  background-color: #7289DA;
} */

button {
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  outline: 0;
  transition: background-color 0.4s, color 0.4s, transform 0.1s;
}
button:hover {
  color: white;
  box-shadow: 0 0 24px rgba(black, 0.2);
}

button:active {
  transform: scale(0.95);
  box-shadow: 0 0 16px rgba(black, 0.3);
}

p {
  margin-top: 1rem;
  color: #484848;
}

a:link,
a:visited {
  text-decoration: none;
  color: #2574a9;
}

.active {
  background-color: #00b16a;
}

button::-moz-focus-inner {
  border: 0;
}

.avatar {
  height: 5.2vw;
  width: auto;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>

<script>
export default {};
</script>
