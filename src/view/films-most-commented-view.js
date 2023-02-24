import { createElement } from '../render';

function createFilmsMostCommentedTemplate() {
  return (
    `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
    </section>`
  );
}

export default class FilmsMostCommentedView {
  #element = null;

  get template() {
    return createFilmsMostCommentedTemplate();
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
