import { createElement } from '../render';

function userTitle(moviesWatched) {
  if (moviesWatched > 0 && moviesWatched <= 10) {
    return 'novice';
  } else if (moviesWatched > 10 && moviesWatched <= 20) {
    return 'fan';
  } else if (moviesWatched > 20) {
    return 'movie buff';
  } else {
    return '';
  }
}

function createUserTitleTemplate(moviesWatched) {
  return (
    `<section class="header__profile profile ">
    <p class="profile__rating ${userTitle(moviesWatched) ? '' : 'visually-hidden'}">${userTitle(moviesWatched)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
  );
}

export default class UserTitleView {
  #element = null;
  #moviesWatched = null;

  constructor({moviesWatched}) {
    this.#moviesWatched = moviesWatched;
  }

  get template() {
    return createUserTitleTemplate(this.#moviesWatched);
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
