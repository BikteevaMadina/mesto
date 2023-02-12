
import { initialCards } from './utils.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// Объявление переменных popup
const popupProfileEdit = document.querySelector(".popup_profile-edit");
const popupCardAdd = document.querySelector(".popup_card-add");
const popupImageZoom = document.querySelector(".popup_image-zoom");

// Переменные открытия и закрытия popup

const profileBtnEdit = document.querySelector(".profile__button-edit");
const profileBtnAdd = document.querySelector(".profile__button-add");

const popupCloseProfileEdit = popupProfileEdit.querySelector(".popup__button-close");
const popupCloseCardAdd = popupCardAdd.querySelector(".popup__button-close");
const popupCloseImageZoom = popupImageZoom.querySelector(".popup__button-close");

//Переменные для карточек
const cardBtnSubmit = popupCardAdd.querySelector('#popup__submit-add');
const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#elements-template").content.querySelector('.elements__element')
const formCardsAdd = document.forms["card-form"];
const formCardName = document.querySelector(".name");
const formCardLink = document.querySelector(".link");


//Переменные для содержимого popup

const profileUserName = document.querySelector(".profile__user");
const profileDiscription = document.querySelector(".profile__discription");
// Находим форму в DOM
const formProfileEdit = document.forms["profile-form"];
// Находим поля формы в DOM
const inputPostName = document.querySelector(".popup__input_post_name");
const inputPostActivity = document.querySelector(".popup__input_post_activity");
const popupImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__image-caption");

// Открытие и закрыт popup

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
};

// зактрытие popup on ESC
const closePopupOnEsc = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
};
// Обработчик «отправки» формы для редактирования профиля

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileUserName.textContent = inputPostName.value;
  profileDiscription.textContent = inputPostActivity.value;
  closePopup(popupProfileEdit);
}

//Функция «отправки» формы для карточки
const handleFormSubmitAddCard = (e) => {
  e.preventDefault();
  renderCard({
    name: formCardName.value,
    link: formCardLink.value,
  });
  closePopup(popupCardAdd);
};

// Событие клика на редактирование профиля

profileBtnEdit.addEventListener("click", function () {
profileEditFormValidator.resetValidation()
profileEditFormValidator.toggleBtn();
  inputPostName.value = profileUserName.textContent;
  inputPostActivity.value = profileDiscription.textContent;
  openPopup(popupProfileEdit);
});

formProfileEdit.addEventListener("submit", handleProfileFormSubmit);

// Событие клика на добавление карточки

profileBtnAdd.addEventListener("click", function () {
  //  cardBtnSubmit.setAttribute('disabled', true);
  //  cardBtnSubmit.classList.add('popup__submit_disabled');

  cardAddFormValidator.resetValidation();

  cardAddFormValidator.toggleBtn();
  formCardsAdd.reset();
  openPopup(popupCardAdd);
});

//Событие закрытия popup по крестику

const closeButtons = document.querySelectorAll(".popup__button-close");
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

formCardsAdd.addEventListener("submit", handleFormSubmitAddCard);

// Спринт 5

//Функция для лайка
const toggleLike = (event) => {
  event.target.classList.toggle("elements__like_active");
};

// Функция для удаления
const deleteElement = (event) => {
  event.target.closest(".elements__element").remove();
};

//Функция добавления новых карточек и карточек из массива//

// const createElement = (item) => {
//   const newElement = elementsTemplate.cloneNode(true);

//   const elementTitle = newElement.querySelector(".elements__title");
//   elementTitle.textContent = item.name;

//   const elementImage = newElement.querySelector(".elements__image");
//   elementImage.src = item.link;
//   elementImage.alt = item.name;

//   // слушатель клика лайк
//   const buttonElementLike = newElement.querySelector(".elements__like");
//   buttonElementLike.addEventListener("click", toggleLike);

//   // слушатель клика удаление
//   const buttonElementDelete = newElement.querySelector(".elements__delete");
//   buttonElementDelete.addEventListener("click", deleteElement);

//   // функция просмотра картинки
//   elementImage.addEventListener("click", () => {
//     popupImage.src = item.link;
//     popupImage.alt = item.name;
//     popupImageCaption.textContent = item.name;
//     openPopup(popupImageZoom);
//   });

//   return newElement;
// };

const handleCardClick = (name, link) => {
      popupImage.src = link;
      popupImage.alt = name;
      popupImageCaption.textContent = name;
      openPopup(popupImageZoom);
    };

const renderCard = (data) => {
  const newCard = new Card(data, "#elements-template", handleCardClick);
  const cardElement = newCard.createCard();

  elementsList.prepend(cardElement);
};

initialCards.forEach((element) => {
  renderCard(element);
});

// закрытие popup при click на overlay

const closePopupOnOverlay = (e) => {
  if (!e.target.closest(".popup__container")) {
    closePopup(e.target);
  }
};

popupProfileEdit.addEventListener("click", closePopupOnOverlay);
popupCardAdd.addEventListener("click", closePopupOnOverlay);
popupImageZoom.addEventListener("click", closePopupOnOverlay);

// класс валидации

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const cardAddForm = popupCardAdd.querySelector('.popup__form');
const profileEditForm = popupProfileEdit.querySelector('.popup__form');


const cardAddFormValidator = new FormValidator(validationConfig, cardAddForm);
const profileEditFormValidator = new FormValidator(validationConfig, profileEditForm);

cardAddFormValidator.enableValidation();
profileEditFormValidator.enableValidation();
