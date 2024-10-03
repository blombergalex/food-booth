'use client'

import { RecipeType, SavedRecipesContextType } from "@/utils/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { recipeFetcher } from "@/utils/functions";
import { useSavedRecipesContext } from "@/utils/contexts";
import Button from "@/Components/Button";

const recipePage = ({params}: {params:{id:string}}) => {
  const {id} = params;
  const [recipe, setRecipe] = useState<RecipeType | null>(null)
  const [ingredients, setIngredients] = useState<string[]>([])
  const [measures, setMeasures] = useState<string[]>([])
  const {savedRecipes, addRecipe, removeRecipe} = useSavedRecipesContext() as SavedRecipesContextType;

  const fetchRecipe = async () => {
    const data = await recipeFetcher({action: `lookup.php?i=${id}`});
    if (data && data.meals.length > 0) {
      let meal = data.meals[0];
      
      const ingredientKeys = Object.keys(meal).filter (item => item.includes("strIngredient"))
      const ingredientValues = [];
      const measureValues = [];
      
      for(let i = 1; i < ingredientKeys.length; i++) {
        if (meal[ingredientKeys[i]] !== "")
          ingredientValues.push(meal[ingredientKeys[i]]);
        measureValues.push(meal['strMeasure' + (i + 1)] || '');
      } 

      setRecipe(meal); 
      setIngredients(ingredientValues);
      setMeasures(measureValues);
    } else {
      console.log("No meal found");
    };
  };

  useEffect(() => {  
    fetchRecipe();
  }, [id]);

  const isRecipeSaved = savedRecipes.some((savedRecipe) => savedRecipe.id === id);

  const handleSaveClick = () => {
    console.log('clicked save recipe button')
    if (isRecipeSaved) {
      removeRecipe(id);
    } else {
      addRecipe(id);
    }
    console.log(savedRecipes);
    console.log(id);
  };

  return(
    <div className="flex flex-col text-black p-4 mx-auto space-y-3">
      {recipe && 
      <div>
        <p>{recipe.strMeal}</p>
        <Image 
          src={recipe.strMealThumb}
          alt={`Image of ${recipe.strMeal}`}
          height={450}
          width={450}
          className="rounded-lg"
        />
        <div>
          <p>{recipe.strInstructions}</p>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>
                  {measures[index] && 
                  <p> 
                    <span className="capitalize">{item}</span>, {measures[index]}
                  </p>
                }
                </li>
              ))}
            </ul>
        </div>
        <Button buttonText={isRecipeSaved ? "Unsave recipe" : "Save recipe"} onClick={handleSaveClick} />
      </div>
      }
    </div>
  )
}

export default recipePage;