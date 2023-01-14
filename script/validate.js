const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(validationConfig.inputErrorClass);
};

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(validationConfig.inputErrorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig)
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

const resetValidation = (formElement, validationConfig) => {
  const inputList = [...formElement.querySelectorAll(validationConfig.inputSelector)];

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig)
  })
}

// // кнопка сохранить в неактивном состоянии

const toggleBtnSubmit = (inputList, buttonElement, validationConfig) => {
   if (hasInvalidInput(inputList)) {

     buttonElement.classList.add(validationConfig.inactiveButtonClass);
     buttonElement.disabled = true;
       } else {

     buttonElement.classList.remove(validationConfig.inactiveButtonClass);
     buttonElement.disabled = false;
   }
 }

const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
   const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

   toggleBtnSubmit(inputList, buttonElement, validationConfig);
   inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validationConfig);
     toggleBtnSubmit(inputList, buttonElement, validationConfig);
    });
  })
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
       resetValidation(formElement, validationConfig);
       toggleBtnSubmit(inputList, buttonElement, validationConfig);
    }, 0)
  })
}


function enableValidation(validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, validationConfig)
  });
}


enableValidation(validationConfig);
