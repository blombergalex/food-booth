'use client'

import { RecipeType } from "@/utils/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const recipePage = ({params}: {params:{id:string}}) => {
  const {id} = params;
  const [recipe, setRecipe] = useState<RecipeType | null>(null)

useEffect(() => {  
  const fetchRecipe = async () => {
    try {
      if (id) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        ); // turn this into a function that can take the end of the link
        const data = await response.json();
        console.log(data.meals);
        setRecipe(data.meals[0]);

      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchRecipe();
}, []);


  return(
    <div>
      <p>Hello from the recipe page. Id number is {id} </p>
      {recipe && 
      <div>
        
        <p>{recipe.strMeal}</p>
        <Image 
          src={recipe.strMealThumb}
          alt={`Image of ${recipe.strMeal}`}
          height={450}
          width={450}
        />
      </div>

      
      }
    </div>
  )
}

export default recipePage;