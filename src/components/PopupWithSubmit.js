import { Popup } from './Popup.js'

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector)

    this._handleCardDelete = handleCardDelete
    this._formElement = this._popupElement.querySelector('.popup__form')
    this._submitBtn = this._formElement.querySelector('.popup__submit')

  }

  open(id, card) {
    super.open()
    this._id = id;
    this._card = card;
  }


  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleCardDelete(this._id, this._card)
    })
    super.setEventListeners()
  }

  // deleteCard(){
  //   this._card.remove();  // удаление


  // }
}
