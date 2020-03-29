import { Resource } from "./resource";
export class Product extends Resource {
    private name: string;
    private status: string;

    constructor (json: any) {
        super(json);
        this.name = json?.name;
        this.status = json?.status;
    }
}