import { Body, Get, JsonController, Post } from "routing-controllers";
import { UserController } from "../controllers/user.controller";
import { UserRepositoryArray } from "../database/db-array/UserRepositoryArray";
import { IUser } from "../domain/models/user.model";
import { MessagesSystemEnum } from "../domain/enums/messages.enum";

@JsonController("/user")
export class UserView {
    private readonly userController: UserController;

    constructor() {
        this.userController = new UserController(new UserRepositoryArray());
    }

    @Get("/")
    viewAll() {
        return this.userController.viewAll();
    }

    @Post("/")
    createUser(@Body() user: IUser) {
        this.userController.create(user);
        return MessagesSystemEnum.USER_CREATED;
    }

}
