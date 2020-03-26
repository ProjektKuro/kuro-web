<template>
  <div id="app">
    <Header />
    <div class="content">
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
};
</script>

<style>
body {
  background-color: #c6e3e6;
  /* font-size: 12px; */
  /* background-color: #6dd3fc; */
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 1rem 2rem;
}

@media screen and (min-width: 544px)  {
  .content {
    margin: 1rem 30%;
  }
}

.content {
  margin: 1rem 1.25rem;
}
</style>
