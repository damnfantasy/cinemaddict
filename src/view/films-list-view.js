import { createElement } from '../render';

function createFilmsListTemplate() {
  return (
    `<section class="films-list">
    </section>`
  );
}

export default class FilmsListView {
  getTemplate() {
    return createFilmsListTemplate();
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


