import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexStore, Module, Getter, Action } from "vuex-simple";
import { ProductStore } from './productStore';
import { IProduct } from '@/interfaces';
Vue.use(Vuex)

class Store {
  
  @Module()
  public products = new ProductStore();

  @Getter()
  public get allProducts() {
    return this.products.allProducts;
  }
  
  @Getter()
  public get selectedProduct() {
    return this.products.selectedProduct;
  }

  @Getter()
  public get productById() {
    return this.products.selectedProductId;
  }

  @Getter()
  public get productByName() {
    return this.products.selectedProductName;
  }

  @Action()
  setSelectedProduct(product?: IProduct) {
    this.products.setSelectedProduct(product ?? this.products.selectedProduct);
  }

  @Action()
  setSelectedProductId(productId: string) {
    this.products.setSelectedProductId(productId);
  }

  @Action()
  setSelectedProductName(productName: string) {
    this.products.setSelectedProductName(productName);
  }
}

export default createVuexStore(new Store(), {
  strict: false,
  modules: {},
  plugins: []
});