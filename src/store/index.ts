import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexStore, Module, Getter, Action } from "vuex-simple";
import { ProductStore } from './productStore';
Vue.use(Vuex)

class Store {
  
  @Module()
  public products = new ProductStore();

  @Getter()
  public get allProducts() {
    return this.products.allProducts;
  }
  
  @Getter()
  public get productById() {
    return this.products._selectedProductId;
  }

  @Getter()
  public get productByName() {
    return this.products._selectedProductName;
  }

  @Action()
  setSelectedProductId(productId: string) {
    console.log("[MAIN STORE]: Passing to product store: ", productId);
    this.products.setSelectedProductId(productId);
  }

  @Action()
  setSelectedProductName(productName: string) {
    console.log("[MAIN STORE]: Passing to product store: ", productName);
    this.products.setSelectedProductName(productName);
  }
}

export default createVuexStore(new Store(), {
  strict: false,
  modules: {},
  plugins: []
});