import * as React from 'react';
import Recipe from '../models/Recipe';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import NutrientDetails from './NutrientDetails';

interface RecipeDetailsParams {
  recipeUri: string;
}

interface Props {
  recipe: Recipe;
  match?: any;
  changeSelectedRecipe: (string)=>void;
}

const styles = {
  tile: {
    //'width': '600px',
    //'overflowY': 'auto',
    //'marginBottom': '20px',
  },
  materialIcons: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginLeft: '10px'
  }
}

class RecipeDetails extends React.Component<Props,{}> {

  componentWillMount(){

    let {match, changeSelectedRecipe} = this.props;

    let uri = encodeURIComponent(match.params.id);
    changeSelectedRecipe(uri);
  }

  render() {

    let {recipe} = this.props;

    return (
      <div>

      <RaisedButton
        label="Back"
        containerElement={<Link to="/recipes"></Link>}/> <br /> <br />

      <Paper style={styles.tile as any}>

        <div>

          <img src={recipe.image} className="img img-responsive img-thumbnail" style={{display:'inline', margin:'20px', float:'left'}}/>

          <div style={{padding:'15px', marginLeft:'15px',paddingLeft:'30px', display:'inline-block'}}>

              <h3>{recipe.label}</h3>
              <h4 className="text-muted">{recipe.source}</h4>

              <p>
                  <img src='images/calories.png' style={{width: '40px', height:'40px'}}/>{(recipe.calories/recipe.yield).toFixed()}
                  <FontIcon style={styles.materialIcons as any} width="40" className="material-icons" color='gray' >person</FontIcon> {recipe.yield}
              </p>

              <h5>Ingredients</h5>
              <p>
                {recipe.ingredientLines.map((l,idx)=><li key={idx}>{l}</li>)}
              </p>

              <h5>Nutrients (per serving)</h5>
              <NutrientDetails totalNutrients={recipe.totalNutrients} servings={recipe.yield} />

              <p><a href={recipe.url}>Preperation Instructions</a></p>
          </div>
        </div>
      </Paper>




      </div>
    )

  }

}

export default RecipeDetails
