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
              name: "Own Position",
              type: "marker",
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
          name: shop.name,
          type: "marker",
          coords: [shop.location.coordinates[0], shop.location.coordinates[1]]
        })
      );
      this.layers.forEach(layer => {
        // Initialize the layer
        const markerFeatures = layer.features.filter(
          feature => feature.type === "marker"
        );
        markerFeatures.forEach(feature => {
          feature.leafletObject = L.marker(feature.coords).bindPopup(
            feature.name
          );
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
  margin: 0 auto;
  border-radius: 5px;
}
</style>
