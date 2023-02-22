import './pages/index.css';

import { Card } from './Card';
import { FormValidator } from './FormValidator';
import Section from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo';
import {initialCards,
  cardAddForm,
  profileEditForm,
  popupProfileEdit,
  popupCardAdd,
  popupImageSelector,
  profileBtnEdit,
  profileBtnAdd,
  cardBtnSubmit,
  profileUserName,
  profileDiscription,
  inputPostName,
  inputPostActivity,
  validationConfig
} from './utils.js'

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault()
  //userInfo.setUserInfo(formValues.name, formValues.info)
  profileUserName.textContent = inputPostName.value;
  profileDiscription.textContent = inputPostActivity.value;
}

const popupProfileEditForm = new PopupWithForm (".popup_profile-edit", handleProfileFormSubmit)
popupProfileEditForm.setEventListeners()

//Функция «отправки» формы для карточки
const handleFormSubmitAddCard = (evt,item) => {
  evt.preventDefault();
 const card = renderCard(item)
  cardElementsList.addItem(card)
};

const userInfo = new UserInfo ({
  userNameSelector: '.profile__user',
  userInfoSelector: '.profile__discription',
});

const popupCardAddForm = new PopupWithForm (".popup_card-add", handleFormSubmitAddCard)
popupCardAddForm.setEventListeners()

// Событие клика на редактирование профиля

profileBtnEdit.addEventListener("click",  () => {
profileEditFormValidator.resetValidation()
popupProfileEditForm.open()

const {name, info } = userInfo.getUserInfo()
inputPostName.value = name
inputPostActivity.value = info
});

// Событие клика на добавление карточки

profileBtnAdd.addEventListener("click", function () {
  cardAddFormValidator.resetValidation();
  popupCardAddForm.open();
});

const popupZoomImage = new PopupWithImage(".popup_image-zoom")
popupZoomImage.setEventListeners()

const handleCardClick = (name, link) => {
  popupZoomImage.open(name, link)
    }

const renderCard = (item) => {
  const newCard = new Card(item, '#elements-template', handleCardClick);
  const cardElement = newCard.createCard();

 return cardElement
};

const cardElementsList = new Section(
  {
  items: initialCards,
  renderer: (item) => {
    const card = renderCard(item)
    cardElementsList.addItem(card)
  },
},
".elements__list")

cardElementsList.renderItems()

// класс валидации

const cardAddFormValidator = new FormValidator(validationConfig, cardAddForm);
const profileEditFormValidator = new FormValidator(validationConfig, profileEditForm);

cardAddFormValidator.enableValidation();
profileEditFormValidator.enableValidation();

