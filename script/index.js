// Объявление переменных popup
const popupProfileEdit = document.querySelector('.popup__profile-edit');
const popupAddcard = document.querySelector('.popup__card-add');
const popupZoomImg = document.querySelector('.popup__content_image');

// Переменные открытия и закрытия popup

const headerButton = document.querySelector('.profile__button-edit');
const profileAddButton = document.querySelector('.profile__button-add');

const popupCloseEditButton = popupProfileEdit.querySelector('.popup__button-close');
const popupCloseAddCard = popupAddcard.querySelector('.popup__button-close');
const popupCloseZoomImg = popupZoomImg.querySelector('.popup__button-close');

//Переменные для карточек

const elementsList = document.querySelector('.elements__list');
const elementsTemplate = document.querySelector('#elements-template').content;
const cardAddForm = document.querySelector('.popup__card-add');
const cardNameForm = document.querySelector('.name');
const cardLinkForm = document.querySelector('.link');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Переменные для содержимого popup

let profileName = document.querySelector('.profile__user');
let profileDiscription = document.querySelector('.profile__discription');
// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_post_name');
let jobInput = document.querySelector('.popup__input_post_activity');
let imageZoom = document.querySelector('.popup__image');
let imageZoomName = document.querySelector('.popup__image-caption');


// открытие и закрытие popup

const popupClassOpen = function (popup) {
  popup.classList.toggle('popup_opened');
}

function closePopup() {
  popupProfileEdit.classList.remove('popup_opened');
}


// Обработчик «отправки» формы для редактирования профиля

function handleFormSubmit (evt) {
    evt.preventDefault();


    profileName.textContent = nameInput.value;
    profileDiscription.textContent = jobInput.value;
    popupClassOpen(popupProfileEdit);
}

//Функция «отправки» формы для карточки
const handleFormSubmitAddCard = (e) => {
  e.preventDefault();
  renderInitialCards({
    name: cardNameForm.value,
    link: cardLinkForm.value,
  });
  e.target.reset();
  popupClassOpen(popupAddcard);
}

// Событие клика на редактирование профиля

headerButton.addEventListener('click', function() {
  popupClassOpen(popupProfileEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDiscription.textContent;
});

popupCloseEditButton.addEventListener('click', function () {
  popupClassOpen(popupProfileEdit);
})

formElement.addEventListener('submit', handleFormSubmit);


profileAddButton.addEventListener('click', function () {

  popupClassOpen(popupAddcard);

})

popupCloseAddCard.addEventListener('click', function () {
  popupClassOpen(popupAddcard);
})

popupCloseZoomImg.addEventListener('click', function () {
  popupClassOpen(popupZoomImg);
})

cardAddForm.addEventListener('submit', handleFormSubmitAddCard);


// Спринт 5

//Функция для лайка
const likeCard = (event) => {
  event.target.closest('.elements__like').classList.toggle('elements__like_active');
}

// Функция для удаления
const deleteCard = (event) => {
  event.target.closest('.elements__element').remove();
}

//Функция добавления новых карточек и карточек из массива//

const createCard = (item) => {
  const newCard = elementsTemplate.cloneNode(true);

  const cardName = newCard.querySelector('.elements__title');
  cardName.textContent = item.name;

  const cardLink = newCard.querySelector('.elements__image');
  cardLink.src = item.link;
  cardLink.alt = item.name;

  // слушатель клика лайк
  const likeCardButton = newCard.querySelector('.elements__like');
  likeCardButton.addEventListener('click', likeCard);

  // слушатель клика удаление
  const deleteCardButton = newCard.querySelector('.elements__delete');
  deleteCardButton.addEventListener('click', deleteCard);

  // функция просмотра картинки
  cardLink.addEventListener('click', () => {
    imageZoom.src = item.link;
    imageZoom.alt = item.name;
    imageZoomName.textContent = item.name;
    popupClassOpen(popupZoomImg);

  })

  return newCard;
}

const renderInitialCards = (item) => {
  elementsList.prepend(createCard(item));
}

initialCards.forEach(function (item) {
renderInitialCards(item);
})




