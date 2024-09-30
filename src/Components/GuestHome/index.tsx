import React, { useEffect, useState } from "react";
import Button from "../Button";
import { recipeFetcher } from "@/utils/functions";
import { RecipeType } from "@/utils/types";

const GuestHome = () => {
  const [meal, setMeal] = useState<RecipeType | null>(null);

  const fetchRecipe = async () => {
    const data = await recipeFetcher({ middle: "random", end: "" });

    if (data && data.meals.length > 0) {
      console.log(data);
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
    <div className="flex flex-col items-center text-black p-4">
      <h3 className="text-lg">Welcome to the greatest recipe generator site</h3>
      <p className="font-semibold">Get inspired, cook, enjoy!</p>
      {meal ? (
        <>
          <p>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
          {/* change to embed video */}
          {meal.strYoutube && (
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch Recipe Video
            </a>
          )}
          <Button buttonText="New recipe" onClick={handleClick} />
        </>
      ) : (
        <>
          <p>Click the button to get a recipe!</p>
          <Button buttonText="Regenerate" onClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default GuestHome;