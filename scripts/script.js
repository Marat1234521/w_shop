import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
const popupAll = document.querySelectorAll('.popup');
const closeFormBtns = document.querySelectorAll('.popup__close');
const formInputName = document.querySelector('.form__input_type_name');
const formInputSurame = document.querySelector('.form__input_type_surname');
const formInputMail = document.querySelector('.form__input_type_mail');
const formInputPhone = document.querySelector('.form__input_type_phone');
const formInputTin = document.querySelector('.form__input_type_tin');
const cardPopup = document.querySelector("#card-popup");
const deliveryPopup = document.querySelector("#delivery-popup");
const buttonOrderPopup = document.querySelectorAll(".button__order_popup");
const buttonDelivery = document.querySelectorAll('.button__popup_delivery');
const buttonCheckbox = document.querySelectorAll('.basket__checkbox');
const buttonPayment = document.querySelectorAll('.button__popup_payment');
const elementsCard = document.querySelector('.elements');
const elementsCardnone = document.querySelector('.elements__nonecard');
const placeTemplate = document.querySelector("#place-template").content;
const nonecardTemplate = document.querySelector("#nonecard-template").content;
const deliveryInputsName = document.querySelector('.delivery__inputs_name');
const deliveryInputsContacts = document.querySelector('.delivery__inputs_contacts');
const cards = [];
const initialCards = [
    {
      name: 'Футболка UZcotton мужская',
      amount: 2,
      color: 'белый',
      size: '56',
      price: 522,
      oldprice: 1051,
      link: 'images/card images/UZcotton.jpg',
      adress: 'Коледино WB',
      company: 'OOO Вайлдберриз'
    },
    {
      name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
      amount: 200,
      color: '',
      size: '',
      price: 2100047,
      oldprice: 2300047,
      link: 'images/card images/image2.jpg',
      adress: 'Коледино WB',
      company: 'OOO Мегапрофстиль'
    },
    {
      name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
      amount: 15,
      color: '',
      size: '',
      price: 494,
      oldprice: 950,
      link: 'images/card images/image3.jpg',
      adress: 'Коледино WB',
      company: 'OOO Вайлдберриз'
    }
  ];

const selectors = {
    formSelector: '.delivery',
    inputSelector: '.form__input',
    submitButtonSelector: '.button__order',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  };

buttonDelivery.forEach((button__popup_delivery) => {
  button__popup_delivery.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      openFormDelivery();
    }
  });
});

buttonPayment.forEach((button__popup_payment) => {
  button__popup_payment.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      openFormPayment();
    }
  });
});

popupAll.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  });
});

closeFormBtns.forEach((button) => {
  button.addEventListener('click', closeForm);
});

function closeForm (evt) {
  closePopup(evt.target.closest('.popup'));
}

function closeOpenedPopup(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOpenedPopup);
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOpenedPopup);
}

function createCard(item) {
    const card = new Card(item.name, item.link, item.amount, item.color, item.size, item.price, item.oldprice, item.adress, item.company,  placeTemplate, nonecardTemplate);
    const cardElement = card.renderActive();
    return cardElement;
}

function createCardNone(item) {
  const card = new Card(item.name, item.link, item.amount, item.color, item.size, item.price, item.oldprice, item.adress, item.company, placeTemplate, nonecardTemplate);
  const cardElement = card.renderInactive();
  return cardElement;
}

function renderCard(item) {
    elementsCard.append(createCard(item));
}

function renderNonecard(item) {
  elementsCardnone.append(createCardNone(item));
}

initialCards.map(function (item) {
    renderCard(item);
});

initialCards.map(function (item) {
  renderNonecard(item);
});

function openFormDelivery () {
  openPopup (deliveryPopup);
}

function openFormPayment () {
  openPopup (cardPopup);
}

const basketCheckbox = document.getElementsByClassName('basket__checkbox');

const formvalidatorName= new FormValidator(selectors, deliveryInputsName);
formvalidatorName.enableValidation();

const formvalidatorContacts = new FormValidator(selectors, deliveryInputsContacts);
formvalidatorContacts.enableValidation();

formInputMail.addEventListener('click', function () {
  document.querySelector('.form__input_type_mail_title').textContent = 'email';
});

formInputName.addEventListener('click', function () {
  document.querySelector('.name-input-title').textContent = 'Имя';
});

formInputSurame.addEventListener('click', function () {
  document.querySelector('.surname-input-title').textContent = 'Фамилия';
});

formInputTin.addEventListener('click', function () {
  document.querySelector('.form__input_type_tin_title').textContent = 'ИНН';
});

formInputPhone.addEventListener('click', function () {
  document.querySelector('.form__input_type_phone_title').textContent = 'Номер телефона';
});