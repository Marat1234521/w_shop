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
    this._submitButtonAmountIncrease = this.placeTemplate.querySelector(".plus");
    this._submitButtonAmountDecrease = this.placeTemplate.querySelector(".minus");
    this._InputCardcounter = this.placeTemplate.querySelector(".button__enumerator_text");
    this._InputCardcounter.value = 1;
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

  _AmountinputValidation() {
    if ((this._InputCardcounter.value > this._amount) || (this._InputCardcounter.value < 1)) {
      if (this._InputCardcounter.value > this._amount) {
        this._InputCardcounter.textContent = this._amount;
        this._InputCardcounter.value = this._amount;
        this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
      }
      else if (this._InputCardcounter.value < 1) {
        this._InputCardcounter.textContent = 1;
        this._InputCardcounter.value = 1;
        this.placeTemplate.querySelector(".text_error").textContent = `Минимум`;
      }
    }

    else if (this._InputCardcounter.value <= this._amount) {
      this._InputCardcounter.textContent = this._InputCardcounter.value;
    }
    
  }

  _toggleButtonCardAdd () {
    this.placeTemplate.querySelector(".basket__checkbox").classList.toggle('basket__checkbox_active');
    this.returnFullSumCards();
  }

  _toggleButtonAmountIncrease() {
  this._InputCardcounter.textContent = this._InputCardcounter.value;
  if (this._amount > this._InputCardcounter.textContent) {
    this.placeTemplate.querySelector(".text_error").textContent = ``;
    this._InputCardcounter.textContent++;
    this._InputCardcounter.value = this._InputCardcounter.textContent;
      if ((this._amount - 2) == this._InputCardcounter.textContent) {
        this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
     }
      if ((this._amount - 1) == this._InputCardcounter.textContent) {
        this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
      }
      if (this._amount == this._InputCardcounter.textContent) {
        this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
      }
  }
  else if (this._amount == this._InputCardcounter.textContent) {
    this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
  }
  if (this._InputCardcounter.textContent > 0) {
    this.placeTemplate.querySelector(".basket__actualcard_value").textContent = this._price * Number(this._InputCardcounter.value);
    this.returnFullSumCards();
    this.placeTemplate.querySelector(".basket__old_value").textContent = this._oldprice * Number(this._InputCardcounter.textContent);
  }
  }
  

  _toggleButtonAmountDecrease() {
    this._InputCardcounter.textContent = this._InputCardcounter.value;
    if (this._InputCardcounter.value == 1) {
      this.placeTemplate.querySelector(".text_error").textContent = `Минимум`;
    }
    else if (this._amount > this._InputCardcounter.textContent) {
      this._InputCardcounter.textContent--;
      this._InputCardcounter.value = this._InputCardcounter.textContent;
      this.placeTemplate.querySelector(".text_error").textContent = ``;
      if ((this._amount - 2) == this._InputCardcounter.textContent) {
        this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
      }
      if ((this._amount - 1) == this._InputCardcounter.textContent) {
        this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
      }
    }
    else if (this._amount == this._InputCardcounter.textContent) {
      this.placeTemplate.querySelector(".text_error").textContent = `Осталось ${this._amount} шт.`;
      this._InputCardcounter.textContent--;
      this._InputCardcounter.value = this._InputCardcounter.textContent;
    }
    if (this._InputCardcounter.textContent > 0) {
      this.placeTemplate.querySelector(".basket__actualcard_value").textContent = this._price * Number(this._InputCardcounter.textContent);
      this.returnFullSumCards();
      this.placeTemplate.querySelector(".basket__old_value").textContent = this._oldprice * Number(this._InputCardcounter.textContent);
    }
    }

  _toggleLikeActive() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _toggleLikeInactive() {
    this._likeButtonNonecard.classList.toggle('card__like_newactive');
  }

  _deleteCardActive() {
    this._submitButton.closest('.basket__actualcard').remove();
  }

  _deleteCardInactive() {
    this._submitButtonNonecard.closest('.basket__nonecard').remove();
  }

  _setListeners() {
    this._likeButton.addEventListener('click', () => this._toggleLikeActive());
    this.placeTemplate.querySelector(".basket__checkbox").addEventListener('click', () => this._toggleButtonCardAdd());
    this._InputCardcounter.addEventListener('click', () => this._AmountinputValidation());
    this._submitButtonAmountIncrease.addEventListener('click', () => this._toggleButtonAmountIncrease());
    this._submitButtonAmountDecrease.addEventListener('click', () => this._toggleButtonAmountDecrease());
    this._likeButtonNonecard.addEventListener('click', () => this._toggleLikeInactive());
    this._submitButtonNonecard.addEventListener('click', () => this._deleteCardInactive());
    this._submitButton.addEventListener('click', () => this._deleteCardActive());
  } 
  
  renderActive() {
    this._createCard();
    this._setListeners();
    return this.placeTemplate;
  }

  renderPrice() {
    return this.returnFullSumCards();;
  }
  
  renderInactive() {
    this._createCard();
    this._setListeners();
    return this.nonecardTemplate;
  }

  returnFullSumCards() {
    if (this.placeTemplate.querySelector(".basket__checkbox").classList.value.includes("basket__checkbox_active")) {
    }
    return 0;
  }
}
