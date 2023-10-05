export class FormValidator {
  constructor(selectors, formElement) {
    this._selectors = selectors;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
  }
  
  _showInputError (inputElement, errorMessage) { 
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectors.inputErrorClass);
    if (inputElement.id == `name-input` ) {
      errorElement.textContent = 'Введите Имя';
    }
    if (inputElement.id == `surname-input` ) {
      errorElement.textContent = 'Введите фамилию';
    }
    if (inputElement.id == `mail-input` ) {
      errorElement.textContent = 'Проверьте адрес электронной почты';
    }
    else if (inputElement.id == `phone-input` ) {
      errorElement.textContent = 'Формат: +9 999 999 99 99';
    }
    else if (inputElement.id == `tin-input` ) {
      errorElement.textContent = 'Проверьте ИНН';
    }
    errorElement.classList.add(this._selectors.errorClass);
  };
  
  _hideInputError (inputElement) { 
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectors.inputErrorClass);
    errorElement.classList.remove(this._selectors.errorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  
  };
  
  _setEventListeners () {
    this._inputList.forEach((inputElement) => {
      document.querySelector('.button__order').addEventListener('click', function () {
        this._checkInputValidity(inputElement);
      }.bind(this));
      
    });
  };
  
  _resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation () {
    
    this._setEventListeners ();
    this._formElement.addEventListener('submit', (evt) => {
      this._resetValidation();
      evt.preventDefault();
    });
      this._setEventListeners();

  };
  
  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  };
  
}


