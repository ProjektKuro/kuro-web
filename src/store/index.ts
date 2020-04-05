import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexStore, Module, Getter } from "vuex-simple";
import { ProductService } from '@/services/api/productService';
import { ProductStore } from './productStore';
Vue.use(Vuex)

class Store {
  
  @Module()
  public products = new ProductStore();

  @Getter()
  public get allProducts() {
    return this.products.allProducts;
  }
  
}

export default createVuexStore(new Store(), {
  strict: false,
  modules: {},
  plugins: []
});