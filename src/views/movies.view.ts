import { Get, JsonController, Param } from "routing-controllers";
import { MoviesController } from "../controllers/movies.controller";

@JsonController("/movies")
export class MoviesView {

    private moviesController: MoviesController;
     
    constructor() {
        this.moviesController = new MoviesController();
    }

    @Get("/:movie")
    getMovies(@Param('movie') movie: string) {
        return this.moviesController.getMovies(movie);
    }
}