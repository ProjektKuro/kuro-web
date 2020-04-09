<template>
  <div class="details" v:bind="prop-product">
    
    <ProductDetails :product="product" />
  </div>
</template>

<script>
import ProductDetails from "@/components/product/ProductDetails";

export default {
  product: {},
  components: {
    ProductDetails
  },
  computed: {
    productNameSelected: {
      get() {
        return this.$store.getters.productByName;
      },
      set(productName) {
        this.productNameSelected = productName;
      }
    }
  },
  props: {
    product: Object
  },
  methods: {
    isSelected() {
      return this.productNameSelected === this.product.name;
    }
  }
};
</script>

<style scoped>
.details {
  height: inherit;
  display: flex;
  flex-direction: column;
  text-align: left;
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
