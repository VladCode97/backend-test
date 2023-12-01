import { IRepository } from "../domain/repository/repository";
import { IUser } from "../domain/models/user.model";

export class UserController implements IRepository<IUser> {

    constructor(private readonly userRepository: IRepository<IUser>) {
    }

    create(data: IUser): IUser {
        return this.userRepository.create?.(data) as IUser;
    }

    viewAll(): IUser[] {
        return this.userRepository.viewAll?.() as IUser[];
    }
}