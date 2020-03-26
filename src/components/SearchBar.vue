<template>
  <div>
    <a>{{ searchBoxDefault }}</a>
    <br />
    <input v-model="searchBoxDefault" class="searchBar"  />
  </div>
</template>

<script>
export default {
    name: "SearchBar",
    data: (() => {
      return {
        searchBoxDefault: "Begriff zum Suchen eingeben...",
      }
    },
};
</script>

<style scoped>
.searchBox {
  width: 15rem;
}
</style>
          
