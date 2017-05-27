import { connect } from 'react-redux';

import {App} from './App';
import changeSearchKey from '../actions/changeSearchKey';
import searchStarted from '../actions/searchStarted';
import searchCompleted from '../actions/searchCompleted';
import fetchRecipes from '../actions/fetchRecipes';



const mapStateToProps = (state) => {
    return {
      searchKey: state.mainReducer.searchKey,
      isSearching: state.mainReducer.isSearching,
      searchResults: state.mainReducer.searchResults

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      changeSearchKey: (searchKey: string)=>dispatch(changeSearchKey(searchKey)),
      searchStarted: ()=>dispatch(searchStarted()),
      searchCompleted: (results)=>dispatch(searchCompleted(results)),
      fetchRecipes: ()=>dispatch(fetchRecipes()),
    }
  }

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
