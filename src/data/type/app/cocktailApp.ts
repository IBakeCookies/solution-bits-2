export interface CocktailIngredientApi {
  ingredient: string
  measure: string
}

export interface CocktailApp {
  name: string
  category: string
  alcoholic: string
  glass: string
  instructions: string
  ingredients: CocktailIngredientApi[]
  thumbnail: string
}
