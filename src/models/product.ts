import { Resource } from "./resource";
export class Product extends Resource {
    private _name: string;
    private _status: string;

    constructor (json: any) {
        super(json);
        this._name = json?.name;
        this._status = json?.status;
    }
    get name(): string {
        return this._name;
    }
    set name(nameUpdate: string) {
        this._name = nameUpdate;
    }
    get status(): string {
        return this._status;
    }
    set status(statusUpdate: string) {
        this._status = statusUpdate
    }
    update = (productUpdate: Product) => {
        super.update(productUpdate);
    }
}