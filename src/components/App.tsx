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
  fontFamily: "Lato, sans-serif"
});

let forceNavDown = {'top': '64px'};

interface Props {

}

export const App = (props: Props) => {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={{height: '100%'}}>

          <HeaderBar />



          <Drawer containerStyle={forceNavDown}>
            <Menu>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </Menu>
          </Drawer>


          <RecipesList />



        </div>

      </MuiThemeProvider>
    );
  };
