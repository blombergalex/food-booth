import { RecipeFetcherType } from "./types"

export const recipeFetcher = async ({middle, end}:RecipeFetcherType) => {
  console.log(`Fetching recipe with middle: `+ middle + ` and end: `+ end)
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/${middle}.php${end}`
      );
      const data = await response.json();
      return(data)
    } catch (error) {
      console.log("Error fetching recipe", error);
  } 
};

//                                              middle    end:
//  one random: www.themealdb.com/api/json/v1/1/random.php 
// by category: www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
//filter by id: www.themealdb.com/api/json/v1/1/lookup.php?i=52772

//  middle is always random, filter or lookup
// end is either empty || ?c={user.category} || ?i={meal id} 