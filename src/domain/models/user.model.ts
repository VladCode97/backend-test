import {IAggregate} from "./aggregate.model";

export interface IUser extends IAggregate {
    name: string;
    password: string;
    email: string;
}