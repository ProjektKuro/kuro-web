<template>
  <div class="markets">
    <p>Hier entsteht die Supermarktseite.</p>
    <Market name="Rewe" address="Virchow-Straße 66"/>
    <Market name="Kaufland" address="Blaubeurer Straße"/>
    <Market name="Edeka" address="Blaubeurer Straße"/>
    <Market name="Netto" address="Söflinger Straße"/>
    <Market name="Norma" address="Ehinger Straße"/>
    <Market name="Edeka" address="Bayern, is es alles das selbe"/>
  </div>
</template>

<script>
import Market from "../components/market/Market";
export default {
  name: "Markets",
  components: {
    Market
  }
}
</script>

<style scoped>
.markets {
  text-align: left;
}
</style>
