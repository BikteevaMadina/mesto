import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handelFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handelFormSubmit;
    this._formElement = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
   
  }

  _getInputValues() {
    this._formValues = {}
    this._inputList.forEach((input)=> {
      this._formValues[input.name] = input.value
    })
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt, this._getInputValues())
      this.close()
    })
  }
  close() {
    super.close()
    this._formElement.reset()
  }
}
