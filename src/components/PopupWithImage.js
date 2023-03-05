import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._popupImageLink = this._popupElement.querySelector('.popup__image');
    this._popupImageName = this._popupElement.querySelector('.popup__image-caption');
    console.log()
  }

  open(name, link){
    this._popupImageLink.src = link;
    this._popupImageLink.alt = name;
    this._popupImageName.textContent = name;

      super.open();
  }
}
