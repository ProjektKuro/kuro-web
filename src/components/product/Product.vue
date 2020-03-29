<template>
  <div class="product-container">
    <div class="product">
      <img class="product-image" src="@/assets/logo.svg" alt="product-logo" />
      <span class="product-name" v:bind="prop-name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    name
  },
  // data: () => {
  //     return {};
  // },
  methods: {}
};
</script>

<style scoped>
.product-image {
  margin: 0.1rem auto;
  max-width: 4rem;
}
.product-container {
  width: calc(100% / 4);
}
.product {
  display: flex;
  flex-direction: column;
  width: 94%;
  height: calc(90% - 2px);
  border: 1px solid #c6e2e6;
  border-radius: 5px;
  -webkit-box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin: calc(3% - 2px);
  background-color: #c6e2e6;
}
.product:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
}
.product p,
span {
  color: #000;
}
@media only screen and (max-width: 768px) {
  .product-container {
    width: calc(100% / 2);
  }
}
</style>
