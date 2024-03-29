import actionsEnum from '../actions/actionsEnum';

import Recipe from '../models/Recipe';

class mainState {

  searchKey: string;
  isSearching: boolean;
  searchResults: Recipe[];
  selectedRecipe: Recipe;

  constructor() {
    this.searchKey = '';
    this.isSearching = false;
    this.searchResults = [];
    this.selectedRecipe = new Recipe();
  }
}

const mainReducer = (state: mainState = new mainState(), action) => {
  switch (action.type) {
    case actionsEnum.CHANGE_SEARCH_KEY:
      return handleChangeSearchKey(state, action);
    case actionsEnum.SEARCH_STARTED:
      return handleSearchStarted(state);
    case actionsEnum.SEARCH_COMPLETED:
      return handleSearchCompleted(state, action);
    case actionsEnum.CHANGE_SELECTED_RECIPE:
      return handleChangeSelectedRecipe(state, action);
  }
  return state;
};

const handleChangeSearchKey = (state: mainState, action) => ({
  ...state,
  searchKey: action.searchKey,
});

const handleSearchStarted = (state: mainState) => ({
  ...state,
  isSearching: true,
});

const handleSearchCompleted = (state: mainState, action) => ({
  ...state,
  isSearching: false,
  searchResults: action.results,
});

const handleChangeSelectedRecipe = (state: mainState, action) => {
  const decodedUri1 = decodeURIComponent(action.recipeId);
  const decodedUri = decodeURIComponent(decodedUri1);
  const recipe = state.searchResults.find(r => r.label == decodedUri);
  return {
    ...state,
    selectedRecipe: recipe,
  };
};

export default mainReducer;
