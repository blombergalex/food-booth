'use client'

import { recipeFetcher } from "@/utils/functions";
import { RecipeType } from "@/utils/types";
import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";

const recipiesByCategory = ({params}:{params:{category:string}}) => {
  const {category} = params;
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);
  
  const fetchRecipes = async () => {
    const recipes = await recipeFetcher({action:`filter.php?c=${category}`});
    setRecipes(recipes.meals);
  } 

  useEffect(() => {
    fetchRecipes();
  }, [])
  
  return(
    <>
      <h3 className="p-6 capitalize font-semibold">Our most tasty {category} recipies</h3>
      <div className="p-6 flex flex-wrap">
        {recipes &&
          recipes.map((meal: RecipeType) => (
            <div
              key={meal.idMeal}
              className="m-2 p-6 bg-zinc-900 rounded-3xl w-[300px] items-center"
              >
              <Link
                className="flex flex-col font-semibold text-center items-center text-slate-200"
                href={`/recipe/${meal.idMeal}`}
                >
                <Image
                  src={meal.strMealThumb}
                  width={220}
                  height={220}
                  alt={`Image of ${meal.strMeal}`}
                  className="rounded-lg m-3"
                  />
                {meal.strMeal}
              </Link>
            </div>
          ))}
      </div>
      </>
  )
}

export default recipiesByCategory;

// ?c=Seafood