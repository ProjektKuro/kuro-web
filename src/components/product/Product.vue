<template>
  <div class="product">
    <img class="product-image" src="@/assets/logo.svg" alt="product-logo" />
    <span class="product-name" v:bind="prop-name">{{ name }}</span>
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
.product {
  display: flex;
  flex-direction: column;
  min-width: 30%;
  max-width: 30%;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0.5rem;
  margin: 0.5rem 0.1rem;
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
.product {
  text-align: center;
  margin: 0.5rem 0.25rem;
}
</style>
