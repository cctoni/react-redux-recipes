import * as React from 'react'
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer'
  }
}


const HeaderBar = (props) => {
  return (
    <AppBar title={<div>
          <strong style={styles.title}>React Recipes</strong>

          </div>
      }
      onTitleTouchTap={()=>{}}
       >
    </AppBar>
  )
}

export default HeaderBar
