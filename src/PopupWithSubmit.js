import { Popup } from './Popup.js'

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, handelCardDelete) {
    super(popupSelector)
    this._handelCardDelete = handelCardDelete;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._submitBtn = this._formElement.querySelector('.popup__submit');
    console.log(this._submitBtn)
  }

  open(id, cardItem) {
    super.open()
    this._id = id;
    this._card = cardItem;
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handelCardDelete(this._id, this._card)
    })
    super.setEventListeners()
  }

  deleteCard(){
    this._card.remove();  // удаление
  }
}
