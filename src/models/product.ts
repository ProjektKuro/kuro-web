import { Resource } from "./resource";
enum EProductStatus{
    empty = "empty",
    enough = "normal",
    much = "much"
}
export class Product extends Resource {
    private _name: string;
    private _status: string;
    private _categories: string[];
    constructor (json: any) {
        super(json);
        this._name = json?.name;
        this._status = json?.status;
        this._categories = json?.categories;
    }
    get categories() {
        return this._categories;
    }
    get name(): string {
        return this._name;
    }
    get status(): string {
        return this._status;
    }
    set status(statusUpdate: string) {
        // Must be valid Status: "much"
        if(statusUpdate in EProductStatus) {
            //todo: add error notification via snackbar-notifier
            return;
        }
        this._status = statusUpdate;
    }
    update = () => {
        super.update(this);
    }
}
