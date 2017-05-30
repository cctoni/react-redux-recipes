import actionsEnum from './actionsEnum';

export default function changeSelectedRecipe(recipeId: string) {
  return {
    type: actionsEnum.CHANGE_SELECTED_RECIPE,
    recipeId
  }
}
