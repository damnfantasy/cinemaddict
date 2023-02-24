import { generateMovie } from '../mock/movie.js';
import { allComments } from '../mock/comment.js';

const MOVIE_COUNT = 15;

export default class MoviesModel {
  #movies = Array.from({length: MOVIE_COUNT}, generateMovie);
  #comments = allComments;

  get movies() {
    return this.#movies;
  }

  get comments() {
    return this.#comments;
  }
}
