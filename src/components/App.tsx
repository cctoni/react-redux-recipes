import * as React from 'react';
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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange400,
    accent1Color: deepOrange400
  },
  //fontFamily: "Lato, sans-serif"
  fontFamily: 'monospace'
});

let forceNavDown = {'top': '64px'};

interface Props {
  searchKey: string;
  isSearching: boolean;
  searchResults: any[];
  changeSearchKey: (string)=>void;
  searchStarted:()=>void;
  searchCompleted:(any)=>void;
  fetchRecipes:()=>void;
}

export const App = (props: Props) => {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={{height: '100%'}}>

          <HeaderBar
            searchKey={props.searchKey}
            changeSearchKey={props.changeSearchKey}
            fetchRecipes={props.fetchRecipes} />



          <Drawer containerStyle={forceNavDown}>
            <Menu disableAutoFocus={true}>
              <MenuItem disabled>Need some inspiration?</MenuItem>
              <MenuItem>Beef</MenuItem>
              <MenuItem>Chicken</MenuItem>
              <MenuItem>Pasta</MenuItem>
              <MenuItem>Salmon</MenuItem>
              <MenuItem>Vegetarian</MenuItem>
              <Divider />
              <MenuItem leftIcon={<FontIcon className="zmdi zmdi-github zmdi-fw"></FontIcon>}>Source Code</MenuItem>
              <MenuItem leftIcon={<FontIcon className="zmdi zmdi-comment-text zmdi-fw"></FontIcon>}>Feedback</MenuItem>

            </Menu>
            <p className="text-center" style={{position:'absolute', bottom:'50px', left:'0px', right:'0px'}}>Powered by <span><a href="https://www.edamam.com"><img height="20px" src="https://www.edamam.com/images/logo-site-header.png" /></a></span></p>
          </Drawer>


          <RecipesList recipes={props.searchResults} isSearching={props.isSearching} />




        </div>

      </MuiThemeProvider>
    );
  };
