import { createElement } from '../render';

function createFilmsTopRatedTemplate() {
  return (
    `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>`
  );
}

export default class FilmsTopRatedView {
  #element = null;

  get template() {
    return createFilmsTopRatedTemplate();
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
