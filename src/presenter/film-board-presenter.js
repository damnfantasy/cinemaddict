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

  constructor({filmContainer}) {
    this.filmContainer = filmContainer;
  }

  init() {
    this.#renderFilmCards();
    this.#renderTopRatedExtra();
    this.#renderMostCommentedExtra();
  }

  #renderFilmCards() {
    render(new SortView(), this.filmContainer);
    render(this.filmsComponent, this.filmContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainerComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsListComponent.getElement());

  }

  #renderTopRatedExtra() {
    render(this.filmsTopRatedComponent, this.filmsComponent.getElement());
    render(this.filmsTopRatedContainerComponent, this.filmsTopRatedComponent.getElement());

    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsTopRatedContainerComponent.getElement());
    }
  }

  #renderMostCommentedExtra() {
    render(this.filmsMostCommentedComponent, this.filmsComponent.getElement());
    render(this.filmsMostCommentedContainerComponent, this.filmsMostCommentedComponent.getElement());

    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsMostCommentedContainerComponent.getElement());
    }
  }
}
