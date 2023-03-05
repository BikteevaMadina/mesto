export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._validationConfig = validationConfig;
    this._buttonSubmit = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
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
  inputElement.classList.remove(this._validationConfig.inputErrorClass);
  errorElement.classList.remove(this._validationConfig.errorClass);
  errorElement.textContent = '';
}

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError( inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
};

// toggleBtn= (on) => {
//   if (on) {
//     this._buttonSubmit.disabled = false;
//     this._buttonSubmit.classList.remove(this._validationConfig.inactiveButtonClass);
//       } else {
//         this._buttonSubmit.disabled = true;
//         this._buttonSubmit.classList.add(this._validationConfig.inactiveButtonClass);
//       }
//     }

  _toggleBtnSubmit = () => {
    if (this._hasInvalidInput(this._inputList)) {
      // this.toggleBtn(this._buttonSubmit, this._validationConfig.inactiveButtonClass, false)
      this._buttonSubmit.classList.add(this._validationConfig.inactiveButtonClass)
      this._buttonSubmit.disabled = true;
    } else {
      // this.toggleBtn(this._buttonSubmit, this._validationConfig.inactiveButtonClass, true)
      this._buttonSubmit.classList.remove(this._validationConfig.inactiveButtonClass)
      this._buttonSubmit.disabled = false;
    }
  }

  _setEventListeners(){
   this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () =>{
        this._checkInputValidity(inputElement);

        this._toggleBtnSubmit();
        })
      })
  }

  enableValidation() {
      this._toggleBtnSubmit();
      this._setEventListeners();
    }
}
