import { BaseApiService } from "./base";
export class ProductService {

    static getAllProducts = async (): Promise<void> => {
        return await BaseApiService.instance.get("/products");
    };

}