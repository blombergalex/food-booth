"use client";

import Button from "@/Components/Button";
import { useSavedRecipesContext, useUserContext } from "@/utils/contexts";
import { recipeFetcher } from "@/utils/functions";
import { SavedRecipesContextType, UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";
import Link from "next/link";

const profile = () => {
  const { user } = useUserContext() as UserContextType;
  const { savedRecipes, removeRecipe } =  useSavedRecipesContext() as SavedRecipesContextType;
  const [recipeNames, setRecipeNames] = useState<Record<string, string>>({}); // record allows to define an oject with keys and values of type string

  useEffect(() => {
    const fetchRecipes = async () => {
      const names: Record<string, string> = {};

      for (const savedRecipe of savedRecipes) {
        const data = await recipeFetcher({ action: `lookup.php?i=${savedRecipe.id}`});
        const recipeName = data.meals[0]?.strMeal || "Unknown Recipe";
        names[savedRecipe.id] = recipeName;
      }

      setRecipeNames(names);
    };

    if (savedRecipes.length > 0) {
      fetchRecipes();
    }
  }, [savedRecipes]);

  return (
    <>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>
            Your favourite category: <span>{user.category}</span>
          </p>
          <p>Your saved recipes:</p>
          {savedRecipes.length > 0 ? (
            <ul>
              {savedRecipes.map((recipe) => (
                <li key={recipe.id}>
                  <Link href={`/recipe/${recipe.id}`}>
                    {recipeNames[recipe.id]}
                  </Link>
                  <Button
                    buttonText="Unsave"
                    onClick={() => removeRecipe(recipe.id)}
                  />
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
  );
};

export default profile;
