<template>
  <div class="products">
    <p>{{ $t('Products.ProductsIntroText') }}</p>
    <br />
    <div class="productFilter">
      <div class="filter-container">
        <div class="filter-container-content">
          <input
            class="searchbox-filter"
            v-model="searchQuery"
            :placeholder="$t('Products.SearchButtonPlaceholderText')+'...'"
          />
          <button
            class="set-filter-btn"
            @click="setSearchQuery(searchQuery)"
          >{{ $t('Products.SearchButtonLabel') }}</button>
        </div>
      </div>
      <div>
        <span class="search-filter">{{ $t('Products.SearchFilterLabel') }}</span>
        <span>{{ searchQuery }}</span>
      </div>
    </div>

    <div id="products">
      <div
        v-for="(product, i) in cProducts"
        :key="`Lang${i}`"
        @click="selectProduct(product)"
        class="product"
      >
        <Product :product="product" />
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
import Product from "@/components/product/Product";
import { mapGetters } from "vuex";

export default {
  name: "Products",
  components: {
    Product
  },
  data: () => {
    return {
      searchQuery: ""
    };
  },
  mounted() {
    this.$store.commit("products/fetchAllProducts");
  },
  computed: {
    ...mapGetters({
      productById: "productIdSelected",
      productByName: "productNameSelected"
    }),
    cProducts() {
      console.log(this.$store.getters);
      return this.$store.getters.allProducts;
    },
    productIdSelected: {
      get() {
        return this.$store.getters.productById;
      },
      set(productId) {
        this.productIdSelected = productId;
      }
    },
    productNameSelected: {
      get() {
        return this.$store.getters.productByName;
      },
      set(productName) {
        this.productNameSelected = productName;
      }
    }
  },
  methods: {
    setSearchQuery(query) {
      this.data.searchQuery = query;
    },
    getSearchQuery() {
      return this.data.searchQuery;
    },
    selectProduct(product) {
      if (this.productNameSelected === product.name) {
        this.$store.dispatch("setSelectedProductName", "");
        this.$store.dispatch("setSelectedProductId", "");
      } else {
        console.log("Product: ", product.name);
        this.$store.dispatch("setSelectedProductName", product.name);
        this.$store.dispatch("setSelectedProductId", product.productId);
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
@media screen and (min-width: 1024px) {
  .product {
    width: calc(100% / 4);
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .product {
    width: calc(100% / 3);
  }
}
@media screen and (min-width: 400px) and (max-width: 768px) {
  .product {
    width: calc(100% / 2);
  }
}
@media screen and (max-width: 400px) {
  .product {
    width: calc(100%);
  }
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
.product {
  min-height: 300px;
  margin: 1rem auto;
  transition: all 0.35s ease-in-out;
  cursor: pointer;
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
