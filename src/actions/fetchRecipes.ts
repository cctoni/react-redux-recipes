import actionsEnum from './actionsEnum';
import apiLogin from '../apiLogin';
import axios from 'axios';
import searchStarted from '../actions/searchStarted';
import searchCompleted from '../actions/searchCompleted';


function fetchRecipes () {

  return function(dispatch, getState) {

    dispatch(searchStarted());

    let state = getState();

    axios
      .get(`https://api.edamam.com/search?q=${state.mainReducer.searchKey}&app_id=${apiLogin.appId}&app_key=${apiLogin.appKey}&from=0&to=12`)
      .then((response)=>dispatch(searchCompleted(response.data.hits.map(h=>h.recipe))));

  }



};

export default fetchRecipes;
