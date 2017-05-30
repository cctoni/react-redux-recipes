import NutrientDetails from './NutrientDetails';

interface Recipe {
  uri: string;
  label: string;
  source: string;
  image: string;
  calories: number;
  yield: number;
  ingredientLines: string[];
  totalNutrients: NutrientDetails;
  url: string;
}


class Recipe implements Recipe {
  constructor() {
    this.uri ="";
    this.label = "";
    this.source = "";
    this.image = "";
    this.ingredientLines = [];
    //this.totalNutrients = {};
    this.url="";
  }
}
export default Recipe;
