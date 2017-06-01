import * as React from 'react';

import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import Recipe from '../models/Recipe';
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
    height: "100%",
    overflowY: "auto",
  },
  materialIcons: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginLeft: '10px'
  },
  image: {
    display:'inline',
    margin:'20px',
    float:'left'
  },
  detailsDiv: {
    padding:'15px',
    marginLeft:'15px',
    paddingLeft:'30px',
    display:'inline-block'
  }
}

class RecipeDetails extends React.Component<Props,{}> {

  componentWillMount() {

    let {match, changeSelectedRecipe} = this.props;

    let uri = encodeURIComponent(match.params.id);
    changeSelectedRecipe(uri);
  }

  render() {

    let {recipe} = this.props;
    if (!recipe) return <div />;

    return (

      <div style={styles.tile as any}>

        <RaisedButton
          label="Back"
          containerElement={<Link to="/recipes"></Link>}/> <br /> <br />

        <Paper>

          <div>

            <img src={recipe.image} className="img img-responsive img-thumbnail" style={styles.image}/>

            <div style={styles.detailsDiv}>

                <h3>{recipe.label}</h3>
                <h4 className="text-muted">{recipe.source}</h4>

                <p>
                  <img src='images/calories.png' width="40" height="40"/>{(recipe.calories/recipe.yield).toFixed()}
                  <FontIcon style={styles.materialIcons as any} className="material-icons" width="40" color='gray' >person</FontIcon> {recipe.yield}
                </p>

                <h5>Ingredients</h5>
                <p>
                  {recipe.ingredientLines.map((l,idx)=><li key={idx}>{l}</li>)}
                </p>

                <h5>Nutrients (per serving)</h5>
                <NutrientDetails totalNutrients={recipe.totalNutrients} servings={recipe.yield} />

                <p><a href={recipe.url}>Preparation Instructions</a></p>
            </div>

          </div>

        </Paper>

      </div>
    )

  }

}

export default RecipeDetails
