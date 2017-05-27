import actionsEnum from '../actions/actionsEnum';

import Recipe from '../models/Recipe';

class mainState {

  searchKey: string;
  isSearching: boolean;
  searchResults: Recipe[];

  constructor(){
    this.searchKey = "";
    this.isSearching = false;
    this.searchResults = [];
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
  }
  return state;
}

const handleChangeSearchKey = (state: mainState, action)=> {
  return {
    ...state,
    searchKey: action.searchKey
  }
}

const handleSearchStarted = (state: mainState)=> {
  debugger;
  return {
    ...state,
    isSearching: true
  }
}

const handleSearchCompleted = (state: mainState, action)=> {
  debugger;
  return {
    ...state,
    isSearching: false,
    searchResults: action.results
  }
}

export default mainReducer;
