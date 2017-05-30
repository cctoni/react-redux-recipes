import * as React from 'react';

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  orange400,
  deepOrange400
} from 'material-ui/styles/colors';

import HeaderBar from './HeaderBar';
import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';
import Recipe from '../models/Recipe';
import Sidebar from './Sidebar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange400,
    accent1Color: deepOrange400
  },
  fontFamily: "Lato, sans-serif"
});

let forceNavDown = {'marginTop': '64px'};

interface Props {
  searchKey: string;
  isSearching: boolean;
  searchResults: any[];
  selectedRecipe: Recipe;
  changeSearchKey: (string)=>void;
  searchStarted:()=>void;
  searchCompleted:(any)=>void;
  fetchRecipes:()=>void;
  changeSelectedRecipe: (string)=>void;
}

export class App extends React.Component<Props,{}> {

  searchFor(searchKey: string) {
    this.props.changeSearchKey(searchKey);
    this.props.fetchRecipes();
  }

  componentDidMount() {
    this.searchFor('Fresh Picks');
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={{height: '100%'}}>

          <Route
            render={({history})=>
              <HeaderBar
                searchKey={this.props.searchKey}
                changeSearchKey={this.props.changeSearchKey}
                fetchRecipes={this.props.fetchRecipes}
                history={history}
              />
            }
          />


          <div style={{...forceNavDown, height: '100%'}}>


            <div className="col-lg-2 visible-lg">
              <Sidebar searchFor={key=>this.searchFor(key)}/>
            </div>


            <div className="col-md-12 col-lg-10" style={{padding: "48px", height:'100%'} as any}>

              <Switch>

                <Route
                  exact path="/recipes"
                  render={({history})=>(
                    <RecipesList recipes={this.props.searchResults} isSearching={this.props.isSearching} history={history} />
                  )  as any} />

                <Route
                  path="/recipes/:id"
                  render={({match})=>(
                    <RecipeDetails
                      recipe={this.props.selectedRecipe}
                      changeSelectedRecipe={this.props.changeSelectedRecipe}
                      match={match as any} />
                  ) as any}/>

              </Switch>

            </div>
          </div>

        </div>

      </MuiThemeProvider>
    );
  }};
