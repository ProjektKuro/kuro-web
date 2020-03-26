<template>
  <div class="products">
    <div class="productFilter">
      <span>{{ text }}</span>
      <br />
      <br />
      <span>Produktfilter: {{ searchQuery }}</span>
      <br />
      <input v-model="searchQuery" />
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Products",
  components: {},
  data: () => {
    return {
      text: "Hier finden Sie alle Produkte von Kuro. "
          + "Wenn Sie nach einem bestimmten Produkt suchen,"
          + " dann geben Sie den Namen unten in das Suchfeld ein.",
      searchQuery: ""
    };
  }
};
</script>

<style scoped>
@media screen and (min-width: 544px) and (min-width: 1024px) {
  .products {
    margin: 1rem 35%;
  }
}

.products {
  margin: 1rem 10%;
}

.productFilter {
  text-align: left;
}
</style>
