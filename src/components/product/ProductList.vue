<template>
  <div>
    <Product 
        :key="product.name"
        name="{product.name}"
        v-for="product in list"
    />
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    list: []
  }
};
</script>