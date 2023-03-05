export class Card {
  constructor(
    data,
    elementsTemplate,
    userId,
    { handleCardClick, handleCardLike, handleCardDeleteBtn }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._elementsTemplate = elementsTemplate;
    this._handleCardClick = handleCardClick;
    this._newCard = this._getTemplate();
    this._deleteCardBtn = this._newCard.querySelector(".elements__delete");
    this._likeCardBtn = this._newCard.querySelector(".elements__like");
    this._likesQuantity = this._newCard.querySelector(
      ".elements__like-quantity"
    );
    this._cardName = this._newCard.querySelector(".elements__title");
    this._cardLink = this._newCard.querySelector(".elements__image");
    this._userId = userId;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handleCardLike = handleCardLike;
    this._handleCardDeleteBtn = handleCardDeleteBtn;

  }

  createCard() {
    this._cardName.textContent = this._name;
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;
    this._likesQuantity.textContent = this._likes.length;
    if (this._ownerId !== this._userId) {
      this._deleteCardBtn.style.display = "none";
    }

    this.setLikes(this._likes);

    this._setEventListeners();

    return this._newCard;
  }

  //проверка наличия лайков
  testExistenceLike() {
    return this._likes.find((like) => {
      return like._id === this._userId
    })
  }

  toggleLike() {
    if (this.testExistenceLike()) {
      this._addLike()
      console.log( this._addLike())
    } else {
      this._deleteLike()
    }
  }

  //установить лайки
  setLikes(likesList) {
    this._Likes = likesList;
    this._likesQuantity.textContent = this._likes.length;
    this.toggleLike();
  }

  _addLike() {
    this._likeCardBtn.classList.add('elements__like_active'); // поставить лайк

  }

  _deleteLike = () => {
    this._likeCardBtn.classList.remove('elements__like_active'); //убрать лайк
  };

  //получить id
  getIdCard() {
    return this._cardId;
  }

  _getTemplate() {
    const newCard = document
      .querySelector(this._elementsTemplate)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return newCard;
  }

  _setEventListeners = () => {
    this._likeCardBtn.addEventListener("click", () => {

      this._handleCardLike(this._cardId);

      this.toggleLike();
    });
    this._cardLink.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._deleteCardBtn.addEventListener("click", () => {
      this._handleCardDeleteBtn(this._cardId, this._newCard);
    });
  };
}
