"use client";

import Button from "@/app/components/Button";
import { useUserContext } from "@/utils/contexts";
import { recipeFetcher } from "@/utils/functions";
import { UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";
import Link from "next/link";

const profile = () => {
  const { user, savedRecipes, removeRecipe } =
    useUserContext() as UserContextType;
  const [recipeNames, setRecipeNames] = useState<Record<string, string>>({}); // record allows to define an oject with keys and values of type string

  useEffect(() => {
    const fetchRecipes = async () => {
      const names: Record<string, string> = {};

      for (const savedRecipe of savedRecipes) {
        const data = await recipeFetcher({
          action: `lookup.php?i=${savedRecipe.id}`,
        });
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
      {user && (
        <div className="p-6 space-y-4">
          <div>
          <h3 className="font-semibold my-2 text-2xl md:text-3xl">
            Your saved recipes
          </h3>
            <p className="font-semibold text-zinc-950">
              Your favourite category: <span className="font-semibold text-orange-700">{user.category}</span>
            </p>
          </div>
          {savedRecipes.length > 0 ? (
            <ul className="bg-orange-400 p-4 rounded-xl">
              {savedRecipes.map((recipe) => (
                <div key={recipe.id} className="flex m-2 justify-between items-center ">
                  <Link 
                    href={`/recipe/${recipe.id}`}
                    className="hover:text-white cursor-pointer"
                  >
                    {recipeNames[recipe.id]}
                  </Link>
                  <Button
                    buttonText="Unsave"
                    onClick={() => removeRecipe(recipe.id)}
                  />
                </div>
              ))}
            </ul>
          ) : (
            <p>
              No saved recipes. Go browse some and save your favourites here!
            </p>
          )}
        </div>
      )}
      ;
    </>
  );
};

export default profile;
