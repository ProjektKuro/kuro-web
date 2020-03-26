<template>
  <div class="products">
    <p>
      {{ text }}
      <br/>
      <span>Produktfilter: {{ searchQuery }}</span>
    </p>
  </div>
</template>

<script>
export default {
    name: "Products",
    components:{},
    data: () => {
        return {
          text:  "This is a products page",
          searchQuery: ""
        };
    },
    
    
}
</script>

<style scoped>

</style>
