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
        <ProductDetails :product="product" v-if="productIdSelected === product.name" />
        <Product :product="product" v-else />
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
import Product from "@/components/product/Product";
import ProductDetails from "@/components/product/ProductDetails";

export default {
  name: "Products",
  components: {
    Product,
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
  flex-wrap: wrap;
}
.product {
  width: calc(100% / 4);
  transition: all 0.35s ease-in-out;
  cursor: pointer;
}
.product.active {
  width: 100%;
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
