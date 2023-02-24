import { createElement } from '../render';

function getWatchlistFilterCount(movie) {
  return movie.filter((el) => el.userDetails.isWatchlist).length;
}

function getHistoryFilterCount(movie) {
  return movie.filter((el) => el.userDetails.isAlreadyWatched).length;
}

function getFavouriteFilterCount(movie) {
  return movie.filter((el) => el.userDetails.isFavourite).length;
}

function createFilterTemplate(movie) {
  return (
    `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getWatchlistFilterCount(movie)}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getHistoryFilterCount(movie)}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getFavouriteFilterCount(movie)}</span></a>
  </nav>`
  );
}

export default class FilterView {
  #element = null;
  #movie = null;

  constructor({movie}) {
    this.#movie = movie;
  }

  get template() {
    return createFilterTemplate(this.#movie);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
