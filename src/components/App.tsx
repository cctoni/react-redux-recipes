import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  orange400,
  deepOrange400
} from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import {Menu,MenuItem} from 'material-ui/Menu';


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
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </Menu>
          </Drawer>


          <RecipesList recipes={props.searchResults} isSearching={props.isSearching} />




        </div>

      </MuiThemeProvider>
    );
  };
