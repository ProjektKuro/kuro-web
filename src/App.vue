<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
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
  color:#fff;
}

@media screen and (min-width: 544px)  {
  .content {
    margin: 1rem 30%;
  }
}

.content {
  margin: 1rem 1.25rem;
}
.content p, span, li {
  color: #fff;
}


</style>
