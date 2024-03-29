export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (e)=>{
  if(
    e.target.classList.contains('popup') ||
    e.target.classList.contains('popup__button-close')
  ) {
    this.close()
  }
})
  }
}


