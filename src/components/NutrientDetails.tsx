import * as React from 'react'
import NutrientDetailsType from '../models/NutrientDetails';

interface Props {
  totalNutrients: NutrientDetailsType;
  servings: number;
}

const NutrientDetails = (props: Props) => {
  let {totalNutrients, servings} = props;
  if (!totalNutrients) return <div />;
  return (
    <p>
      <li>{totalNutrients.FAT.label}:        {(totalNutrients.FAT.quantity/servings).toFixed(2)} {totalNutrients.FAT.unit}</li>
      <li>{totalNutrients.CHOCDF.label}:     {(totalNutrients.CHOCDF.quantity/servings).toFixed(2)} {totalNutrients.CHOCDF.unit}</li>
      <li>{totalNutrients.FIBTG.label}:      {(totalNutrients.FIBTG.quantity/servings).toFixed(2)} {totalNutrients.FIBTG.unit}</li>
      <li>{totalNutrients.PROCNT.label}:     {(totalNutrients.PROCNT.quantity/servings).toFixed(2)} {totalNutrients.PROCNT.unit}</li>
      <li>{totalNutrients.SUGAR.label}:      {(totalNutrients.SUGAR.quantity/servings).toFixed(2)} {totalNutrients.SUGAR.unit}</li>
      <li>{totalNutrients.ENERC_KCAL.label}: {(totalNutrients.ENERC_KCAL.quantity/servings).toFixed(2)} {totalNutrients.ENERC_KCAL.unit}</li>
    </p>
  )
}

export default NutrientDetails
