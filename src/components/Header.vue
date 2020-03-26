<template>
  <div id="nav">
    <div class="logo-container">
        <img alt="Vue logo" class="kuro-logo" src="../assets/kuro-animated.gif" />
    </div>
    <div>
      <router-link to="/">Start</router-link> |
      <router-link to="/markets">Supermärkte</router-link> |
      <router-link to="/products">Produkte</router-link> |
      <router-link to="/about">Info</router-link>
    </div>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
  vertical-align: center;
  margin: 0 auto;
  margin-bottom: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fff;
}

.logo-container {
  margin: 1rem auto;
  background-color: #ffcf02;
  width: 7rem;
  height: 7rem;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  padding: 0.5rem;
}

.kuro-logo {
  /* text-align: center; */
  /* margin: 0.25rem auto; */
  height: 6.7rem;
  width: 5.5rem;
}
</style>