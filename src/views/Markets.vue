<template>
  <div class="markets">
    <p>Hier entsteht die Supermarktseite.</p>
    <Market
      v-for="(shop, i) in shops"
      :key="`Lang${i}`"
      :name="shop.name"
      :address="shop.address.address"
    />
  </div>
</template>

<script>
import Market from "../components/market/Market";
export default {
  name: "Markets",
  components: {
    Market
  },
  data() {
    return {
      shops: []
    };
  },
  created() {
    // GET request
    this.$http
      .get(
        "https://kuro.tlahmann.com/api/shops?lat=48.39841&long=9.99155&distance=2000&pageSize=25&page=0&include=address",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
            "Access-Control-Allow-Headers":
              "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      )
      .then(
        success => {
          // get body data
          this.shops = success.body.shops;
        },
        failure => {
          // error callback
          console.log(failure);
        }
      );
  }
};
</script>

<style scoped>
.markets {
  text-align: left;
}
</style>
