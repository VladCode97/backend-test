import { Get, JsonController } from "routing-controllers";

@JsonController("/")
export class IndexView {
    

    @Get("/")
    viewAll() {
        return "Hello from index";
    }


}
