<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "MapView",
  props: {
    shops: Array,
    ownPosition: Object
  },
  data() {
    return {
      map: null,
      tileLayer: null,
      layers: [
        {
          id: 0,
          name: "OwnPosition",
          active: true,
          features: [
            {
              id: 0,
              prop: "Own Position",
              type: "position",
              coords: [this.ownPosition.latitude, this.ownPosition.longitude]
            }
          ]
        },
        {
          id: 0,
          name: "Markets",
          active: true,
          features: []
        }
      ]
    };
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView(
        [this.ownPosition.latitude, this.ownPosition.longitude],
        15
      );
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          minZoom: 12,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers() {
      this.shops.forEach((shop, i) =>
        this.layers[1].features.push({
          id: i,
          prop: shop,
          type: "shop",
          coords: [shop.location.coordinates[0], shop.location.coordinates[1]]
        })
      );
      this.layers.forEach(layer => {
        // Initialize the layer
        layer.features.forEach(feature => {
          let icon =
            feature.type === "position"
              ? L.icon({
                  iconUrl: require("../assets/markerPosition.png"),
                  iconSize: [50, 50],
                  iconAnchor: [25, 25]
                })
              : L.icon({
                  iconUrl: require("../assets/markerMarket.png"),
                  iconSize: [50, 50],
                  iconAnchor: [25, 31]
                });
          let popup =
            feature.type === "position"
              ? `<h3>Eigene Position</h3>`
              : `<h3>Supermarkt</h3><b>${feature.prop.name}</b><br/><b>${feature.prop.address.address}</b><br/><small>${feature.prop.address.postalCode} ${feature.prop.address.city}</small>`;
          feature.leafletObject = L.marker(feature.coords, {
            icon
          }).bindPopup(popup);
          feature.leafletObject.addTo(this.map);
        });
      });
    }
  }
};
</script>
    
<style scoped>
#map {
  width: 100%;
  height: 540px;
  max-width: 720px;
  margin-right: 20px;
  margin-left: auto;
  border-radius: 5px;
  border: 1px solid #c6e2e6;
  box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
}
</style>
