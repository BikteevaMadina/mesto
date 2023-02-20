import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._popupImageLink = this._popupSelector.querySelector('.popup__image')
    this._popupImageName = this._popupSelector.querySelector('.popup__image-caption')
    console.log(this._popupImageLink)
  }

  open(name, link){
    this._popupImageLink.src = link
    this._popupImageLink.alt = name
    this._popupImageName.textContent = name

      super.open();
  }
}
