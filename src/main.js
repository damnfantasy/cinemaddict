import FilterView from './view/filter-view.js';
import UserTitleView from './view/user-title-view.js';
import { render } from './render.js';
import FilmBoardPresenter from './presenter/film-board-presenter.js';
import FooterStatisticsView from './view/footer-statistics-view.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const footerStatisticsElement = document.querySelector('.footer__statistics');

render(new UserTitleView(), siteHeaderElement);
render(new FilterView(), siteMainElement);

const filmBoardPresenter = new FilmBoardPresenter({filmContainer: siteMainElement});

filmBoardPresenter.init();

render(new FooterStatisticsView, footerStatisticsElement);
