import actionsEnum from '../actions/actionsEnum';

class mainState {

  searchKey: string;

  constructor(){
    this.searchKey = "";
  }
}

const mainReducer = (state: mainState = new mainState(), action) => {
  switch (action.type) {
    case actionsEnum.CHANGE_SEARCH_KEY:
      return handleChangeSearchKey(state, action);
  }
  return state;
}

const handleChangeSearchKey = (state: mainState, action)=> {
  return {
    ...state,
    searchKey: action.searchKey
  }
}

export default mainReducer;
