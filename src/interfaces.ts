export type TProduct = IProduct[];

export interface IProductState {
    products: TProduct;
}

export interface IProduct {
    categories: string[];
    description: string;
    name: string;
    productId: string;
}