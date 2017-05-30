import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import {App} from './App';
import changeSearchKey from '../actions/changeSearchKey';
import searchStarted from '../actions/searchStarted';
import searchCompleted from '../actions/searchCompleted';
import fetchRecipes from '../actions/fetchRecipes';
import changeSelectedRecipe from '../actions/changeSelectedRecipe';



const mapStateToProps = (state) => {
    return {
      searchKey: state.mainReducer.searchKey,
      isSearching: state.mainReducer.isSearching,
      searchResults: state.mainReducer.searchResults,
      selectedRecipe: state.mainReducer.selectedRecipe
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      changeSearchKey: (searchKey: string)=>dispatch(changeSearchKey(searchKey)),
      searchStarted: ()=>dispatch(searchStarted()),
      searchCompleted: (results)=>dispatch(searchCompleted(results)),
      fetchRecipes: ()=>dispatch(fetchRecipes()),
      changeSelectedRecipe: (recipeId)=>dispatch(changeSelectedRecipe(recipeId))
    }
  }

export const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App) as any);
