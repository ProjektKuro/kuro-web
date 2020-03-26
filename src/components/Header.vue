<template>
  <div id="nav">
    <div class="logo-container">
      <div class="logo-image-container" @click="hoothoot()">
        <img alt="Vue logo" class="kuro-logo" src="../assets/kuro-animated.gif" />
      </div>
      <span class="kuro-header-name">kuro.</span>
    </div>
    <div class="navbar-elements">
      <!-- <router-link class="navbar-link" to="/"> Start </router-link> -->
      <router-link class="navbar-link" to="/about">Info</router-link>
      <router-link class="navbar-link" to="/products">Produkte</router-link>
      <router-link class="navbar-link" to="/markets">Supermärkte</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    hoothoot: () => {
      console.log("click.. braces yourselves the hoot is coming.");
      return new Audio("../assets/owl1.wav").play();
    }
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
  vertical-align: center;
  margin: 0.5rem auto;
  margin-bottom: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 0.5rem;
  padding: 0 0.1rem;
  border-bottom: 1px solid lightgrey;
  /* border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem; */
}

#nav a:hover {
  color: #2c3e65;
}

#nav a.router-link-exact-active {
  color: #fff;
}

.logo-container {
  margin: 0.5rem auto;
}

.logo-image-container {
  margin: inherit;
  background-color: #ffcf02;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  padding: 0.5rem;
}

.navbar-elements {
  margin: 0.5rem auto;
  flex-wrap: wrap;
}

.kuro-logo {
  /* text-align: center; */
  /* margin: 0.25rem auto; */
  height: 6.7rem;
  width: 5.5rem;
}

.kuro-header-name {
  font: 1.875rem bold;
  padding: 0.25rem;
  margin: 0.5rem auto;
}
</style>