import { Product } from './product';
import { Shop } from './shop';
interface IResourceUpdate {
    timeStamp: Date;
    body: Resource;
}
export class Resource {
    _id: string;
    _createdAt: Date;
    _updatedAt: Date;
    constructor (json: any) {
        this._id = json?.id;
        this._createdAt = new Date(json?.createdAt || '');
        this._updatedAt = new Date(json?.updatedAt || '');
    }
    update = <T extends Resource>(updateData: T): void => {
        // Todo: Add when Service exists.
    };
    get id(): string {
        return this._id;
    }
    get createdAt(): Date {
        return this._createdAt;
    }
    get updatedAt(): Date {
        return this._updatedAt;
    }
}
