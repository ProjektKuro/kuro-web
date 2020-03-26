<template>
  <div class="markets">
    <p>Hier entsteht die Supermarktseite.</p>
    <Market name="Rewe"/>
    <Market name="Kaufland"/>
    <Market name="Edeka"/>
    <Market name="Netto"/>
    <Market name="Norma"/>
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
