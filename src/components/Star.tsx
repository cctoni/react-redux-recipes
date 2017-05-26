import * as React from 'react'
import FontIcon from 'material-ui/FontIcon';

const Star = (props) => {
  const {isFavorite, ...starProps} = props;
  return (
    <span>
      { (isFavorite)
        ? <FontIcon className="material-icons" color='yellow' style={{fontSize:"16px"}}  {...starProps} >star</FontIcon>
        : <FontIcon className="material-icons" color='yellow' style={{fontSize:"16px"}} {...starProps} >star_border</FontIcon>
      }
    </span>
  )
}

export default Star
