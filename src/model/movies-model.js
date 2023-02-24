import { generateMovie } from '../mock/movie.js';
import { allComments } from '../mock/comment.js';

const MOVIE_COUNT = 15;

export default class MoviesModel {
  movies = Array.from({length: MOVIE_COUNT}, generateMovie);
  comments = allComments;

  getMovies() {
    return this.movies;
  }

  getComments() {
    return this.comments;
  }
}
