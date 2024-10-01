"use client";

import { useUserContext } from "@/utils/contexts"; //be imported so we can use our user
import { RecipeType, UserContextType } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);

  const fetchRecipes = async () => {
    try {
      if (user) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${user.category}`
        ); // turn this into a function that can take the end of the link
        const data = await response.json();

        const topFiveRecipes = data.meals.slice(0, 5);
        console.log(data);
        setRecipes(topFiveRecipes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      {user && (
        <div className="flex flex-col space-y-2 p-6 text-black">
          <p className="pl-2 my-4">
            You're favourite category of food is {user.category.toLowerCase()},
            here are some recipes you might like!
          </p>
          <div className="flex flex-wrap">
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
        </div>
      )}
    </>
  );
}
