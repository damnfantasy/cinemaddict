import { createElement } from '../render';

function createFilmsListTemplate() {
  return (
    `<section class="films-list">
    </section>`
  );
}

export default class FilmsListView {
  #element = null;

  get template() {
    return createFilmsListTemplate();
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


