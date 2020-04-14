<template>
  <div class="product-card" v:bind="prop-product">
    <div class="title">
      <img class="product-image" :src="product.image" alt="product-logo" />
      <h3 class="product-name">{{ $t(`Products.${product.name}`) }}</h3>
    </div>
    <div class="details">
      <p>{{product.description}}</p>
      <span>{{categoryString()}}</span>
    </div>
  </div>
</template>

<script>
export default {
  product: {},
  props: {
    product: Object
  },
  methods: {
    categoryString() {
      return this.product.categories.join(", ");
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  /* min-width: auto; */
  margin: 0.5rem 0.5rem;
  hyphens: auto;
  flex-direction: row;
}
.details {
  padding: 1rem;
}
.product-card {
  margin: 0.5rem;
  padding: 0.5rem;
  height: inherit;
  justify-content: center;
}
.product-image {
  margin: 0 1rem;
  max-width: 4rem;
}
.product-name {
  text-align: left;
  margin: 0 0.5rem;
  /* max-width: 4rem; */
}
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
