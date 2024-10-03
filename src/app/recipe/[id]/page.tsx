'use client'

import { RecipeType } from "@/utils/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { recipeFetcher } from "@/utils/functions";

const recipePage = ({params}: {params:{id:string}}) => {
  const {id} = params;
  console.log(id);
  const [recipe, setRecipe] = useState<RecipeType | null>(null)
  const [ingredients, setIngredients] = useState<string[]>([])
  const [measures, setMeasures] = useState<string[]>([])


  const fetchRecipe = async () => {
    const data = await recipeFetcher({action: `lookup.php?i=${id}`});
    
    let meal = data.meals[0];
    console.log(meal)
    const ingredientKeys = Object.keys(meal).filter (item => item.includes("strIngredient"))
    const ingredientValues = [];
    const measureValues = [];
    
    for(let i = 1; i < ingredientKeys.length; i++) {
      if (meal[ingredientKeys[i]] !== "")
        ingredientValues.push(meal[ingredientKeys[i]]);
      measureValues.push(meal['strMeasure' + (i + 1)] || '');
    } 

    console.log(ingredientValues)
    console.log(measureValues)
    
    if (data) {
      setRecipe(data.meals[0]); 
      setIngredients(ingredientValues);
      setMeasures(measureValues);
    } else {
      console.log("No meal found");
    };
  };

  useEffect(() => {  
  fetchRecipe();
}, []);

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
      </div>
      // Add recipe to favourites button 
      // handleClick, add recipeId to savedrecipes
      }
    </div>
  )
}

export default recipePage;