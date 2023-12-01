import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";
import { TaskController } from "../controllers/task.controller";
import { TaskRepositoryArray } from "../database/db-array/TaskRepositoryArray";
import { TaskMessageEnum } from "../domain/enums/task.enum";
import { ITaskModel } from "../domain/models/task.model";

@JsonController("/task")
export class TaskView {
    private readonly taskController: TaskController;

    constructor() {
        this.taskController = new TaskController(new TaskRepositoryArray());
    }

    @Get("/")
    viewAll() {
        return this.taskController.viewAll();
    }

    @Post("/")
    createUser(@Body() task: ITaskModel) {
        this.taskController.create(task);
        return TaskMessageEnum.TASK_CREATED;
    }


    @Put("/:id")
    updateTask(@Param("id") id: number, @Body() data: ITaskModel) {
        return this.taskController.updateByState(id, data.state);
    }

    @Delete("/:id")
    deleteTask(@Param("id") id: number) {
        return this.taskController.deleteById(id);
    }

}