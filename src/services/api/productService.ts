import { BaseApiService } from "./base";
import { AxiosResponse } from 'axios';
export class ProductService {

    static getAllProducts = async (): Promise<AxiosResponse> => {
        return await BaseApiService.instance.read("/products");
    };

    static getProductById = async (productId: string) => {
        return await BaseApiService.instance.read(`/products/${productId}`)
    };

    static updateProduct = async (product: any) => {
        const { productId } = product;
        return await BaseApiService.instance.update(`/products/${productId}`, product);
    }


}