export default class Section {
  constructor({items, renderer}, selectorContainer){
    this._renderedItems = items;
    this._renderer = renderer;
    this._conteiner = document.querySelector(selectorContainer);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item)
    }); //отрисовка элементов
  }

  addItem(element) {
    this._conteiner.prepend(element);
  }
}

