import { Resource } from './resource';
import { Address } from './address';
import { Product } from './product';
interface IPosition {
    latitude: number;
    longitude: number;
}
type Products = Product[];
export class Shop extends Resource {
    private _name: string;
    private _address: Address;
    private _position: IPosition;
    private _products: Products;
    constructor (json: any) {
       super(json);
       this._name = json?.name;
       this._address = json?.address;
       this._position = json?.position;
       this._products = json?.products;
    }
    get address(): Address {
        return this._address;
    }
    set address(address: Address) {
        this._address = address;
    }
    get name() {
        return this._name;
    }
    get position(): IPosition {
        return this._position;
    }
    get products(): Products {
        return this._products;
    }
    set products(products: Products) {
        this._products = products;
    }
    update = () => {
        super.update(this);
    }
}
