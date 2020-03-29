import { Resource } from './resource';
import { Address } from './address';
import { Product } from './product';

type Products = Product[];

export class Shop extends Resource {
    private _name: string;
    private _address: Address;
    private _products: Products;

    constructor (json: any) {
       super(json);
       this._name = json?.name;
       this._address = json?.address;
       this._products = json?.products;
    }
    get address(): Address {
        return this._address;
    }
    set address(address: Address) {
        this._address = address;
    }
    get products(): Products {
        return this._products;
    }
    set products(products: Products) {
        this._products = products;
    }
}