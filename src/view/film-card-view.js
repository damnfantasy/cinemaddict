import { createElement } from '../render';

function createFilmCardTemplate(movie) {
  const { commentsId, filmInfo, userDetails } = movie;
  const { isWatchlist, isAlreadyWatched, isFavourite } = userDetails;
  const { title, alternativeTitle, totalRating, poster, ageRating, director, writers, actors, release, duration, genre, description } = filmInfo;
  const { date, releaseCountry } = release;

  const watchlistClassName = isWatchlist ? 'film-card__controls-item--active' : '';
  const alreadyWatchedClassName = isAlreadyWatched ? 'film-card__controls-item--active' : '';
  const favouriteClassName = isFavourite ? 'film-card__controls-item--active' : '';

  return (
    `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${date}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${commentsId.length} comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatchedClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${favouriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`
  );
}

export default class FilmCardView {
  constructor({movie}) {
    this.movie = movie;
  }

  getTemplate() {
    return createFilmCardTemplate(this.movie);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


