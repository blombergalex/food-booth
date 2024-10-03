'use client'

import Button from "@/Components/Button"
import { useSavedRecipesContext, useUserContext } from "@/utils/contexts"
import { SavedRecipesContextType, UserContextType } from "@/utils/types"
import Link from "next/link"

const profile = () => {
  const { user } = useUserContext() as UserContextType;
  const {savedRecipes, removeRecipe} = useSavedRecipesContext() as SavedRecipesContextType;
  console.log(savedRecipes);

  

  return (
    <>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>Your favourite category: <span>{user.category}</span></p>
          <p>Your saved recipes:</p>
          {savedRecipes.length > 0 ? (
            <ul>
              {savedRecipes.map((recipe) => (
                <li key={recipe.id}>
                  <Link href={`/recipe/${recipe.id}`}>
                    {recipe.id}
                  </Link>
                  <Button buttonText="Unsave" onClick={() => removeRecipe(recipe.id)} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No saved recipes yet.</p>
          )}
        </div>
      ) : (
        <p>Please log in to view your profile and saved recipes.</p>
      )}
    </>
  )
}

export default profile