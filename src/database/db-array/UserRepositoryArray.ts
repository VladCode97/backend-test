import { IRepository } from "../../domain/repository/repository";
import { IUser } from "../../domain/models/user.model";

export class UserRepositoryArray implements IRepository<IUser> {

    private dbArray: Array<IUser>;

    constructor() {
        this.dbArray = new Array<IUser>();
    }

    create(data: IUser): IUser {
        this.dbArray.push((data));
        return data;
    }

    viewAll(): IUser[] {
        return this.dbArray;
    }

}