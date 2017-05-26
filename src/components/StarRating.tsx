import * as React from 'react'
import Star from './Star';

interface Props {
  numOfStars: number;
}

const StarRating = (props: Props) => {

  let starsArray = [];

  for (let i = 1; i<=5; i++) {
    starsArray.push(<Star key={i} isFavorite={(i <= props.numOfStars)} />);
  }

  return (
    <div>
      {...starsArray}
    </div>
  )
}

export default StarRating
