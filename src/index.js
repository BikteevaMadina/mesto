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
  popupCloseProfileEdit,
  popupCloseCardAdd,
  popupCloseImageZoom,
  cardBtnSubmit,
  elementsListContainer,
  elementsTemplate,
  formCardName,
  formCardLink,
  profileUserName,
  profileDiscription,
  inputPostName,
  inputPostActivity,
  popupImage,
  popupImageCaption,
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
const handleFormSubmitAddCard = (evt, item) => {
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
// profileEditFormValidator.toggleBtn();
popupProfileEditForm.open()

const {name, info } = userInfo.getUserInfo()
inputPostName.value = name
inputPostActivity.value = info
console.log(name)
});

// Событие клика на добавление карточки

profileBtnAdd.addEventListener("click", function () {
  cardBtnSubmit.setAttribute('disabled', true);

  cardAddFormValidator.resetValidation();

  popupCardAddForm.open();
});

//Событие закрытия popup по крестику

const closeButtons = document.querySelectorAll(".popup__button-close");
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    popupCardAddForm.close();
    popupZoomImage.close();
    popupProfileEditForm.close();
  })
});

const popupZoomImage = new PopupWithImage(".popup_image-zoom")
popupZoomImage.setEventListeners()
const handleCardClick = (name, link) => {
  popupZoomImage.open(name,link)
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

// закрытие popup при click на overlay

const closePopupOnOverlay = (e) => {
  !e.target.closest(".popup__container")
};

popupProfileEdit.addEventListener("click", closePopupOnOverlay);
popupCardAdd.addEventListener("click", closePopupOnOverlay);
popupImageSelector.addEventListener("click", closePopupOnOverlay);

// класс валидации

const cardAddFormValidator = new FormValidator(validationConfig, cardAddForm);
const profileEditFormValidator = new FormValidator(validationConfig, profileEditForm);

cardAddFormValidator.enableValidation();
profileEditFormValidator.enableValidation();

