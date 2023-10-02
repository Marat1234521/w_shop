export class Card {
  constructor(name, link, amount, color, size, price, oldprice, adress, company, placeTemplate, nonecardTemplate) {
    this._name = name;
    this._link = link;
    this._amount = amount;
    this._color = color;
    this._size = size;
    this._price = price;
    this._oldprice = oldprice;
    this._adress = adress;
    this._company = company;
    this.placeTemplate = placeTemplate
      .querySelector(".basket__actualcard")
      .cloneNode(true);
    this._likeButton = this.placeTemplate.querySelector('.card__like');
    this._submitButton = this.placeTemplate.querySelector('.card__basket');
    this._cardPicture = this.placeTemplate.querySelector(".card__image");
    this.nonecardTemplate = nonecardTemplate
      .querySelector(".basket__nonecard")
      .cloneNode(true);
    this._likeButtonNonecard = this.nonecardTemplate.querySelector('.card__like');
    this._submitButtonNonecard = this.nonecardTemplate.querySelector('.card__basket');
    this._cardPictureNonecard = this.nonecardTemplate.querySelector(".card__image");
  }
  

  _createCard() {
    this.placeTemplate.querySelector(".card__info_title").textContent = this._name;
    this.placeTemplate.querySelector(".card__info_size_value").textContent = this._size;
    this.placeTemplate.querySelector(".card__info_color_value").textContent = this._color;
    this.placeTemplate.querySelector(".basket__actualcard_value").textContent = this._price;
    this.placeTemplate.querySelector(".basket__old_value").textContent = this._oldprice;
    this.placeTemplate.querySelector(".card__info_adress").textContent = this._adress;
    this.placeTemplate.querySelector(".card__info_company").textContent = this._company;
    this._cardPicture.src = this._link;
    this._cardPicture.alt = this._name;
    this.nonecardTemplate.querySelector(".card__info_title").textContent = this._name;
    this.nonecardTemplate.querySelector(".card__info_size_value").textContent = this._size;
    this.nonecardTemplate.querySelector(".card__info_color_value").textContent = this._color;
    this._cardPictureNonecard.src = this._link;
    this._cardPictureNonecard.alt = this._name;
  }


  _toggleLike() {
    this._likeButton.classList.toggle('.card__like_active');
  }

  _deleteCardActive() {
    this._submitButton.closest('.basket__actualcard').remove();
  }

  _deleteCardInactive() {
    this._submitButtonNonecard.closest('.basket__nonecard').remove();
  }

  _setListeners() {
    this._likeButton.addEventListener('click', () => this._toggleLike());
    this._submitButtonNonecard.addEventListener('click', () => this._deleteCardInactive());
    this._submitButton.addEventListener('click', () => this._deleteCardActive());
  } 
  
  renderActive() {
    this._createCard();
    this._setListeners();
    return this.placeTemplate;
  }
  renderInactive() {
    this._createCard();
    this._setListeners();
    return this.nonecardTemplate;
  }
}
