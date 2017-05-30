import * as React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  orange400,
  deepOrange400
} from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import {Menu,MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';


import HeaderBar from './HeaderBar';
import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';
import Recipe from '../models/Recipe';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange400,
    accent1Color: deepOrange400
  },
  fontFamily: "Lato, sans-serif"
  //fontFamily: 'monospace'
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

          <Route render={({history})=>
            <HeaderBar
              searchKey={this.props.searchKey}
              changeSearchKey={this.props.changeSearchKey}
              fetchRecipes={this.props.fetchRecipes}
              history = {history} />
          }/>

            <div style={{...forceNavDown, height: '100%'}}>
              <div className="col-lg-2 visible-lg">
                <Drawer containerStyle={forceNavDown}>
                  <Menu disableAutoFocus={true}>
                    <MenuItem disabled>Need some inspiration?</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Fresh Picks')}>Fresh Picks</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Beef')}>Beef</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Burger')}>Burger</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Chicken')}>Chicken</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Pasta')}>Pasta</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Salad')}>Salad</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Turkey')}>Turkey</MenuItem>
                    <MenuItem onTouchTap={()=>this.searchFor('Vegetarian')}>Vegetarian</MenuItem>
                    <Divider />
                    <MenuItem disabled leftIcon={<FontIcon className="zmdi zmdi-github zmdi-fw"></FontIcon>}><a href="https://github.com/mohamed-ismat/react-redux-recipes">Source Code</a></MenuItem>
                    <MenuItem disabled leftIcon={<FontIcon className="zmdi zmdi-comment-text zmdi-fw"></FontIcon>}><a href="https://github.com/mohamed-ismat/react-redux-recipes/issues">Feedback</a></MenuItem>

                  </Menu>
                  <p className="text-center" style={{position:'absolute', bottom:'70px', left:'0px', right:'0px'}}>Powered by <span><a href="https://www.edamam.com"><img height="20px" src="https://www.edamam.com/images/logo-site-header.png" /></a></span></p>
                </Drawer>
              </div>
              <div className="col-md-12 col-lg-10" style={{padding: "48px", height:'100%'} as any}>
                <Switch>
                  <Route exact path="/recipes" render={({history})=>(
                    <RecipesList recipes={this.props.searchResults} isSearching={this.props.isSearching} history={history} />
                  )  as any} />
                  <Route path="/recipes/:id" render={({match})=>(
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
