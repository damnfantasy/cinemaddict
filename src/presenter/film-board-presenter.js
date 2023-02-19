import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsView from '../view/films-view.js';
import SortView from '../view/sort-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsTopRatedView from '../view/films-top-rated-view.js';
import FilmsMostCommentedView from '../view/films-most-commented-view.js';

export default class FilmBoardPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();
  filmsTopRatedComponent = new FilmsTopRatedView();
  filmsMostCommentedComponent = new FilmsMostCommentedView();
  filmsMostCommentedContainerComponent = new FilmsListContainerView();
  filmsTopRatedContainerComponent = new FilmsListContainerView();

  constructor({filmContainer, moviesModel}) {
    this.filmContainer = filmContainer;
    this.moviesModel = moviesModel;
  }

  init() {
    this.boardMovies = [...this.moviesModel.getMovies()];
    console.log(this.boardMovies)

    this.#renderFilmCards();
    this.#renderTopRatedExtra();
    this.#renderMostCommentedExtra();
  }

  #renderFilmCards() {
    render(new SortView(), this.filmContainer);
    render(this.filmsComponent, this.filmContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < this.boardMovies.length; i++) {
      render(new FilmCardView({movie: this.boardMovies[i]}), this.filmsListContainerComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsListComponent.getElement());

  }

  #renderTopRatedExtra() {
    const copy = [...this.boardMovies];
    const sortedByRating = copy.sort((a, b) => b.filmInfo.totalRating - a.filmInfo.totalRating);
    const topRatedExtra = sortedByRating.slice(0, 2);

    render(this.filmsTopRatedComponent, this.filmsComponent.getElement());
    render(this.filmsTopRatedContainerComponent, this.filmsTopRatedComponent.getElement());

    for (const extra of topRatedExtra) {
      render(new FilmCardView({movie: extra}), this.filmsTopRatedContainerComponent.getElement());
    }

  }

  #renderMostCommentedExtra() {
    const copy = [...this.boardMovies];
    const sortedByComments = copy.sort((a, b) => b.comments.length - a.comments.length);

    const mostCommentedExtra = sortedByComments.slice(0, 2);

    render(this.filmsMostCommentedComponent, this.filmsComponent.getElement());
    render(this.filmsMostCommentedContainerComponent, this.filmsMostCommentedComponent.getElement());

    for (const extra of mostCommentedExtra) {
      render(new FilmCardView({movie: extra}), this.filmsMostCommentedContainerComponent.getElement());
    }
  }
}
