import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import {Menu, MenuItem} from 'material-ui/Menu';
import AutoComplete from 'material-ui/AutoComplete';
import ActionSearch from 'material-ui/svg-icons/action/search'
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import {
  orange400,
  deepOrange400
} from 'material-ui/styles/colors';

const styles = {
  title: {
    cursor: 'pointer',
  },
  searchBox: {
    backgroundColor: 'white',
    margin:'8px',
    marginLeft: '90px',
    boxShadow: "0 5px 5px 0 rgba(0,0,0,0.1)",
    borderRadius: "2px",
    //display:'inline',
  },
  materialIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight:'1'
  },
  searchIconButton: {
    borderColor: 'lightGray',
    borderStyle: 'solid',
    borderWidth: '0px 1px 0px 0px',
    marginLeft:'8px',
    width: "50px",
    //background: deepOrange400,
  }

}

interface Props {
  searchKey: string;
  changeSearchKey: (string)=>void;
}


const HeaderBar = (props: Props) => {

  let onChangeSearchKey = (e)=>{
    props.changeSearchKey(e.target.value);
  }

  return (
    <AppBar
      title={
        <Toolbar style={{background: 'transparent', height:'64px'}}>
          <ToolbarGroup firstChild={true}>
            <div style={{display: 'flex', alignItems:'center'}}>
              <strong style={styles.title}>React Recipes</strong>
              <div  style={{...styles.searchBox, display: 'flex', alignItems:'center'}} >
                <IconButton style={ {...styles.materialIcon,...styles.searchIconButton} as any}><FontIcon className="material-icons" color={orange400} style={{lineHeight:'auto'}} >search</FontIcon></IconButton>
                <TextField id="searchKey" defaultValue={props.searchKey} onChange={e=>onChangeSearchKey(e)} hintText="Search" fullWidth={true} underlineStyle={{display: 'none'}} style={{height: 'auto', margin:'8px', width:'600px'}} hintStyle={{bottom:'auto', fontWeight:'bold'}} />

             </div>

            </div>

          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton style={styles.materialIcon as any}><FontIcon className="material-icons" color="white" style={{lineHeight:'auto'}} >favorite</FontIcon></IconButton>
            <IconButton style={styles.materialIcon as any}><FontIcon className="material-icons" color="white" style={{lineHeight:'auto'}} >notifications</FontIcon></IconButton>
            <ToolbarSeparator style={{backgroundColor:'white'}} /><FontIcon />
            <Avatar src="http://www.material-ui.com/images/kolage-128.jpg" /><FontIcon />
            <ToolbarTitle text="Hi, Obi-Wan" style={{color:'white'}} />
            <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon color="white" />
              </IconButton>
            }
          >
            <MenuItem primaryText="Profile" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
          </ToolbarGroup>


        </Toolbar>
      }
      onTitleTouchTap={()=>{}}
      iconElementLeft={<i style={{marginLeft:'48px'}}/>}
       >
    </AppBar>

  )
}

export default muiThemeable()(HeaderBar)
