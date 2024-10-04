export type UserType = {
  name: string,
  category: string,
}

export type UserContextType = {
  user: UserType | null,
  setUser: (user:UserType) => void,
  savedRecipes: SavedRecipesType[], //moved from SavedRecipesContextType
  addRecipe: (recipeId: string) => void, //moved from SavedRecipesContextType
  removeRecipe: (recipeId: string) => void, //moved from SavedRecipesContextType
}

export type RecipeType = {
  strMeal: string,
  idMeal: string,
  strMealThumb: string,
  strArea?: string,
  strInstructions?: string,
  strYoutube?: string,
}

export type SavedRecipesType = {
  id: string,
}

// export type SavedRecipesContextType = {
//   savedRecipes: SavedRecipesType[],
//   addRecipe: (recipeId: string) => void;
//   removeRecipe: (recipeId: string) => void;
// }


export type ButtonType = {
  buttonText: string,
  onClick: () => void,
}

export type RecipeFetcherType = {
  action: string,
}