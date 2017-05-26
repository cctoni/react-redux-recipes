import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import {Menu, MenuItem} from 'material-ui/Menu';
import AutoComplete from 'material-ui/AutoComplete';
import ActionSearch from 'material-ui/svg-icons/action/search'
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField'

const styles = {
  title: {
    cursor: 'pointer',
  },
  searchBox: {
    backgroundColor: 'white',
    marginLeft: '50px',
    boxShadow: "0 5px 5px 0 rgba(0,0,0,0.1)",
    borderRadius: "3px",
    display:'inline'
  },

}


const HeaderBar = (props) => {
  return (
    <AppBar
      title={
        <div>
          <strong style={styles.title}>React Recipes</strong>
          {/*}<Menu disableAutoFocus={true} style={styles.searchBox} >
             <MenuItem rightIcon={<ActionSearch color={props.muiTheme.palette.primary1Color}/>} disabled={true} >
               <TextField hintText="Search" fullWidth={true} underlineStyle={{display: 'none'}} />
             </MenuItem>
         </Menu>*/}
        </div>
      }
      onTitleTouchTap={()=>{}}
       >
    </AppBar>

  )
}

export default muiThemeable()(HeaderBar)
