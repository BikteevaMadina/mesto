export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._validationConfig = validationConfig;
  }



 _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

_showInputError (inputElement, errorMessage) {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.add(this._validationConfig.errorClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(this._validationConfig.inputErrorClass);

}

resetValidation = () => {
  this._toggleBtnSubmit();

  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
}

_hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(this._validationConfig.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(this._validationConfig.inputErrorClass);
}

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError( inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
};


  _toggleBtnSubmit = (button) => {
    if (this._hasInvalidInput(this._inputList)) {
      button.classList.add(this._validationConfig.inactiveButtonClass)
      button.disabled = true;
    } else {
      button.classList.remove(this._validationConfig.inactiveButtonClass)
      button.disabled = false;
    }
  }

  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));

      const button = this._formElement.querySelector(this._validationConfig.submitButtonSelector);

      this._toggleBtnSubmit(button);

      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () =>{
        this._checkInputValidity(inputElement);
        this._toggleBtnSubmit();
        })
      })

    }
}
