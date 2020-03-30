<template>
  <div class="markets">
    <p>Hier entsteht die Supermarktseite.</p>

    <div v-if="errorStr">
      Sorry, but the following error
      occurred: {{errorStr}}
    </div>

    <div v-if="gettingLocation">
      <i>Getting your location...</i>
    </div>

    <MapView
      :shops="shops"
      :ownPosition="{latitude:location.coords.latitude, longitude:location.coords.longitude}"
      v-if="!gettingLocation && shops.length !== 0"
    />

    <Market v-for="(shop, i) in shops" :key="`Lang${i}`" :name="shop.name" :address="shop.address" />
  </div>
</template>

<script>
import Market from "../components/market/Market";
import MapView from "../components/MapView";
export default {
  name: "Markets",
  components: {
    Market,
    MapView
  },
  data() {
    return {
      location: null,
      gettingLocation: true,
      errorStr: null,
      shops: []
    };
  },
  methods: {
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
          reject(new Error("Geolocation is not available."));
        }
        navigator.geolocation.getCurrentPosition(
          pos => {
            resolve(pos);
            this.loadData(pos.coords.latitude, pos.coords.longitude);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async locateMe() {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
    loadData(lat, long) {
      // GET request
      this.$http
        .get(
          `https://kuro.tlahmann.com/api/shops?lat=${lat}&long=${long}&distance=3000&pageSize=25&page=0&include=address`,
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
  },
  created() {
    this.locateMe();
  }
};
</script>

<style scoped>
.markets {
  text-align: left;
}
</style>
