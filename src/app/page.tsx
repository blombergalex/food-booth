"use client";

import { useUserContext } from "@/utils/contexts"; //be imported so we can use our user
import { RecipeType, UserContextType } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);

  useEffect(() => {
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
    fetchRecipes();
  }, []);

  return (
    <>
      {user && (
        <div className="flex flex-col space-y-2 p-2">
          <p>This is the home page</p>
          <p>You're favourite category of food is {user.category}</p>

          {recipes &&
            recipes.map((meal: RecipeType) => (
              <div key={meal.idMeal}>
                <Link className="font-semibold" href={`/recipe/${meal.idMeal}`}>
                  {meal.strMeal}
                  <Image
                    src={meal.strMealThumb}
                    width={220}
                    height={220}
                    alt={`Image of ${meal.strMeal}`}
                  />
                </Link>
                {/* Add recipe to favourites button */}
              </div>

            ))}
        </div>
      )}
    </>
  );
}
