import * as React from 'react'
import axios from 'axios';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {Menu,MenuItem} from 'material-ui/Menu';

import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';


import apiLogin from '../apiLogin';

import '../assets/calories.png';

const styles = { root: { 'display' : 'flex', 'flexWrap': 'wrap',
'justifyContent': 'space-around' }, tile: { 'width': '300px', 'overflowY':
'auto', 'marginBottom': '20px', 'cursor': 'pointer' }, materialIcons: { display:
'inline-flex', alignItems: 'center', justifyContent: 'center', verticalAlign:
'middle', marginLeft: '10px' } };

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
            <CardText style={{float: 'right'}}>
                <img src='images/calories.png' style={{width: '40px', height:'40px'}}/>{(tile.recipe.calories/tile.recipe.yield).toFixed()}
                <FontIcon style={styles.materialIcons as any} width="40" className="material-icons" color='gray' >person</FontIcon> {tile.recipe.yield}
            </CardText>
          </Card>
        ))}

      </div>
    );

  }
}

export default RecipesList;
