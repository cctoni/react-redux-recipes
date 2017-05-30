import * as React from 'react'

import Drawer from 'material-ui/Drawer';
import {Menu,MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  forceNavDown: {
    'marginTop': '64px'
  },
  bottomAttribution: {
    position:'absolute',
    bottom:'70px',
    left:'0px',
    right:'0px'
  }
}

interface Props {
  searchFor: (string)=>void;
}

const Sidebar = (props: Props) => {

  return (

    <Drawer containerStyle={styles.forceNavDown}>
      <Menu disableAutoFocus={true}>
        <MenuItem disabled>Need some inspiration?</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Fresh Picks')}>Fresh Picks</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Beef')}>Beef</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Burger')}>Burger</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Chicken')}>Chicken</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Pasta')}>Pasta</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Salad')}>Salad</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Turkey')}>Turkey</MenuItem>
        <MenuItem onTouchTap={()=>props.searchFor('Vegetarian')}>Vegetarian</MenuItem>
        <Divider />
        <MenuItem disabled leftIcon={<FontIcon className="zmdi zmdi-github zmdi-fw"></FontIcon>}><a href="https://github.com/mohamed-ismat/react-redux-recipes">Source Code</a></MenuItem>
        <MenuItem disabled leftIcon={<FontIcon className="zmdi zmdi-comment-text zmdi-fw"></FontIcon>}><a href="https://github.com/mohamed-ismat/react-redux-recipes/issues">Feedback</a></MenuItem>

      </Menu>
      <p className="text-center" style={styles.bottomAttribution as any}>Powered by <span><a href="https://www.edamam.com"><img height="20px" src="https://www.edamam.com/images/logo-site-header.png" /></a></span></p>
    </Drawer>

  )
}

export default Sidebar
