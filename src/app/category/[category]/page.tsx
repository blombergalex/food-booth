"use client";

import { recipeFetcher } from "@/utils/functions";
import { RecipeType, UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";
import { useUserContext } from "@/utils/contexts";
import Button from "@/app/components/Button";
import RecipeCard from "@/app/components/RecipeCard";

const recipesByCategory = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);
  const { user, setUser } = useUserContext() as UserContextType;

  const fetchRecipes = async () => {
    const recipes = await recipeFetcher({ action: `filter.php?c=${category}` });
    setRecipes(recipes.meals);
  };

  useEffect(() => {
    fetchRecipes();
  }, [category]);

  const saveCategoryClick = () => {
    if (user) {
      setUser({
        ...user,
        category,
      });
    }
  };

  return (
    <>
      <h3 className="p-6 capitalize font-semibold text-lg">
        Our most tasty {category} recipes
      </h3>
      {user?.category !== category ? (
        <div className="p-6">
          <Button
            buttonText="Make this your favourite category"
            onClick={saveCategoryClick}
          />
        </div>
      ) : (
        <p className="m-6 font-semibold">
          {category} is your favourite type of meal!
        </p>
      )}
      <div className="p-6 flex flex-wrap">
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
    </>
  );
};

export default recipesByCategory;
