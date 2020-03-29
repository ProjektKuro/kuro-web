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
  background-color: #0f576d;
  text-align: left;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media screen and (min-width: 544px)  {
  .content {
    margin: 1rem 30%;
  }
}

.content {
  margin: 1rem 1.25rem;
}
.content p, span {
  color: #fff;
}


</style>
