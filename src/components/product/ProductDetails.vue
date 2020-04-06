<template>
  <div class="product-details" v:bind="prop-product">
    <div class="title">
      <img class="product-image" src="@/assets/logo.svg" alt="product-logo" />
      <h3 class="product-name">{{ $t(`Products.${product.name}`) }}</h3>
    </div>
    <div class="details">
      <p>{{product.description}}</p>
      <span>{{categoryString()}}</span>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562379.503662814!2d8.212121040116859!3d51.15782082257106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sDeutschland!5e0!3m2!1sde!2sde!4v1585514430355!5m2!1sde!2sde"
        width="100%"
        height="400"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
.product-details {
  text-align: left;
  margin: 10px;
  padding: 10px 30px;
  background-color: #c6e2e6;
  border: 1px solid #c6e2e6;
  border-radius: 5px;
  max-width: 100%;

}

.product-details .title {
  display: flex;
  flex-direction: row;
}
.product-details .product-image {
  margin: 0;
  max-width: 6rem;
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
