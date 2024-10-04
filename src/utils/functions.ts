import { RecipeFetcherType } from "./types"

export const recipeFetcher = async ({action}:RecipeFetcherType) => {
  console.log(`Fetching recipe with ${action}`);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/${action}`
      );
      const data = await response.json();
      return(data)
    } catch (error) {
      console.log("Error fetching recipe", error);
  } 
};

//                                              action:
//  one random: www.themealdb.com/api/json/v1/1/random.php 
// by category: www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// filter by id: www.themealdb.com/api/json/v1/1/lookup.php?i=52772
