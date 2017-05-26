import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  orange400,
  deepOrange400
} from 'material-ui/styles/colors';

import HeaderBar from './HeaderBar';
import RecipesList from './RecipesList';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange400,
    accent1Color: deepOrange400
  },
  fontFamily: "Lato, sans-serif"
});

interface Props {

}

export const App = (props: Props) => {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div>

          <HeaderBar />

          <div className="container" style={{paddingTop: '20px'}}>

            <RecipesList />

          </div>

        </div>

      </MuiThemeProvider>
    );
  };
