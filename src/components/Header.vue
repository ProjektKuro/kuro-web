<template>
  <div id="nav">
    <div class="logo-container">
      <div class="logo-image-container" @click="hoothoot()">
        <img alt="Kuro logo" class="kuro-logo" src="../assets/logo.svg" />
      </div>
      <!--
        <span class="kuro-header-name">kuro.</span>
      -->
    </div>
    <LocaleChanger />
    <div class="navbar-elements">
      <!-- <router-link class="navbar-link" to="/"> Start </router-link> -->
      <router-link class="navbar-link" to="/about">{{ $t('Info') }}</router-link>
      <router-link class="navbar-link" to="/products">{{ $t('Products') }}</router-link>
      <router-link class="navbar-link" to="/markets">{{ $t('Supermarkets') }}</router-link>
    </div>
  </div>
</template>

<script>
import LocaleChanger from "../components/LocaleChanger";
export default {
  name: "Header",
  components: {
    LocaleChanger
  },
  methods: {
    // Easter egg from Dev team. CURRENTLY NOT WORKING.
    // hoothoot: () => {
    //   console.log("click.. braces yourselves the hoot is coming.");
    //   return new Audio("../assets/owl1.wav").play();
    // }
  }
};
</script>

<style scoped>
#nav {
  padding: 20px;
  vertical-align: center;
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #fff;
  /* color: #2c3e50; */
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
  color: #f18d5d;
}

.logo-container {
  margin: 0.5rem auto;
}

.logo-image-container {
  margin: inherit;
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
  height: 7.5rem;
  width: 7.5rem;
}

.kuro-header-name {
  font: 1.875rem bold;
  padding: 0.25rem;
  margin: 0.5rem auto;
}
</style>
