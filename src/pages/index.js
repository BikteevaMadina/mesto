import "./index.css";

import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  cardAddForm,
  profileEditForm,
  avatarEditForm,
  popupProfileEdit,
  profileAvatar,
  profileUserSelector,
  elementsTemplate,
  popupCardAdd,
  popupImageSelector,
  profileBtnEdit,
  profileBtnAdd,
  popupEditAvatarSelector,
  avatarEditButton,
  cardBtnSubmit,
  profileUserName,
  profileDiscription,
  inputPostName,
  inputPostActivity,
  popupDeleteCard,
  popupLinkAvatar,
  validationConfig,
} from "../utils/constants.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "99ec2b63-21d0-4a18-afc1-bc28f717f199",
    "Content-Type": "application/json",
  },
});
let userId = null;
const section = new Section(
  {
    renderer: (item) => {
      const cardElement = renderCard(item);
      section.addItem(cardElement);
    },
  },
  ".elements__list"
);

const renderInitialCards = (cards) => {
  section.renderItems(cards);
};

const renderCard = (item) => {
  //отрисовка
  const newCard = new Card(item, "#elements-template", userId, {
    handleCardClick: (name, link) => {
      popupZoomImage.open(name, link);
    },
    //const cardElement = newCard.createCard();
    //return cardElement

    handleCardLike: (card) => {
      if (card.isLike) {
        api
          .deleteLike(card._cardId)
          .then((res) => {
            card.setLikes(res.likes);
            card.toggleIsLike();
            card.toggleLike();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .addLike(card._cardId)
          .then((res) => {
            card.setLikes(res.likes);
            card.toggleIsLike();
            card.toggleLike();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    handleCardDeleteBtn: (id, card) => {
      popupWithSubmit.open(id, card);
    },
  });

  return newCard.createCard();
};

Promise.all([api.getUserInfo(), api.getInitialCards()]) //обработка данных пользователя, затем карточек
  .then(([user, cardList]) => {
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setUserAvatar(user.avatar);
    userId = user._id;
    renderInitialCards(cardList);
  })
  .catch((error) => {
    console.log(error);
  });

const addNewCard = (card) => {
  //новая карточка добавление
  popupCardAddForm.submitingBtn("Сохранение...");
  api
    .addNewCard(card.name, card.link)
    .then((item) => {
      const cardElement = renderCard(item);
      section.prependAddItem(cardElement);
      popupCardAddForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setTimeout(() => popupCardAddForm.submitingBtn("Создать"), 100));
};

const handelCardDelete = (id, card) => {
  //удалить картоки по id
  api.deleteCard(id, card)
    .then((res) => {
      card.deleteCard(res.card);
      popupWithSubmit.close();
    })
    .catch((error) => {
      console.log(error); handelFormSubmit
    });
};
const popupWithSubmit = new PopupWithSubmit("#popup-delete-card", (id, card) =>
  handelCardDelete(id, card)
);
popupWithSubmit.setEventListeners();

const editAvatarPopup = new PopupWithForm(popupEditAvatarSelector,
  {handelFormSubmit: (src) => {
    console.log(src)
  editAvatarPopup.submitingBtn("Сохранение...")
  api
    .setAvatar(src.link)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      editAvatarPopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setTimeout(()=> editAvatarPopup.submitingBtn("Сохранить"), 100));
  }
  });

// const editAvatarPopup = new PopupWithForm(
//   popupEditAvatarSelector,
//   handleAvatarEdit
// );
editAvatarPopup.setEventListeners();


const handleProfileFormSubmit = (item) => {
  popupProfileEditForm.submitingBtn("Сохранение...");
  api
    .setInfo(item.name, item.info)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about);
      popupProfileEditForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setTimeout(()=> popupProfileEditForm.submitingBtn("Сохранить"), 100));
};


const userInfo = new UserInfo({
  userNameSelector: ".profile__user",
  userInfoSelector: ".profile__discription",
  userAvatarSelector: ".profile__avatar",
});

const popupProfileEditForm = new PopupWithForm(
  "#popup-profile-edit",
  handleProfileFormSubmit
);
popupProfileEditForm.setEventListeners();

const popupCardAddForm = new PopupWithForm("#popup-card-add", addNewCard);
popupCardAddForm.setEventListeners();

// Событие клика на редактирование профиля
const popupZoomImage = new PopupWithImage(popupImageSelector);
popupZoomImage.setEventListeners();

profileBtnEdit.addEventListener("click", () => {
  profileEditFormValidator.resetValidation();
  popupProfileEditForm.setInputValues(userInfo.getUserInfo());
  popupProfileEditForm.open();
});

// Событие клика на добавление карточки

profileBtnAdd.addEventListener("click", function () {
  cardAddFormValidator.resetValidation();
  popupCardAddForm.open();
});

avatarEditButton.addEventListener("click", () => {
  avatarEditFormValidator.resetValidation();
  editAvatarPopup.open();
});

// класс валидации

const cardAddFormValidator = new FormValidator(validationConfig, cardAddForm);
const profileEditFormValidator = new FormValidator(
  validationConfig,
  profileEditForm
);

const avatarEditFormValidator = new FormValidator(
  validationConfig,
  avatarEditForm
);
avatarEditFormValidator.enableValidation();
cardAddFormValidator.enableValidation();
profileEditFormValidator.enableValidation();
