import { BaseApiService } from "./base";
import { AxiosResponse } from 'axios';
import { IProduct } from '@/interfaces';
export class ProductService {
    
    static getAllProducts = async (): Promise<AxiosResponse> => {
        return await BaseApiService.instance.read("/products");
    };
    
    static getProductById = async (productId: string): Promise<AxiosResponse> => {
        return await BaseApiService.instance.read(`/products/${productId}`)
    };
    
    static getShopsWithProductById = async (productId: string): Promise<AxiosResponse> => {
        return await BaseApiService.instance.read(`products/${productId}/shops`);
    };
    
    static updateProduct = async (product: IProduct): Promise<AxiosResponse> => {
        const { productId } = product;
        return await BaseApiService.instance.update(`/products/${productId}`, product);
    }
}