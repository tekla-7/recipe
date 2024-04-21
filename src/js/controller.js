// import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js';
import ResultsViewView from './views/resultsView.js';

if(module.hot){
module.hot.accept()
}



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)
    if (!id) return
    recipeView.renderSpinner()
    //loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    //view Rendering
    recipeView.render(model.state.recipe)

   
  } catch (err) {
    recipeView.renderError()
  }
}
const controlSearchResuls=async function(){
  
  try{
    ResultsViewView.renderSpinner()
    const query=searchView.getQuery();
    if(!query) return ;
    await model.loadSearchResults('');
    ResultsViewView.render(model.state.search.results)

  }catch(err){}
}


const init=function(){
recipeView.addHandlerRender(controlRecipes)
searchView.addHandlerSearch(controlSearchResuls)
}

init()




