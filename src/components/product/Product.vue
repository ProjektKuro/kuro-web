<template>
  <div class="details" v:bind="prop-product">
    <img class="product-image" src="@/assets/logo.svg" alt="product-logo" />
    <span class="product-name">{{ $t(`Products.${product.name}`) }}</span>
  </div>
</template>

<script>
export default {
  product: {},
  props: {
    product: Object
  },
  methods: {}
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  padding: 10px;
  background-color: #c6e2e6;
  border: 1px solid #c6e2e6;
  border-radius: 5px;
}
.details .product-image {
  margin: 0 auto;
  max-width: 4rem;
}
/* .details .product-name {
  margin: 0.1rem auto;
  max-width: 4rem;
} */
/* .product {
  display: flex;
  flex-direction: column;
  width: 94%;
  height: calc(90% - 2px);
  border: 1px solid #c6e2e6;
  border-radius: 5px;
  -webkit-box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.3s;
  transition: 0.5s all;
  margin: calc(3% - 2px);
  background-color: #c6e2e6;
} */
.product:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
}
.product p,
span {
  color: #000;
}
</style>
