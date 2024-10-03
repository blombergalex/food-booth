"use client";

import { createContext, useContext, useState } from "react";
import {
  SavedRecipesContextType,
  SavedRecipesType,
  UserContextType,
  UserType,
} from "./types";

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

const SavedRecipesContext = createContext<SavedRecipesContextType | null>(null);

export const SavedRecipesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [savedRecipes, setSavedRecipes] = useState<SavedRecipesType[]>([]); //array of savedRecipeTypes (IDs)

  const addRecipe = (recipeId: string) => {
    setSavedRecipes((prevRecipes) => [...prevRecipes, { id: recipeId }]);
  };

  const removeRecipe = (recipeId: string) => {
    setSavedRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeId)
    );
  };

  return (
    <SavedRecipesContext.Provider
      value={{ savedRecipes, addRecipe, removeRecipe }}
    >
      {children}
    </SavedRecipesContext.Provider>
  );
};

export const useSavedRecipesContext = () => {
  const savedRecipesContext = useContext(SavedRecipesContext);
  if (!savedRecipesContext) {
    throw new Error('useSavedRecipesContext must be used within a SavedRecipesProvider') //remove error if all works
  }
  return savedRecipesContext;
};
