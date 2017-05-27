import * as React from 'react'
import axios from 'axios';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {Menu,MenuItem} from 'material-ui/Menu';

import CircularProgress from 'material-ui/CircularProgress';

import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';


import apiLogin from '../apiLogin';

import Recipe from '../models/Recipe';

import '../assets/calories.png';

const styles = {
  root: {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around',
    height: "100%",
    overflowY: "auto",
    padding: "48px",
    paddingLeft: '304px'
  },
  tile: {
    'width': '300px',
    'overflowY': 'auto',
    'marginBottom': '20px',
    'cursor': 'pointer'
  },
  materialIcons: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginLeft: '10px'
  }
};

interface Props {
  recipes: Array<Recipe>,
  isSearching: boolean
}

const RecipesList = (props: Props)=> {

    return (
      <div style={styles.root as any}>

        {!props.isSearching &&
          props.recipes.map(tile => (
          <Card key={tile.image} style={styles.tile as any}>
            <CardMedia overlay={<CardTitle title={tile.label} subtitle={tile.source} />}>
              <img src={tile.image} />
            </CardMedia>
            <CardText style={{float: 'right'}}>
                <img src='images/calories.png' style={{width: '40px', height:'40px'}}/>{(tile.calories/tile.yield).toFixed()}
                <FontIcon style={styles.materialIcons as any} width="40" className="material-icons" color='gray' >person</FontIcon> {tile.yield}
            </CardText>
          </Card>
        ))}

        {props.isSearching &&
          <CircularProgress style={{height: '100%', display:'flex', alignItems:'center'}} size={300} thickness={25} />
        }

      </div>
    );

};

export default RecipesList;
