<template>
  <div class="products">
    <div class="productFilter">
      <span>{{ text }}</span>
      <br />
      <br />
      <span class="search-filter">Produktfilter: {{ inputSearchQuery }}</span>
      <br />
      <input v-model="inputSearchQuery" />
      <button class="set-filter-btn" @click="setSearchQuery(inputSearchQuery)" />
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
      inputSearchQuery: "",
      _searchQuery: ""
    };
  },
  methods: {
    setSearchQuery(query) {
      this.data._searchQuery = query; 
    },
    getSearchQuery() {
      return this.data._searchQuery;
    }
  }
};
</script>

<style scoped>

.productFilter {
  text-align: left;
  word-wrap: break-word;
}
</style>
