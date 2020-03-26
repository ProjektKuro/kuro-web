<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header";



export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style>
body {
  /* background-color: #c6e3e6; */
  background-color: #6dd3fc;
  /* font-size: 12px; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 1.25rem 2rem;
}

</style>
