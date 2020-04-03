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

    <div id="market-search">
      <MapView
        :shops="shops"
        :ownPosition="{latitude:location.coords.latitude, longitude:location.coords.longitude }"
        v-if="!gettingLocation && shops.length !== 0"
      />

      <div id="position-properties">
        <select id="distances" @change="updateRadius()" v-model="distance">
          <option value="1000">{{ $t('Markets.Distance', { distance: 1000 }) }}</option>
          <option value="2500" selected>{{ $t('Markets.Distance', { distance: 2500 }) }}</option>
          <option value="5000">{{ $t('Markets.Distance', { distance: 5000 }) }}</option>
          <option value="10000">{{ $t('Markets.Distance', { distance: 10000 }) }}</option>
        </select>
      </div>
    </div>

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
      distance: 2500,
      page: 0,
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
    updateRadius() {
      this.shops = [];
      this.loadData();
    },
    scroll() {
      let that = this;
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (!that.gettingLocation && bottomOfWindow) {
          that.page++;
          that.loadData();
        }
      };
    },
    loadData(lat, long) {
      if (this.gettingLocation) {
        return;
      }
      if (!lat) {
        lat = this.location.coords.latitude;
      }
      if (!long) {
        long = this.location.coords.longitude;
      }
      // GET request
      this.$http
        .get(
          `https://kuro.tlahmann.com/api/shops?lat=${lat}&long=${long}&distance=${this.distance}&pageSize=10&page=${this.page}&include=address`,
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
            success.body.shops.forEach(s => this.shops.push(s));
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
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style scoped>
.markets {
  text-align: left;
}
#market-search {
  display: flex;
  flex-flow: row;
  align-content: space-around;
}
#position-properties {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(20% - 10px); /* separate properties for IE11 upport */
  margin-right: auto;
}
</style>
