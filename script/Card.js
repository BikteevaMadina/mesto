export class Card {
  constructor (data, elementsTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._elementsTemplate = elementsTemplate;
    this._handleCardClick = handleCardClick;

  }


  _getTemplate() {
    const newCard = document.querySelector(this._elementsTemplate)
    .content
    .querySelector('.elements__element')
    .cloneNode(true);

    return newCard;
  }

 _handleDeleteCard = () => {
    this._newCard.remove();
    this._newCard = null
  }

   _handleLikeCard(event) {
    //event.
    this._newCard.querySelector('.elements__like').classList.toggle('elements__like_active');
   }


 _setEventListeners = () => {
      const deleteCardBtn = this._newCard.querySelector('.elements__delete');
      deleteCardBtn.addEventListener('click',()=> {this._handleDeleteCard() });

      const likeCardBtn = this._newCard.querySelector('.elements__like');
      likeCardBtn.addEventListener('click', ()=> { this._handleLikeCard() });

      // this._cardLink.addEventListener('click', ()=> this._handleCardClick (this._name, this._link));
      this._newCard.querySelector('.elements__image').addEventListener('click', () =>{ this._handleCardClick(this._name, this._link)});
   }

  createCard () {
    this._newCard = this._getTemplate();

    this._setEventListeners();

    this._cardName = this._newCard.querySelector('.elements__title');
    this._cardName.textContent = this._name;

    this._cardLink = this._newCard.querySelector('.elements__image');
    // this._cardLink.src = this._link;
    // this._cardLink.alt = this._name;
    this._cardLink.src = this._link;
    this._newCard.alt = this._name;

    return this._newCard;
  }
}
