// Объявление переменных popup
const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupCardAdd = document.querySelector('.popup_card-add');
const popupImageZoom = document.querySelector('.popup_image-zoom');

// Переменные открытия и закрытия popup

const profileBtnEdit = document.querySelector('.profile__button-edit');
const profileBtnAdd = document.querySelector('.profile__button-add');

const popupCloseProfileEdit = popupProfileEdit.querySelector('.popup__button-close');
const popupCloseCardAdd = popupCardAdd.querySelector('.popup__button-close');
const popupCloseImageZoom = popupImageZoom.querySelector('.popup__button-close');

//Переменные для карточек

const elementsList = document.querySelector('.elements__list');
const elementsTemplate = document.querySelector('#elements-template').content;
const formCardsAdd = document.querySelector('#form-cards-add');
const formCardName = document.querySelector('.name');
const formCardLink = document.querySelector('.link');

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

const profileUserName = document.querySelector('.profile__user');
const profileDiscription = document.querySelector('.profile__discription');
// Находим форму в DOM
const formProfileEdit = document.querySelector('#form-profile-edit');
// Находим поля формы в DOM
const inputPostName = document.querySelector('.popup__input_post_name');
const inputPostActivity = document.querySelector('.popup__input_post_activity');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');


// Открытие и закрыт popup

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

const closePopup= function (popup) {
  popup.classList.remove('popup_opened');
}


// Обработчик «отправки» формы для редактирования профиля

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileUserName.textContent = inputPostName.value;
    profileDiscription.textContent = inputPostActivity.value;
    closePopup(popupProfileEdit);
}

//Функция «отправки» формы для карточки
const handleFormSubmitAddCard = (e) => {
  e.preventDefault();
  renderInitialCards({
    name: formCardName.value,
    link: formCardLink.value,
  });
  e.target.reset();
  closePopup(popupCardAdd);
}

// Событие клика на редактирование профиля

profileBtnEdit.addEventListener('click', function() {
  inputPostName.value = profileUserName.textContent;
  inputPostActivity.value = profileDiscription.textContent;
  openPopup(popupProfileEdit);
});


formProfileEdit.addEventListener('submit', handleFormSubmit);


// Событие клика на добавление карточки

profileBtnAdd.addEventListener('click', function () {
  openPopup(popupCardAdd);
})

//Событие закрытия popup по крестику


popupCloseProfileEdit.addEventListener('click', function () {
  closePopup(popupProfileEdit);
})
popupCloseCardAdd.addEventListener('click', function () {
  closePopup(popupCardAdd);
})

popupCloseImageZoom.addEventListener('click', function () {
  closePopup(popupImageZoom);
})

formCardsAdd.addEventListener('submit', handleFormSubmitAddCard);


// Спринт 5

//Функция для лайка
const likeElements = (event) => {
  event.target.closest('.elements__like').classList.toggle('elements__like_active');
}

// Функция для удаления
const deleteElements = (event) => {
  event.target.closest('.elements__element').remove();
}

//Функция добавления новых карточек и карточек из массива//

const createElement = (item) => {
  const newElement = elementsTemplate.cloneNode(true);

  const elementTitle = newElement.querySelector('.elements__title');
  elementTitle.textContent = item.name;

  const elementImageLink = newElement.querySelector('.elements__image');
  elementImageLink.src = item.link;
  elementImageLink.alt = item.name;


  // слушатель клика лайк
  const buttonElementLike = newElement.querySelector('.elements__like');
  buttonElementLike.addEventListener('click', likeElements);

  // слушатель клика удаление
  const buttonElementDelete = newElement.querySelector('.elements__delete');
  buttonElementDelete.addEventListener('click', deleteElements);

  // функция просмотра картинки
  elementImageLink.addEventListener('click', () => {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupImageCaption.textContent = item.name;
    openPopup(popupImageZoom);

  })

  return newElement;
}

const renderInitialCards = (item) => {
  elementsList.prepend(createElement(item));
}

initialCards.forEach(function (item) {
renderInitialCards(item);
})




