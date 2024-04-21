import icons from 'url:../../img/icons.svg';

export default class view{
    _data;
    render(data) {
      if(!data ||(Array.isArray(data)&&data.length===0)) return this.renderError()
      this._data = data;
      const markup= this._generateMarkup()
      this._clear()
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
    _clear() {
      this._parentElement.innerHTML = ''
    }
    renderSpinner() {
      const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
    renderError(message = this._errorMessage) {
      const markup = `<div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>`
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
    renderMessage(message = this._message) {
      const markup = `<div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>`
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
    _generateMarkupIngredient(ing) {
        return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}.svg#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ' '}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>`
    }
}