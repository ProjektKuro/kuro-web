import {
  TProducts,
  IApiResponse
} from "../interfaces";
import { ProductService } from "@/services/api/productService";
import { State, Action, Mutation, Getter, Module } from "vuex-simple";
import { AxiosResponse } from "axios";
export class ProductStore {
  @State()
  public _products: TProducts;
  @State()
  public productsLoadingErr: string;

  constructor() {
    this._products = [];
    this.productsLoadingErr = "";
  }

  @Getter()
  get allProducts(): TProducts {
    return this._products;
  }

  @Mutation()
  async fetchAllProducts() {
    const productsResponse: AxiosResponse<IApiResponse> = await ProductService.getAllProducts();
    const { products: apiProducts } = productsResponse.data;
    let products: TProducts = [];
    for (const product of apiProducts) {
      products.push({
        categories: product.categories,
        name: product.name,
        description: product.description,
        productId: product._id
      });
    }
    this.setProducts(products);
  }

  @Action()
  setProducts(products: TProducts) {
    this._products = products;
  }
}
