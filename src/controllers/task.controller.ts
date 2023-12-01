import { TaskStateEnum } from "../domain/enums/task.enum";
import { ITaskModel } from "../domain/models/task.model";
import { IRepositoryTask } from "../domain/repository/repository";

export class TaskController implements IRepositoryTask {

    constructor(private readonly taskRepository: IRepositoryTask) {
    }

    create(data: ITaskModel): ITaskModel {
        return this.taskRepository.create?.(data) as ITaskModel;
    }

    viewAll(): ITaskModel[] {
        return this.taskRepository.viewAll?.() as ITaskModel[];
    }

    updateByState(id: number, state: TaskStateEnum): string {
        return this.taskRepository.updateByState?.(id, state) as string;
    }

    deleteById(id: number): string {
        return this.taskRepository.deleteById?.(id) as string;
    }

}