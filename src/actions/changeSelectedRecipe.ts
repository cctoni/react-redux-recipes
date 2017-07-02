import actionsEnum from './actionsEnum';

const changeSelectedRecipe = (recipeId: string) => ({
  type: actionsEnum.CHANGE_SELECTED_RECIPE,
  recipeId,
});

export default changeSelectedRecipe;
