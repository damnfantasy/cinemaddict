import { generateMovie } from '../mock/movie.js';

const MOVIE_COUNT = 3;

export default class MoviesModel {
  movies = Array.from({length: MOVIE_COUNT}, generateMovie);

  getMovies() {
    return this.movies;
  }
}
