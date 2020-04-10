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
// import { ProductService } from "@/services/api/productService/";
// import Store from "./store/index";

export default {
  name: "App",
  components: {
    Header
  },
  mounted() {
    this.$store.commit("products/fetchAllProducts");
  }
};
</script>

<style>
body {
  background-color: #eaeaea;
  text-align: left;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f576d;
}

.content {
  margin: 1rem 1.25rem;
}
@media screen and (min-width: 544px)  {
  .content {
    margin: 1rem auto;
    max-width: 1240px;
  }
}


</style>
