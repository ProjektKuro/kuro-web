<template>

  <div class="market">
      <v-expansion-panel-header class="shop-text">
        <img class="shop-image" src="@/assets/ic_markt.svg" alt="shop-logo" />
        <div class="shop-text">
          <span class="shop-name" v:bind="prop-name">{{ name }}</span>
          <span
            class="shop-address"
            v:bind="prop-address"
          >{{ (address || {address: 'noAddress'}).address }}</span>
          <small class="shop-address" v:bind="prop-address">{{ (address || {postalCode: ''}).postalCode }} {{ (address || {city: ''}).city }}</small>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
    </div>
</template>

<script>
export default {
  name: "Market",
  address: {},
  props: {
    name: String,
    address: {}
  },
  // data: () => {
  //     return {};
  // },
  methods: {}
};
</script>

<style scoped>
.market {
  background-color: #c6e2e6;
}

.shop-image {
  margin: 0 0.75rem;
  max-width: 3.5rem;
}

.shop-text {
  text-align: left;
}

.shop-text .shop-name,
.shop-text .shop-address {
  color: #0f576d;
}

.shop-name {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
}

.shop-address {
  display: block;
}
</style>
