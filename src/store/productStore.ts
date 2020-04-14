import {
  TProducts,
  IApiResponse,
  IProduct
} from "../interfaces";
import { ProductService } from "@/services/api/productService";
import { State, Action, Mutation, Getter, Module } from "vuex-simple";
import { AxiosResponse } from "axios";
export class ProductStore {
  @State()
  public _products: TProducts;
  @State()
  public _selectedProduct: IProduct;
  @State()
  public _selectedProductId: string;
  @State()
  public _selectedProductName: string;
  @State()
  public productsLoadingErr: string;

  constructor() {
    this._products = [];
    this._selectedProduct = {
      categories: [],
      description: "",
      image: "",
      name: "",
      productId: ""
    };
    this._selectedProductId = "";
    this._selectedProductName = "";
    this.productsLoadingErr = "";
  }

  @Getter()
  get allProducts(): TProducts {
    return this._products;
  }

  @Getter()
  get selectedProduct(): IProduct {
    return this._selectedProduct;
  }

  @Getter()
  get selectedProductId(): string {
    return this._selectedProductId;
  }

  @Getter()
  get selectedProductName(): string {
    return this._selectedProductName;
  }

  @Mutation()
  async fetchAllProducts() {
    const productsResponse: AxiosResponse<IApiResponse> = await ProductService.getAllProducts();
    const { products: apiProducts } = productsResponse.data;
    console.log(apiProducts);
    let products: TProducts = [];
    for (const product of apiProducts) {
      products.push({
        categories: product.categories,
        image: product.image,
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

  @Action()
  setSelectedProductId(productId: string) {
    this._selectedProductId = productId;
  }

  @Action()
  setSelectedProduct(product?: IProduct) {
    this._selectedProduct = product ?? this._selectedProduct;
  }

  @Action()
  setSelectedProductName(productName: string) {
    this._selectedProductName = productName;
  }


}
