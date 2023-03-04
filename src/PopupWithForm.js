import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handelFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handelFormSubmit;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._submitBtn = this._formElement.querySelector('.popup__submit')
  }

  submitingBtn(text) {
    this._submitBtn.value = text;
  }

  setInputValues(data) {
    this._inputList.forEach((input) =>{
      input.value = data[input.name];
    })
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
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues())
     // this.close()
    })
  }
  close() {
    super.close()
    this._formElement.reset()
  }


}
