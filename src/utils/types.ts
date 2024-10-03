export type UserType = {
  name: string,
  category: string,
  savedRecipes: string[]
}

export type UserContextType = {
  user: UserType | null,
  setUser: (user:UserType) => void,
}

export type RecipeType = {
  strMeal: string,
  idMeal: string,
  strMealThumb: string,
  strArea?: string,
  strInstructions?: string,
  strYoutube?: string,
}

export type SavedRecipesContextType = {
  savedRecipes: SavedRecipesType[],
  addRecipe: (recipeId: string) => void;
  removeRecipe: (recipeId: string) => void;
}

export type SavedRecipesType = {
  id: string, // to be able to pass idMeal to the recipe page
}

export type ButtonType = {
  buttonText: string,
  onClick: () => void,
}

export type RecipeFetcherType = {
  action: string,
}