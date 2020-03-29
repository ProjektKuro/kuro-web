import { Resource } from './resource';

export class Address extends Resource {
    private _address: string;
    private _postCode: string;
    private _city: string;
    constructor (json: any) {
        super(json);
        this._address = json?.address;
        this._postCode = json?.postCode;
        this._city = json?.city;
    }
    get address(): string {
        return this._address;
    }
    get city(): string {
        return this._city;
    }
    get postCode(): string {
        return this._postCode;
    }

}