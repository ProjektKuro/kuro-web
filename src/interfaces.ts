export type TProducts = IProduct[];

export interface IProductState {
    products: TProducts;
}

export interface IProduct {
    categories: string[];
    description: string;
    image: string;
    name: string;
    productId: string;
}

export interface IApiProduct {
    categories: string[];
    description: string;
    image: string;
    name: string;
    _id: string;
    updatedAt: string;
    createdAt: string;
    _cls: string;
}
export interface IApiResponse {
    products: IApiProduct[]
}
