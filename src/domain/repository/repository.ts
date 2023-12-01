import { TaskStateEnum } from "../enums/task.enum";
import {IAggregate} from "../models/aggregate.model";
import { ITaskModel } from "../models/task.model";

export interface IRepository<T extends IAggregate> {
    create?(data: T): T;
    viewAll?(): T[];
    viewByCriteria?(criteria: T): T[];
}

export interface IRepositoryTask extends IRepository<ITaskModel> {
    updateByState?(id: number, state: TaskStateEnum): string;
    deleteById?(id: number): string;
}