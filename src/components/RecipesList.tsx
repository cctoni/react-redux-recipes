import * as React from 'react'
import axios from 'axios';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import StarRating from './StarRating';

import apiLogin from '../apiLogin';

const styles = {
  root: {
    'display' : 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
  },
  tile: {
    'width': '300px',
    //'height': 450,
    'overflowY': 'auto',
    'marginBottom': '20px',
    'cursor': 'pointer'
  }
};

class RecipesList extends React.Component < {}, {} > {

  state = {
    tilesData: []
  };

componentDidMount(){

  axios
    .get(`https://api.edamam.com/search?q=chicken&app_id=${apiLogin.appId}&app_key=${apiLogin.appKey}&from=0&to=10`)
    .then(response => {
      console.log(response.data);
      this.setState({
        tilesData: response.data.hits
      });
    })

};

render() {
    return (
      <div style={styles.root as any}>

        {this.state.tilesData.map(tile => (
          <Card key={tile.recipe.image} style={styles.tile as any}>
            <CardMedia overlay={<CardTitle title={tile.recipe.label} subtitle={tile.recipe.source} />}>
              <img src={tile.recipe.image} />
            </CardMedia>
            <CardText>
              <StarRating numOfStars={4} />
            </CardText>
          </Card>
        ))}

      </div>
    );

  }
}

export default RecipesList;
