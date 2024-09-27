export type UserType = {
  name: string,
  category: string,
  savedRecipes: string[]
}

export type UserContextType = {
  user: UserType | null,
  setUser: (user:UserType)=> void,
}

export type RecipeType = {
  strMeal: string,
  idMeal: string,
  strMealThumb: string,
  strArea?: string,
  strInstructions?: string,
  strYoutube?: string
}