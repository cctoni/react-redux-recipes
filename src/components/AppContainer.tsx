import { connect } from 'react-redux';
import {App} from './App';
import changeSearchKey from '../actions/changeSearchKey';


const mapStateToProps = (state) => {
    return {
      searchKey: state.mainReducer.searchKey,

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      changeSearchKey: (searchKey: string)=>dispatch(changeSearchKey(searchKey)),

    }
  }

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
