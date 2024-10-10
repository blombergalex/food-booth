"use client";

import { useUserContext } from "@/utils/contexts";
import { RecipeType, UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";
import { recipeFetcher } from "@/utils/functions";

import Button from "@/app/components/Button";
import RecipeCard from "@/app/components/RecipeCard";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);

  const fetchRecipes = async () => {
    if (user) {
      const data = await recipeFetcher({
        action: `filter.php?c=${user.category}`,
      });

      const shuffleArray = (array: RecipeType[]) => {
        return array.sort(() => Math.random() - 0.5);
      };

      const randomFiveRecipes = shuffleArray(data.meals).slice(0, 5);

      setRecipes(randomFiveRecipes);
    }
  };

  const handleClick = () => {
    fetchRecipes();
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      {user && (
        <div className="flex flex-col space-y-2 p-6 text-black">
          <p className="pl-2 my-4 text-xl">
            Your favourite category of food is{" "}
            <span className="text-orange-600">
              {user.category.toLowerCase()},{" "}
            </span>
            here are some recipes you might like!
          </p>
          <div className="flex flex-wrap">
            {recipes &&
              recipes.map((meal: RecipeType) => (
                <RecipeCard
                  key={meal.idMeal}
                  linkSource={`/recipe/${meal.idMeal}`}
                  imageSource={meal.strMealThumb}
                  altText={`Image of ${meal.strMeal}`}
                  title={meal.strMeal}
                />
              ))}
          </div>
          <div className="w-fit">
            <Button onClick={handleClick} buttonText="Regenerate" />
          </div>
        </div>
      )}
    </>
  );
}
