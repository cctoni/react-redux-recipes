interface NutrientDetails {
  FAT: Nutrient;
  CHOCDF: Nutrient;
  FIBTG: Nutrient;
  PROCNT: Nutrient;
  SUGAR: Nutrient;
  ENERC_KCAL: Nutrient;
}

interface Nutrient {
  label: string;
  unit: string;
  quantity: number;
};

export default NutrientDetails;
