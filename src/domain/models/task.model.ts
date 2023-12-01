import { TaskStateEnum } from "../enums/task.enum";
import { IAggregate } from "./aggregate.model";

export interface ITaskModel extends IAggregate {
    title: string;
    state: TaskStateEnum
}