import Axios from 'axios';

export class MoviesController {

    private token: string;
    private optionsRequest;

    constructor() {
        this.token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTI3NDQyZDNkYzg2MGU5MzY1M2FkYmM4N2E5YjFmMyIsInN1YiI6IjVjOTA1ODA1YzNhMzY4MWM5NTRjYjFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3x8XFvj2MeDZMWasyjG4hf7pYIlfE19oX8hU03SdtB0";
        this.optionsRequest = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this.token,
            }
        };
    }

    async getMovies(movie: string) {
        try {
            const response = await (await Axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`
                , this.optionsRequest)).data;
            return response;
        } catch (error) {
            throw error;
        }
    }
}