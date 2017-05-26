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
    marginLeft: '90px',
    boxShadow: "0 5px 5px 0 rgba(0,0,0,0.1)",
    borderRadius: "3px",
    display:'inline',
  },
  menuItem: {
  }

}


const HeaderBar = (props) => {
  return (
    <AppBar
      title={
        <div>
          <strong style={styles.title}>React Recipes</strong>
          <div  style={styles.searchBox} >
            <TextField  underlineStyle={{display: 'none'}}/>
            <ActionSearch color={props.muiTheme.palette.primary1Color}/>

         </div>
        </div>
      }
      onTitleTouchTap={()=>{}}
      iconElementLeft={<i style={{marginLeft:'48px'}}/>}
       >
    </AppBar>

  )
}

export default muiThemeable()(HeaderBar)
