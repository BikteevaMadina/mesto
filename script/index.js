const headerButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__button-close');

headerButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);


let profileName = document.querySelector('.profile__user');
let profileDiscription = document.querySelector('.profile__discription');


function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDiscription.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_post_name');
let jobInput = document.querySelector('.popup__input_post_activity');

// Обработчик «отправки» формы

function handleFormSubmit (evt) {
    evt.preventDefault();


    profileName.textContent = nameInput.value;
    profileDiscription.textContent = jobInput.value;
    closePopup();

}


formElement.addEventListener('submit', handleFormSubmit);
