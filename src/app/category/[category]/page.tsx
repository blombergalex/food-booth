'use client'

import { recipeFetcher } from "@/utils/functions";
import { useEffect } from "react";

const recipiesByCategory = ({params}:{params:{category:string}}) => {
  const {category} = params;
  
  const fetchRecipes = async () => {
    const recipies = await recipeFetcher({action:`filter.php?c=${category}`});
    console.log(recipies)
  } 

  useEffect(() => {
    fetchRecipes();
  }, [])
  
  return(
    <div className="p-6">
      <h3 className="capitalize font-semibold">Our most tasty {category} recipies</h3>
    </div>
  )
}

export default recipiesByCategory;

// ?c=Seafood