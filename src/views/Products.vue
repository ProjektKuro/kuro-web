<template>
  <div class="products">
    <p>
      {{ $t('Products.ProductsIntroText') }}
    </p>
    <br />
    <div class="productFilter">
      <div class="filter-container">
        <div class="filter-container-content">
          <input
            class="searchbox-filter"
            v-model="searchQuery"
            :placeholder="$t('Products.SearchButtonPlaceholderText')+'...'"
          />
          <button class="set-filter-btn" @click="setSearchQuery(searchQuery)">{{ $t('Products.SearchButtonLabel') }}</button>
        </div>
      </div>
      <div>
        <span class="search-filter">{{ $t('Products.SearchFilterLabel') }} </span>
        <span>{{ searchQuery }}</span>
      </div>
    </div>

    <div id="products">
      <div
        v-for="(product, i) in products"
        :key="`Lang${i}`"
        :class="{ active: productIdSelected === product.name }"
        @click="selectProduct(product.name)"
        class="product"
      >
        <ProductDetails :product="product" />
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
import ProductDetails from "@/components/product/ProductDetails";

export default {
  name: "Products",
  components: {
    ProductDetails
  },
  data: () => {
    return {
      searchQuery: "",
      products: [],
      productIdSelected: ""
    };
  },
  created() {
    // GET request
    this.$http
      .get("https://kuro.tlahmann.com/api/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(
        success => {
          // get body data
          this.products = success.body.products;
        },
        failure => {
          // error callback
          console.log(failure);
        }
      );
  },
  methods: {
    setSearchQuery(query) {
      this.data.searchQuery = query;
    },
    getSearchQuery() {
      return this.data.searchQuery;
    },
    selectProduct(name) {
      if (this.productIdSelected === name) {
        this.productIdSelected = "";
      } else {
        this.productIdSelected = name;
      }
    }
  }
};
</script>

<style scoped>
#products {
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px; /* Adjustment for the gutter */
  width: 100%;
}
.product {
  flex: auto;
  height: 200px;
  min-width: calc(100% / 4);
  max-width: calc(100% / 2);
  transition: all 0.35s ease-in-out;
  cursor: pointer;
}
.filter-container {
  height: 1.3rem;
  max-width: 50%;
  background-color: aliceblue;
  margin: 0.25rem auto;
  padding: 0.5rem;
  border-radius: 2.5rem;
}
.filter-container-content {
  margin-bottom: 0.25rem;
  vertical-align: center;
}
.products p,
span {
  text-align: left;
}
.productFilter {
  text-align: center;
  word-wrap: break-word;
  color: inherit;
}

.searchbox-filter:active {
  margin-left: 0.5rem;
  height: 1.194rem;
  /* border: none; */
  /* border: 1px solid green; */
}
.set-filter-btn {
  margin-right: 0.5rem;
  height: 1.5rem;
  text-transform: capitalize;
}
</style>
