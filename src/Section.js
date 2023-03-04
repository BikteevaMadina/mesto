export default class Section {
  constructor({renderer}, selectorContainer){
    this._renderer = renderer
    this._conteiner = document.querySelector(selectorContainer)
  }

  renderItems(elements) {
    elements.forEach(this._renderer); //отрисовка элементов
  }

  addItem(element) {
    this._conteiner.append(element);
  }

  prependAddItem(element) {
    this._container.prepend(element)
  }
}

