import { TaskStateEnum, TaskMessageEnum } from "../../domain/enums/task.enum";
import { ITaskModel } from "../../domain/models/task.model";
import { IRepositoryTask } from "../../domain/repository/repository";

export class TaskRepositoryArray implements IRepositoryTask {

    private dbArray: Array<ITaskModel>;

    constructor() {
        this.dbArray = new Array<ITaskModel>();
    }

    create(data: ITaskModel): ITaskModel {
        this.dbArray.push(data);
        return data;
    }

    viewAll(): ITaskModel[] {
        return this.dbArray;
    }

    updateByState(id: number, state: TaskStateEnum): string {
        const indexTask = this.dbArray.findIndex((element) => element.id === id);
        if (indexTask !== -1) {
            this.dbArray[indexTask].state = state;
            return TaskMessageEnum.TASK_UPDATE_STATE;
        }
        return TaskMessageEnum.TASK_NOT_FOUND;
    }

    deleteById(id: number): string {
        const indexTask = this.dbArray.findIndex(task => task.id === id);
        if (indexTask !== -1) {
            this.dbArray.splice(indexTask, 1);
            return TaskMessageEnum.TASK_DELETE;
        }
        return TaskMessageEnum.TASK_NOT_FOUND;
    }

}