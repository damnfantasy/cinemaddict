import FilterView from './view/filter-view.js';
import UserTitleView from './view/user-title-view.js';
import { render } from './render.js';
import FilmBoardPresenter from './presenter/film-board-presenter.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
// import { allComments } from './mock/comment.js';
// import { generateMovie } from './mock/movie.js';
// import { getRandomBoolean } from './mock/mock.js';
import MoviesModel from './model/movies-model.js';
import dayjs from 'dayjs';
import { getRandomInteger } from './mock/mock.js';
// import { getComments } from './mock/movie.js';
import { moviesWatchedCount } from './utils.js';
// import FilmPopupView from './view/film-popup-view.js';


const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const footerStatisticsElement = document.querySelector('.footer__statistics');
const moviesModel = new MoviesModel();


render(new UserTitleView({moviesWatched: moviesWatchedCount(moviesModel.movies)}), siteHeaderElement);
render(new FilterView({movie: moviesModel.getMovies()}), siteMainElement);

const filmBoardPresenter = new FilmBoardPresenter({
  filmContainer: siteMainElement,
  moviesModel,
});

filmBoardPresenter.init();

// console.log(moviesModel.movies.filter((film) => film.userDetails.isAlreadyWatched).length)
render(new FooterStatisticsView({count: moviesModel.movies.length}), footerStatisticsElement);

// console.log(moviesModel.getComments())

// render(new FilmPopupView(), siteMainElement)
