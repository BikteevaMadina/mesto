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

    this._isLike = false;
    this._likes = data.likes;

    this._handleCardLike = handleCardLike;
    this._handleCardDeleteBtn = handleCardDeleteBtn;
    this._handleCardClick = handleCardClick;
  }

  _likeBtnOnClick() {
    this._likeCardBtn.classList.toggle("elements__like_active");
  }

  get isLike() {
    return this._isLike;
  }

  setLikes(likesList) {
    this._likes = likesList;
    this._likesQuantity.textContent = this._likes.length;
  }

  toggleLike() {
    this._likeCardBtn.classList.toggle("elements__like_active");
  }

  toggleIsLike() {
    this._isLike = !this._isLike;
  }

  deleteCard() {
    this._newCard.remove();
  }

  createCard() {
    this._setEventListeners();
    this._cardName.textContent = this._name;
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;
    this._likesQuantity.textContent = this._likes.length;
    if (this._userId !== this._ownerId) {
      this._deleteCardBtn.style.display = "none";
    }

    if (this._likes.some((item) => item._id === this._userId)) {
      this._likeCardBtn.classList.add("elements__like_active");
      this._isLike = true;
    }

    return this._newCard;
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
      this._handleCardLike(this, this._cardId);
    });
    this._cardLink.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._deleteCardBtn.addEventListener("click", () => {
      this._handleCardDeleteBtn(this._cardId, this);
    });
  };
}
//проверка наличия лайков
// testExistenceLike() {
//   return this._likes.find((like) => {
//     return like._id === this._userId
//   })
// }

//установить лайки
// //получить id
// getIdCard() {
//   return this._cardId;
// }
// _addLike() {
//   this._likeCardBtn.classList.add('elements__like_active'); // поставить лайк

// }

// _deleteLike = () => {
//   this._likeCardBtn.classList.remove('elements__like_active'); //убрать лайк
// };
