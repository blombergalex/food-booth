import React, { useEffect, useState } from "react";
import Button from "../Button";
import { recipeFetcher } from "@/utils/functions";
import { RecipeType } from "@/utils/types";

const GuestHome = () => {
  const [meal, setMeal] = useState<RecipeType | null>(null);

  const fetchRecipe = async () => {
    const data = await recipeFetcher({ middle: "random", end: "" });

    if (data && data.meals.length > 0) {
      setMeal(data.meals[0]);
    } else {
      console.log("No meal found");
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleClick = async () => {
    fetchRecipe();
  };

  return (
    <div className="flex flex-col items-center text-black p-4 mx-auto space-y-3">
      <h3 className="text-lg">Welcome to the greatest recipe generator site</h3>
      <p className="font-semibold">Get inspired, cook, enjoy!</p>
      <Button buttonText="New recipe" onClick={handleClick} />
      {meal ? (
        <div className="border-2 w-3/4 bg-gray-900 text-white rounded-3xl p-10  space-y-16">
          <p className="text-2xl m-3 font-bold">{meal.strMeal}</p>
            <div className="bg-zinc-400 mt-10 rounded-3xl w-4/5">
              <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-3xl position relative bottom-6 left-6"
              />
            </div>
          <p>{meal.strInstructions}</p>
          {meal.strYoutube && (
            <>
            <p>Need more instructions? </p>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"
            className="font-semibold">
              Go to Recipe Video
            </a>
            <p>Or Log In at the top to get full recipe details.</p>
            </>
          )}
        </div>
      ) : (
        <>
          <p>Click the button to get a recipe!</p>
          <Button buttonText="Get recipe" onClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default GuestHome;