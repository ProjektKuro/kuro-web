export class Resource {
    _id: string;
    _createdAt: Date;
    _updatedAt: Date;
    constructor (json: any) {
        this._id = json?.id;
        this._createdAt = new Date(json?.createdAt || '');
        this._updatedAt = new Date(json?.updatedAt || '');
    }
    update = (): void => {
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
    set updatedAt(updateDate: Date) {
        this._updatedAt = updateDate;
    }

}