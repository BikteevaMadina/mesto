import './pages/index.css';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Section from './Section.js';
import Api from './Api.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import {initialCards,
  cardAddForm,
  profileEditForm,
  avatarEditForm,
  popupProfileEdit,
  profileAvatar,
  popupCardAdd,
  popupImageSelector,
  profileBtnEdit,
  profileBtnAdd,
  popupEditAvatar,
  avatarEditButton,
  cardBtnSubmit,
  profileUserName,
  profileDiscription,
  inputPostName,
  inputPostActivity,
  popupDeleteCard,
  popupLinkAvatar,
  validationConfig
} from './utils.js';
import {PopupWithSubmit} from './PopupWithSubmit';
let userId = null;

const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    autorization: '99ec2b63-21d0-4a18-afc1-bc28f717f199',
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards])           //обработка данных пользователя, затем карточек
.then(([user, cardList])=>{
  userInfo.setUserInfo(user.name, user.about)
    userInfo.setUserAvatar(user.avatar)
    userId = user._id
    renderInitialCards(cardList)
})
.catch((error) =>{
  console.log(error)
 })

const section = new Section(
    {
    renderer: (item) => {
      const cardElement = renderCard(item)
      section.addItem(cardElement)
    },
  },
  ".elements__list")

const renderInitialCards = (cards) =>{
  section.renderItems(cards)
}

const renderCard = (item) => {                                       //отрисовка
  const newCard = new Card(item, '#elements-template',userId, {
   handleCardClick : (name, link) => {
    popupZoomImage.open(name, link)
      },
  //const cardElement = newCard.createCard();
 //return cardElement

 handleCardLike: (id) => {
  newCard.testExistencelike()

  ? api.handleDeleteLike(id)
      .then((res) =>{
        newCard.setLikes(res.likes)
      })
      .catch((error)=> {console.log(error)})

  : api.handleLikeCard(id)
       .then((res) =>{
        newCard.setLikes(res.likes)
      })
      .catch((error)=> {console.log(error)})
 },
 handleCardDelete: (id,card) => {
  PopupWithSubmit.open(id, card)
 },
})

return newCard.createCard();
}

const addNewCard = (card) => {                                      //новая карточка добавление
  popupCardAddForm.submitingBtn('Сохранение...')
  api.addNewCard (card.name, card.link)
     .then((item) => {
      const cardElement = renderCard(item)
      section.prependAddItem(cardElement)
      popupCardAddForm.close()
     })
     .catch((error)=> {console.log(error)})
     .finally(popupCardAddForm.submitingBtn('Создать'))
}

const popupWithSubmit = new PopupWithSubmit('.popup_delete-card', (id, card) =>handleDeleteCard(id,card))

const handleDeleteCard = (id, card) =>{                            //удалить картоки по id
  api.deleteCard(id, card)
     .then((res)=> {
      popupWithSubmit.deleteCard(res.card)
      popupWithSubmit.close()
    })
    .catch((error) => {
      console.log(error)
     })
}

popupWithSubmit.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  popupEditAvatar,
  handleAvatarEdit,
)

const handleAvatarEdit = () => {
  editAvatarPopup.submitingBtn('Сохранение...')
  api
    .setAvatar(popupLinkAvatar.value)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar)
      editAvatarPopup.close()
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(editAvatarPopup.submitingBtn('Сохранить'))
}

editAvatarPopup.setEventListeners()

const handleProfileFormSubmit = (item) => {
  popupProfileEditForm.submitingBtn('Сохранение...')
  api.setInfo(item.name, res.info)
     .then((res)=>{
      userInfo.setUserInfo(res.name, res.about)
      popupProfileEditForm.close()
     })
     .catch((error) => {
      console.log(error)
    })
    .finally(popupProfileEditForm.submitingBtn('Сохранить'))
}

const userInfo = new UserInfo ({
  userNameSelector: '.profile__user',
  userInfoSelector: '.profile__discription',
  avatarInfoSelector: '.profile__avatar'
});

const popupProfileEditForm = new PopupWithForm (".popup_profile-edit", handleProfileFormSubmit)
popupProfileEditForm.setEventListeners()

const popupCardAddForm = new PopupWithForm (".popup_card-add", addNewCard)
popupCardAddForm.setEventListeners()

// Событие клика на редактирование профиля

profileBtnEdit.addEventListener("click",  () => {
profileEditFormValidator.resetValidation()
popupProfileEditForm.setInputValues(userInfo.getUserInfo())
popupProfileEditForm.open()
});

// Событие клика на добавление карточки

profileBtnAdd.addEventListener("click", function () {
  cardAddFormValidator.resetValidation();
  popupCardAddForm.open();
});

avatarEditButton.addEventListener('click',() =>{
  avatarEditFormValidator.resetValidation()
  editAvatarPopup.open()
})

const popupZoomImage = new PopupWithImage(".popup_image-zoom")
popupZoomImage.setEventListeners()

// класс валидации

const cardAddFormValidator = new FormValidator(validationConfig, cardAddForm);
const profileEditFormValidator = new FormValidator(validationConfig, profileEditForm);
const avatarEditFormValidator = new FormValidator(validationConfig, avatarEditForm)
avatarEditFormValidator.enableValidation()
cardAddFormValidator.enableValidation();
profileEditFormValidator.enableValidation();

