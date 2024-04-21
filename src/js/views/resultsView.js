import View from "./view.js";
import icons from 'url:../../img/icons.svg';

class ResultsView extends View{
    _parentElement=document.querySelector('.results')
    _errorMessage = 'We couldnot find';
    _message = ''
    _generateMarkup(){
        return this._data.map(_generateMarkupPreview).join('')
        
    }
    _generateMarkupPreview(result){
        return `<li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">
              ${result.title}
            </h4>
            <p class="preview__publisher">${result.publisher}</p>
             
          </div>
        </a>
      </li>`
    }
}
export default new ResultsView()