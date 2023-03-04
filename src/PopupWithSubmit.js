import { Popup } from './Popup.js'

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, handelCardDelete) {
    super(popupSelector)
    this._handelCardDelet = handelCardDelete;
    this._submitBtn = this._popupElement.querySelector('.popup__submit')
  }

  open(id, cardItem) {
    super.open()
    this._id = id;
    this._card = cardItem;
  }

  setEventListeners() {
    this._submitBtn.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handelCardDelet(this._id, this._card)
    })
    super.setEventListeners()
  }


  deleteCard(){
    this._card.remove();  // удаление
  }
}
